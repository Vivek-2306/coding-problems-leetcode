/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let maxStoredWater = 0;

  while (leftIndex !== rightIndex) {
    const leftHeight = height[leftIndex];
    const rightHeight = height[rightIndex];
    const width = rightIndex - leftIndex;
    const smallerHeight = leftHeight < rightHeight ? leftHeight : rightHeight;
    const storedWater = width * smallerHeight;
    maxStoredWater =
      storedWater > maxStoredWater ? storedWater : maxStoredWater;
    smallerHeight == leftHeight ? leftIndex++ : rightIndex--;
  }
  return maxStoredWater;
};
// @lc code=end
