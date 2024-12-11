import { generatorHandler, GeneratorManifest, GeneratorOptions } from "@prisma/generator-helper";
import { generateGuardedPrisma } from './lib/generatedGuardedPrisma';
import { generateRuleFiles } from './lib/generateRuleFiles';
import { generatePrismaZodSchema } from './lib/generatePrismaZodSchema'

export default generatorHandler({
  onManifest: function onManifest(): GeneratorManifest {
    return {
      prettyName: 'Prisma Autorization Generator',
      defaultOutput: './types',
      version: '0.0.1',
    };
  },
  onGenerate: async (options: GeneratorOptions) => {
    await generatePrismaZodSchema(options);
    await generateRuleFiles(options);
    await generateGuardedPrisma(options);
  }
});


