import merge from 'lodash/merge'
import fs from 'fs-extra'
import { GeneratorOptions } from "@prisma/generator-helper";
import { generateSingleFile } from 'zod-prisma-types/dist/generateSingleFile'
import { parseGeneratorConfig } from 'zod-prisma-types/dist/utils/parseGeneratorConfig'
import { ExtendedDMMF } from 'zod-prisma-types/dist/classes'
import { getPaths } from './generatedGuardedPrisma';


export const generatePrismaZodSchema = async (options: GeneratorOptions) => {
  const { relativeClientPathToOutput, schemaFolderPath } = getPaths(options);

  const extendedDMMF = new ExtendedDMMF(
    options.dmmf,
    parseGeneratorConfig(
      merge({}, options, {
        generator: {
          config: {
            prismaClientPath: `../${relativeClientPathToOutput}`,
            // useMultipleFiles                 : false, // default is false
            // writeBarrelFiles                 : false, // default is true
            // createInputTypes                 : false, // default is true
            // createModelTypes                 : false, // default is true
            // addInputTypeValidation           : false, // default is true
            // addIncludeType                   : false, // default is true
            // addSelectType                    : false, // default is true
            // validateWhereUniqueInput         : false, // default is true
            // createOptionalDefaultValuesTypes : true, // default is false
            // createRelationValuesTypes        : true, // default is false
            // createPartialTypes               : true, // default is false
            // useDefaultValidators             : false, // default is true
            // coerceDate                       : false, // default is true
            // writeNullishInModelTypes         : true, // default is false
          }
        },
      })
    )
  );

  await fs.ensureDir(schemaFolderPath);

  await generateSingleFile({
    dmmf: extendedDMMF,
    path: schemaFolderPath,
  });

}