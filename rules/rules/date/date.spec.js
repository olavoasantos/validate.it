import date from './index';

describe('date rule', () => {
  /** @test */
  it('should return true if the value is a valid date', () => {
    expect(date.check({ value: '2018-09-26' })).toBeTruthy();
    expect(date.check({ value: '2018/09/26' })).toBeTruthy();
    expect(date.check({ value: '2018.09.26' })).toBeTruthy();
    expect(date.check({ value: '2018 09 26' })).toBeTruthy();
  });

  /** @test */
  it('should return false if the value is not a valid date', () => {
    expect(date.check({ value: '20180926' })).toBeFalsy();
    expect(date.check({ value: '2018 52 12' })).toBeFalsy();
  });
});
