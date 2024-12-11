import type { WhereRule } from "../generated/security-rules";

export const where: WhereRule<"Post"> = (ctx) => {
  throw new Error("Not Allowed");
};
