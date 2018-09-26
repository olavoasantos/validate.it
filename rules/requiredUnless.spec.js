import requiredUnless from './requiredUnless';

describe('requiredUnless rule', () => {
  /** @test */
  it('should pass', () => {
    expect(requiredUnless.check( __INPUT__ )).toBeTruthy();
  });
});
