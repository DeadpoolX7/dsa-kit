/**
 * Selection Sort Algorithm
 * Time Complexity: O(n^2), Space Complexity: O(1)
 *
 * @param arr - array of numbers
 * @returns the sorted array (in-place)
 */
export function selectionSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }
  