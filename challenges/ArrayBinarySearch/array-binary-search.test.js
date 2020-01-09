'use strict';

const binarySearch = require('./array-binary-search.js');

// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
// This range function was taken directly from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
const arraySecond = range(1, 100, 1);
const arrayFourth = range(1, 10000, 1);
const arrayFifth = range(1, 1000000, 1);


describe('Binary Search', () => {
  it('will run tests', () => {
    expect(3).toEqual(3);
  });

  it('should work on small arrays', () => {
    expect(binarySearch(arraySecond, 15)).toBe(14);
  });

  it('should work on medium arrays', () => {
    expect(binarySearch(arrayFourth, 452)).toBe(451);
  });

  it('should work on large arrays', () => {
    expect(binarySearch(arrayFifth, 999999)).toBe(999998);
  });

  it('returns -1 if key is not included in array', () => {
    expect(binarySearch(arraySecond, -4)).toBe(-1);
  });
});