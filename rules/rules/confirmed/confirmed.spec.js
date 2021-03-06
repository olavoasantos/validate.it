import confirmed from './index';

describe('confirmed rule', () => {
  /** @test */
  it('should return true if value has confirmation', () => {
    const data = {
      password: 'MY PASSWORD',
      password_confirmation: 'MY PASSWORD',
    };

    expect(confirmed.check({ attribute: 'password', data })).toBeTruthy();
  });

  /** @test */
  it('should return false if value has the wrong confirmation', () => {
    const data = {
      password: 'MY PASSWORD',
      password_confirmation: 'MY WRONG PASSWORD',
    };

    expect(confirmed.check({ attribute: 'password', data })).toBeFalsy();
  });

  /** @test */
  it('should return false if value has no confirmation', () => {
    const data = {
      password: 'MY PASSWORD',
    };

    expect(confirmed.check({ attribute: 'password', data })).toBeFalsy();
  });
});
