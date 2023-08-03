/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const sortArray = [...nums].sort((a, b) => b - a);
  const n = sortArray[0];
  let missingNumber = -1;
  for (let i = 0; i <= n; i++) {
    if (!sortArray.includes(i)) {
      console.log("i-2", i);
      missingNumber = i;
    }
  }
  if (missingNumber < 0) missingNumber = n + 1;
  return missingNumber;
};
// @lc code=end
