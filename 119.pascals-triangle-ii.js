/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const numRows = rowIndex + 1;
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  let result = [];
  for (let row = 1; row <= numRows; row++) {
    let resArr = [];
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        resArr.push(1);
      } else {
        resArr.push(result[row - 2][col - 1] + result[row - 2][col]);
      }
    }
    result.push(resArr);
  }
  return result[rowIndex];
};
// @lc code=end
