/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const resArr = [...new Set(nums)];
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (!resArr.includes(i)) {
      result.push(i);
    }
  }
  return result;
};
// @lc code=end
