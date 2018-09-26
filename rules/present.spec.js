import present from './present';

describe('present rule', () => {
  /** @test */
  it('should pass', () => {
    expect(present.check( __INPUT__ )).toBeTruthy();
  });
});
