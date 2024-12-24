import { PrismaSecureActions } from '../src/lib/_common';
import { withSecurityRules } from '../src/index';
import { write } from 'fs-extra';


type Actions = typeof PrismaSecureActions[number]
const readActions: Actions[] = ['findMany', 'findUnique', 'findFirst', 'count'];
const writeActions: Actions[] = ['create'];

describe('General', () => {

  readActions.forEach(action => {
    it(`should harden .where argument for ${action} queries`, async () => {
      const client = createMockPrismaClient();

      const context = {
        user: {
          id: '123'
        }
      }

      const rules = {
        user: {
          read: async (ctx: typeof context, where) => {
            return {
              id: ctx.user.id
            }
          },
        }
      }

      await withSecurityRules(client, rules, context).user[action]({
        where: {
          active: true
        }
      });

      expect(client.user[action]).toHaveBeenCalledWith({
        where: {
          AND: [
            {
              id: '123'
            },
            {
              active: true
            }
          ]
        }
      })

    })
  })

  readActions.forEach(action => {

    it(`should provide original query where to read rules for ${action} query`, async () => {

      const client = createMockPrismaClient();

      const context = {
        user: {
          id: '123'
        }
      }

      const queryArg = {
        where: {
          active: true
        }
      };

      const rules = {
        user: {
          read: jest.fn().mockImplementation(async (ctx: typeof context, where) => {
            return {
              id: ctx.user.id
            }
          }),
        }
      }

      await withSecurityRules(client, rules, context).user[action](queryArg);

      expect(rules.user.read).toHaveBeenCalledTimes(1);
      expect(rules.user.read).toHaveBeenCalledWith(context, queryArg.where);
    })
  })

  readActions.forEach(action => {
    it(`throwing within rule prevents the ${action} query altogether`, async () => {
      const client = createMockPrismaClient();

      const context = {
        user: {
          id: '123'
        }
      }

      const rules = {
        user: {
          read: async (ctx: typeof context, where) => {
            throw new Error('HAHAHAH Not Allowed');
          },
        }
      }

      const secureClient = withSecurityRules(client, rules, context);
      await expect(() => secureClient.user[action]({ where: { userId: '123' } })).rejects.toThrow('HAHAHAH Not Allowed')
      expect(client.user[action]).not.toHaveBeenCalled();
    })
  })


  it('should harden .data argument for create queries', async () => {
    const client = createMockPrismaClient();

    const context = {
      user: {
        id: '123'
      }
    }

    const rules = {
      user: {
        write: async (ctx: typeof context, data) => {
          return {
            created_by: ctx.user.id,
          }
        }
      }
    }

    await withSecurityRules(client, rules, context).user.create({
      data: {
        id: 99999,
      }
    });

    expect(client.user.create).toHaveBeenCalledWith({
      data: {
        created_by: '123',
        id: 99999,
      }
    })
  })

  it('should provide original query data to write rules for create query', async () => {
    const client = createMockPrismaClient();

    const context = {
      user: {
        id: '123'
      }
    }

    const createArg = {
      data: {
        id: 99999,
      }
    };

    const rules = {
      user: {
        write: jest.fn().mockImplementation(async (ctx: typeof context, data) => {
          return {
            created_by: ctx.user.id,
          }
        })
      }
    }

    await withSecurityRules(client, rules, context).user.create(createArg);

    expect(rules.user.write).toHaveBeenCalledTimes(1);
    expect(rules.user.write).toHaveBeenCalledWith(context, createArg.data);
  });



  it('should fail if no rules are provided for corresponding model', async () => {
    const client = createMockPrismaClient();

    const context = {
      user: {
        id: '123'
      }
    }

    const secureClient = withSecurityRules(client, {}, context);
    await expect(() => secureClient.user.findMany({ where: { userId: '123' } })).rejects.toThrow('No read rules defined')
    await expect(() => secureClient.user.create({ data: { userId: '123' } })).rejects.toThrow('No write rules defined')
  })

  it(`throwing within write rule prevents create altogether`, async () => {
    const client = createMockPrismaClient();

    const context = {
      user: {
        id: '123'
      }
    }

    const rules = {
      user: {
        write: async (ctx: typeof context, where) => {
          throw new Error('HAHAHAH Not Allowed');
        },
      }
    }

    const secureClient = withSecurityRules(client, rules, context);
    await expect(() => secureClient.user.create({ where: { userId: '123' } })).rejects.toThrow('HAHAHAH Not Allowed')
    expect(client.user.create).not.toHaveBeenCalled();
  })
});

const createMockPrismaClient = () => {
  return {
    user: {
      findMany: jest.fn().mockImplementation((...args) => { }),
      findUnique: jest.fn().mockImplementation((...args) => { }),
      update: jest.fn().mockImplementation((...args) => { }),
      create: jest.fn().mockImplementation((...args) => { }),
      delete: jest.fn().mockImplementation((...args) => { }),
      upsert: jest.fn().mockImplementation((...args) => { }),
      count: jest.fn().mockImplementation((...args) => { }),
      aggregate: jest.fn().mockImplementation((...args) => { }),
      groupBy: jest.fn().mockImplementation((...args) => { }),
      findFirst: jest.fn().mockImplementation((...args) => { }),
    }
  }
}