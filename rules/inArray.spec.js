import inArray from './inArray';

describe('inArray rule', () => {
  /** @test */
  it('should pass', () => {
    expect(inArray.check( __INPUT__ )).toBeTruthy();
  });
});
