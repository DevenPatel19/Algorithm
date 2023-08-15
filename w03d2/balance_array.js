/* 
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
  if(nums.length < 3){
    return -1
  }
  for (let i = 0; i < nums.length; i++) {
    const leftSum = nums.slice(0, i).reduce((sum, num) => sum + num, 0);
    const rightSum = nums.slice(i + 1).reduce((sum, num) => sum + num, 0);
    
    if (leftSum === rightSum) {
      return i; // Found the balance index
    }
  }

  // No balance index was found
  return -1;
}

console.log(balanceIndex(nums1), 'should equal', expected1);
console.log(balanceIndex(nums2), 'should equal', expected2);