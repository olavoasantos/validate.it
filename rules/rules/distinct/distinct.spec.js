import distinct from './index';

describe('distinct rule', () => {
  /** @test */
  it('should return true if the array only contains objects with a unique key values', () => {
    const data = [{ id: 1, name: 'JOHN DOE' }, { id: 2, name: 'JANE DOE' }];

    expect(distinct.check({ value: data, args: ['id'] })).toBeTruthy();
  });

  /** @test */
  it('should return false if the array contains objects with a duplicate key values', () => {
    const data = [
      { id: 1, name: 'JOHN DOE' },
      { id: 2, name: 'JANE DOE' },
      { id: 3, name: 'JOHN DOE' },
    ];

    expect(distinct.check({ value: data, args: ['name'] })).toBeFalsy();
  });

  /** @test */
  it('should return true if the array only contains unique values', () => {
    const data = ['VALUE', 'DIFFERENT VALUE'];
    expect(distinct.check({ value: data })).toBeTruthy();
  });

  /** @test */
  it('should return false if the array contains duplicate values', () => {
    const data = ['VALUE', 'DUPLICATE VALUE', 'DUPLICATE VALUE'];
    expect(distinct.check({ value: data })).toBeFalsy();
  });
});
