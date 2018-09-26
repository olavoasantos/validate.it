import string from './string';

describe('string rule', () => {
  /** @test */
  it('should pass', () => {
    expect(string.check( __INPUT__ )).toBeTruthy();
  });
});
