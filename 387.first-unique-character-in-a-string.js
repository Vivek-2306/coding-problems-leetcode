/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const count = {};
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  let result = -1;
  for (let key in count) {
    if (count[key] === 1) {
      result = s.indexOf(key);
      break;
    }
  }
  return result;
};
// @lc code=end
