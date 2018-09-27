import before from './index';

describe('before rule', () => {
  /** @test */
  it('should return true when a date is before another date', () => {
    expect(before.check('2013-04-29', { date: '2013-04-30' })).toBeTruthy();
  });

  /** @test */
  it('should return false when a date is equal to another date', () => {
    expect(before.check('2013-04-29', { date: '2013-04-29' })).toBeFalsy();
  });

  /** @test */
  it('should return false when a date is after another date', () => {
    expect(before.check('2013-04-29', { date: '2013-04-28' })).toBeFalsy();
  });
});
