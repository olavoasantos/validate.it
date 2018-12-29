import dateEquals from './index';

describe('dateEquals rule', () => {
  /** @test */
  it('should return true if a value is equal to a given date', () => {
    expect(
      dateEquals.check({ value: '2018-12-24', args: ['December 24, 2018'] }),
    );
  });
});
