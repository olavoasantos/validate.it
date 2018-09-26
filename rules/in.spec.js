import in from './in';

describe('in rule', () => {
  /** @test */
  it('should pass', () => {
    expect(in.check( __INPUT__ )).toBeTruthy();
  });
});
