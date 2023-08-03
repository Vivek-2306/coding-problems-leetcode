/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let resultCount = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;
    else count = 0;
    if (count > resultCount) resultCount = count;
  }
  return resultCount;
};
// @lc code=end
