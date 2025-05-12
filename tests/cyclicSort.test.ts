import { cyclicSort } from "../src/sorting/cyclicSort";
import { describe, it, expect } from "vitest";

describe('cyclicSort', () => {
    it('should sort an array of consecutive numbers', () => {
        expect(cyclicSort([3, 1, 2])).toEqual([1, 2, 3]);
        expect(cyclicSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    });

    it('should handle single element array', () => {
        expect(cyclicSort([1])).toEqual([1]);
    });

    it('should handle already sorted array', () => {
        expect(cyclicSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    it('should sort array with numbers from 1 to n', () => {
        expect(cyclicSort([5, 2, 3, 1, 4])).toEqual([1, 2, 3, 4, 5]);
        expect(cyclicSort([6, 4, 5, 2, 3, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should handle reverse sorted array', () => {
        expect(cyclicSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
});
