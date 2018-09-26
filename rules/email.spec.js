import email from './email';

describe('email rule', () => {
  /** @test */
  it('should return true if the value is a valid e-mail', () => {
    expect(email.check('VALID.EMAIL@EXAMPLE.COM')).toBeTruthy();
    expect(email.check('E-MAIL_VALIDO@EXAMPLE.COM.BR')).toBeTruthy();
  });

  /** @test */
  it('should return false if the value is not a valid e-mail', () => {
    expect(email.check('INVALID EMAIL')).toBeFalsy();
    expect(email.check('INVALID EMAIL@EXAMPLE.COM')).toBeFalsy();
    expect(email.check('E-MAIL_VALIDO@EXAMPLE.COM.')).toBeFalsy();
    expect(email.check('!@!#$!%ˆ&E-MAIL_VALIDO@EXAMPLE.COM.')).toBeFalsy();
  });
});
