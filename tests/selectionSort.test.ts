import { selectionSort } from '../src/sorting/selectionSort'
import { describe, it, expect } from 'vitest'

describe('selectionSort', () => {
    it('should sort an empty array', () => {
        expect(selectionSort([])).toEqual([])
    })

    it('should sort an array with one element', () => {
        expect(selectionSort([1])).toEqual([1])
    })

    it('should sort an array with multiple elements', () => {
        expect(selectionSort([64, 34, 25, 12, 22, 11, 90])).toEqual([11, 12, 22, 25, 34, 64, 90])
    })

    it('should sort an already sorted array', () => {
        expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    })

    it('should sort an array in reverse order', () => {
        expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    it('should sort an array with duplicate elements', () => {
        expect(selectionSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 6, 9])
    })
})