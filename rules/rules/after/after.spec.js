import after from './index';

describe('after rule', () => {
  /** @test */
  it('should return true when a date is after another date', () => {
    expect(
      after.check({ value: '2013-04-29', args: ['2013-04-28'] }),
    ).toBeTruthy();
  });

  /** @test */
  it('should return false when a date is equal to another date', () => {
    expect(
      after.check({ value: '2013-04-29', args: ['2013-04-29'] }),
    ).toBeFalsy();
  });

  /** @test */
  it('should return false when a date is before another date', () => {
    expect(
      after.check({ value: '2013-04-29', args: ['2013-04-30'] }),
    ).toBeFalsy();
  });
});
