/* 
Recursive Factorial
Given a number `num`, return the product of integers from 1 upward to that number.
If less than or equal to zero, return -1. If not an integer, treat as an integer.

Input: integer
Output: product of integers from 1 to input integer
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1 * 2 * 3 = 6

const num2 = 5;
const expected2 = 120;
// Explanation: 1 * 2 * 3 * 4 * 5 = 120

const num3 = 3.5;
const expected3 = 6;
// Explanation: 1 * 2 * 3 = 6

const num4 = 0;
const expected4 = -1;
// Explanation: num is zero, return -1

const num5 = -1;
const expected5 = -1;
// Explanation: num is less than zero, return -1

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function rFactorial(num) {
    num = Math.floor(num);
    if ( num <= 1 ){
        return num;
    }
    return rFactorial(num-1) * num;
}
  // pseudo code
  // base case
  // progression
  // call itself



console.log(rFactorial(num1) + " Expected " + expected1 );
console.log(rFactorial(num2) + " Expected " + expected2 );
console.log(rFactorial(num3) + " Expected " + expected3 );
console.log(rFactorial(num4) + " Expected " + expected4 );
console.log(rFactorial(num5) + " Expected " + expected5 );