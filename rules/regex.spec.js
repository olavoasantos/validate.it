import regex from './regex';

describe('regex rule', () => {
  /** @test */
  it('should pass', () => {
    expect(regex.check( __INPUT__ )).toBeTruthy();
  });
});
