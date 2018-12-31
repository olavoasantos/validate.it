import oneOf from './index';

describe('in rule', () => {
  const list = ['VALUE 1', 'VALUE 2'];

  /** @test */
  it('should return true if a value is included in list', () => {
    expect(oneOf.check({ value: 'VALUE 1', args: [...list] })).toBeTruthy();
  });

  /** @test */
  it('should return false if a value is not included in list', () => {
    expect(oneOf.check({ value: 'NOT INCLUDED', args: [...list] })).toBeFalsy();
  });
});
