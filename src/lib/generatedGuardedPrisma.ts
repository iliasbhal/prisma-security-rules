
import fs from 'fs-extra';
import path from 'path';
import z from 'zod';
import { GeneratorOptions } from "@prisma/generator-helper";
import { writeFileTypescript } from '../utils/writeFileTypescript'
import { getRelativePathFromOutput, getAbsolutePath } from '../utils/getRelativePathFromOutput';

const toCapitlize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
const toUncapitlize = (str: string) => str.charAt(0).toLowerCase() + str.slice(1);

export const generatorConfigType = z.object({
  prismaClientPath: z.string({ required_error: 'prismaClientPath is required' }),
  contextTypePath: z.string({ required_error: 'contextTypePath is required' }),
  rulesfolderPath: z.string({ required_error: 'rulesfolderPath is required' }),
})

export const generatorAPIType = z.object({
  generateTrpcRouter: z.literal('true').or(z.literal('false')).optional(),
})

export const getPaths = (options: GeneratorOptions) => {
  const generatorConfig = generatorConfigType.parse(options.generator.config);

  return {
    relativeClientPathToOutput: getRelativePathFromOutput(options, generatorConfig.prismaClientPath),
    relativeContextPathToOutput: getRelativePathFromOutput(options, generatorConfig.contextTypePath),
    relativeRulesfolderPath: getRelativePathFromOutput(options, generatorConfig.rulesfolderPath),

    absoluteRulesFolderPath: getAbsolutePath(options, generatorConfig.rulesfolderPath),

    schemaFolderPath: path.resolve(options.generator.output?.value, 'schema'),
    outputFolderPath: path.resolve(options.generator.output?.value)
  };
}

export const generateGuardedPrisma = async (options: GeneratorOptions) => {
  const { relativeClientPathToOutput, relativeContextPathToOutput, outputFolderPath } = getPaths(options);

  console.log('options.generator.config', options.generator.config);
  const config = generatorAPIType.parse(options.generator.config);

  const generated = `
    import z from 'zod';
    import { withSecurityRules } from 'prisma-security-rules'
    import { prisma } from '${relativeClientPathToOutput}'
    import { Context } from '${relativeContextPathToOutput}'
    import * as rules from '../../rules'
    import * as Schema from './schema';

    ${'export type ModelName = Capitalize<Exclude<keyof typeof prisma, `$${ string }` | symbol | number>>;'}
    ${'export type WhereRule<Name extends ModelName> = (ctx: Context) => z.infer<typeof Schema[`${ Name }WhereInputSchema`]>'}

    export const secureClient = (ctx: Context) => {
      return withSecurityRules(prisma, rules, ctx)
    }

    ${config.generateTrpcRouter == 'true' ? await generateTrpcRouter(options) : ''}
  `;

  await fs.ensureDir(outputFolderPath);
  const outputIndexPath = path.resolve(outputFolderPath, 'index.ts');
  await writeFileTypescript(outputIndexPath, generated);
}

export const generateTrpcRouter = async (options: GeneratorOptions) => {
  return `
      import { ProcedureBuilder } from '@trpc/server'
  
      export const createTrpcQueries = <P extends ProcedureBuilder<any>>(procedure: P) => ({
        ${options.dmmf.datamodel.models.map(model => {
    const actions = ['findMany', 'findUnique'];
    return `
            ${toUncapitlize(model.name)}: {
              ${actions.map(action => `
                ${action}: procedure
                  .input(Schema.${model.name}${toCapitlize(action)}ArgsSchema)
                  .query(({ ctx, input }) => withSecurityRules(prisma, rules, ctx).${toUncapitlize(model.name)}.${action}(input)),
              `).join('')}
            },
          `;
  }).join('\n')}
      });
    `;
}