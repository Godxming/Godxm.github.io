/*
 * @lc app=leetcode.cn id=2712 lang=javascript
 *
 * [2712] 使所有字符相等的最小成本
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function (s) {
    var res = 0;
    for (var i = 1; i < s.length; i++) {
        if (s[i] != s[i - 1]) {
            res += Math.min(i, s.length - i);
        }
    }

    return res;
};
// @lc code=end

minimumCost("001011");