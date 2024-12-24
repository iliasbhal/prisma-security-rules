import { toAwaitedRecord } from './utils/toAwaitedRecord';
import { PrismaSecureActions } from './lib/_common'

export const withSecurityRules = <Client extends object>(client: Client, rules: Record<string, any>, ctx: Parameters<typeof createQueryGuards>[0]): Client => {
  const guards = createQueryGuards(ctx, rules);

  return new Proxy(client, {
    get(target, modelName) {

      // @ts-ignore
      if (typeof target[modelName] === 'object') {

        // @ts-ignore
        return new Proxy(target[modelName], {
          get(target, queryName) {
            if (queryName in guards) {
              return async (queryArgs: any) => {

                // @ts-ignore
                const sanitizeQueryArgs = guards[queryName];
                const sanitizedArgs = await sanitizeQueryArgs({
                  name: modelName,
                  args: queryArgs,
                });

                // @ts-ignore
                const modelClient = client[modelName];

                // @ts-ignore
                const result = await modelClient[queryName](sanitizedArgs);
                return result;
              }
            }

            throw new Error(`Authz Extension Error: Unsupported`);
          }
        })
      }

      throw new Error(`Authz Extension Error: Unsupported`);
    }
  })
}

export const createQueryGuards = <ModelName extends string>(ctx: any, rules: Record<ModelName, any>) => {

  const readQueryModifier = async (input) => {
    const modelRules = rules[input.name];

    const additonalRules = await toAwaitedRecord({
      where: modelRules?.read?.(ctx),
    })

    return {
      ...input.args,
      where: {
        AND: [
          additonalRules.where,
          input.args.where,
        ],
      },
    };
  };

  const guards: Record<typeof PrismaSecureActions[number], any> = {
    findFirst: readQueryModifier,
    findUnique: readQueryModifier,
    findMany: readQueryModifier,
    count: readQueryModifier,
  }

  return guards;
}
