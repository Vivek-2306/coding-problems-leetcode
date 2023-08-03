/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const zerosArr = nums.filter((num) => num === 0);
  const nonZeros = nums.filter((num) => num !== 0);
  nums.splice(0, nums.length);
  nums.push(...nonZeros, ...zerosArr);
};

// @lc code=end
