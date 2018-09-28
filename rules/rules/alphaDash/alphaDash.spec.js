import alphaDash from './index';

describe('alphaDash rule', () => {
  /** @test */
  it('should return true when a string is composed by alpha characters', () => {
    expect(alphaDash.check({ value: 'abc' })).toBeTruthy();
    expect(alphaDash.check({ value: 'ABC' })).toBeTruthy();
  });

  /** @test */
  it('should return true when a string is composed by alpha and dash characters', () => {
    expect(alphaDash.check({ value: 'abc-EFG' })).toBeTruthy();
  });

  /** @test */
  it('should return true when a string is composed by alpha and underscore characters', () => {
    expect(alphaDash.check({ value: 'abc_EFG' })).toBeTruthy();
  });

  /** @test */
  it('should return true when a string is composed by numeric characters', () => {
    expect(alphaDash.check({ value: '123' })).toBeTruthy();
    expect(alphaDash.check({ value: 'abc-123' })).toBeTruthy();
    expect(alphaDash.check({ value: 'abc_123' })).toBeTruthy();
  });

  /** @test */
  it('should return false when a string is composed by characters and spaces', () => {
    expect(alphaDash.check({ value: 'abc EFG' })).toBeFalsy();
  });

  /** @test */
  it('should return false when a string is composed by other characters not alpha', () => {
    expect(alphaDash.check({ value: 'aas#' })).toBeFalsy();
    expect(alphaDash.check({ value: 'aas@' })).toBeFalsy();
  });
});
