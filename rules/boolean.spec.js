import boolean from './boolean';

describe('boolean rule', () => {
  /** @test */
  it('should return true if value is a boolean', () => {
    expect(boolean.check(true)).toBeTruthy();
    expect(boolean.check(false)).toBeTruthy();
  });

  /** @test */
  it('should return false if value is not a boolean', () => {
    expect(boolean.check(0)).toBeFalsy();
    expect(boolean.check([])).toBeFalsy();
    expect(boolean.check({})).toBeFalsy();
    expect(boolean.check(null)).toBeFalsy();
    expect(boolean.check(undefined)).toBeFalsy();
    expect(boolean.check('NOT A BOOLEAN')).toBeFalsy();
  });
});
