/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  return Array.from(String(BigInt(digits.join("")) + BigInt(1)), Number);
};
// @lc code=end
