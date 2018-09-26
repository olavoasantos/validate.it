import required from './required';

describe('required rule', () => {
  /** @test */
  it('should pass', () => {
    expect(required.check( __INPUT__ )).toBeTruthy();
  });
});
