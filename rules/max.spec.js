import max from './max';

describe('max rule', () => {
  /** @test */
  it('should pass', () => {
    expect(max.check( __INPUT__ )).toBeTruthy();
  });
});
