import type { WhereRule, WriteRule } from "../generated/security-rules";

export const read: WhereRule<"Mention"> = (ctx, data) => {
  throw new Error("Not Allowed");
};

export const write: WriteRule<"Mention"> = (ctx, data) => {
  throw new Error("Not Allowed");
}