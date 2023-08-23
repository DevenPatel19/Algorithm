/* 
  Return the Fibonacci number at the nth position, recursively.
  
  Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

  The next number is found by adding up the two numbers before it,
  starting with 0 and 1 as the first two numbers of the sequence.
*/

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
function fibonacci(num) {
  if (num == 0) {
    return 0;
  }
  var n1 = 0;
  var n2 = 1;
  var n3 = n1 + n2;
  var i = 1;
  // base case = when run function num times
  while (i <= num) {
    n1 = n2;
    n2 = n3;
    n3 = n1 + n2;
    i++;
  }
  return n1;
}
// console.log(fibonacci(num1) + " expected " + expected1);
// console.log(fibonacci(num2) + " expected " + expected2);
// console.log(fibonacci(num3) + " expected " + expected3);
// console.log(fibonacci(num4) + " expected " + expected4);
// console.log(fibonacci(num5) + " expected " + expected5);
// console.log(fibonacci(num6) + " expected " + expected6);

function rFib(num) {
  // base case if num less than 2 then return num
  if ( num < 2 ){
    return num;
  }
  // rFib current = rFib current-1 + rFib current -2
  return rFib(num - 1) + rFib(num-2);
  // if rFib = 0 we know our position
}

console.log(rFib(num1) + " expected " + expected1);
console.log(rFib(num2) + " expected " + expected2);
console.log(rFib(num3) + " expected " + expected3);
console.log(rFib(num4) + " expected " + expected4);
console.log(rFib(num5) + " expected " + expected5);
console.log(rFib(num6) + " expected " + expected6);
