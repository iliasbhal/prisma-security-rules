import type { WhereRule } from "../generated/security-rules";

export const read: WhereRule<"Reaction"> = (ctx) => {
  throw new Error("Not Allowed");
};

export const write: WhereRule<"Reaction"> = (ctx) => {
  throw new Error("Not Allowed");
}