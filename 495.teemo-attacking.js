/*
 * @lc app=leetcode id=495 lang=javascript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0) return 0;
  let res = duration;
  for (let i = 1; i < timeSeries.length; i++) {
    res += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
  }
  return res;
};
// @lc code=end
