
import { GeneratorOptions } from "@prisma/generator-helper";
import fs from 'fs-extra';
import path from 'path'
import { writeFileTypescript } from '../utils/writeFileTypescript'
import { getPaths } from "./generatedGuardedPrisma";

export const generateRuleFiles = async (options: GeneratorOptions) => {
  const { outputFolderPath, absoluteRulesFolderPath } = getPaths(options);
  // throw new Error(rulesfolderPath);

  await fs.ensureDir(absoluteRulesFolderPath);


  await Promise.all(options.dmmf.datamodel.models.map(async model => {
    const modelRulesPath = path.resolve(absoluteRulesFolderPath, `${model.name}.ts`)
    const importPath = path.relative(absoluteRulesFolderPath, outputFolderPath);

    const alreadyExist = await fs.exists(modelRulesPath);
    if (!alreadyExist) {
      await writeFileTypescript(modelRulesPath, `
        import type { WhereRule } from '${importPath}';

        export const where: WhereRule<'${model.name}'> = (ctx) => {
          throw new Error('Not Allowed');
        };
      `)
    }
  }))

  const indexRulesPath = path.resolve(absoluteRulesFolderPath, `index.ts`)
  await writeFileTypescript(indexRulesPath, `
    // 
    // This file is generated by prisma-guards
    // 

    ${options.dmmf.datamodel.models.map((model) => {
    return `export * as ${model.name} from './${model.name}';\n`
  }).join('')}  
  `)
} 