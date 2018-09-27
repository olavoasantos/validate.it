import alphaDash from './index';

describe('alphaDash rule', () => {
  /** @test */
  it('should return true when a string is composed by alpha characters', () => {
    expect(alphaDash.check('abc')).toBeTruthy();
    expect(alphaDash.check('ABC')).toBeTruthy();
  });

  /** @test */
  it('should return true when a string is composed by characters and spaces', () => {
    expect(alphaDash.check('abc EFG')).toBeTruthy();
  });

  /** @test */
  it('should return true when a string is composed by alpha and dash characters', () => {
    expect(alphaDash.check('abc-EFG')).toBeTruthy();
  });

  /** @test */
  it('should return true when a string is composed by alpha and underscore characters', () => {
    expect(alphaDash.check('abc_EFG')).toBeTruthy();
  });

  /** @test */
  it('should return true when a string is composed by numeric characters', () => {
    expect(alphaDash.check('123')).toBeTruthy();
    expect(alphaDash.check('abc-123')).toBeTruthy();
    expect(alphaDash.check('abc_123')).toBeTruthy();
    expect(alphaDash.check('abc 123')).toBeTruthy();
  });

  /** @test */
  it('should return false when a string is composed by other characters not alpha', () => {
    expect(alphaDash.check('aas#')).toBeFalsy();
    expect(alphaDash.check('aas@')).toBeFalsy();
  });
});
