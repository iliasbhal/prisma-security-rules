import { toAwaitedRecord } from './utils/toAwaitedRecord';

export const shield = <Client extends object>(client: Client, rules: Record<keyof Client, any>, ctx: Parameters<typeof createQueryGuards>[0]): Client => {
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

                console.log('sanitizedArgs', sanitizedArgs)
                // @ts-ignore
                const result = await modelClient.findMany(sanitizedArgs);
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
  return {
    findMany: async (input) => {
      const modelRules = rules[input.name];

      const additonalRules = await toAwaitedRecord({
        where: modelRules?.where?.(ctx),
      })

      console.log('modelRules', modelRules)

      console.log('input', input);
      console.log('additonalRules', additonalRules);
      return {
        ...input.args,
        where: {
          AND: [
            additonalRules.where,
            input.args.where,
          ],
        },
      };
    }
  }
}
