/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amount of times that item occurs.
 */
function makeFrequencyTable(arr) {
  let dict = {};
  for (let i = 0; i < arr.length; i++) {
    // check if this element of the array is in the keys of our dict
    if (String(arr[i]) in dict) {
      //if it is we add to the count for the associated key
      dict[String(arr[i])] += 1;
      //if not we make a new key and set it to a value of 1
    } else {
      dict[String(arr[i])] = 1;
    }
  }
  // and if it is we increase it's value by +1
  return dict;
}
// return new dict



console.log(makeFrequencyTable(arr1), expected1);
console.log(makeFrequencyTable(arr2), expected2);
console.log(makeFrequencyTable(arr3), expected3);

module.exports = {makeFrequencyTable}