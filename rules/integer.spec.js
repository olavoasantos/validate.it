import integer from './integer';

describe('integer rule', () => {
  /** @test */
  it('should pass', () => {
    expect(integer.check( __INPUT__ )).toBeTruthy();
  });
});
