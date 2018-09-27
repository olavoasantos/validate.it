import afterOrEqual from './index';

describe('afterOrEqual rule', () => {
  /** @test */
  it('should return true when a date is after a specific', () => {
    expect(
      afterOrEqual.check({ value: '2013-04-29' }, '2013-04-28')
    ).toBeTruthy();
  });

  /** @test */
  it('should return true when a date is equal a specific', () => {
    expect(
      afterOrEqual.check({ value: '2013-04-29' }, '2013-04-29')
    ).toBeTruthy();
  });

  /** @test */
  it('should return false when a date is before a specific', () => {
    expect(
      afterOrEqual.check({ value: '2013-04-29' }, '2013-04-30')
    ).toBeFalsy();
  });
});
