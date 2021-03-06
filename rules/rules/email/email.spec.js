import email from './index';

describe('email rule', () => {
  /** @test */
  it('should return true if the value is a valid e-mail', () => {
    expect(email.check({ value: 'VALID.EMAIL@EXAMPLE.COM' })).toBeTruthy();
    expect(email.check({ value: 'E-MAIL_VALIDO@EXAMPLE.COM.BR' })).toBeTruthy();
  });

  /** @test */
  it('should return false if the value is not a valid e-mail', () => {
    expect(email.check({ value: 'INVALID EMAIL' })).toBeFalsy();
    expect(email.check({ value: 'INVALID EMAIL@EXAMPLE.COM' })).toBeFalsy();
    expect(email.check({ value: 'E-MAIL_VALIDO@EXAMPLE.COM.' })).toBeFalsy();
    expect(
      email.check({ value: '!@!#$!%ˆ&E-MAIL_VALIDO@EXAMPLE.COM.' })
    ).toBeFalsy();
  });
});
