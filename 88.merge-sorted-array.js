/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;
  nums1.push(...nums2);
  nums1.sort(function (a, b) {
    return a - b;
  });

  //   console.log({ res1, res2 });
  //   let result = null;
  //   if (m > 0 && n > 0) result = res1.concat(res2);
  //   if (m > 0 && n === 0) result = res1;
  //   if (n > 0 && m === 0) result = res2;
  //   console.log({ result });
  //   return result;
};
// @lc code=end
