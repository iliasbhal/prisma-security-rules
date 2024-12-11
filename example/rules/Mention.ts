import type { WhereRule } from "../generated/security-rules";

export const where: WhereRule<"Mention"> = (ctx) => {
  throw new Error("Not Allowed");
};
