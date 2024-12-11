import type { WhereRule } from "../generated/rules";

export const where: WhereRule<"Post"> = (ctx) => {
  throw new Error("Not Allowed");
};
