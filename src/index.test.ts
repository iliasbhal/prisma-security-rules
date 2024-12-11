import { withSecurityRules } from './index';

describe('Example', () => {

  it('should inject appropriate query arguments', async () => {
    const client = createMockPrismaClient()

    const context = {
      user: {
        id: '123'
      }
    }

    const mockRules = {
      user: {
        where: async (ctx: any) => {
          return {
            id: ctx.user.id
          }
        }
      }
    }

    await withSecurityRules(client, mockRules, context).user.findMany({
      where: {
        active: true
      }
    });

    expect(client.user.findMany).toHaveBeenCalledWith({
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
});


const createMockPrismaClient = () => {
  return {
    user: {
      findMany: jest.fn().mockImplementation((...args) => {

      }),
    }
  }
}