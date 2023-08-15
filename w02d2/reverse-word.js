/* 
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */

function reverseString(str) {
    // Create a new variable to store the reversed string
    var newStr = '';
    var wordArr = str.split(" ")

    for (const word of wordArr){
      let revWord = reverse(word);
      newStr += revWord
      newStr += " "
    }
  return newStr.slice(0,newstr.length-1)
  }
console.log(reverseString(str1))
console.log(reverseString(str2))
console.log(reverseString(str3))
