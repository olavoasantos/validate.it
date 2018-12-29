import different from './index';

describe('different rule', () => {
  const data = {
    field: 'DUPLICATE FIELD',
    other_field: 'UNIQUE FIELD',
    another_field: 'DUPLICATE FIELD',
  };

  /** @test */
  it('should return true if the values are different', () => {
    expect(
      different.check({ value: data.field, data, args: ['other_field'] }),
    ).toBeTruthy();
  });

  /** @test */
  it('should return false if the values are equal', () => {
    expect(
      different.check({ value: data.field, data, args: ['another_field'] }),
    ).toBeFalsy();
  });
});
