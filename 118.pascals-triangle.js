/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
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
  return result;
};
// @lc code=end

/**
 *  EXPLANATION: --
 * 
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  let result = [];
  for (let row = 1; row <= numRows; row++) {
    console.log("ROW-STEP:", row);
    console.log("result", result);
    let resArr = [];
    console.log("resArr", resArr);
    for (let col = 0; col < row; col++) {
      console.log("COL-STEP:", col);
      if (col === 0 || col === row - 1) {
        console.log("COL === 0");
        resArr.push(1);
      } else {
        console.log("COL !== 0", {
          result: result,
          "row-2": row - 2,
          "col-1": col - 1,
          col: col,
          res1: [row - 2, col - 1],
          res2: [row - 2, col],
        });
        resArr.push(result[row - 2][col - 1] + result[row - 2][col]);
      }
      console.log("COL-resArray", resArr);
    }
    result.push(resArr);
    console.log("Row-result", result);
    console.log("/n ============================== /n");
  }
  console.log("final-result", result);
  return result;
 */
