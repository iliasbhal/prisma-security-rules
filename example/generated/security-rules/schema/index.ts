import { z } from 'zod';
import type { Prisma } from '../../../client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UsersScalarFieldEnumSchema = z.enum(['id','email','name']);

export const PostScalarFieldEnumSchema = z.enum(['id','title','content','published','authorId','parentPostId']);

export const ReactionScalarFieldEnumSchema = z.enum(['id','emoji','postId','userId']);

export const MentionScalarFieldEnumSchema = z.enum(['id','name','postId','userId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USERS SCHEMA
/////////////////////////////////////////

export const UsersSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().nullable(),
})

export type Users = z.infer<typeof UsersSchema>

/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////

export const PostSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
  authorId: z.number().int(),
  parentPostId: z.number().int().nullable(),
})

export type Post = z.infer<typeof PostSchema>

/////////////////////////////////////////
// REACTION SCHEMA
/////////////////////////////////////////

export const ReactionSchema = z.object({
  id: z.number().int(),
  emoji: z.string(),
  postId: z.number().int(),
  userId: z.number().int(),
})

export type Reaction = z.infer<typeof ReactionSchema>

/////////////////////////////////////////
// MENTION SCHEMA
/////////////////////////////////////////

export const MentionSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  postId: z.number().int(),
  userId: z.number().int(),
})

export type Mention = z.infer<typeof MentionSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USERS
//------------------------------------------------------

export const UsersIncludeSchema: z.ZodType<Prisma.UsersInclude> = z.object({
  posts: z.union([z.boolean(),z.lazy(() => PostFindManyArgsSchema)]).optional(),
  reactions: z.union([z.boolean(),z.lazy(() => ReactionFindManyArgsSchema)]).optional(),
  mentions: z.union([z.boolean(),z.lazy(() => MentionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UsersArgsSchema: z.ZodType<Prisma.UsersDefaultArgs> = z.object({
  select: z.lazy(() => UsersSelectSchema).optional(),
  include: z.lazy(() => UsersIncludeSchema).optional(),
}).strict();

export const UsersCountOutputTypeArgsSchema: z.ZodType<Prisma.UsersCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UsersCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UsersCountOutputTypeSelectSchema: z.ZodType<Prisma.UsersCountOutputTypeSelect> = z.object({
  posts: z.boolean().optional(),
  reactions: z.boolean().optional(),
  mentions: z.boolean().optional(),
}).strict();

export const UsersSelectSchema: z.ZodType<Prisma.UsersSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  posts: z.union([z.boolean(),z.lazy(() => PostFindManyArgsSchema)]).optional(),
  reactions: z.union([z.boolean(),z.lazy(() => ReactionFindManyArgsSchema)]).optional(),
  mentions: z.union([z.boolean(),z.lazy(() => MentionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict()

// POST
//------------------------------------------------------

export const PostIncludeSchema: z.ZodType<Prisma.PostInclude> = z.object({
  author: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
  reactions: z.union([z.boolean(),z.lazy(() => ReactionFindManyArgsSchema)]).optional(),
  mentions: z.union([z.boolean(),z.lazy(() => MentionFindManyArgsSchema)]).optional(),
  parentPost: z.union([z.boolean(),z.lazy(() => PostArgsSchema)]).optional(),
  childPosts: z.union([z.boolean(),z.lazy(() => PostFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PostCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PostArgsSchema: z.ZodType<Prisma.PostDefaultArgs> = z.object({
  select: z.lazy(() => PostSelectSchema).optional(),
  include: z.lazy(() => PostIncludeSchema).optional(),
}).strict();

export const PostCountOutputTypeArgsSchema: z.ZodType<Prisma.PostCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PostCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PostCountOutputTypeSelectSchema: z.ZodType<Prisma.PostCountOutputTypeSelect> = z.object({
  reactions: z.boolean().optional(),
  mentions: z.boolean().optional(),
  childPosts: z.boolean().optional(),
}).strict();

export const PostSelectSchema: z.ZodType<Prisma.PostSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  published: z.boolean().optional(),
  authorId: z.boolean().optional(),
  parentPostId: z.boolean().optional(),
  author: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
  reactions: z.union([z.boolean(),z.lazy(() => ReactionFindManyArgsSchema)]).optional(),
  mentions: z.union([z.boolean(),z.lazy(() => MentionFindManyArgsSchema)]).optional(),
  parentPost: z.union([z.boolean(),z.lazy(() => PostArgsSchema)]).optional(),
  childPosts: z.union([z.boolean(),z.lazy(() => PostFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PostCountOutputTypeArgsSchema)]).optional(),
}).strict()

// REACTION
//------------------------------------------------------

export const ReactionIncludeSchema: z.ZodType<Prisma.ReactionInclude> = z.object({
  post: z.union([z.boolean(),z.lazy(() => PostArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
}).strict()

export const ReactionArgsSchema: z.ZodType<Prisma.ReactionDefaultArgs> = z.object({
  select: z.lazy(() => ReactionSelectSchema).optional(),
  include: z.lazy(() => ReactionIncludeSchema).optional(),
}).strict();

export const ReactionSelectSchema: z.ZodType<Prisma.ReactionSelect> = z.object({
  id: z.boolean().optional(),
  emoji: z.boolean().optional(),
  postId: z.boolean().optional(),
  userId: z.boolean().optional(),
  post: z.union([z.boolean(),z.lazy(() => PostArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
}).strict()

// MENTION
//------------------------------------------------------

export const MentionIncludeSchema: z.ZodType<Prisma.MentionInclude> = z.object({
  post: z.union([z.boolean(),z.lazy(() => PostArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
}).strict()

export const MentionArgsSchema: z.ZodType<Prisma.MentionDefaultArgs> = z.object({
  select: z.lazy(() => MentionSelectSchema).optional(),
  include: z.lazy(() => MentionIncludeSchema).optional(),
}).strict();

export const MentionSelectSchema: z.ZodType<Prisma.MentionSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  postId: z.boolean().optional(),
  userId: z.boolean().optional(),
  post: z.union([z.boolean(),z.lazy(() => PostArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UsersWhereInputSchema: z.ZodType<Prisma.UsersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UsersWhereInputSchema),z.lazy(() => UsersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersWhereInputSchema),z.lazy(() => UsersWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  posts: z.lazy(() => PostListRelationFilterSchema).optional(),
  reactions: z.lazy(() => ReactionListRelationFilterSchema).optional(),
  mentions: z.lazy(() => MentionListRelationFilterSchema).optional()
}).strict();

export const UsersOrderByWithRelationInputSchema: z.ZodType<Prisma.UsersOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  posts: z.lazy(() => PostOrderByRelationAggregateInputSchema).optional(),
  reactions: z.lazy(() => ReactionOrderByRelationAggregateInputSchema).optional(),
  mentions: z.lazy(() => MentionOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UsersWhereUniqueInputSchema: z.ZodType<Prisma.UsersWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    email: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UsersWhereInputSchema),z.lazy(() => UsersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersWhereInputSchema),z.lazy(() => UsersWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  posts: z.lazy(() => PostListRelationFilterSchema).optional(),
  reactions: z.lazy(() => ReactionListRelationFilterSchema).optional(),
  mentions: z.lazy(() => MentionListRelationFilterSchema).optional()
}).strict());

export const UsersOrderByWithAggregationInputSchema: z.ZodType<Prisma.UsersOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => UsersCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UsersAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UsersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UsersMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UsersSumOrderByAggregateInputSchema).optional()
}).strict();

export const UsersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UsersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UsersScalarWhereWithAggregatesInputSchema),z.lazy(() => UsersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersScalarWhereWithAggregatesInputSchema),z.lazy(() => UsersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const PostWhereInputSchema: z.ZodType<Prisma.PostWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PostWhereInputSchema),z.lazy(() => PostWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PostWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PostWhereInputSchema),z.lazy(() => PostWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  published: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  authorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  parentPostId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  author: z.union([ z.lazy(() => UsersScalarRelationFilterSchema),z.lazy(() => UsersWhereInputSchema) ]).optional(),
  reactions: z.lazy(() => ReactionListRelationFilterSchema).optional(),
  mentions: z.lazy(() => MentionListRelationFilterSchema).optional(),
  parentPost: z.union([ z.lazy(() => PostNullableScalarRelationFilterSchema),z.lazy(() => PostWhereInputSchema) ]).optional().nullable(),
  childPosts: z.lazy(() => PostListRelationFilterSchema).optional()
}).strict();

export const PostOrderByWithRelationInputSchema: z.ZodType<Prisma.PostOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  published: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  parentPostId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  author: z.lazy(() => UsersOrderByWithRelationInputSchema).optional(),
  reactions: z.lazy(() => ReactionOrderByRelationAggregateInputSchema).optional(),
  mentions: z.lazy(() => MentionOrderByRelationAggregateInputSchema).optional(),
  parentPost: z.lazy(() => PostOrderByWithRelationInputSchema).optional(),
  childPosts: z.lazy(() => PostOrderByRelationAggregateInputSchema).optional()
}).strict();

export const PostWhereUniqueInputSchema: z.ZodType<Prisma.PostWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => PostWhereInputSchema),z.lazy(() => PostWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PostWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PostWhereInputSchema),z.lazy(() => PostWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  published: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  authorId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  parentPostId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  author: z.union([ z.lazy(() => UsersScalarRelationFilterSchema),z.lazy(() => UsersWhereInputSchema) ]).optional(),
  reactions: z.lazy(() => ReactionListRelationFilterSchema).optional(),
  mentions: z.lazy(() => MentionListRelationFilterSchema).optional(),
  parentPost: z.union([ z.lazy(() => PostNullableScalarRelationFilterSchema),z.lazy(() => PostWhereInputSchema) ]).optional().nullable(),
  childPosts: z.lazy(() => PostListRelationFilterSchema).optional()
}).strict());

export const PostOrderByWithAggregationInputSchema: z.ZodType<Prisma.PostOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  published: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  parentPostId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PostCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PostAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PostMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PostMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PostSumOrderByAggregateInputSchema).optional()
}).strict();

export const PostScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PostScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PostScalarWhereWithAggregatesInputSchema),z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PostScalarWhereWithAggregatesInputSchema),z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  published: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  authorId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  parentPostId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const ReactionWhereInputSchema: z.ZodType<Prisma.ReactionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReactionWhereInputSchema),z.lazy(() => ReactionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReactionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReactionWhereInputSchema),z.lazy(() => ReactionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  emoji: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  post: z.union([ z.lazy(() => PostScalarRelationFilterSchema),z.lazy(() => PostWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema),z.lazy(() => UsersWhereInputSchema) ]).optional(),
}).strict();

export const ReactionOrderByWithRelationInputSchema: z.ZodType<Prisma.ReactionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  emoji: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  post: z.lazy(() => PostOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UsersOrderByWithRelationInputSchema).optional()
}).strict();

export const ReactionWhereUniqueInputSchema: z.ZodType<Prisma.ReactionWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ReactionWhereInputSchema),z.lazy(() => ReactionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReactionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReactionWhereInputSchema),z.lazy(() => ReactionWhereInputSchema).array() ]).optional(),
  emoji: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  post: z.union([ z.lazy(() => PostScalarRelationFilterSchema),z.lazy(() => PostWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema),z.lazy(() => UsersWhereInputSchema) ]).optional(),
}).strict());

export const ReactionOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReactionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  emoji: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReactionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ReactionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReactionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReactionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ReactionSumOrderByAggregateInputSchema).optional()
}).strict();

export const ReactionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReactionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ReactionScalarWhereWithAggregatesInputSchema),z.lazy(() => ReactionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReactionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReactionScalarWhereWithAggregatesInputSchema),z.lazy(() => ReactionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  emoji: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const MentionWhereInputSchema: z.ZodType<Prisma.MentionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MentionWhereInputSchema),z.lazy(() => MentionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MentionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MentionWhereInputSchema),z.lazy(() => MentionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  post: z.union([ z.lazy(() => PostScalarRelationFilterSchema),z.lazy(() => PostWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema),z.lazy(() => UsersWhereInputSchema) ]).optional(),
}).strict();

export const MentionOrderByWithRelationInputSchema: z.ZodType<Prisma.MentionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  post: z.lazy(() => PostOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UsersOrderByWithRelationInputSchema).optional()
}).strict();

export const MentionWhereUniqueInputSchema: z.ZodType<Prisma.MentionWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => MentionWhereInputSchema),z.lazy(() => MentionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MentionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MentionWhereInputSchema),z.lazy(() => MentionWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  post: z.union([ z.lazy(() => PostScalarRelationFilterSchema),z.lazy(() => PostWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema),z.lazy(() => UsersWhereInputSchema) ]).optional(),
}).strict());

export const MentionOrderByWithAggregationInputSchema: z.ZodType<Prisma.MentionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MentionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MentionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MentionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MentionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MentionSumOrderByAggregateInputSchema).optional()
}).strict();

export const MentionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MentionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MentionScalarWhereWithAggregatesInputSchema),z.lazy(() => MentionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MentionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MentionScalarWhereWithAggregatesInputSchema),z.lazy(() => MentionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const UsersCreateInputSchema: z.ZodType<Prisma.UsersCreateInput> = z.object({
  email: z.string(),
  name: z.string().optional().nullable(),
  posts: z.lazy(() => PostCreateNestedManyWithoutAuthorInputSchema).optional(),
  reactions: z.lazy(() => ReactionCreateNestedManyWithoutUserInputSchema).optional(),
  mentions: z.lazy(() => MentionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UsersUncheckedCreateInputSchema: z.ZodType<Prisma.UsersUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  reactions: z.lazy(() => ReactionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  mentions: z.lazy(() => MentionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UsersUpdateInputSchema: z.ZodType<Prisma.UsersUpdateInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  posts: z.lazy(() => PostUpdateManyWithoutAuthorNestedInputSchema).optional(),
  reactions: z.lazy(() => ReactionUpdateManyWithoutUserNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UsersUncheckedUpdateInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  posts: z.lazy(() => PostUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  reactions: z.lazy(() => ReactionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UsersCreateManyInputSchema: z.ZodType<Prisma.UsersCreateManyInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();

export const UsersUpdateManyMutationInputSchema: z.ZodType<Prisma.UsersUpdateManyMutationInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UsersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PostCreateInputSchema: z.ZodType<Prisma.PostCreateInput> = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  author: z.lazy(() => UsersCreateNestedOneWithoutPostsInputSchema),
  reactions: z.lazy(() => ReactionCreateNestedManyWithoutPostInputSchema).optional(),
  mentions: z.lazy(() => MentionCreateNestedManyWithoutPostInputSchema).optional(),
  parentPost: z.lazy(() => PostCreateNestedOneWithoutChildPostsInputSchema).optional(),
  childPosts: z.lazy(() => PostCreateNestedManyWithoutParentPostInputSchema).optional()
}).strict();

export const PostUncheckedCreateInputSchema: z.ZodType<Prisma.PostUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  authorId: z.number().int(),
  parentPostId: z.number().int().optional().nullable(),
  reactions: z.lazy(() => ReactionUncheckedCreateNestedManyWithoutPostInputSchema).optional(),
  mentions: z.lazy(() => MentionUncheckedCreateNestedManyWithoutPostInputSchema).optional(),
  childPosts: z.lazy(() => PostUncheckedCreateNestedManyWithoutParentPostInputSchema).optional()
}).strict();

export const PostUpdateInputSchema: z.ZodType<Prisma.PostUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UsersUpdateOneRequiredWithoutPostsNestedInputSchema).optional(),
  reactions: z.lazy(() => ReactionUpdateManyWithoutPostNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUpdateManyWithoutPostNestedInputSchema).optional(),
  parentPost: z.lazy(() => PostUpdateOneWithoutChildPostsNestedInputSchema).optional(),
  childPosts: z.lazy(() => PostUpdateManyWithoutParentPostNestedInputSchema).optional()
}).strict();

export const PostUncheckedUpdateInputSchema: z.ZodType<Prisma.PostUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  parentPostId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reactions: z.lazy(() => ReactionUncheckedUpdateManyWithoutPostNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUncheckedUpdateManyWithoutPostNestedInputSchema).optional(),
  childPosts: z.lazy(() => PostUncheckedUpdateManyWithoutParentPostNestedInputSchema).optional()
}).strict();

export const PostCreateManyInputSchema: z.ZodType<Prisma.PostCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  authorId: z.number().int(),
  parentPostId: z.number().int().optional().nullable()
}).strict();

export const PostUpdateManyMutationInputSchema: z.ZodType<Prisma.PostUpdateManyMutationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PostUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  parentPostId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ReactionCreateInputSchema: z.ZodType<Prisma.ReactionCreateInput> = z.object({
  emoji: z.string(),
  post: z.lazy(() => PostCreateNestedOneWithoutReactionsInputSchema),
  user: z.lazy(() => UsersCreateNestedOneWithoutReactionsInputSchema)
}).strict();

export const ReactionUncheckedCreateInputSchema: z.ZodType<Prisma.ReactionUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  emoji: z.string(),
  postId: z.number().int(),
  userId: z.number().int()
}).strict();

export const ReactionUpdateInputSchema: z.ZodType<Prisma.ReactionUpdateInput> = z.object({
  emoji: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  post: z.lazy(() => PostUpdateOneRequiredWithoutReactionsNestedInputSchema).optional(),
  user: z.lazy(() => UsersUpdateOneRequiredWithoutReactionsNestedInputSchema).optional()
}).strict();

export const ReactionUncheckedUpdateInputSchema: z.ZodType<Prisma.ReactionUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emoji: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReactionCreateManyInputSchema: z.ZodType<Prisma.ReactionCreateManyInput> = z.object({
  id: z.number().int().optional(),
  emoji: z.string(),
  postId: z.number().int(),
  userId: z.number().int()
}).strict();

export const ReactionUpdateManyMutationInputSchema: z.ZodType<Prisma.ReactionUpdateManyMutationInput> = z.object({
  emoji: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReactionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ReactionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emoji: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MentionCreateInputSchema: z.ZodType<Prisma.MentionCreateInput> = z.object({
  name: z.string(),
  post: z.lazy(() => PostCreateNestedOneWithoutMentionsInputSchema),
  user: z.lazy(() => UsersCreateNestedOneWithoutMentionsInputSchema)
}).strict();

export const MentionUncheckedCreateInputSchema: z.ZodType<Prisma.MentionUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  postId: z.number().int(),
  userId: z.number().int()
}).strict();

export const MentionUpdateInputSchema: z.ZodType<Prisma.MentionUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  post: z.lazy(() => PostUpdateOneRequiredWithoutMentionsNestedInputSchema).optional(),
  user: z.lazy(() => UsersUpdateOneRequiredWithoutMentionsNestedInputSchema).optional()
}).strict();

export const MentionUncheckedUpdateInputSchema: z.ZodType<Prisma.MentionUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MentionCreateManyInputSchema: z.ZodType<Prisma.MentionCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  postId: z.number().int(),
  userId: z.number().int()
}).strict();

export const MentionUpdateManyMutationInputSchema: z.ZodType<Prisma.MentionUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MentionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MentionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const PostListRelationFilterSchema: z.ZodType<Prisma.PostListRelationFilter> = z.object({
  every: z.lazy(() => PostWhereInputSchema).optional(),
  some: z.lazy(() => PostWhereInputSchema).optional(),
  none: z.lazy(() => PostWhereInputSchema).optional()
}).strict();

export const ReactionListRelationFilterSchema: z.ZodType<Prisma.ReactionListRelationFilter> = z.object({
  every: z.lazy(() => ReactionWhereInputSchema).optional(),
  some: z.lazy(() => ReactionWhereInputSchema).optional(),
  none: z.lazy(() => ReactionWhereInputSchema).optional()
}).strict();

export const MentionListRelationFilterSchema: z.ZodType<Prisma.MentionListRelationFilter> = z.object({
  every: z.lazy(() => MentionWhereInputSchema).optional(),
  some: z.lazy(() => MentionWhereInputSchema).optional(),
  none: z.lazy(() => MentionWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const PostOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PostOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReactionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReactionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MentionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersCountOrderByAggregateInputSchema: z.ZodType<Prisma.UsersCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UsersAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UsersMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersMinOrderByAggregateInputSchema: z.ZodType<Prisma.UsersMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersSumOrderByAggregateInputSchema: z.ZodType<Prisma.UsersSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UsersScalarRelationFilterSchema: z.ZodType<Prisma.UsersScalarRelationFilter> = z.object({
  is: z.lazy(() => UsersWhereInputSchema).optional(),
  isNot: z.lazy(() => UsersWhereInputSchema).optional()
}).strict();

export const PostNullableScalarRelationFilterSchema: z.ZodType<Prisma.PostNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => PostWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PostWhereInputSchema).optional().nullable()
}).strict();

export const PostCountOrderByAggregateInputSchema: z.ZodType<Prisma.PostCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  published: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  parentPostId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PostAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PostAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  parentPostId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PostMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PostMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  published: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  parentPostId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PostMinOrderByAggregateInputSchema: z.ZodType<Prisma.PostMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  published: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  parentPostId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PostSumOrderByAggregateInputSchema: z.ZodType<Prisma.PostSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  parentPostId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const PostScalarRelationFilterSchema: z.ZodType<Prisma.PostScalarRelationFilter> = z.object({
  is: z.lazy(() => PostWhereInputSchema).optional(),
  isNot: z.lazy(() => PostWhereInputSchema).optional()
}).strict();

export const ReactionCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReactionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  emoji: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReactionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReactionAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReactionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReactionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  emoji: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReactionMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReactionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  emoji: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReactionSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReactionSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentionCountOrderByAggregateInputSchema: z.ZodType<Prisma.MentionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MentionAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MentionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentionMinOrderByAggregateInputSchema: z.ZodType<Prisma.MentionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentionSumOrderByAggregateInputSchema: z.ZodType<Prisma.MentionSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PostCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.PostCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => PostCreateWithoutAuthorInputSchema),z.lazy(() => PostCreateWithoutAuthorInputSchema).array(),z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PostCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReactionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ReactionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ReactionCreateWithoutUserInputSchema),z.lazy(() => ReactionCreateWithoutUserInputSchema).array(),z.lazy(() => ReactionUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReactionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReactionCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReactionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReactionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MentionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MentionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MentionCreateWithoutUserInputSchema),z.lazy(() => MentionCreateWithoutUserInputSchema).array(),z.lazy(() => MentionUncheckedCreateWithoutUserInputSchema),z.lazy(() => MentionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentionCreateOrConnectWithoutUserInputSchema),z.lazy(() => MentionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MentionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PostUncheckedCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => PostCreateWithoutAuthorInputSchema),z.lazy(() => PostCreateWithoutAuthorInputSchema).array(),z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PostCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReactionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ReactionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ReactionCreateWithoutUserInputSchema),z.lazy(() => ReactionCreateWithoutUserInputSchema).array(),z.lazy(() => ReactionUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReactionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReactionCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReactionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReactionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MentionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MentionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MentionCreateWithoutUserInputSchema),z.lazy(() => MentionCreateWithoutUserInputSchema).array(),z.lazy(() => MentionUncheckedCreateWithoutUserInputSchema),z.lazy(() => MentionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentionCreateOrConnectWithoutUserInputSchema),z.lazy(() => MentionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MentionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const PostUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.PostUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => PostCreateWithoutAuthorInputSchema),z.lazy(() => PostCreateWithoutAuthorInputSchema).array(),z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PostUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => PostUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PostCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PostUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => PostUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PostUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => PostUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PostScalarWhereInputSchema),z.lazy(() => PostScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReactionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ReactionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReactionCreateWithoutUserInputSchema),z.lazy(() => ReactionCreateWithoutUserInputSchema).array(),z.lazy(() => ReactionUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReactionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReactionCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReactionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReactionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReactionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReactionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReactionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReactionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReactionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ReactionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReactionScalarWhereInputSchema),z.lazy(() => ReactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MentionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.MentionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentionCreateWithoutUserInputSchema),z.lazy(() => MentionCreateWithoutUserInputSchema).array(),z.lazy(() => MentionUncheckedCreateWithoutUserInputSchema),z.lazy(() => MentionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentionCreateOrConnectWithoutUserInputSchema),z.lazy(() => MentionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MentionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MentionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MentionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MentionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MentionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MentionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => MentionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MentionScalarWhereInputSchema),z.lazy(() => MentionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const PostUncheckedUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => PostCreateWithoutAuthorInputSchema),z.lazy(() => PostCreateWithoutAuthorInputSchema).array(),z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => PostCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PostUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => PostUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PostCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PostUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => PostUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PostUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => PostUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PostScalarWhereInputSchema),z.lazy(() => PostScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReactionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ReactionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReactionCreateWithoutUserInputSchema),z.lazy(() => ReactionCreateWithoutUserInputSchema).array(),z.lazy(() => ReactionUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReactionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReactionCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReactionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReactionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReactionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReactionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReactionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReactionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReactionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ReactionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReactionScalarWhereInputSchema),z.lazy(() => ReactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MentionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.MentionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentionCreateWithoutUserInputSchema),z.lazy(() => MentionCreateWithoutUserInputSchema).array(),z.lazy(() => MentionUncheckedCreateWithoutUserInputSchema),z.lazy(() => MentionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentionCreateOrConnectWithoutUserInputSchema),z.lazy(() => MentionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MentionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MentionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MentionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MentionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MentionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MentionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => MentionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MentionScalarWhereInputSchema),z.lazy(() => MentionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UsersCreateNestedOneWithoutPostsInputSchema: z.ZodType<Prisma.UsersCreateNestedOneWithoutPostsInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutPostsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutPostsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutPostsInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional()
}).strict();

export const ReactionCreateNestedManyWithoutPostInputSchema: z.ZodType<Prisma.ReactionCreateNestedManyWithoutPostInput> = z.object({
  create: z.union([ z.lazy(() => ReactionCreateWithoutPostInputSchema),z.lazy(() => ReactionCreateWithoutPostInputSchema).array(),z.lazy(() => ReactionUncheckedCreateWithoutPostInputSchema),z.lazy(() => ReactionUncheckedCreateWithoutPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReactionCreateOrConnectWithoutPostInputSchema),z.lazy(() => ReactionCreateOrConnectWithoutPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReactionCreateManyPostInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MentionCreateNestedManyWithoutPostInputSchema: z.ZodType<Prisma.MentionCreateNestedManyWithoutPostInput> = z.object({
  create: z.union([ z.lazy(() => MentionCreateWithoutPostInputSchema),z.lazy(() => MentionCreateWithoutPostInputSchema).array(),z.lazy(() => MentionUncheckedCreateWithoutPostInputSchema),z.lazy(() => MentionUncheckedCreateWithoutPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentionCreateOrConnectWithoutPostInputSchema),z.lazy(() => MentionCreateOrConnectWithoutPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MentionCreateManyPostInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PostCreateNestedOneWithoutChildPostsInputSchema: z.ZodType<Prisma.PostCreateNestedOneWithoutChildPostsInput> = z.object({
  create: z.union([ z.lazy(() => PostCreateWithoutChildPostsInputSchema),z.lazy(() => PostUncheckedCreateWithoutChildPostsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PostCreateOrConnectWithoutChildPostsInputSchema).optional(),
  connect: z.lazy(() => PostWhereUniqueInputSchema).optional()
}).strict();

export const PostCreateNestedManyWithoutParentPostInputSchema: z.ZodType<Prisma.PostCreateNestedManyWithoutParentPostInput> = z.object({
  create: z.union([ z.lazy(() => PostCreateWithoutParentPostInputSchema),z.lazy(() => PostCreateWithoutParentPostInputSchema).array(),z.lazy(() => PostUncheckedCreateWithoutParentPostInputSchema),z.lazy(() => PostUncheckedCreateWithoutParentPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PostCreateOrConnectWithoutParentPostInputSchema),z.lazy(() => PostCreateOrConnectWithoutParentPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PostCreateManyParentPostInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReactionUncheckedCreateNestedManyWithoutPostInputSchema: z.ZodType<Prisma.ReactionUncheckedCreateNestedManyWithoutPostInput> = z.object({
  create: z.union([ z.lazy(() => ReactionCreateWithoutPostInputSchema),z.lazy(() => ReactionCreateWithoutPostInputSchema).array(),z.lazy(() => ReactionUncheckedCreateWithoutPostInputSchema),z.lazy(() => ReactionUncheckedCreateWithoutPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReactionCreateOrConnectWithoutPostInputSchema),z.lazy(() => ReactionCreateOrConnectWithoutPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReactionCreateManyPostInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MentionUncheckedCreateNestedManyWithoutPostInputSchema: z.ZodType<Prisma.MentionUncheckedCreateNestedManyWithoutPostInput> = z.object({
  create: z.union([ z.lazy(() => MentionCreateWithoutPostInputSchema),z.lazy(() => MentionCreateWithoutPostInputSchema).array(),z.lazy(() => MentionUncheckedCreateWithoutPostInputSchema),z.lazy(() => MentionUncheckedCreateWithoutPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentionCreateOrConnectWithoutPostInputSchema),z.lazy(() => MentionCreateOrConnectWithoutPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MentionCreateManyPostInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PostUncheckedCreateNestedManyWithoutParentPostInputSchema: z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutParentPostInput> = z.object({
  create: z.union([ z.lazy(() => PostCreateWithoutParentPostInputSchema),z.lazy(() => PostCreateWithoutParentPostInputSchema).array(),z.lazy(() => PostUncheckedCreateWithoutParentPostInputSchema),z.lazy(() => PostUncheckedCreateWithoutParentPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PostCreateOrConnectWithoutParentPostInputSchema),z.lazy(() => PostCreateOrConnectWithoutParentPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PostCreateManyParentPostInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const UsersUpdateOneRequiredWithoutPostsNestedInputSchema: z.ZodType<Prisma.UsersUpdateOneRequiredWithoutPostsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutPostsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutPostsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutPostsInputSchema).optional(),
  upsert: z.lazy(() => UsersUpsertWithoutPostsInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UsersUpdateToOneWithWhereWithoutPostsInputSchema),z.lazy(() => UsersUpdateWithoutPostsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutPostsInputSchema) ]).optional(),
}).strict();

export const ReactionUpdateManyWithoutPostNestedInputSchema: z.ZodType<Prisma.ReactionUpdateManyWithoutPostNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReactionCreateWithoutPostInputSchema),z.lazy(() => ReactionCreateWithoutPostInputSchema).array(),z.lazy(() => ReactionUncheckedCreateWithoutPostInputSchema),z.lazy(() => ReactionUncheckedCreateWithoutPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReactionCreateOrConnectWithoutPostInputSchema),z.lazy(() => ReactionCreateOrConnectWithoutPostInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReactionUpsertWithWhereUniqueWithoutPostInputSchema),z.lazy(() => ReactionUpsertWithWhereUniqueWithoutPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReactionCreateManyPostInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReactionUpdateWithWhereUniqueWithoutPostInputSchema),z.lazy(() => ReactionUpdateWithWhereUniqueWithoutPostInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReactionUpdateManyWithWhereWithoutPostInputSchema),z.lazy(() => ReactionUpdateManyWithWhereWithoutPostInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReactionScalarWhereInputSchema),z.lazy(() => ReactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MentionUpdateManyWithoutPostNestedInputSchema: z.ZodType<Prisma.MentionUpdateManyWithoutPostNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentionCreateWithoutPostInputSchema),z.lazy(() => MentionCreateWithoutPostInputSchema).array(),z.lazy(() => MentionUncheckedCreateWithoutPostInputSchema),z.lazy(() => MentionUncheckedCreateWithoutPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentionCreateOrConnectWithoutPostInputSchema),z.lazy(() => MentionCreateOrConnectWithoutPostInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MentionUpsertWithWhereUniqueWithoutPostInputSchema),z.lazy(() => MentionUpsertWithWhereUniqueWithoutPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MentionCreateManyPostInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MentionUpdateWithWhereUniqueWithoutPostInputSchema),z.lazy(() => MentionUpdateWithWhereUniqueWithoutPostInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MentionUpdateManyWithWhereWithoutPostInputSchema),z.lazy(() => MentionUpdateManyWithWhereWithoutPostInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MentionScalarWhereInputSchema),z.lazy(() => MentionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PostUpdateOneWithoutChildPostsNestedInputSchema: z.ZodType<Prisma.PostUpdateOneWithoutChildPostsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PostCreateWithoutChildPostsInputSchema),z.lazy(() => PostUncheckedCreateWithoutChildPostsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PostCreateOrConnectWithoutChildPostsInputSchema).optional(),
  upsert: z.lazy(() => PostUpsertWithoutChildPostsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PostWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PostWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PostWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PostUpdateToOneWithWhereWithoutChildPostsInputSchema),z.lazy(() => PostUpdateWithoutChildPostsInputSchema),z.lazy(() => PostUncheckedUpdateWithoutChildPostsInputSchema) ]).optional(),
}).strict();

export const PostUpdateManyWithoutParentPostNestedInputSchema: z.ZodType<Prisma.PostUpdateManyWithoutParentPostNestedInput> = z.object({
  create: z.union([ z.lazy(() => PostCreateWithoutParentPostInputSchema),z.lazy(() => PostCreateWithoutParentPostInputSchema).array(),z.lazy(() => PostUncheckedCreateWithoutParentPostInputSchema),z.lazy(() => PostUncheckedCreateWithoutParentPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PostCreateOrConnectWithoutParentPostInputSchema),z.lazy(() => PostCreateOrConnectWithoutParentPostInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PostUpsertWithWhereUniqueWithoutParentPostInputSchema),z.lazy(() => PostUpsertWithWhereUniqueWithoutParentPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PostCreateManyParentPostInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PostUpdateWithWhereUniqueWithoutParentPostInputSchema),z.lazy(() => PostUpdateWithWhereUniqueWithoutParentPostInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PostUpdateManyWithWhereWithoutParentPostInputSchema),z.lazy(() => PostUpdateManyWithWhereWithoutParentPostInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PostScalarWhereInputSchema),z.lazy(() => PostScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const ReactionUncheckedUpdateManyWithoutPostNestedInputSchema: z.ZodType<Prisma.ReactionUncheckedUpdateManyWithoutPostNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReactionCreateWithoutPostInputSchema),z.lazy(() => ReactionCreateWithoutPostInputSchema).array(),z.lazy(() => ReactionUncheckedCreateWithoutPostInputSchema),z.lazy(() => ReactionUncheckedCreateWithoutPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReactionCreateOrConnectWithoutPostInputSchema),z.lazy(() => ReactionCreateOrConnectWithoutPostInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReactionUpsertWithWhereUniqueWithoutPostInputSchema),z.lazy(() => ReactionUpsertWithWhereUniqueWithoutPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReactionCreateManyPostInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReactionWhereUniqueInputSchema),z.lazy(() => ReactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReactionUpdateWithWhereUniqueWithoutPostInputSchema),z.lazy(() => ReactionUpdateWithWhereUniqueWithoutPostInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReactionUpdateManyWithWhereWithoutPostInputSchema),z.lazy(() => ReactionUpdateManyWithWhereWithoutPostInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReactionScalarWhereInputSchema),z.lazy(() => ReactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MentionUncheckedUpdateManyWithoutPostNestedInputSchema: z.ZodType<Prisma.MentionUncheckedUpdateManyWithoutPostNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentionCreateWithoutPostInputSchema),z.lazy(() => MentionCreateWithoutPostInputSchema).array(),z.lazy(() => MentionUncheckedCreateWithoutPostInputSchema),z.lazy(() => MentionUncheckedCreateWithoutPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentionCreateOrConnectWithoutPostInputSchema),z.lazy(() => MentionCreateOrConnectWithoutPostInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MentionUpsertWithWhereUniqueWithoutPostInputSchema),z.lazy(() => MentionUpsertWithWhereUniqueWithoutPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MentionCreateManyPostInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MentionWhereUniqueInputSchema),z.lazy(() => MentionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MentionUpdateWithWhereUniqueWithoutPostInputSchema),z.lazy(() => MentionUpdateWithWhereUniqueWithoutPostInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MentionUpdateManyWithWhereWithoutPostInputSchema),z.lazy(() => MentionUpdateManyWithWhereWithoutPostInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MentionScalarWhereInputSchema),z.lazy(() => MentionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PostUncheckedUpdateManyWithoutParentPostNestedInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutParentPostNestedInput> = z.object({
  create: z.union([ z.lazy(() => PostCreateWithoutParentPostInputSchema),z.lazy(() => PostCreateWithoutParentPostInputSchema).array(),z.lazy(() => PostUncheckedCreateWithoutParentPostInputSchema),z.lazy(() => PostUncheckedCreateWithoutParentPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PostCreateOrConnectWithoutParentPostInputSchema),z.lazy(() => PostCreateOrConnectWithoutParentPostInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PostUpsertWithWhereUniqueWithoutParentPostInputSchema),z.lazy(() => PostUpsertWithWhereUniqueWithoutParentPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PostCreateManyParentPostInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PostWhereUniqueInputSchema),z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PostUpdateWithWhereUniqueWithoutParentPostInputSchema),z.lazy(() => PostUpdateWithWhereUniqueWithoutParentPostInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PostUpdateManyWithWhereWithoutParentPostInputSchema),z.lazy(() => PostUpdateManyWithWhereWithoutParentPostInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PostScalarWhereInputSchema),z.lazy(() => PostScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PostCreateNestedOneWithoutReactionsInputSchema: z.ZodType<Prisma.PostCreateNestedOneWithoutReactionsInput> = z.object({
  create: z.union([ z.lazy(() => PostCreateWithoutReactionsInputSchema),z.lazy(() => PostUncheckedCreateWithoutReactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PostCreateOrConnectWithoutReactionsInputSchema).optional(),
  connect: z.lazy(() => PostWhereUniqueInputSchema).optional()
}).strict();

export const UsersCreateNestedOneWithoutReactionsInputSchema: z.ZodType<Prisma.UsersCreateNestedOneWithoutReactionsInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutReactionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutReactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutReactionsInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional()
}).strict();

export const PostUpdateOneRequiredWithoutReactionsNestedInputSchema: z.ZodType<Prisma.PostUpdateOneRequiredWithoutReactionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PostCreateWithoutReactionsInputSchema),z.lazy(() => PostUncheckedCreateWithoutReactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PostCreateOrConnectWithoutReactionsInputSchema).optional(),
  upsert: z.lazy(() => PostUpsertWithoutReactionsInputSchema).optional(),
  connect: z.lazy(() => PostWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PostUpdateToOneWithWhereWithoutReactionsInputSchema),z.lazy(() => PostUpdateWithoutReactionsInputSchema),z.lazy(() => PostUncheckedUpdateWithoutReactionsInputSchema) ]).optional(),
}).strict();

export const UsersUpdateOneRequiredWithoutReactionsNestedInputSchema: z.ZodType<Prisma.UsersUpdateOneRequiredWithoutReactionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutReactionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutReactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutReactionsInputSchema).optional(),
  upsert: z.lazy(() => UsersUpsertWithoutReactionsInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UsersUpdateToOneWithWhereWithoutReactionsInputSchema),z.lazy(() => UsersUpdateWithoutReactionsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutReactionsInputSchema) ]).optional(),
}).strict();

export const PostCreateNestedOneWithoutMentionsInputSchema: z.ZodType<Prisma.PostCreateNestedOneWithoutMentionsInput> = z.object({
  create: z.union([ z.lazy(() => PostCreateWithoutMentionsInputSchema),z.lazy(() => PostUncheckedCreateWithoutMentionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PostCreateOrConnectWithoutMentionsInputSchema).optional(),
  connect: z.lazy(() => PostWhereUniqueInputSchema).optional()
}).strict();

export const UsersCreateNestedOneWithoutMentionsInputSchema: z.ZodType<Prisma.UsersCreateNestedOneWithoutMentionsInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutMentionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutMentionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutMentionsInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional()
}).strict();

export const PostUpdateOneRequiredWithoutMentionsNestedInputSchema: z.ZodType<Prisma.PostUpdateOneRequiredWithoutMentionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PostCreateWithoutMentionsInputSchema),z.lazy(() => PostUncheckedCreateWithoutMentionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PostCreateOrConnectWithoutMentionsInputSchema).optional(),
  upsert: z.lazy(() => PostUpsertWithoutMentionsInputSchema).optional(),
  connect: z.lazy(() => PostWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PostUpdateToOneWithWhereWithoutMentionsInputSchema),z.lazy(() => PostUpdateWithoutMentionsInputSchema),z.lazy(() => PostUncheckedUpdateWithoutMentionsInputSchema) ]).optional(),
}).strict();

export const UsersUpdateOneRequiredWithoutMentionsNestedInputSchema: z.ZodType<Prisma.UsersUpdateOneRequiredWithoutMentionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutMentionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutMentionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutMentionsInputSchema).optional(),
  upsert: z.lazy(() => UsersUpsertWithoutMentionsInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UsersUpdateToOneWithWhereWithoutMentionsInputSchema),z.lazy(() => UsersUpdateWithoutMentionsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutMentionsInputSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const PostCreateWithoutAuthorInputSchema: z.ZodType<Prisma.PostCreateWithoutAuthorInput> = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  reactions: z.lazy(() => ReactionCreateNestedManyWithoutPostInputSchema).optional(),
  mentions: z.lazy(() => MentionCreateNestedManyWithoutPostInputSchema).optional(),
  parentPost: z.lazy(() => PostCreateNestedOneWithoutChildPostsInputSchema).optional(),
  childPosts: z.lazy(() => PostCreateNestedManyWithoutParentPostInputSchema).optional()
}).strict();

export const PostUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  parentPostId: z.number().int().optional().nullable(),
  reactions: z.lazy(() => ReactionUncheckedCreateNestedManyWithoutPostInputSchema).optional(),
  mentions: z.lazy(() => MentionUncheckedCreateNestedManyWithoutPostInputSchema).optional(),
  childPosts: z.lazy(() => PostUncheckedCreateNestedManyWithoutParentPostInputSchema).optional()
}).strict();

export const PostCreateOrConnectWithoutAuthorInputSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutAuthorInput> = z.object({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PostCreateWithoutAuthorInputSchema),z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const PostCreateManyAuthorInputEnvelopeSchema: z.ZodType<Prisma.PostCreateManyAuthorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PostCreateManyAuthorInputSchema),z.lazy(() => PostCreateManyAuthorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ReactionCreateWithoutUserInputSchema: z.ZodType<Prisma.ReactionCreateWithoutUserInput> = z.object({
  emoji: z.string(),
  post: z.lazy(() => PostCreateNestedOneWithoutReactionsInputSchema)
}).strict();

export const ReactionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ReactionUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  emoji: z.string(),
  postId: z.number().int()
}).strict();

export const ReactionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ReactionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ReactionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReactionCreateWithoutUserInputSchema),z.lazy(() => ReactionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ReactionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ReactionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReactionCreateManyUserInputSchema),z.lazy(() => ReactionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MentionCreateWithoutUserInputSchema: z.ZodType<Prisma.MentionCreateWithoutUserInput> = z.object({
  name: z.string(),
  post: z.lazy(() => PostCreateNestedOneWithoutMentionsInputSchema)
}).strict();

export const MentionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.MentionUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  postId: z.number().int()
}).strict();

export const MentionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.MentionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => MentionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentionCreateWithoutUserInputSchema),z.lazy(() => MentionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MentionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.MentionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MentionCreateManyUserInputSchema),z.lazy(() => MentionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PostUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PostUpdateWithoutAuthorInputSchema),z.lazy(() => PostUncheckedUpdateWithoutAuthorInputSchema) ]),
  create: z.union([ z.lazy(() => PostCreateWithoutAuthorInputSchema),z.lazy(() => PostUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const PostUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PostUpdateWithoutAuthorInputSchema),z.lazy(() => PostUncheckedUpdateWithoutAuthorInputSchema) ]),
}).strict();

export const PostUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutAuthorInput> = z.object({
  where: z.lazy(() => PostScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PostUpdateManyMutationInputSchema),z.lazy(() => PostUncheckedUpdateManyWithoutAuthorInputSchema) ]),
}).strict();

export const PostScalarWhereInputSchema: z.ZodType<Prisma.PostScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PostScalarWhereInputSchema),z.lazy(() => PostScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PostScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PostScalarWhereInputSchema),z.lazy(() => PostScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  published: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  authorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  parentPostId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const ReactionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ReactionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ReactionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReactionUpdateWithoutUserInputSchema),z.lazy(() => ReactionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ReactionCreateWithoutUserInputSchema),z.lazy(() => ReactionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ReactionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ReactionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ReactionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReactionUpdateWithoutUserInputSchema),z.lazy(() => ReactionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const ReactionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ReactionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ReactionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReactionUpdateManyMutationInputSchema),z.lazy(() => ReactionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const ReactionScalarWhereInputSchema: z.ZodType<Prisma.ReactionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReactionScalarWhereInputSchema),z.lazy(() => ReactionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReactionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReactionScalarWhereInputSchema),z.lazy(() => ReactionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  emoji: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const MentionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MentionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MentionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MentionUpdateWithoutUserInputSchema),z.lazy(() => MentionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => MentionCreateWithoutUserInputSchema),z.lazy(() => MentionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MentionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MentionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MentionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MentionUpdateWithoutUserInputSchema),z.lazy(() => MentionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const MentionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.MentionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => MentionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MentionUpdateManyMutationInputSchema),z.lazy(() => MentionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const MentionScalarWhereInputSchema: z.ZodType<Prisma.MentionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MentionScalarWhereInputSchema),z.lazy(() => MentionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MentionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MentionScalarWhereInputSchema),z.lazy(() => MentionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const UsersCreateWithoutPostsInputSchema: z.ZodType<Prisma.UsersCreateWithoutPostsInput> = z.object({
  email: z.string(),
  name: z.string().optional().nullable(),
  reactions: z.lazy(() => ReactionCreateNestedManyWithoutUserInputSchema).optional(),
  mentions: z.lazy(() => MentionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UsersUncheckedCreateWithoutPostsInputSchema: z.ZodType<Prisma.UsersUncheckedCreateWithoutPostsInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  reactions: z.lazy(() => ReactionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  mentions: z.lazy(() => MentionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UsersCreateOrConnectWithoutPostsInputSchema: z.ZodType<Prisma.UsersCreateOrConnectWithoutPostsInput> = z.object({
  where: z.lazy(() => UsersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersCreateWithoutPostsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutPostsInputSchema) ]),
}).strict();

export const ReactionCreateWithoutPostInputSchema: z.ZodType<Prisma.ReactionCreateWithoutPostInput> = z.object({
  emoji: z.string(),
  user: z.lazy(() => UsersCreateNestedOneWithoutReactionsInputSchema)
}).strict();

export const ReactionUncheckedCreateWithoutPostInputSchema: z.ZodType<Prisma.ReactionUncheckedCreateWithoutPostInput> = z.object({
  id: z.number().int().optional(),
  emoji: z.string(),
  userId: z.number().int()
}).strict();

export const ReactionCreateOrConnectWithoutPostInputSchema: z.ZodType<Prisma.ReactionCreateOrConnectWithoutPostInput> = z.object({
  where: z.lazy(() => ReactionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReactionCreateWithoutPostInputSchema),z.lazy(() => ReactionUncheckedCreateWithoutPostInputSchema) ]),
}).strict();

export const ReactionCreateManyPostInputEnvelopeSchema: z.ZodType<Prisma.ReactionCreateManyPostInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReactionCreateManyPostInputSchema),z.lazy(() => ReactionCreateManyPostInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MentionCreateWithoutPostInputSchema: z.ZodType<Prisma.MentionCreateWithoutPostInput> = z.object({
  name: z.string(),
  user: z.lazy(() => UsersCreateNestedOneWithoutMentionsInputSchema)
}).strict();

export const MentionUncheckedCreateWithoutPostInputSchema: z.ZodType<Prisma.MentionUncheckedCreateWithoutPostInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  userId: z.number().int()
}).strict();

export const MentionCreateOrConnectWithoutPostInputSchema: z.ZodType<Prisma.MentionCreateOrConnectWithoutPostInput> = z.object({
  where: z.lazy(() => MentionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentionCreateWithoutPostInputSchema),z.lazy(() => MentionUncheckedCreateWithoutPostInputSchema) ]),
}).strict();

export const MentionCreateManyPostInputEnvelopeSchema: z.ZodType<Prisma.MentionCreateManyPostInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MentionCreateManyPostInputSchema),z.lazy(() => MentionCreateManyPostInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PostCreateWithoutChildPostsInputSchema: z.ZodType<Prisma.PostCreateWithoutChildPostsInput> = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  author: z.lazy(() => UsersCreateNestedOneWithoutPostsInputSchema),
  reactions: z.lazy(() => ReactionCreateNestedManyWithoutPostInputSchema).optional(),
  mentions: z.lazy(() => MentionCreateNestedManyWithoutPostInputSchema).optional(),
  parentPost: z.lazy(() => PostCreateNestedOneWithoutChildPostsInputSchema).optional()
}).strict();

export const PostUncheckedCreateWithoutChildPostsInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutChildPostsInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  authorId: z.number().int(),
  parentPostId: z.number().int().optional().nullable(),
  reactions: z.lazy(() => ReactionUncheckedCreateNestedManyWithoutPostInputSchema).optional(),
  mentions: z.lazy(() => MentionUncheckedCreateNestedManyWithoutPostInputSchema).optional()
}).strict();

export const PostCreateOrConnectWithoutChildPostsInputSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutChildPostsInput> = z.object({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PostCreateWithoutChildPostsInputSchema),z.lazy(() => PostUncheckedCreateWithoutChildPostsInputSchema) ]),
}).strict();

export const PostCreateWithoutParentPostInputSchema: z.ZodType<Prisma.PostCreateWithoutParentPostInput> = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  author: z.lazy(() => UsersCreateNestedOneWithoutPostsInputSchema),
  reactions: z.lazy(() => ReactionCreateNestedManyWithoutPostInputSchema).optional(),
  mentions: z.lazy(() => MentionCreateNestedManyWithoutPostInputSchema).optional(),
  childPosts: z.lazy(() => PostCreateNestedManyWithoutParentPostInputSchema).optional()
}).strict();

export const PostUncheckedCreateWithoutParentPostInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutParentPostInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  authorId: z.number().int(),
  reactions: z.lazy(() => ReactionUncheckedCreateNestedManyWithoutPostInputSchema).optional(),
  mentions: z.lazy(() => MentionUncheckedCreateNestedManyWithoutPostInputSchema).optional(),
  childPosts: z.lazy(() => PostUncheckedCreateNestedManyWithoutParentPostInputSchema).optional()
}).strict();

export const PostCreateOrConnectWithoutParentPostInputSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutParentPostInput> = z.object({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PostCreateWithoutParentPostInputSchema),z.lazy(() => PostUncheckedCreateWithoutParentPostInputSchema) ]),
}).strict();

export const PostCreateManyParentPostInputEnvelopeSchema: z.ZodType<Prisma.PostCreateManyParentPostInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PostCreateManyParentPostInputSchema),z.lazy(() => PostCreateManyParentPostInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UsersUpsertWithoutPostsInputSchema: z.ZodType<Prisma.UsersUpsertWithoutPostsInput> = z.object({
  update: z.union([ z.lazy(() => UsersUpdateWithoutPostsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutPostsInputSchema) ]),
  create: z.union([ z.lazy(() => UsersCreateWithoutPostsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutPostsInputSchema) ]),
  where: z.lazy(() => UsersWhereInputSchema).optional()
}).strict();

export const UsersUpdateToOneWithWhereWithoutPostsInputSchema: z.ZodType<Prisma.UsersUpdateToOneWithWhereWithoutPostsInput> = z.object({
  where: z.lazy(() => UsersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UsersUpdateWithoutPostsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutPostsInputSchema) ]),
}).strict();

export const UsersUpdateWithoutPostsInputSchema: z.ZodType<Prisma.UsersUpdateWithoutPostsInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reactions: z.lazy(() => ReactionUpdateManyWithoutUserNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UsersUncheckedUpdateWithoutPostsInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateWithoutPostsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reactions: z.lazy(() => ReactionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const ReactionUpsertWithWhereUniqueWithoutPostInputSchema: z.ZodType<Prisma.ReactionUpsertWithWhereUniqueWithoutPostInput> = z.object({
  where: z.lazy(() => ReactionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReactionUpdateWithoutPostInputSchema),z.lazy(() => ReactionUncheckedUpdateWithoutPostInputSchema) ]),
  create: z.union([ z.lazy(() => ReactionCreateWithoutPostInputSchema),z.lazy(() => ReactionUncheckedCreateWithoutPostInputSchema) ]),
}).strict();

export const ReactionUpdateWithWhereUniqueWithoutPostInputSchema: z.ZodType<Prisma.ReactionUpdateWithWhereUniqueWithoutPostInput> = z.object({
  where: z.lazy(() => ReactionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReactionUpdateWithoutPostInputSchema),z.lazy(() => ReactionUncheckedUpdateWithoutPostInputSchema) ]),
}).strict();

export const ReactionUpdateManyWithWhereWithoutPostInputSchema: z.ZodType<Prisma.ReactionUpdateManyWithWhereWithoutPostInput> = z.object({
  where: z.lazy(() => ReactionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReactionUpdateManyMutationInputSchema),z.lazy(() => ReactionUncheckedUpdateManyWithoutPostInputSchema) ]),
}).strict();

export const MentionUpsertWithWhereUniqueWithoutPostInputSchema: z.ZodType<Prisma.MentionUpsertWithWhereUniqueWithoutPostInput> = z.object({
  where: z.lazy(() => MentionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MentionUpdateWithoutPostInputSchema),z.lazy(() => MentionUncheckedUpdateWithoutPostInputSchema) ]),
  create: z.union([ z.lazy(() => MentionCreateWithoutPostInputSchema),z.lazy(() => MentionUncheckedCreateWithoutPostInputSchema) ]),
}).strict();

export const MentionUpdateWithWhereUniqueWithoutPostInputSchema: z.ZodType<Prisma.MentionUpdateWithWhereUniqueWithoutPostInput> = z.object({
  where: z.lazy(() => MentionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MentionUpdateWithoutPostInputSchema),z.lazy(() => MentionUncheckedUpdateWithoutPostInputSchema) ]),
}).strict();

export const MentionUpdateManyWithWhereWithoutPostInputSchema: z.ZodType<Prisma.MentionUpdateManyWithWhereWithoutPostInput> = z.object({
  where: z.lazy(() => MentionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MentionUpdateManyMutationInputSchema),z.lazy(() => MentionUncheckedUpdateManyWithoutPostInputSchema) ]),
}).strict();

export const PostUpsertWithoutChildPostsInputSchema: z.ZodType<Prisma.PostUpsertWithoutChildPostsInput> = z.object({
  update: z.union([ z.lazy(() => PostUpdateWithoutChildPostsInputSchema),z.lazy(() => PostUncheckedUpdateWithoutChildPostsInputSchema) ]),
  create: z.union([ z.lazy(() => PostCreateWithoutChildPostsInputSchema),z.lazy(() => PostUncheckedCreateWithoutChildPostsInputSchema) ]),
  where: z.lazy(() => PostWhereInputSchema).optional()
}).strict();

export const PostUpdateToOneWithWhereWithoutChildPostsInputSchema: z.ZodType<Prisma.PostUpdateToOneWithWhereWithoutChildPostsInput> = z.object({
  where: z.lazy(() => PostWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PostUpdateWithoutChildPostsInputSchema),z.lazy(() => PostUncheckedUpdateWithoutChildPostsInputSchema) ]),
}).strict();

export const PostUpdateWithoutChildPostsInputSchema: z.ZodType<Prisma.PostUpdateWithoutChildPostsInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UsersUpdateOneRequiredWithoutPostsNestedInputSchema).optional(),
  reactions: z.lazy(() => ReactionUpdateManyWithoutPostNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUpdateManyWithoutPostNestedInputSchema).optional(),
  parentPost: z.lazy(() => PostUpdateOneWithoutChildPostsNestedInputSchema).optional()
}).strict();

export const PostUncheckedUpdateWithoutChildPostsInputSchema: z.ZodType<Prisma.PostUncheckedUpdateWithoutChildPostsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  parentPostId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reactions: z.lazy(() => ReactionUncheckedUpdateManyWithoutPostNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUncheckedUpdateManyWithoutPostNestedInputSchema).optional()
}).strict();

export const PostUpsertWithWhereUniqueWithoutParentPostInputSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutParentPostInput> = z.object({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PostUpdateWithoutParentPostInputSchema),z.lazy(() => PostUncheckedUpdateWithoutParentPostInputSchema) ]),
  create: z.union([ z.lazy(() => PostCreateWithoutParentPostInputSchema),z.lazy(() => PostUncheckedCreateWithoutParentPostInputSchema) ]),
}).strict();

export const PostUpdateWithWhereUniqueWithoutParentPostInputSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutParentPostInput> = z.object({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PostUpdateWithoutParentPostInputSchema),z.lazy(() => PostUncheckedUpdateWithoutParentPostInputSchema) ]),
}).strict();

export const PostUpdateManyWithWhereWithoutParentPostInputSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutParentPostInput> = z.object({
  where: z.lazy(() => PostScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PostUpdateManyMutationInputSchema),z.lazy(() => PostUncheckedUpdateManyWithoutParentPostInputSchema) ]),
}).strict();

export const PostCreateWithoutReactionsInputSchema: z.ZodType<Prisma.PostCreateWithoutReactionsInput> = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  author: z.lazy(() => UsersCreateNestedOneWithoutPostsInputSchema),
  mentions: z.lazy(() => MentionCreateNestedManyWithoutPostInputSchema).optional(),
  parentPost: z.lazy(() => PostCreateNestedOneWithoutChildPostsInputSchema).optional(),
  childPosts: z.lazy(() => PostCreateNestedManyWithoutParentPostInputSchema).optional()
}).strict();

export const PostUncheckedCreateWithoutReactionsInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutReactionsInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  authorId: z.number().int(),
  parentPostId: z.number().int().optional().nullable(),
  mentions: z.lazy(() => MentionUncheckedCreateNestedManyWithoutPostInputSchema).optional(),
  childPosts: z.lazy(() => PostUncheckedCreateNestedManyWithoutParentPostInputSchema).optional()
}).strict();

export const PostCreateOrConnectWithoutReactionsInputSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutReactionsInput> = z.object({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PostCreateWithoutReactionsInputSchema),z.lazy(() => PostUncheckedCreateWithoutReactionsInputSchema) ]),
}).strict();

export const UsersCreateWithoutReactionsInputSchema: z.ZodType<Prisma.UsersCreateWithoutReactionsInput> = z.object({
  email: z.string(),
  name: z.string().optional().nullable(),
  posts: z.lazy(() => PostCreateNestedManyWithoutAuthorInputSchema).optional(),
  mentions: z.lazy(() => MentionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UsersUncheckedCreateWithoutReactionsInputSchema: z.ZodType<Prisma.UsersUncheckedCreateWithoutReactionsInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  mentions: z.lazy(() => MentionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UsersCreateOrConnectWithoutReactionsInputSchema: z.ZodType<Prisma.UsersCreateOrConnectWithoutReactionsInput> = z.object({
  where: z.lazy(() => UsersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersCreateWithoutReactionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutReactionsInputSchema) ]),
}).strict();

export const PostUpsertWithoutReactionsInputSchema: z.ZodType<Prisma.PostUpsertWithoutReactionsInput> = z.object({
  update: z.union([ z.lazy(() => PostUpdateWithoutReactionsInputSchema),z.lazy(() => PostUncheckedUpdateWithoutReactionsInputSchema) ]),
  create: z.union([ z.lazy(() => PostCreateWithoutReactionsInputSchema),z.lazy(() => PostUncheckedCreateWithoutReactionsInputSchema) ]),
  where: z.lazy(() => PostWhereInputSchema).optional()
}).strict();

export const PostUpdateToOneWithWhereWithoutReactionsInputSchema: z.ZodType<Prisma.PostUpdateToOneWithWhereWithoutReactionsInput> = z.object({
  where: z.lazy(() => PostWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PostUpdateWithoutReactionsInputSchema),z.lazy(() => PostUncheckedUpdateWithoutReactionsInputSchema) ]),
}).strict();

export const PostUpdateWithoutReactionsInputSchema: z.ZodType<Prisma.PostUpdateWithoutReactionsInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UsersUpdateOneRequiredWithoutPostsNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUpdateManyWithoutPostNestedInputSchema).optional(),
  parentPost: z.lazy(() => PostUpdateOneWithoutChildPostsNestedInputSchema).optional(),
  childPosts: z.lazy(() => PostUpdateManyWithoutParentPostNestedInputSchema).optional()
}).strict();

export const PostUncheckedUpdateWithoutReactionsInputSchema: z.ZodType<Prisma.PostUncheckedUpdateWithoutReactionsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  parentPostId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mentions: z.lazy(() => MentionUncheckedUpdateManyWithoutPostNestedInputSchema).optional(),
  childPosts: z.lazy(() => PostUncheckedUpdateManyWithoutParentPostNestedInputSchema).optional()
}).strict();

export const UsersUpsertWithoutReactionsInputSchema: z.ZodType<Prisma.UsersUpsertWithoutReactionsInput> = z.object({
  update: z.union([ z.lazy(() => UsersUpdateWithoutReactionsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutReactionsInputSchema) ]),
  create: z.union([ z.lazy(() => UsersCreateWithoutReactionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutReactionsInputSchema) ]),
  where: z.lazy(() => UsersWhereInputSchema).optional()
}).strict();

export const UsersUpdateToOneWithWhereWithoutReactionsInputSchema: z.ZodType<Prisma.UsersUpdateToOneWithWhereWithoutReactionsInput> = z.object({
  where: z.lazy(() => UsersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UsersUpdateWithoutReactionsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutReactionsInputSchema) ]),
}).strict();

export const UsersUpdateWithoutReactionsInputSchema: z.ZodType<Prisma.UsersUpdateWithoutReactionsInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  posts: z.lazy(() => PostUpdateManyWithoutAuthorNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UsersUncheckedUpdateWithoutReactionsInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateWithoutReactionsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  posts: z.lazy(() => PostUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const PostCreateWithoutMentionsInputSchema: z.ZodType<Prisma.PostCreateWithoutMentionsInput> = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  author: z.lazy(() => UsersCreateNestedOneWithoutPostsInputSchema),
  reactions: z.lazy(() => ReactionCreateNestedManyWithoutPostInputSchema).optional(),
  parentPost: z.lazy(() => PostCreateNestedOneWithoutChildPostsInputSchema).optional(),
  childPosts: z.lazy(() => PostCreateNestedManyWithoutParentPostInputSchema).optional()
}).strict();

export const PostUncheckedCreateWithoutMentionsInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutMentionsInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  authorId: z.number().int(),
  parentPostId: z.number().int().optional().nullable(),
  reactions: z.lazy(() => ReactionUncheckedCreateNestedManyWithoutPostInputSchema).optional(),
  childPosts: z.lazy(() => PostUncheckedCreateNestedManyWithoutParentPostInputSchema).optional()
}).strict();

export const PostCreateOrConnectWithoutMentionsInputSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutMentionsInput> = z.object({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PostCreateWithoutMentionsInputSchema),z.lazy(() => PostUncheckedCreateWithoutMentionsInputSchema) ]),
}).strict();

export const UsersCreateWithoutMentionsInputSchema: z.ZodType<Prisma.UsersCreateWithoutMentionsInput> = z.object({
  email: z.string(),
  name: z.string().optional().nullable(),
  posts: z.lazy(() => PostCreateNestedManyWithoutAuthorInputSchema).optional(),
  reactions: z.lazy(() => ReactionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UsersUncheckedCreateWithoutMentionsInputSchema: z.ZodType<Prisma.UsersUncheckedCreateWithoutMentionsInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  reactions: z.lazy(() => ReactionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UsersCreateOrConnectWithoutMentionsInputSchema: z.ZodType<Prisma.UsersCreateOrConnectWithoutMentionsInput> = z.object({
  where: z.lazy(() => UsersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersCreateWithoutMentionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutMentionsInputSchema) ]),
}).strict();

export const PostUpsertWithoutMentionsInputSchema: z.ZodType<Prisma.PostUpsertWithoutMentionsInput> = z.object({
  update: z.union([ z.lazy(() => PostUpdateWithoutMentionsInputSchema),z.lazy(() => PostUncheckedUpdateWithoutMentionsInputSchema) ]),
  create: z.union([ z.lazy(() => PostCreateWithoutMentionsInputSchema),z.lazy(() => PostUncheckedCreateWithoutMentionsInputSchema) ]),
  where: z.lazy(() => PostWhereInputSchema).optional()
}).strict();

export const PostUpdateToOneWithWhereWithoutMentionsInputSchema: z.ZodType<Prisma.PostUpdateToOneWithWhereWithoutMentionsInput> = z.object({
  where: z.lazy(() => PostWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PostUpdateWithoutMentionsInputSchema),z.lazy(() => PostUncheckedUpdateWithoutMentionsInputSchema) ]),
}).strict();

export const PostUpdateWithoutMentionsInputSchema: z.ZodType<Prisma.PostUpdateWithoutMentionsInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UsersUpdateOneRequiredWithoutPostsNestedInputSchema).optional(),
  reactions: z.lazy(() => ReactionUpdateManyWithoutPostNestedInputSchema).optional(),
  parentPost: z.lazy(() => PostUpdateOneWithoutChildPostsNestedInputSchema).optional(),
  childPosts: z.lazy(() => PostUpdateManyWithoutParentPostNestedInputSchema).optional()
}).strict();

export const PostUncheckedUpdateWithoutMentionsInputSchema: z.ZodType<Prisma.PostUncheckedUpdateWithoutMentionsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  parentPostId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reactions: z.lazy(() => ReactionUncheckedUpdateManyWithoutPostNestedInputSchema).optional(),
  childPosts: z.lazy(() => PostUncheckedUpdateManyWithoutParentPostNestedInputSchema).optional()
}).strict();

export const UsersUpsertWithoutMentionsInputSchema: z.ZodType<Prisma.UsersUpsertWithoutMentionsInput> = z.object({
  update: z.union([ z.lazy(() => UsersUpdateWithoutMentionsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutMentionsInputSchema) ]),
  create: z.union([ z.lazy(() => UsersCreateWithoutMentionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutMentionsInputSchema) ]),
  where: z.lazy(() => UsersWhereInputSchema).optional()
}).strict();

export const UsersUpdateToOneWithWhereWithoutMentionsInputSchema: z.ZodType<Prisma.UsersUpdateToOneWithWhereWithoutMentionsInput> = z.object({
  where: z.lazy(() => UsersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UsersUpdateWithoutMentionsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutMentionsInputSchema) ]),
}).strict();

export const UsersUpdateWithoutMentionsInputSchema: z.ZodType<Prisma.UsersUpdateWithoutMentionsInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  posts: z.lazy(() => PostUpdateManyWithoutAuthorNestedInputSchema).optional(),
  reactions: z.lazy(() => ReactionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UsersUncheckedUpdateWithoutMentionsInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateWithoutMentionsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  posts: z.lazy(() => PostUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  reactions: z.lazy(() => ReactionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const PostCreateManyAuthorInputSchema: z.ZodType<Prisma.PostCreateManyAuthorInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  parentPostId: z.number().int().optional().nullable()
}).strict();

export const ReactionCreateManyUserInputSchema: z.ZodType<Prisma.ReactionCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  emoji: z.string(),
  postId: z.number().int()
}).strict();

export const MentionCreateManyUserInputSchema: z.ZodType<Prisma.MentionCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  postId: z.number().int()
}).strict();

export const PostUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.PostUpdateWithoutAuthorInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  reactions: z.lazy(() => ReactionUpdateManyWithoutPostNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUpdateManyWithoutPostNestedInputSchema).optional(),
  parentPost: z.lazy(() => PostUpdateOneWithoutChildPostsNestedInputSchema).optional(),
  childPosts: z.lazy(() => PostUpdateManyWithoutParentPostNestedInputSchema).optional()
}).strict();

export const PostUncheckedUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.PostUncheckedUpdateWithoutAuthorInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  parentPostId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reactions: z.lazy(() => ReactionUncheckedUpdateManyWithoutPostNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUncheckedUpdateManyWithoutPostNestedInputSchema).optional(),
  childPosts: z.lazy(() => PostUncheckedUpdateManyWithoutParentPostNestedInputSchema).optional()
}).strict();

export const PostUncheckedUpdateManyWithoutAuthorInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutAuthorInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  parentPostId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ReactionUpdateWithoutUserInputSchema: z.ZodType<Prisma.ReactionUpdateWithoutUserInput> = z.object({
  emoji: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  post: z.lazy(() => PostUpdateOneRequiredWithoutReactionsNestedInputSchema).optional()
}).strict();

export const ReactionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ReactionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emoji: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReactionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.ReactionUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emoji: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MentionUpdateWithoutUserInputSchema: z.ZodType<Prisma.MentionUpdateWithoutUserInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  post: z.lazy(() => PostUpdateOneRequiredWithoutMentionsNestedInputSchema).optional()
}).strict();

export const MentionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.MentionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MentionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.MentionUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReactionCreateManyPostInputSchema: z.ZodType<Prisma.ReactionCreateManyPostInput> = z.object({
  id: z.number().int().optional(),
  emoji: z.string(),
  userId: z.number().int()
}).strict();

export const MentionCreateManyPostInputSchema: z.ZodType<Prisma.MentionCreateManyPostInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  userId: z.number().int()
}).strict();

export const PostCreateManyParentPostInputSchema: z.ZodType<Prisma.PostCreateManyParentPostInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
  authorId: z.number().int()
}).strict();

export const ReactionUpdateWithoutPostInputSchema: z.ZodType<Prisma.ReactionUpdateWithoutPostInput> = z.object({
  emoji: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UsersUpdateOneRequiredWithoutReactionsNestedInputSchema).optional()
}).strict();

export const ReactionUncheckedUpdateWithoutPostInputSchema: z.ZodType<Prisma.ReactionUncheckedUpdateWithoutPostInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emoji: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReactionUncheckedUpdateManyWithoutPostInputSchema: z.ZodType<Prisma.ReactionUncheckedUpdateManyWithoutPostInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emoji: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MentionUpdateWithoutPostInputSchema: z.ZodType<Prisma.MentionUpdateWithoutPostInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UsersUpdateOneRequiredWithoutMentionsNestedInputSchema).optional()
}).strict();

export const MentionUncheckedUpdateWithoutPostInputSchema: z.ZodType<Prisma.MentionUncheckedUpdateWithoutPostInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MentionUncheckedUpdateManyWithoutPostInputSchema: z.ZodType<Prisma.MentionUncheckedUpdateManyWithoutPostInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PostUpdateWithoutParentPostInputSchema: z.ZodType<Prisma.PostUpdateWithoutParentPostInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UsersUpdateOneRequiredWithoutPostsNestedInputSchema).optional(),
  reactions: z.lazy(() => ReactionUpdateManyWithoutPostNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUpdateManyWithoutPostNestedInputSchema).optional(),
  childPosts: z.lazy(() => PostUpdateManyWithoutParentPostNestedInputSchema).optional()
}).strict();

export const PostUncheckedUpdateWithoutParentPostInputSchema: z.ZodType<Prisma.PostUncheckedUpdateWithoutParentPostInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  reactions: z.lazy(() => ReactionUncheckedUpdateManyWithoutPostNestedInputSchema).optional(),
  mentions: z.lazy(() => MentionUncheckedUpdateManyWithoutPostNestedInputSchema).optional(),
  childPosts: z.lazy(() => PostUncheckedUpdateManyWithoutParentPostNestedInputSchema).optional()
}).strict();

export const PostUncheckedUpdateManyWithoutParentPostInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutParentPostInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UsersFindFirstArgsSchema: z.ZodType<Prisma.UsersFindFirstArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereInputSchema.optional(),
  orderBy: z.union([ UsersOrderByWithRelationInputSchema.array(),UsersOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersScalarFieldEnumSchema,UsersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UsersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UsersFindFirstOrThrowArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereInputSchema.optional(),
  orderBy: z.union([ UsersOrderByWithRelationInputSchema.array(),UsersOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersScalarFieldEnumSchema,UsersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UsersFindManyArgsSchema: z.ZodType<Prisma.UsersFindManyArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereInputSchema.optional(),
  orderBy: z.union([ UsersOrderByWithRelationInputSchema.array(),UsersOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersScalarFieldEnumSchema,UsersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UsersAggregateArgsSchema: z.ZodType<Prisma.UsersAggregateArgs> = z.object({
  where: UsersWhereInputSchema.optional(),
  orderBy: z.union([ UsersOrderByWithRelationInputSchema.array(),UsersOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UsersGroupByArgsSchema: z.ZodType<Prisma.UsersGroupByArgs> = z.object({
  where: UsersWhereInputSchema.optional(),
  orderBy: z.union([ UsersOrderByWithAggregationInputSchema.array(),UsersOrderByWithAggregationInputSchema ]).optional(),
  by: UsersScalarFieldEnumSchema.array(),
  having: UsersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UsersFindUniqueArgsSchema: z.ZodType<Prisma.UsersFindUniqueArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereUniqueInputSchema,
}).strict() ;

export const UsersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UsersFindUniqueOrThrowArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereUniqueInputSchema,
}).strict() ;

export const PostFindFirstArgsSchema: z.ZodType<Prisma.PostFindFirstArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([ PostOrderByWithRelationInputSchema.array(),PostOrderByWithRelationInputSchema ]).optional(),
  cursor: PostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PostScalarFieldEnumSchema,PostScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PostFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PostFindFirstOrThrowArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([ PostOrderByWithRelationInputSchema.array(),PostOrderByWithRelationInputSchema ]).optional(),
  cursor: PostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PostScalarFieldEnumSchema,PostScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PostFindManyArgsSchema: z.ZodType<Prisma.PostFindManyArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([ PostOrderByWithRelationInputSchema.array(),PostOrderByWithRelationInputSchema ]).optional(),
  cursor: PostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PostScalarFieldEnumSchema,PostScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PostAggregateArgsSchema: z.ZodType<Prisma.PostAggregateArgs> = z.object({
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([ PostOrderByWithRelationInputSchema.array(),PostOrderByWithRelationInputSchema ]).optional(),
  cursor: PostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PostGroupByArgsSchema: z.ZodType<Prisma.PostGroupByArgs> = z.object({
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([ PostOrderByWithAggregationInputSchema.array(),PostOrderByWithAggregationInputSchema ]).optional(),
  by: PostScalarFieldEnumSchema.array(),
  having: PostScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PostFindUniqueArgsSchema: z.ZodType<Prisma.PostFindUniqueArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereUniqueInputSchema,
}).strict() ;

export const PostFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PostFindUniqueOrThrowArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereUniqueInputSchema,
}).strict() ;

export const ReactionFindFirstArgsSchema: z.ZodType<Prisma.ReactionFindFirstArgs> = z.object({
  select: ReactionSelectSchema.optional(),
  include: ReactionIncludeSchema.optional(),
  where: ReactionWhereInputSchema.optional(),
  orderBy: z.union([ ReactionOrderByWithRelationInputSchema.array(),ReactionOrderByWithRelationInputSchema ]).optional(),
  cursor: ReactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReactionScalarFieldEnumSchema,ReactionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReactionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ReactionFindFirstOrThrowArgs> = z.object({
  select: ReactionSelectSchema.optional(),
  include: ReactionIncludeSchema.optional(),
  where: ReactionWhereInputSchema.optional(),
  orderBy: z.union([ ReactionOrderByWithRelationInputSchema.array(),ReactionOrderByWithRelationInputSchema ]).optional(),
  cursor: ReactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReactionScalarFieldEnumSchema,ReactionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReactionFindManyArgsSchema: z.ZodType<Prisma.ReactionFindManyArgs> = z.object({
  select: ReactionSelectSchema.optional(),
  include: ReactionIncludeSchema.optional(),
  where: ReactionWhereInputSchema.optional(),
  orderBy: z.union([ ReactionOrderByWithRelationInputSchema.array(),ReactionOrderByWithRelationInputSchema ]).optional(),
  cursor: ReactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReactionScalarFieldEnumSchema,ReactionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReactionAggregateArgsSchema: z.ZodType<Prisma.ReactionAggregateArgs> = z.object({
  where: ReactionWhereInputSchema.optional(),
  orderBy: z.union([ ReactionOrderByWithRelationInputSchema.array(),ReactionOrderByWithRelationInputSchema ]).optional(),
  cursor: ReactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReactionGroupByArgsSchema: z.ZodType<Prisma.ReactionGroupByArgs> = z.object({
  where: ReactionWhereInputSchema.optional(),
  orderBy: z.union([ ReactionOrderByWithAggregationInputSchema.array(),ReactionOrderByWithAggregationInputSchema ]).optional(),
  by: ReactionScalarFieldEnumSchema.array(),
  having: ReactionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReactionFindUniqueArgsSchema: z.ZodType<Prisma.ReactionFindUniqueArgs> = z.object({
  select: ReactionSelectSchema.optional(),
  include: ReactionIncludeSchema.optional(),
  where: ReactionWhereUniqueInputSchema,
}).strict() ;

export const ReactionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ReactionFindUniqueOrThrowArgs> = z.object({
  select: ReactionSelectSchema.optional(),
  include: ReactionIncludeSchema.optional(),
  where: ReactionWhereUniqueInputSchema,
}).strict() ;

export const MentionFindFirstArgsSchema: z.ZodType<Prisma.MentionFindFirstArgs> = z.object({
  select: MentionSelectSchema.optional(),
  include: MentionIncludeSchema.optional(),
  where: MentionWhereInputSchema.optional(),
  orderBy: z.union([ MentionOrderByWithRelationInputSchema.array(),MentionOrderByWithRelationInputSchema ]).optional(),
  cursor: MentionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MentionScalarFieldEnumSchema,MentionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MentionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MentionFindFirstOrThrowArgs> = z.object({
  select: MentionSelectSchema.optional(),
  include: MentionIncludeSchema.optional(),
  where: MentionWhereInputSchema.optional(),
  orderBy: z.union([ MentionOrderByWithRelationInputSchema.array(),MentionOrderByWithRelationInputSchema ]).optional(),
  cursor: MentionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MentionScalarFieldEnumSchema,MentionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MentionFindManyArgsSchema: z.ZodType<Prisma.MentionFindManyArgs> = z.object({
  select: MentionSelectSchema.optional(),
  include: MentionIncludeSchema.optional(),
  where: MentionWhereInputSchema.optional(),
  orderBy: z.union([ MentionOrderByWithRelationInputSchema.array(),MentionOrderByWithRelationInputSchema ]).optional(),
  cursor: MentionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MentionScalarFieldEnumSchema,MentionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MentionAggregateArgsSchema: z.ZodType<Prisma.MentionAggregateArgs> = z.object({
  where: MentionWhereInputSchema.optional(),
  orderBy: z.union([ MentionOrderByWithRelationInputSchema.array(),MentionOrderByWithRelationInputSchema ]).optional(),
  cursor: MentionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MentionGroupByArgsSchema: z.ZodType<Prisma.MentionGroupByArgs> = z.object({
  where: MentionWhereInputSchema.optional(),
  orderBy: z.union([ MentionOrderByWithAggregationInputSchema.array(),MentionOrderByWithAggregationInputSchema ]).optional(),
  by: MentionScalarFieldEnumSchema.array(),
  having: MentionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MentionFindUniqueArgsSchema: z.ZodType<Prisma.MentionFindUniqueArgs> = z.object({
  select: MentionSelectSchema.optional(),
  include: MentionIncludeSchema.optional(),
  where: MentionWhereUniqueInputSchema,
}).strict() ;

export const MentionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MentionFindUniqueOrThrowArgs> = z.object({
  select: MentionSelectSchema.optional(),
  include: MentionIncludeSchema.optional(),
  where: MentionWhereUniqueInputSchema,
}).strict() ;

export const UsersCreateArgsSchema: z.ZodType<Prisma.UsersCreateArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  data: z.union([ UsersCreateInputSchema,UsersUncheckedCreateInputSchema ]),
}).strict() ;

export const UsersUpsertArgsSchema: z.ZodType<Prisma.UsersUpsertArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereUniqueInputSchema,
  create: z.union([ UsersCreateInputSchema,UsersUncheckedCreateInputSchema ]),
  update: z.union([ UsersUpdateInputSchema,UsersUncheckedUpdateInputSchema ]),
}).strict() ;

export const UsersCreateManyArgsSchema: z.ZodType<Prisma.UsersCreateManyArgs> = z.object({
  data: z.union([ UsersCreateManyInputSchema,UsersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UsersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UsersCreateManyAndReturnArgs> = z.object({
  data: z.union([ UsersCreateManyInputSchema,UsersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UsersDeleteArgsSchema: z.ZodType<Prisma.UsersDeleteArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereUniqueInputSchema,
}).strict() ;

export const UsersUpdateArgsSchema: z.ZodType<Prisma.UsersUpdateArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  data: z.union([ UsersUpdateInputSchema,UsersUncheckedUpdateInputSchema ]),
  where: UsersWhereUniqueInputSchema,
}).strict() ;

export const UsersUpdateManyArgsSchema: z.ZodType<Prisma.UsersUpdateManyArgs> = z.object({
  data: z.union([ UsersUpdateManyMutationInputSchema,UsersUncheckedUpdateManyInputSchema ]),
  where: UsersWhereInputSchema.optional(),
}).strict() ;

export const UsersDeleteManyArgsSchema: z.ZodType<Prisma.UsersDeleteManyArgs> = z.object({
  where: UsersWhereInputSchema.optional(),
}).strict() ;

export const PostCreateArgsSchema: z.ZodType<Prisma.PostCreateArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  data: z.union([ PostCreateInputSchema,PostUncheckedCreateInputSchema ]),
}).strict() ;

export const PostUpsertArgsSchema: z.ZodType<Prisma.PostUpsertArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereUniqueInputSchema,
  create: z.union([ PostCreateInputSchema,PostUncheckedCreateInputSchema ]),
  update: z.union([ PostUpdateInputSchema,PostUncheckedUpdateInputSchema ]),
}).strict() ;

export const PostCreateManyArgsSchema: z.ZodType<Prisma.PostCreateManyArgs> = z.object({
  data: z.union([ PostCreateManyInputSchema,PostCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PostCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PostCreateManyAndReturnArgs> = z.object({
  data: z.union([ PostCreateManyInputSchema,PostCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PostDeleteArgsSchema: z.ZodType<Prisma.PostDeleteArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereUniqueInputSchema,
}).strict() ;

export const PostUpdateArgsSchema: z.ZodType<Prisma.PostUpdateArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  data: z.union([ PostUpdateInputSchema,PostUncheckedUpdateInputSchema ]),
  where: PostWhereUniqueInputSchema,
}).strict() ;

export const PostUpdateManyArgsSchema: z.ZodType<Prisma.PostUpdateManyArgs> = z.object({
  data: z.union([ PostUpdateManyMutationInputSchema,PostUncheckedUpdateManyInputSchema ]),
  where: PostWhereInputSchema.optional(),
}).strict() ;

export const PostDeleteManyArgsSchema: z.ZodType<Prisma.PostDeleteManyArgs> = z.object({
  where: PostWhereInputSchema.optional(),
}).strict() ;

export const ReactionCreateArgsSchema: z.ZodType<Prisma.ReactionCreateArgs> = z.object({
  select: ReactionSelectSchema.optional(),
  include: ReactionIncludeSchema.optional(),
  data: z.union([ ReactionCreateInputSchema,ReactionUncheckedCreateInputSchema ]),
}).strict() ;

export const ReactionUpsertArgsSchema: z.ZodType<Prisma.ReactionUpsertArgs> = z.object({
  select: ReactionSelectSchema.optional(),
  include: ReactionIncludeSchema.optional(),
  where: ReactionWhereUniqueInputSchema,
  create: z.union([ ReactionCreateInputSchema,ReactionUncheckedCreateInputSchema ]),
  update: z.union([ ReactionUpdateInputSchema,ReactionUncheckedUpdateInputSchema ]),
}).strict() ;

export const ReactionCreateManyArgsSchema: z.ZodType<Prisma.ReactionCreateManyArgs> = z.object({
  data: z.union([ ReactionCreateManyInputSchema,ReactionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ReactionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ReactionCreateManyAndReturnArgs> = z.object({
  data: z.union([ ReactionCreateManyInputSchema,ReactionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ReactionDeleteArgsSchema: z.ZodType<Prisma.ReactionDeleteArgs> = z.object({
  select: ReactionSelectSchema.optional(),
  include: ReactionIncludeSchema.optional(),
  where: ReactionWhereUniqueInputSchema,
}).strict() ;

export const ReactionUpdateArgsSchema: z.ZodType<Prisma.ReactionUpdateArgs> = z.object({
  select: ReactionSelectSchema.optional(),
  include: ReactionIncludeSchema.optional(),
  data: z.union([ ReactionUpdateInputSchema,ReactionUncheckedUpdateInputSchema ]),
  where: ReactionWhereUniqueInputSchema,
}).strict() ;

export const ReactionUpdateManyArgsSchema: z.ZodType<Prisma.ReactionUpdateManyArgs> = z.object({
  data: z.union([ ReactionUpdateManyMutationInputSchema,ReactionUncheckedUpdateManyInputSchema ]),
  where: ReactionWhereInputSchema.optional(),
}).strict() ;

export const ReactionDeleteManyArgsSchema: z.ZodType<Prisma.ReactionDeleteManyArgs> = z.object({
  where: ReactionWhereInputSchema.optional(),
}).strict() ;

export const MentionCreateArgsSchema: z.ZodType<Prisma.MentionCreateArgs> = z.object({
  select: MentionSelectSchema.optional(),
  include: MentionIncludeSchema.optional(),
  data: z.union([ MentionCreateInputSchema,MentionUncheckedCreateInputSchema ]),
}).strict() ;

export const MentionUpsertArgsSchema: z.ZodType<Prisma.MentionUpsertArgs> = z.object({
  select: MentionSelectSchema.optional(),
  include: MentionIncludeSchema.optional(),
  where: MentionWhereUniqueInputSchema,
  create: z.union([ MentionCreateInputSchema,MentionUncheckedCreateInputSchema ]),
  update: z.union([ MentionUpdateInputSchema,MentionUncheckedUpdateInputSchema ]),
}).strict() ;

export const MentionCreateManyArgsSchema: z.ZodType<Prisma.MentionCreateManyArgs> = z.object({
  data: z.union([ MentionCreateManyInputSchema,MentionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const MentionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MentionCreateManyAndReturnArgs> = z.object({
  data: z.union([ MentionCreateManyInputSchema,MentionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const MentionDeleteArgsSchema: z.ZodType<Prisma.MentionDeleteArgs> = z.object({
  select: MentionSelectSchema.optional(),
  include: MentionIncludeSchema.optional(),
  where: MentionWhereUniqueInputSchema,
}).strict() ;

export const MentionUpdateArgsSchema: z.ZodType<Prisma.MentionUpdateArgs> = z.object({
  select: MentionSelectSchema.optional(),
  include: MentionIncludeSchema.optional(),
  data: z.union([ MentionUpdateInputSchema,MentionUncheckedUpdateInputSchema ]),
  where: MentionWhereUniqueInputSchema,
}).strict() ;

export const MentionUpdateManyArgsSchema: z.ZodType<Prisma.MentionUpdateManyArgs> = z.object({
  data: z.union([ MentionUpdateManyMutationInputSchema,MentionUncheckedUpdateManyInputSchema ]),
  where: MentionWhereInputSchema.optional(),
}).strict() ;

export const MentionDeleteManyArgsSchema: z.ZodType<Prisma.MentionDeleteManyArgs> = z.object({
  where: MentionWhereInputSchema.optional(),
}).strict() ;