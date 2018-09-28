import alphaNum from './index';

describe('alphaNum rule', () => {
  /** @test */
  it('should return true when a string is composed by alpha characters', () => {
    expect(alphaNum.check({ value: 'abc' })).toBeTruthy();
    expect(alphaNum.check({ value: 'ABC' })).toBeTruthy();
  });

  /** @test */
  it('should return true when a string is composed by characters and spaces', () => {
    expect(alphaNum.check({ value: 'abc EFG' })).toBeTruthy();
  });

  /** @test */
  it('should return true when a string is composed by numeric characters', () => {
    expect(alphaNum.check({ value: '123' })).toBeTruthy();
    expect(alphaNum.check({ value: 'abc 123' })).toBeTruthy();
  });

  /** @test */
  it('should return false when a string is composed by alpha and dash characters', () => {
    expect(alphaNum.check({ value: 'abc-EFG' })).toBeFalsy();
  });

  /** @test */
  it('should return false when a string is composed by alpha and underscore characters', () => {
    expect(alphaNum.check({ value: 'abc_EFG' })).toBeFalsy();
  });

  /** @test */
  it('should return false when a string is composed by other characters not alpha', () => {
    expect(alphaNum.check({ value: 'aas#' })).toBeFalsy();
    expect(alphaNum.check({ value: 'aas@' })).toBeFalsy();
  });
});
