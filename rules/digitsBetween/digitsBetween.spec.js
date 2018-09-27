import digitsBetween from './index';

describe('digitsBetween rule', () => {
  const min = 5;
  const max = 10;

  /** @test */
  it('should return true is a number has the number of digits between a min and a max', () => {
    expect(digitsBetween.check({ value: 123456 }, min, max)).toBeTruthy();
  });

  /** @test */
  it('should return false is a number does not have the number of digits between a min and a max', () => {
    expect(digitsBetween.check({ value: 123 }, min, max)).toBeFalsy();
  });

  /** @test */
  it('should return false is a number has the number of digits equal to the min', () => {
    expect(digitsBetween.check({ value: 12345 }, min, max)).toBeFalsy();
  });

  /** @test */
  it('should return false is a number has the number of digits equal to the max', () => {
    expect(digitsBetween.check({ value: 1234567890 }, min, max)).toBeFalsy();
  });

  /** @test */
  it('should return false is not a number', () => {
    expect(
      digitsBetween.check({ value: 'NOT A NUMBER' }, min, max)
    ).toBeFalsy();
  });
});
