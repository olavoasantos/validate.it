import inRule from './index';

describe('in rule', () => {
  const oneOf = ['VALUE 1', 'VALUE 2'];

  /** @test */
  it.only('should return true if a value is included in list', () => {
    expect(inRule.check({ value: 'VALUE 1' }, ...oneOf)).toBeTruthy();
  });

  /** @test */
  it.only('should return false if a value is not included in list', () => {
    expect(inRule.check({ value: 'NOT INCLUDED' }, ...oneOf)).toBeFalsy();
  });
});
