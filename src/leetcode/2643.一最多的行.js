/*
 * @lc app=leetcode.cn id=2643 lang=javascript
 *
 * [2643] 一最多的行
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    var res = [100, 0];
    
    /// 因为 "如果有多行包含最多的 1 ，只需要选择 行下标最小 的那一行"  所以直接反向遍历
    for (var i = mat.length - 1; i >= 0; i--) {
        var count = 0;
        for (var j = 0; j < mat[i].length; j++) {
            if (mat[i][j] == 1) {
                count++;
            }
        }
        if (count >= res[1]) {
            res[0] = i;
            res[1] = count;
        }
    }
    return res;
};
// @lc code=end

// rowAndMaximumOnes([[0,1],[1,0]])