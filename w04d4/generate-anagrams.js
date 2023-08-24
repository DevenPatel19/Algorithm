// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129
/* 
  String Anagrams

  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).

  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams(str) {
  const anagrams = [];

  // Base case: if the string is empty, return an array with an empty string
  if (str.length === 0) {
    return [''];
  }

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1); // Exclude the current character

    // Recursive call to generate anagrams for the remaining characters
    const subAnagrams = generateAnagrams(remainingChars);

    // Combine the current character with the sub-anagrams
    for (const subAnagram of subAnagrams) {
      anagrams.push(char + subAnagram);
    }
  }

  return anagrams;
}

console.log(generateAnagrams(str1) + " Expected " + expected1)