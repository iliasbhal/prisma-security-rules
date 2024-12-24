import { trpc, procedure } from "../../trpc";
import z from "zod";
import * as Schema from "./schema";
import { secureClient } from "./";

export type TrpcPrismaClient = {
  users: {
    findMany: {
      query: ReturnType<typeof secureClient>["users"]["findMany"];
    };

    findUnique: {
      query: ReturnType<typeof secureClient>["users"]["findUnique"];
    };

    findFirst: {
      query: ReturnType<typeof secureClient>["users"]["findFirst"];
    };

    count: {
      query: ReturnType<typeof secureClient>["users"]["count"];
    };
  };

  post: {
    findMany: {
      query: ReturnType<typeof secureClient>["post"]["findMany"];
    };

    findUnique: {
      query: ReturnType<typeof secureClient>["post"]["findUnique"];
    };

    findFirst: {
      query: ReturnType<typeof secureClient>["post"]["findFirst"];
    };

    count: {
      query: ReturnType<typeof secureClient>["post"]["count"];
    };
  };

  reaction: {
    findMany: {
      query: ReturnType<typeof secureClient>["reaction"]["findMany"];
    };

    findUnique: {
      query: ReturnType<typeof secureClient>["reaction"]["findUnique"];
    };

    findFirst: {
      query: ReturnType<typeof secureClient>["reaction"]["findFirst"];
    };

    count: {
      query: ReturnType<typeof secureClient>["reaction"]["count"];
    };
  };

  mention: {
    findMany: {
      query: ReturnType<typeof secureClient>["mention"]["findMany"];
    };

    findUnique: {
      query: ReturnType<typeof secureClient>["mention"]["findUnique"];
    };

    findFirst: {
      query: ReturnType<typeof secureClient>["mention"]["findFirst"];
    };

    count: {
      query: ReturnType<typeof secureClient>["mention"]["count"];
    };
  };
};

export const router = trpc.router({
  users: trpc.router({
    findMany: procedure
      .input(Schema.UsersFindManyArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).users.findMany(input)),

    findUnique: procedure
      .input(Schema.UsersFindUniqueArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).users.findUnique(input)),

    findFirst: procedure
      .input(Schema.UsersFindFirstArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).users.findFirst(input)),

    count: procedure
      .input(z.object({ where: Schema.UsersWhereInputSchema.optional() }))
      .query(({ ctx, input }) => secureClient(ctx).users.count(input)),
  }),

  post: trpc.router({
    findMany: procedure
      .input(Schema.PostFindManyArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).post.findMany(input)),

    findUnique: procedure
      .input(Schema.PostFindUniqueArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).post.findUnique(input)),

    findFirst: procedure
      .input(Schema.PostFindFirstArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).post.findFirst(input)),

    count: procedure
      .input(z.object({ where: Schema.PostWhereInputSchema.optional() }))
      .query(({ ctx, input }) => secureClient(ctx).post.count(input)),
  }),

  reaction: trpc.router({
    findMany: procedure
      .input(Schema.ReactionFindManyArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).reaction.findMany(input)),

    findUnique: procedure
      .input(Schema.ReactionFindUniqueArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).reaction.findUnique(input)),

    findFirst: procedure
      .input(Schema.ReactionFindFirstArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).reaction.findFirst(input)),

    count: procedure
      .input(z.object({ where: Schema.ReactionWhereInputSchema.optional() }))
      .query(({ ctx, input }) => secureClient(ctx).reaction.count(input)),
  }),

  mention: trpc.router({
    findMany: procedure
      .input(Schema.MentionFindManyArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).mention.findMany(input)),

    findUnique: procedure
      .input(Schema.MentionFindUniqueArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).mention.findUnique(input)),

    findFirst: procedure
      .input(Schema.MentionFindFirstArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).mention.findFirst(input)),

    count: procedure
      .input(z.object({ where: Schema.MentionWhereInputSchema.optional() }))
      .query(({ ctx, input }) => secureClient(ctx).mention.count(input)),
  }),
});
