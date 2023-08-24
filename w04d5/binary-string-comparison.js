/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

//             V
const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

//             V
const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// don't be afraid to add parameters!

// base case(s)
// logic
// recursive call(s) / return(s)

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode first
// create the function and decide what params it needs and what it will return

function binarySearch(arr, num, high = arr.length - 1, low = 0) {
  if (low > high) {
    return false;
  }

  let mid = Math.floor((high - low) / 2) + low;

  if (arr[mid] == num) {
    return true;
  } else if (arr[mid] < num) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
  return binarySearch(arr, num, high, low);
}

console.log(binarySearch(nums1, searchNum1));
console.log(binarySearch(nums2, searchNum2));
console.log(binarySearch(nums3, searchNum3));

// Test cases

console.log(binarySearch(nums1, searchNum1, 0, nums1.length - 1) === expected1); // Output: true

console.log(binarySearch(nums2, searchNum2, 0, nums2.length - 1) === expected2); // Output: true

console.log(binarySearch(nums3, searchNum3, 0, nums3.length - 1) === expected3); // Output: true
