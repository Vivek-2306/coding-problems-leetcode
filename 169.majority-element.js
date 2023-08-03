/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majority = 0;
  const unique = [...new Set(nums)];
  for (let i = 0; i < unique.length; i++) {
    const array = nums.filter((num) => num === unique[i]);
    const length = array.length;
    if (length > Math.abs(nums.length / 2)) majority = unique[i];
  }
  return majority;
};
// @lc code=end
