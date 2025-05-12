/**
 * Cyclic Sort Algorithm
 * Works best when array contains numbers from 0 to n or 1 to n
 * Time Complexity: O(n), Space Complexity: O(1)
 *
 * @param arr - an array of integers from 1 to n with no duplicates
 * @returns the sorted array (in-place sorting)
 */
export function cyclicSort(arr: number[]): number[] {
    let i = 0;
    while (i < arr.length) {
      const correctIndex = arr[i] - 1;
      if (arr[i] !== arr[correctIndex]) {
        [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
      } else {
        i++;
      }
    }
    return arr;
  }
  