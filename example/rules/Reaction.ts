import type { WhereRule, WriteRule } from "../generated/security-rules";

export const read: WhereRule<"Reaction"> = (ctx, data) => {
  throw new Error("Not Allowed");
};

export const write: WriteRule<"Reaction"> = (ctx, data) => {
  throw new Error("Not Allowed");
}