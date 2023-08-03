/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergeArrays = [...nums1, ...nums2].sort((a, b) => a - b);
  const n = mergeArrays.length;
  const even1 = n / 2 - 1;
  const even2 = n / 2;
  const odd = (n + 1) / 2 - 1;
  const evenFormula = (mergeArrays[even1] + mergeArrays[even2]) / 2;
  const oddFormula = mergeArrays[odd];
  console.log({ evenFormula, oddFormula });
  if (n % 2 === 0) {
    return evenFormula;
  }
  return oddFormula;
};
// @lc code=end
