import filled from './index';

describe('filled rule', () => {
  const data = {
      filled: 'DATA',
  };

  /** @test */
  it('should return true if the value is filled', () => {
    expect(filled.check(data.filled)).toBeTruthy();
  });

  /** @test */
  it('should return false if the value is not filled', () => {
    expect(filled.check(data.not_filled)).toBeFalsy();
  });
});
