/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = s.match(/[aeiou]/gi);
  return s.replace(/[aeiou]/gi, (char) => vowels.pop());
};
// @lc code=end
