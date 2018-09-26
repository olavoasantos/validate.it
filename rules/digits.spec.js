import digits from './digits';

describe('digits rule', () => {
  const digit_number = 3;

  /** @test */
  it('should return true is a number has the correct number of digits', () => {
    expect(digits.check(123, { digits: digit_number })).toBeTruthy();
  });

  /** @test */
  it('should return false is a number does not have the correct number of digits', () => {
    expect(digits.check(1234, { digits: digit_number })).toBeFalsy();
  });

  /** @test */
  it('should return false is not a number', () => {
    expect(digits.check('NOT A NUMBER', { digits: digit_number })).toBeFalsy();
  });
});
