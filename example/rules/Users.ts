import type { WhereRule } from "../generated/security-rules";

export const read: WhereRule<"Users"> = (ctx) => {
  throw new Error("Not Allowed");
};

export const write: WhereRule<"Users"> = (ctx) => {
  throw new Error("Not Allowed");
}