import after from './after';

describe('after rule', () => {
  /** @test */
  it('should return true when a date is after another date', () => {
    expect(after.check('2013-04-29', { date: '2013-04-28' })).toBeTruthy();
  });

  /** @test */
  it('should return false when a date is equal to another date', () => {
    expect(after.check('2013-04-29', { date: '2013-04-29' })).toBeFalsy();
  });

  /** @test */
  it('should return false when a date is before another date', () => {
    expect(after.check('2013-04-29', { date: '2013-04-30' })).toBeFalsy();
  });
});
