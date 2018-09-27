import array from './index';

describe('array rule', () => {
  /** @test */
  it('should return true if value is an array', () => {
    expect(array.check({ value: [] })).toBeTruthy();
  });

  /** @test */
  it('should return false if value is not an array', () => {
    expect(array.check({ value: {} })).toBeFalsy();
    expect(array.check({ value: 'STRING' })).toBeFalsy();
    expect(array.check({ value: 12356789 })).toBeFalsy();
    expect(array.check({ value: function FUNCTION() {} })).toBeFalsy();
  });
});
