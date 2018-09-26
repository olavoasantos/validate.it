import image from './image';

describe('image rule', () => {
  /** @test */
  it('should pass', () => {
    expect(image.check( __INPUT__ )).toBeTruthy();
  });
});
