import { factorizePrismaArgs } from './factorizePrismaArgs';

describe('factorizePrismaArgs', () => {
  it('should simplify AND queries', () => {
    const queryArgs = {
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
    }

    const factorized = factorizePrismaArgs(queryArgs);

    expect(factorized).toEqual({
      where: {
        id: '123',
        active: true
      }
    })
  })
})