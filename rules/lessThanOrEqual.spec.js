import lessThanOrEqual from './lessThanOrEqual';

describe('lessThanOrEqual rule', () => {
  /** @test */
  it('should pass', () => {
    expect(lessThanOrEqual.check( __INPUT__ )).toBeTruthy();
  });
});
