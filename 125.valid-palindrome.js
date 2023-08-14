/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const originalString = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  const pallindromeString = originalString.split("").reverse().join("");
  return pallindromeString === originalString;
};
// @lc code=end
