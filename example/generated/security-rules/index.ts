// ---------------------------------------------- //
// This file is generated by prisma-security-rules //
// ---------------------------------------------- //

import z from "zod";
import { withSecurityRules } from "prisma-security-rules";
import { prisma } from "../../client";
import { Context } from "../../context";
import * as rules from "../../rules";
import * as Schema from "./schema";

export * as Schema from "./schema";

export type ModelName = Capitalize<
  Exclude<keyof typeof prisma, `$${string}` | symbol | number>
>;
export type WhereRule<Name extends ModelName> = (
  ctx: Context,
  arg: z.infer<(typeof Schema)[`${Name}WhereInputSchema`]>,
) => z.infer<(typeof Schema)[`${Name}WhereInputSchema`]>;
export type WriteRule<Name extends ModelName> = (
  ctx: Context,
  arg: z.infer<(typeof Schema)[`${Name}CreateArgsSchema`]>["data"],
) => z.infer<(typeof Schema)[`${Name}CreateArgsSchema`]>["data"];

export const secureClient = (ctx: Context) => {
  return withSecurityRules(prisma, rules, ctx);
};
