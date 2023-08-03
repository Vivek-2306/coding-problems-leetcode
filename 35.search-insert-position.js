/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const index = nums.indexOf(target);
  if (index !== -1) return index;
  nums.push(target);
  nums.sort((a, b) => a - b);
  return nums.indexOf(target);
};
// @lc code=end
