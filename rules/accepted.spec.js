import accepted from './accepted';

describe('accepted rule', () => {
  /** @test */
  it('should accept using a boolean', () => {
    expect(accepted.check(true)).toBeTruthy();
  });

  /** @test */
  it('should accept using a number', () => {
    expect(accepted.check(1)).toBeTruthy();
  });

  /** @test */
  it('should accept using a "on"', () => {
    expect(accepted.check('on')).toBeTruthy();
  });

  /** @test */
  it('should accept using a "yes"', () => {
    expect(accepted.check('yes')).toBeTruthy();
  });

  /** @test */
  it('should fail using when passing null and undefined', () => {
    expect(accepted.check(null)).toBeFalsy();
    expect(accepted.check(undefined)).toBeFalsy();
  });

  /** @test */
  it('should fail using a boolean other than true', () => {
    expect(accepted.check(false)).toBeFalsy();
  });

  /** @test */
  it('should fail using a number other than 1', () => {
    expect(accepted.check(0)).toBeFalsy();
    expect(accepted.check(213)).toBeFalsy();
  });

  /** @test */
  it('should fail using a string other than "yes" and "on"', () => {
    expect(accepted.check('no')).toBeFalsy();
    expect(accepted.check('off')).toBeFalsy();
    expect(accepted.check('A RANDOM STRING')).toBeFalsy();
  });
});
