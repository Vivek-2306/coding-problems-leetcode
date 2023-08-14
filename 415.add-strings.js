/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  if (num1 === "0" && num2 === "0") return "0";
  if (num1 === "0") return num2;
  if (num2 === "0") return num1;

  return String(BigInt(num1) + BigInt(num2));
};
// @lc code=end
