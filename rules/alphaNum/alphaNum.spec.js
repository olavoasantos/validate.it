import alphaNum from './index';

describe('alphaNum rule', () => {
  /** @test */
  it('should return true when a string is composed by alpha characters', () => {
    expect(alphaNum.check('abc')).toBeTruthy();
    expect(alphaNum.check('ABC')).toBeTruthy();
  });

  /** @test */
  it('should return true when a string is composed by characters and spaces', () => {
    expect(alphaNum.check('abc EFG')).toBeTruthy();
  });

  /** @test */
  it('should return true when a string is composed by numeric characters', () => {
    expect(alphaNum.check('123')).toBeTruthy();
    expect(alphaNum.check('abc 123')).toBeTruthy();
  });

  /** @test */
  it('should return false when a string is composed by alpha and dash characters', () => {
    expect(alphaNum.check('abc-EFG')).toBeFalsy();
  });

  /** @test */
  it('should return false when a string is composed by alpha and underscore characters', () => {
    expect(alphaNum.check('abc_EFG')).toBeFalsy();
  });

  /** @test */
  it('should return false when a string is composed by other characters not alpha', () => {
    expect(alphaNum.check('aas#')).toBeFalsy();
    expect(alphaNum.check('aas@')).toBeFalsy();
  });
});
