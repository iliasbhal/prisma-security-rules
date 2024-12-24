import type { WhereRule, WriteRule } from "../generated/security-rules";

export const read: WhereRule<"Users"> = (ctx, data) => {
  throw new Error("Not Allowed");
};

export const write: WriteRule<"Users"> = (ctx, data) => {
  throw new Error("Not Allowed");
}