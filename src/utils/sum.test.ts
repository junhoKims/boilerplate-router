import sum from './sum';

describe('sum', () => {
  test('1+1=2', () => {
    expect(sum(1,1)).toBe(2);
  })

  test('1+2=3', () => {
    expect(sum(1,2)).toBe(2);
  })
})