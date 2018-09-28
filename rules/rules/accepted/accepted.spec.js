import accepted from './index';

describe('accepted rule', () => {
  /** @test */
  it('should accept using a boolean', () => {
    expect(accepted.check({ value: true })).toBeTruthy();
  });

  /** @test */
  it('should accept using a number', () => {
    expect(accepted.check({ value: 1 })).toBeTruthy();
  });

  /** @test */
  it('should accept using a "on"', () => {
    expect(accepted.check({ value: 'on' })).toBeTruthy();
  });

  /** @test */
  it('should accept using a "yes"', () => {
    expect(accepted.check({ value: 'yes' })).toBeTruthy();
  });

  /** @test */
  it('should fail using when passing null and undefined', () => {
    expect(accepted.check({ value: null })).toBeFalsy();
    expect(accepted.check({ value: undefined })).toBeFalsy();
  });

  /** @test */
  it('should fail using a boolean other than true', () => {
    expect(accepted.check({ value: false })).toBeFalsy();
  });

  /** @test */
  it('should fail using a number other than 1', () => {
    expect(accepted.check({ value: 0 })).toBeFalsy();
    expect(accepted.check({ value: 213 })).toBeFalsy();
  });

  /** @test */
  it('should fail using a string other than "yes" and "on"', () => {
    expect(accepted.check({ value: 'no' })).toBeFalsy();
    expect(accepted.check({ value: 'off' })).toBeFalsy();
    expect(accepted.check({ value: 'A RANDOM STRING' })).toBeFalsy();
  });
});
