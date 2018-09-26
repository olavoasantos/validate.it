import ip from './ip';

describe('ip rule', () => {
  /** @test */
  it('should pass', () => {
    expect(ip.check( __INPUT__ )).toBeTruthy();
  });
});
