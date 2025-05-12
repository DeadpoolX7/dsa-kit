/**
 * Sort order type for merge sort
 */
type SortOrder = 'asc' | 'desc';

/**
 * Merges two sorted arrays into a single sorted array
 */
function merge(left: number[], right: number[], order: SortOrder = 'asc'): number[] {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (order === 'asc' ? left[leftIndex] <= right[rightIndex] : left[leftIndex] >= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

/**
 * Merge Sort Algorithm - based on principle of divide & conquer algorithm
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 * @param arr - array of numbers to sort
 * @param order - 'asc' for ascending, 'desc' for descending order (default: 'asc')
 * @returns sorted array
 * @throws Error if input array is not valid
 */
export function mergeSort(arr: number[], order: SortOrder = 'asc'): number[] {
    // Input validation
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(
        mergeSort(left, order),
        mergeSort(right, order),
        order
    );
}