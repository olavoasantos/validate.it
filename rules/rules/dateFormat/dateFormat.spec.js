import dateFormat from './index';

describe('dateFormat rule', () => {
  /** @test */
  it('should return true if a date has the correct format', () => {
    expect(
      dateFormat.check({ value: '26-09-2018', args: ['DD-MM-YYYY'] }),
    ).toBeTruthy();
    expect(
      dateFormat.check({ value: '09/26/2018', args: ['MM/DD/YYYY'] }),
    ).toBeTruthy();
  });

  /** @test */
  it('should return false if a date doesn`t have the correct format', () => {
    expect(
      dateFormat.check({ value: '26-09-2018', args: ['YYYY-MM-DD'] }),
    ).toBeFalsy();
    expect(
      dateFormat.check({ value: '09/26/2018', args: ['MM-DD-YYYY'] }),
    ).toBeFalsy();
  });
});
