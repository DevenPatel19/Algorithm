
// Encode String

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */

function encodeStr(str) {
  // If the input string is empty or null, return an empty string.
  if (!str) {
    return "";
  }

  // Initialize variables to keep track of the encoded string.
  let encodedString = "";
  let currentChar = str[0];
  let count = 1;

  // Iterate through the characters of the input string starting from the second character (index 1).
  for (let i = 1; i < str.length; i++) {
    // If the current character is the same as the previous character, increment the count.
    if (str[i] === currentChar) {
      count++;
    } else { // If a new character is encountered:
      // Append the previous character and its count to the encoded string.
      encodedString += currentChar + count;
      // Update the current character and reset the count to 1 for the new character.
      currentChar = str[i];
      count = 1;
    }
  }

  // After the loop, add the last character and its count to the encoded string.
  encodedString += currentChar + count;

  // Check if the encoded string is shorter than the original string.
  // If it is, return the encoded string; otherwise, return the original string.
  return encodedString.length < str.length ? encodedString : str;
}


  // Test cases

  console.log(encodeStr(str1)); // Output: "a4b2c1d3"

  console.log(encodeStr(str2)); // Output: ""
  
  console.log(encodeStr(str3)); // Output: "a"
  
  console.log(encodeStr(str4)); // Output: "bbcc"