import timezone from './timezone';

describe('timezone rule', () => {
  /** @test */
  it('should pass', () => {
    expect(timezone.check( __INPUT__ )).toBeTruthy();
  });
});
