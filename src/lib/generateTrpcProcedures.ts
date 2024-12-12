
import fs from 'fs-extra';
import path from 'path';
import { GeneratorOptions } from "@prisma/generator-helper";
import { writeFileTypescript } from '../utils/writeFileTypescript'
import { toCapitlize, toUncapitlize } from '../utils/string'
import { getPaths } from './generatedGuardedPrisma'


export const generateTrpcProcedures = async (options: GeneratorOptions) => {
  const { relativeTrpcProcedurePath, outputFolderPath } = getPaths(options);

  if (!relativeTrpcProcedurePath) {
    return;
  }

  const generated = `
    import { trpc, procedure } from '${relativeTrpcProcedurePath}'
    import * as Schema from "./schema";
    import { secureClient } from './'

    export const router = trpc.router({
      ${options.dmmf.datamodel.models.map(model => {
    const actions = ['findMany', 'findUnique'];
    return `
          ${toUncapitlize(model.name)}: trpc.router({
          
            ${actions.map(action => `
              ${action}: procedure
                .input(Schema.${model.name}${toCapitlize(action)}ArgsSchema)
                .query(({ ctx, input }) => secureClient(prisma, rules, ctx).${toUncapitlize(model.name)}.${action}(input)),
            `).join('')}
        }),
        `;
  }).join('\n')}
    });
  `;

  await fs.ensureDir(outputFolderPath);
  const outputIndexPath = path.resolve(outputFolderPath, 'trpc.ts');
  await writeFileTypescript(outputIndexPath, generated);
}