import dateFormat from './index';

describe('dateFormat rule', () => {
  /** @test */
  it('should return true if a date has the correct format', () => {
    expect(dateFormat.check('26-09-2018', { format: 'DD-MM-YYYY' })).toBeTruthy();
    expect(dateFormat.check('09/26/2018', { format: 'MM/DD/YYYY' })).toBeTruthy();
  });

  /** @test */
  it('should return false if a date doesn`t have the correct format', () => {
    expect(dateFormat.check('26-09-2018', { format: 'YYYY-MM-DD' })).toBeFalsy();
    expect(dateFormat.check('09/26/2018', { format: 'MM-DD-YYYY' })).toBeFalsy();
  });
});
