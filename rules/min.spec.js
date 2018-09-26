import min from './min';

describe('min rule', () => {
  /** @test */
  it('should pass', () => {
    expect(min.check( __INPUT__ )).toBeTruthy();
  });
});
