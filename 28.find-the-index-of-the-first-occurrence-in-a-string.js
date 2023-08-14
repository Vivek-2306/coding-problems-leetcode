/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const hLen = haystack.length;
  const nLen = needle.length;
  if (haystack === needle) return 0;
  for (let i = 0; i <= hLen - nLen; i++) {
    const subHaystack = haystack.substring(i, i + nLen);
    if (subHaystack === needle) {
      return i;
    }
  }
  return -1;
};
// @lc code=end
