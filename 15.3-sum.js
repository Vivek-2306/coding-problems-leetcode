/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  let tempSum = 0;
  for (let i = 0; i < 3; i++) {
    tempSum += nums[i];
  }
  if (tempSum === 0) result.push(nums.slice(0, 3));
  for (let j = 3; j < nums.length; j++) {
    const sum = tempSum - nums[j - 3] + nums[j];
    if (sum === 0) {
      result.push(nums.slice(j, 3));
    }
  }
  console.log("result", result);
};
// @lc code=end

threeSum([-1, 0, 1, 2, -1, -4]);
