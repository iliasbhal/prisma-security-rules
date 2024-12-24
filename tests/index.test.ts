import { PrismaSecureActions } from '../src/lib/_common';
import { withSecurityRules } from '../src/index';

describe('General', () => {

  Object.values(PrismaSecureActions).forEach(action => {
    it(`should harden .where argument for ${action} queries`, async () => {
      const client = createMockPrismaClient();

      const context = {
        user: {
          id: '123'
        }
      }

      const rules = {
        user: {
          read: async (ctx: typeof context) => {
            return {
              id: ctx.user.id
            }
          }
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