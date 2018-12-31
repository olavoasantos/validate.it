import integer from './index';

describe('integer rule', () => {
  /** @test */
  it('should return true if the given value is an integer', () => {
    expect(integer.check({ value: 1 })).toBeTruthy();
  });

  /** @test */
  it('should return false if the given value is not an integer', () => {
    expect(integer.check({ value: 1.1 })).toBeFalsy();
    expect(integer.check({ value: 'NOT A NUMBER' })).toBeFalsy();
  });
});
