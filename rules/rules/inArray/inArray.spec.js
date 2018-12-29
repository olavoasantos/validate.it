import inArray from './index';

describe('inArray rule', () => {
  const data = {
    color: '#ff0000',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
  };

  /** @test */
  it('should return true if the value is included in another field', () => {
    expect(
      inArray.check({ value: data.color, data, args: ['colors'] }),
    ).toBeTruthy();
  });

  /** @test */
  it('should return false if the value is not included in another field', () => {
    expect(
      inArray.check({ value: '#ffff00', data, args: ['colors'] }),
    ).toBeFalsy();
  });
});
