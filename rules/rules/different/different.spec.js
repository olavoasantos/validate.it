import different from './index';

describe('different rule', () => {
  const data = {
    field: 'DUPLICATE FIELD',
    other_field: 'UNIQUE FIELD',
    another_field: 'DUPLICATE FIELD',
  };

  /** @test */
  it('should return true if the values are different', () => {
    expect(different.check({ value: data.field, data }, 'other_field')).toBeTruthy();
  });

  /** @test */
  it('should return false if the values are equal', () => {
    expect(different.check({ value: data.field, data }, 'another_field')).toBeFalsy();
  });
});
