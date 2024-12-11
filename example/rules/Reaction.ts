import type { WhereRule } from "../generated/security-rules";

export const where: WhereRule<"Reaction"> = (ctx) => {
  throw new Error("Not Allowed");
};
