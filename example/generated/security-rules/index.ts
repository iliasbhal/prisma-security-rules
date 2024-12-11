import { ProcedureBuilder } from "@trpc/server";
import z from "zod";
import * as Schema from "./schema";
import { shield } from "prisma-security-rules";
import { prisma } from "../../client";
import { Context } from "../../context";

import * as rules from "../../rules";

export type ModelName = Capitalize<
  Exclude<keyof typeof prisma, `$${string}` | symbol | number>
>;
export type WhereRule<Name extends ModelName> = (
  ctx: Context,
) => z.infer<(typeof Schema)[`${Name}WhereInputSchema`]>;

export const createTrpcQueries = <P extends ProcedureBuilder<any>>(
  procedure: P,
) => ({
  users: {
    findMany: procedure
      .input(Schema.UsersFindManyArgsSchema)
      .query(({ ctx, input }) =>
        shield(prisma, rules, ctx).users.findMany(input),
      ),

    findUnique: procedure
      .input(Schema.UsersFindUniqueArgsSchema)
      .query(({ ctx, input }) =>
        shield(prisma, rules, ctx).users.findUnique(input),
      ),
  },

  post: {
    findMany: procedure
      .input(Schema.PostFindManyArgsSchema)
      .query(({ ctx, input }) =>
        shield(prisma, rules, ctx).post.findMany(input),
      ),

    findUnique: procedure
      .input(Schema.PostFindUniqueArgsSchema)
      .query(({ ctx, input }) =>
        shield(prisma, rules, ctx).post.findUnique(input),
      ),
  },

  reaction: {
    findMany: procedure
      .input(Schema.ReactionFindManyArgsSchema)
      .query(({ ctx, input }) =>
        shield(prisma, rules, ctx).reaction.findMany(input),
      ),

    findUnique: procedure
      .input(Schema.ReactionFindUniqueArgsSchema)
      .query(({ ctx, input }) =>
        shield(prisma, rules, ctx).reaction.findUnique(input),
      ),
  },

  mention: {
    findMany: procedure
      .input(Schema.MentionFindManyArgsSchema)
      .query(({ ctx, input }) =>
        shield(prisma, rules, ctx).mention.findMany(input),
      ),

    findUnique: procedure
      .input(Schema.MentionFindUniqueArgsSchema)
      .query(({ ctx, input }) =>
        shield(prisma, rules, ctx).mention.findUnique(input),
      ),
  },
});
