/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const rArr = ransomNote.split("");
  const mArr = magazine.split("");

  for (let char of mArr) {
    if (rArr.includes(char)) {
      rArr.splice(rArr.indexOf(char), 1);
    }
  }
  return rArr.length === 0;
};
// @lc code=end
