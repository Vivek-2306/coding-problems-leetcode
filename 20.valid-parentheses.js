/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let result = [];
    for(let i=0; i<s.length; i++) {
        let character = s.charAt(i);
        switch(character) {
            case '(': result.push(')');
                break;
            case '{': result.push('}');
                break;
            case '[': result.push(']');
                break;
            default: 
                if(character !== result.pop()) {
                    return false;
                }
        }
    }
    return result.length === 0
};
// @lc code=end

