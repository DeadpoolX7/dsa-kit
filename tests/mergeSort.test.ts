import { describe, it, expect } from 'vitest';
import { mergeSort } from '../src/sorting/mergeSort';

describe('mergeSort', () => {
    it('should sort an array in ascending order by default', () => {
        expect(mergeSort([5, 2, 8, 1, 9])).toEqual([1, 2, 5, 8, 9]);
    });

    it('should sort an array in descending order when specified', () => {
        expect(mergeSort([5, 2, 8, 1, 9], 'desc')).toEqual([9, 8, 5, 2, 1]);
    });

    it('should handle empty arrays', () => {
        expect(mergeSort([])).toEqual([]);
    });

    it('should handle single element arrays', () => {
        expect(mergeSort([1])).toEqual([1]);
    });

    it('should handle arrays with duplicate values', () => {
        expect(mergeSort([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
        expect(mergeSort([3, 1, 4, 1, 5], 'desc')).toEqual([5, 4, 3, 1, 1]);
    });

    it('should handle negative numbers', () => {
        expect(mergeSort([-5, 2, -8, 1, -9])).toEqual([-9, -8, -5, 1, 2]);
    });

    it('should throw error for invalid input', () => {
        // @ts-expect-error testing invalid input
        expect(() => mergeSort(null)).toThrow('Input must be an array');
        // @ts-expect-error testing invalid input
        expect(() => mergeSort(undefined)).toThrow('Input must be an array');
    });

    it('should handle large arrays', () => {
        const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
        const sortedAsc = mergeSort([...largeArray]);
        const sortedDesc = mergeSort([...largeArray], 'desc');
        
        // Test ascending order
        for (let i = 1; i < sortedAsc.length; i++) {
            expect(sortedAsc[i]).toBeGreaterThanOrEqual(sortedAsc[i - 1]);
        }
        
        // Test descending order
        for (let i = 1; i < sortedDesc.length; i++) {
            expect(sortedDesc[i]).toBeLessThanOrEqual(sortedDesc[i - 1]);
        }
    });
});
