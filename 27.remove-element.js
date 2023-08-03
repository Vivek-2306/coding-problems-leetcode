/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      count++;
      delete nums[i];
    }
  }
  nums = nums.sort((a, b) => a - b);
  return nums.length - count;
};
// @lc code=end
