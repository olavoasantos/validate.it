import array from './index';

describe('array rule', () => {
  /** @test */
  it('should return true if value is an array', () => {
    expect(array.check([])).toBeTruthy();
  });

  /** @test */
  it('should return false if value is not an array', () => {
    expect(array.check('STRING')).toBeFalsy();
    expect(array.check(12356789)).toBeFalsy();
    expect(array.check(function FUNCTION () {})).toBeFalsy();
    expect(array.check({})).toBeFalsy();
  });
});
