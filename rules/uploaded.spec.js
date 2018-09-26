import uploaded from './uploaded';

describe('uploaded rule', () => {
  /** @test */
  it('should pass', () => {
    expect(uploaded.check( __INPUT__ )).toBeTruthy();
  });
});
