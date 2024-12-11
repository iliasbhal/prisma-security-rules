import type { WhereRule } from "../generated/security-rules";

export const where: WhereRule<"Users"> = (ctx) => {
  throw new Error("Not Allowed");
};
