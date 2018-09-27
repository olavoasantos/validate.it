import between from './index';
import MockFile from '../../__helpers__/MockFile';
import makeArray from '../../__helpers__/makeArray';

describe('between numeric rule', () => {
  const options = {
    type: 'numeric',
    min: 5,
    max: 15,
  };

  /** @test */
  it('should return true if a numeric value is between a max and a min value', () => {
    const value = 10;
    expect(between.check(value, options)).toBeTruthy();
  });

  /** @test */
  it('should return false if a numeric value is not between a max and a min value', () => {
    const value = 0;
    expect(between.check(value, options)).toBeFalsy();
  });
});

describe('between file rule', () => {
  const options = {
    type: 'file',
    min: 5,
    max: 15,
  };

  /** @test */
  it('should return true if a file size is between a max and a min value', () => {
    const file = MockFile('VALID FILE.txt', 10);
    expect(between.check(file, options)).toBeTruthy();
  });

  /** @test */
  it('should return false if a file size is not between a max and a min value', () => {
    const file = MockFile('INVALID FILE.txt', 20);
    expect(between.check(file, options)).toBeFalsy();
  });
});

describe('between string rule', () => {
  const options = {
    type: 'string',
    min: 5,
    max: 15,
  };

  /** @test */
  it('should return true if a string length is between a max and a min value', () => {
    const string = 'VALID STRING';
    expect(between.check(string, options)).toBeTruthy();
  });

  /** @test */
  it('should return false if a string length is not between a max and a min value', () => {
    const string = 'THIS IS AN INVALID STRING';
    expect(between.check(string, options)).toBeFalsy();
  });
});

describe('between array rule', () => {
  const options = {
    type: 'array',
    min: 5,
    max: 15,
  };

  /** @test */
  it('should return true if a array length is between a max and a min value', () => {
    const array = makeArray(10);
    expect(between.check(array, options)).toBeTruthy();
  });

  /** @test */
  it('should return false if a array length is not between a max and a min value', () => {
    const array = makeArray(20);
    expect(between.check(array, options)).toBeFalsy();
  });
});
