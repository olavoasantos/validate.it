import alpha from './index';

describe('alpha rule', () => {
  /** @test */
  it('should return true when a string is only composed by alpha characters', () => {
    expect(alpha.check({ value: 'abc' })).toBeTruthy();
    expect(alpha.check({ value: 'ABC' })).toBeTruthy();
  });
  /** @test */
  it('should return true when a string is only composed by alpha characters with spaces', () => {
    expect(alpha.check({ value: 'abc EFG' })).toBeTruthy();
  });

  /** @test */
  it('should return false when a string is composed by numeric characters', () => {
    expect(alpha.check({ value: '123' })).toBeFalsy();
    expect(alpha.check({ value: 'abc 123' })).toBeFalsy();
  });

  /** @test */
  it('should return false when a string is composed by other characters not alpha', () => {
    expect(alpha.check({ value: 'a-' })).toBeFalsy();
    expect(alpha.check({ value: 'aas_' })).toBeFalsy();
    expect(alpha.check({ value: 'aas#' })).toBeFalsy();
    expect(alpha.check({ value: 'aas@' })).toBeFalsy();
  });
});
