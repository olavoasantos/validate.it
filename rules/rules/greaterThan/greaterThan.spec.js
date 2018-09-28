import greaterThan from './index';
import MockFile from '../../__helpers__/MockFile';
import makeArray from '../../__helpers__/makeArray';

describe('greaterThan rule', () => {
  /** @test */
  it('should return true if a numeric field is greater than a specified value', () => {
    const data = {
      count: 3,
      min: 2
    };
    expect(greaterThan.check({ value: data.count, data }, 'min')).toBeTruthy();
  });

  /** @test */
  it('should return false if a numeric field is equal to a specified value', () => {
    const data = {
      count: 2,
      min: 2
    };
    expect(greaterThan.check({ value: data.count, data }, 'min')).toBeFalsy();
  });

  /** @test */
  it('should return false if a numeric field is smaller than a specified value', () => {
    const data = {
      count: 1,
      min: 2
    };
    expect(greaterThan.check({ value: data.count, data }, 'min')).toBeFalsy();
  });

  /** @test */
  it('should return true if a file size is greater than a specified value', () => {
    const data = {
      file: new MockFile('INVALID FILE.txt', 3),
      size: 2
    };
    expect(greaterThan.check({ value: data.file, data }, 'size')).toBeTruthy();
  });

  /** @test */
  it('should return false if a file size is equal to a specified value', () => {
    const data = {
      file: new MockFile('INVALID FILE.txt', 2),
      size: 2
    };
    expect(greaterThan.check({ value: data.file, data }, 'size')).toBeFalsy();
  });

  /** @test */
  it('should return false if a file size is smaller than a specified value', () => {
    const data = {
      file: new MockFile('INVALID FILE.txt', 1),
      size: 2
    };
    expect(greaterThan.check({ value: data.file, data }, 'size')).toBeFalsy();
  });

  /** @test */
  it('should return true if a string length is greater than a specified value', () => {
    const data = {
      string: 'abc',
      min: 2
    };
    expect(greaterThan.check({ value: data.string, data }, 'min')).toBeTruthy();
  });

  /** @test */
  it('should return false if a string length is equal to a specified value', () => {
    const data = {
      string: 'ab',
      min: 2
    };
    expect(greaterThan.check({ value: data.string, data }, 'min')).toBeFalsy();
  });

  /** @test */
  it('should return false if a string length is smaller than a specified value', () => {
    const data = {
      string: 'a',
      min: 2
    };
    expect(greaterThan.check({ value: data.string, data }, 'min')).toBeFalsy();
  });

  /** @test */
  it('should return true if a array length is greater than a specified value', () => {
    const data = {
      array: ['abc', 'ab', 'a'],
      min: 2
    };
    expect(greaterThan.check({ value: data.array, data }, 'min')).toBeTruthy();
  });

  /** @test */
  it('should return false if a array length is equal to a specified value', () => {
    const data = {
      array: ['ab', 'a'],
      min: 2
    };
    expect(greaterThan.check({ value: data.array, data }, 'min')).toBeFalsy();
  });

  /** @test */
  it('should return false if a array length is smaller than a specified value', () => {
    const data = {
      array: ['a'],
      min: 2
    };
    expect(greaterThan.check({ value: data.array, data }, 'min')).toBeFalsy();
  });
});
