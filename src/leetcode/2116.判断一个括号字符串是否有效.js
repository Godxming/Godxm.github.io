/*
 * @lc app=leetcode.cn id=2116 lang=javascript
 *
 * [2116] 判断一个括号字符串是否有效
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
    var len = s.length;
    if (len % 2 != 0) return false; /// 如果长度为奇数，肯定不满足

    var i;
    /// 遍历左括号情况
    var lCount = 0
    for (i = 0; i < len; i++) {
        if (s[i] == "(" || locked[i] == "0") {
            lCount++;
        } else {
            lCount--;
        }

        if (lCount < 0) return false;
    }

    /// 便利右括号情况
    var rCount = 0;
    for (i = len - 1; i >= 0; i--) {
        if (s[i] == ")" || locked[i] == "0") {
            rCount++
        } else {
            rCount--;
        }

        if (rCount < 0)
            return false;
    }

    return true;

};
// @lc code=end

