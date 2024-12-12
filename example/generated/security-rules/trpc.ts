import { trpc, procedure } from "../../trpc";
import * as Schema from "./schema";
import { secureClient } from "./";

export const router = trpc.router({
  users: trpc.router({
    findMany: procedure
      .input(Schema.UsersFindManyArgsSchema)
      .query(({ ctx, input }) =>
        secureClient(prisma, rules, ctx).users.findMany(input),
      ),

    findUnique: procedure
      .input(Schema.UsersFindUniqueArgsSchema)
      .query(({ ctx, input }) =>
        secureClient(prisma, rules, ctx).users.findUnique(input),
      ),
  }),

  post: trpc.router({
    findMany: procedure
      .input(Schema.PostFindManyArgsSchema)
      .query(({ ctx, input }) =>
        secureClient(prisma, rules, ctx).post.findMany(input),
      ),

    findUnique: procedure
      .input(Schema.PostFindUniqueArgsSchema)
      .query(({ ctx, input }) =>
        secureClient(prisma, rules, ctx).post.findUnique(input),
      ),
  }),

  reaction: trpc.router({
    findMany: procedure
      .input(Schema.ReactionFindManyArgsSchema)
      .query(({ ctx, input }) =>
        secureClient(prisma, rules, ctx).reaction.findMany(input),
      ),

    findUnique: procedure
      .input(Schema.ReactionFindUniqueArgsSchema)
      .query(({ ctx, input }) =>
        secureClient(prisma, rules, ctx).reaction.findUnique(input),
      ),
  }),

  mention: trpc.router({
    findMany: procedure
      .input(Schema.MentionFindManyArgsSchema)
      .query(({ ctx, input }) =>
        secureClient(prisma, rules, ctx).mention.findMany(input),
      ),

    findUnique: procedure
      .input(Schema.MentionFindUniqueArgsSchema)
      .query(({ ctx, input }) =>
        secureClient(prisma, rules, ctx).mention.findUnique(input),
      ),
  }),
});
