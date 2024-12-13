import { trpc, procedure } from "../../trpc";
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
  };

  post: {
    findMany: {
      query: ReturnType<typeof secureClient>["post"]["findMany"];
    };

    findUnique: {
      query: ReturnType<typeof secureClient>["post"]["findUnique"];
    };
  };

  reaction: {
    findMany: {
      query: ReturnType<typeof secureClient>["reaction"]["findMany"];
    };

    findUnique: {
      query: ReturnType<typeof secureClient>["reaction"]["findUnique"];
    };
  };

  mention: {
    findMany: {
      query: ReturnType<typeof secureClient>["mention"]["findMany"];
    };

    findUnique: {
      query: ReturnType<typeof secureClient>["mention"]["findUnique"];
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
  }),

  post: trpc.router({
    findMany: procedure
      .input(Schema.PostFindManyArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).post.findMany(input)),

    findUnique: procedure
      .input(Schema.PostFindUniqueArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).post.findUnique(input)),
  }),

  reaction: trpc.router({
    findMany: procedure
      .input(Schema.ReactionFindManyArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).reaction.findMany(input)),

    findUnique: procedure
      .input(Schema.ReactionFindUniqueArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).reaction.findUnique(input)),
  }),

  mention: trpc.router({
    findMany: procedure
      .input(Schema.MentionFindManyArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).mention.findMany(input)),

    findUnique: procedure
      .input(Schema.MentionFindUniqueArgsSchema)
      .query(({ ctx, input }) => secureClient(ctx).mention.findUnique(input)),
  }),
});
