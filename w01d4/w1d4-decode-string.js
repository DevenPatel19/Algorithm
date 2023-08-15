 
  // String Decode  


const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
  let decodedString = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the current character is a letter, check if there is an integer after it.
    if (/[a-zA-Z]/.test(char)) {
      let numString = "";
      i++;

      // Extract the integer following the current character, if any.
      while (i < str.length && /[0-9]/.test(str[i])) {
        numString += str[i];
        i++;
      }

      // Convert the extracted integer string to an actual integer.
      const repeatCount = parseInt(numString, 10) || 1;

      // Repeat the current character by the repeatCount and add it to the decoded string.
      decodedString += char.repeat(repeatCount);

      // Decrement i by 1 so that the loop increments it back to the correct position.
      i--;
    }
  }

  return decodedString;
}

// Test cases

console.log(decodeStr(str1)); 
// Output: "aaabbcddd"


console.log(decodeStr(str2)); 
// Output: "aaabbccccccccccccdddddddddd"

