import boolean from './index';

describe('boolean rule', () => {
  /** @test */
  it('should return true if value is a boolean', () => {
    expect(boolean.check({ value: 1 })).toBeTruthy();
    expect(boolean.check({ value: 0 })).toBeTruthy();
    expect(boolean.check({ value: '1' })).toBeTruthy();
    expect(boolean.check({ value: '0' })).toBeTruthy();
    expect(boolean.check({ value: true })).toBeTruthy();
    expect(boolean.check({ value: false })).toBeTruthy();
  });

  /** @test */
  it('should return false if value is not a boolean', () => {
    expect(boolean.check({ value: 2 })).toBeFalsy();
    expect(boolean.check({ value: [] })).toBeFalsy();
    expect(boolean.check({ value: {} })).toBeFalsy();
    expect(boolean.check({ value: null })).toBeFalsy();
    expect(boolean.check({ value: 'yes' })).toBeFalsy();
    expect(boolean.check({ value: undefined })).toBeFalsy();
    expect(boolean.check({ value: 'NOT A BOOLEAN' })).toBeFalsy();
  });
});
