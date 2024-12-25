export const PrismaSecureActions = [
  // Read
  'findMany',
  'findUnique',
  'findFirst',
  'count',
  // 'groupBy',
  // 'aggregate',

  // Write
  'create',

  'update',

  // 'upsert',
  // For `upsert` we need to make sure that the 
  // query won't create a new entry in the database
  // The schema should enforce a unique constraint
  // to ensure that no matter what .where is provided
  // no new row will be created 

  // 'delete',
] as const;