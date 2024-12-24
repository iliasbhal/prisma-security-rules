import type { WhereRule, WriteRule } from "../generated/security-rules";

export const read: WhereRule<"Post"> = (ctx, data) => {
  throw new Error("Not Allowed");
};

export const write: WriteRule<"Post"> = (ctx, data) => {


  throw new Error("Not Allowed");
}