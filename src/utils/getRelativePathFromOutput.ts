import path from 'path';
import { GeneratorOptions } from "@prisma/generator-helper";

export const getAbsolutePath = (options: GeneratorOptions, relativePathFromSchema: string) => {
  const schemaFolder = options.schemaPath.split('/').slice(0, -1).join('/');
  const absolutePath = path.resolve(schemaFolder, relativePathFromSchema);
  return absolutePath;
}

export const getRelativePathFromOutput = (options: GeneratorOptions, relativePathFromSchema: string) => {
  const schemaFolder = options.schemaPath.split('/').slice(0, -1).join('/');
  const absolutePath = path.resolve(schemaFolder, relativePathFromSchema);
  const relativeClientPathToOutput = path.relative(options.generator.output?.value, absolutePath);
  return relativeClientPathToOutput;
};