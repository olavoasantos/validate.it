import ipv6 from './ipv6';

describe('ipv6 rule', () => {
  /** @test */
  it('should pass', () => {
    expect(ipv6.check( __INPUT__ )).toBeTruthy();
  });
});
