import digits from './index';

describe('digits rule', () => {
  const value = 3;

  /** @test */
  it('should return true is a number has the correct number of digits', () => {
    expect(digits.check({ value: 123, args: [value] })).toBeTruthy();
  });

  /** @test */
  it('should return false is a number does not have the correct number of digits', () => {
    expect(digits.check({ value: 1234, args: [value] })).toBeFalsy();
  });

  /** @test */
  it('should return false is not a number', () => {
    expect(digits.check({ value: 'NOT A NUMBER', args: [value] })).toBeFalsy();
  });
});
