/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s
    .split(" ")
    .filter((word) => word.length !== 0)
    .reverse()[0].length;
};
// @lc code=end
