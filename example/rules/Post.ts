import type { WhereRule } from "../generated/security-rules";

export const read: WhereRule<"Post"> = (ctx) => {
  throw new Error("Not Allowed");
};

export const write: WhereRule<"Post"> = (ctx) => {
  throw new Error("Not Allowed");
}