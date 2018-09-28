import greaterThan from './index';
import MockFile from '../../__helpers__/MockFile';
import makeArray from '../../__helpers__/makeArray';

describe('greaterThan rule', () => {
  const min = 2;

  /** @test */
  it('should return true if a numeric field is greater than a specified value', () => {
    const data = {
      count: 3
    };
    expect(greaterThan.check({ value: data.count }, 'numeric', min)).toBeTruthy();
  });

  /** @test */
  it('should return false if a numeric field is equal to a specified value', () => {
    const data = {
      count: 2
    };
    expect(greaterThan.check({ value: data.count }, 'numeric', min)).toBeFalsy();
  });

  /** @test */
  it('should return false if a numeric field is smaller than a specified value', () => {
    const data = {
      count: 1
    };
    expect(greaterThan.check({ value: data.count }, 'numeric', min)).toBeFalsy();
  });

  /** @test */
  it('should return true if a file size is greater than a specified value', () => {
    const data = {
      file: new MockFile('INVALID FILE.txt', 3)
    };
    expect(greaterThan.check({ value: data.file }, 'file', min)).toBeTruthy();
  });

  /** @test */
  it('should return false if a file size is equal to a specified value', () => {
    const data = {
      file: new MockFile('INVALID FILE.txt', 2)
    };
    expect(greaterThan.check({ value: data.file }, 'file', min)).toBeFalsy();
  });

  /** @test */
  it('should return false if a file size is smaller than a specified value', () => {
    const data = {
      file: new MockFile('INVALID FILE.txt', 1)
    };
    expect(greaterThan.check({ value: data.file }, 'file', min)).toBeFalsy();
  });

  /** @test */
  it('should return true if a string length is greater than a specified value', () => {
    const data = {
      string: 'abc'
    };
    expect(greaterThan.check({ value: data.string }, 'string', min)).toBeTruthy();
  });

  /** @test */
  it('should return false if a string length is equal to a specified value', () => {
    const data = {
      string: 'ab'
    };
    expect(greaterThan.check({ value: data.string }, 'string', min)).toBeFalsy();
  });

  /** @test */
  it('should return false if a string length is smaller than a specified value', () => {
    const data = {
      string: 'a'
    };
    expect(greaterThan.check({ value: data.string }, 'string', min)).toBeFalsy();
  });

  /** @test */
  it('should return true if a array length is greater than a specified value', () => {
    const data = {
      array: ['abc', 'ab', 'a']
    };
    expect(greaterThan.check({ value: data.array }, 'array', min)).toBeTruthy();
  });

  /** @test */
  it('should return false if a array length is equal to a specified value', () => {
    const data = {
      array: ['ab', 'a']
    };
    expect(greaterThan.check({ value: data.array }, 'array', min)).toBeFalsy();
  });

  /** @test */
  it('should return false if a array length is smaller than a specified value', () => {
    const data = {
      array: ['a']
    };
    expect(greaterThan.check({ value: data.array }, 'array', min)).toBeFalsy();
  });
});
