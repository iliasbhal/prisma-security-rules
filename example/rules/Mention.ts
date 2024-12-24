import type { WhereRule } from "../generated/security-rules";

export const read: WhereRule<"Mention"> = (ctx) => {
  throw new Error("Not Allowed");
};

export const write: WhereRule<"Mention"> = (ctx) => {
  throw new Error("Not Allowed");
}