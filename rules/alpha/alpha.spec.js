import alpha from './index';

describe('alpha rule', () => {
  /** @test */
  it('should return true when a string is only composed by alpha characters', () => {
    expect(alpha.check('abc')).toBeTruthy();
    expect(alpha.check('ABC')).toBeTruthy();
  });
  /** @test */
  it('should return true when a string is only composed by alpha characters with spaces', () => {
    expect(alpha.check('abc EFG')).toBeTruthy();
  });

  /** @test */
  it('should return false when a string is composed by numeric characters', () => {
    expect(alpha.check('123')).toBeFalsy();
    expect(alpha.check('abc 123')).toBeFalsy();
  });

  /** @test */
  it('should return false when a string is composed by other characters not alpha', () => {
    expect(alpha.check('a-')).toBeFalsy();
    expect(alpha.check('aas_')).toBeFalsy();
    expect(alpha.check('aas#')).toBeFalsy();
    expect(alpha.check('aas@')).toBeFalsy();
  });
});
