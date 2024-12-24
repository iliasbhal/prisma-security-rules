
import fs from 'fs-extra';
import path from 'path';
import { GeneratorOptions } from "@prisma/generator-helper";
import { writeFileTypescript } from '../utils/writeFileTypescript'
import { toCapitlize, toUncapitlize } from '../utils/string'
import { getPaths } from './generatedGuardedPrisma'
import { PrismaSecureActions } from './_common'

export const generateTrpcProcedures = async (options: GeneratorOptions) => {
  const { relativeTrpcProcedurePath, outputFolderPath } = getPaths(options);

  if (!relativeTrpcProcedurePath) {
    return;
  }

  const generated = `
    import { trpc, procedure } from '${relativeTrpcProcedurePath}'
    import z from 'zod';
    import * as Schema from "./schema";
    import { secureClient } from './';

    export type TrpcPrismaClient = {

      ${options.dmmf.datamodel.models.map(model => {
    const modelName = toUncapitlize(model.name);
    return `
              ${modelName}: {
              
                ${PrismaSecureActions.map(action => `
                  ${action}: {
                    query: ReturnType<typeof secureClient>['${modelName}']['${action}'];
                  };
                `).join('')}
            },
            `;
  }).join('\n')}
    };

    export const router = trpc.router({
      ${options.dmmf.datamodel.models.map(model => {
    return `
          ${toUncapitlize(model.name)}: trpc.router({
          
            ${PrismaSecureActions.map(action => `
              ${action}: procedure
                ${(action === 'count' ? `
                  .input(z.object({ where: Schema.${model.name}WhereInputSchema.optional() }))
                ` : `
                  .input(Schema.${model.name}${toCapitlize(action)}ArgsSchema)
                `).trim()}
                .query(({ ctx, input }) => secureClient(ctx).${toUncapitlize(model.name)}.${action}(input)),
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