
import fs from 'fs-extra';
import * as prettier from "prettier";

export const writeFileTypescript = async (path: string, content: string) => {
  const generated = await prettier.format(content, { parser: "typescript" });
  await fs.writeFile(path, generated, 'utf-8');
}