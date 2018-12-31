import greaterThanOrEqual from './index';
import MockFile from '../../__helpers__/MockFile';
import makeArray from '../../__helpers__/makeArray';

describe('greaterThanOrEqual rule', () => {
  /** @test */
  it('should return true if a numeric field is greater than a specified value', () => {
    const data = {
      count: 3,
    };
    expect(
      greaterThanOrEqual.check({ value: data.count, args: [2] }),
    ).toBeTruthy();
  });

  /** @test */
  it('should return true if a numeric field is equal to a specified value', () => {
    const data = {
      count: 2,
    };
    expect(
      greaterThanOrEqual.check({ value: data.count, args: [2] }),
    ).toBeTruthy();
  });

  /** @test */
  it('should return false if a numeric field is smaller than a specified value', () => {
    const data = {
      count: 1,
    };
    expect(
      greaterThanOrEqual.check({ value: data.count, args: [2] }),
    ).toBeFalsy();
  });

  /** @test */
  it('should return true if a file size is greater than a specified value', () => {
    const data = {
      file: new MockFile('INVALID FILE.txt', 3),
    };
    expect(
      greaterThanOrEqual.check({ value: data.file, args: [2] }),
    ).toBeTruthy();
  });

  /** @test */
  it('should return true if a file size is equal to a specified value', () => {
    const data = {
      file: new MockFile('INVALID FILE.txt', 2),
    };
    expect(
      greaterThanOrEqual.check({ value: data.file, args: [2] }),
    ).toBeTruthy();
  });

  /** @test */
  it('should return false if a file size is smaller than a specified value', () => {
    const data = {
      file: new MockFile('INVALID FILE.txt', 1),
    };
    expect(
      greaterThanOrEqual.check({ value: data.file, args: [2] }),
    ).toBeFalsy();
  });

  /** @test */
  it('should return true if a string length is greater than a specified value', () => {
    const data = {
      string: 'abc',
    };
    expect(
      greaterThanOrEqual.check({ value: data.string, args: [2] }),
    ).toBeTruthy();
  });

  /** @test */
  it('should return true if a string length is equal to a specified value', () => {
    const data = {
      string: 'ab',
    };
    expect(
      greaterThanOrEqual.check({ value: data.string, args: [2] }),
    ).toBeTruthy();
  });

  /** @test */
  it('should return false if a string length is smaller than a specified value', () => {
    const data = {
      string: 'a',
    };
    expect(
      greaterThanOrEqual.check({ value: data.string, args: [2] }),
    ).toBeFalsy();
  });

  /** @test */
  it('should return true if a array length is greater than a specified value', () => {
    const data = {
      array: makeArray(3),
    };
    expect(
      greaterThanOrEqual.check({ value: data.array, args: [2] }),
    ).toBeTruthy();
  });

  /** @test */
  it('should return true if a array length is equal to a specified value', () => {
    const data = {
      array: makeArray(2),
    };
    expect(
      greaterThanOrEqual.check({ value: data.array, args: [2] }),
    ).toBeTruthy();
  });

  /** @test */
  it('should return false if a array length is smaller than a specified value', () => {
    const data = {
      array: makeArray(1),
    };
    expect(
      greaterThanOrEqual.check({ value: data.array, args: [2] }),
    ).toBeFalsy();
  });
});
