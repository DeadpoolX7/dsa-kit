/**
 * 
 * @param arr - an array of integers in sorted order
 * @param target - element needs to be searched in the array
 * @returns - Target element index(if, found) and -1 (if, element is not found) 
 */

export function binarySearch(arr : number[], target : number) : number{
    let left = 0, right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
}