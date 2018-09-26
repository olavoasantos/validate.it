import different from './different';

describe('different rule', () => {
  /** @test */
  it('should return true if the values are different', () => {
    const value = 'VALUE';
    const other = 'DIFFERENT VALUE';

    expect(different.check(value, { other })).toBeTruthy();
  });

  /** @test */
  it('should return false if the values are equal', () => {
    const value = 'SAME VALUE';
    const other = 'SAME VALUE';

    expect(different.check(value, { other })).toBeFalsy();
  });
});
