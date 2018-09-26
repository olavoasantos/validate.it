import mimeTypes from './mimeTypes';

describe('mimeTypes rule', () => {
  /** @test */
  it('should pass', () => {
    expect(mimeTypes.check( __INPUT__ )).toBeTruthy();
  });
});
