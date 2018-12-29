import between from './index';
import MockFile from '../../__helpers__/MockFile';
import makeArray from '../../__helpers__/makeArray';

describe('between numeric rule', () => {
  /** @test */
  it('should return true if a numeric value is between a max and a min value', () => {
    const value = 10;
    expect(between.check({ value, args: [5, 15] })).toBeTruthy();
  });

  /** @test */
  it('should return false if a numeric value is not between a max and a min value', () => {
    const value = 0;
    expect(between.check({ value, args: [5, 15] })).toBeFalsy();
  });
});

describe('between file rule', () => {
  /** @test */
  it('should return true if a file size is between a max and a min value', () => {
    const file = MockFile('VALID FILE.txt', 10);
    expect(between.check({ value: file, args: [5, 15] })).toBeTruthy();
  });

  /** @test */
  it('should return false if a file size is not between a max and a min value', () => {
    const file = MockFile('INVALID FILE.txt', 20);
    expect(between.check({ value: file, args: [5, 15] })).toBeFalsy();
  });
});

describe('between string rule', () => {
  /** @test */
  it('should return true if a string length is between a max and a min value', () => {
    const string = 'VALID STRING';
    expect(between.check({ value: string, args: [5, 15] })).toBeTruthy();
  });

  /** @test */
  it('should return false if a string length is not between a max and a min value', () => {
    const string = 'THIS IS AN INVALID STRING';
    expect(between.check({ value: string, args: [5, 15] })).toBeFalsy();
  });
});

describe('between array rule', () => {
  /** @test */
  it('should return true if a array length is between a max and a min value', () => {
    const array = makeArray(10);
    expect(between.check({ value: array, args: [5, 15] })).toBeTruthy();
  });

  /** @test */
  it('should return false if a array length is not between a max and a min value', () => {
    const array = makeArray(20);
    expect(between.check({ value: array, args: [5, 15] })).toBeFalsy();
  });
});
