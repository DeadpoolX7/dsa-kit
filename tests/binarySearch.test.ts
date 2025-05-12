import { describe, expect, it } from 'vitest';
import { binarySearch } from '../src/searching/binarySearch';

describe('binarySearch', () => {
  it('should find index of target', () => {
    expect(binarySearch([1, 3, 5, 7], 5)).toBe(2);
  });

  it('should return -1 if not found', () => {
    expect(binarySearch([1, 3, 5, 7], 4)).toBe(-1);
  });
});
