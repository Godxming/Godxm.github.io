/*
 * @lc app=leetcode.cn id=2711 lang=javascript
 *
 * [2711] 对角线上不同值的数量差
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var differenceOfDistinctValues = function (grid) {
    var res = [];

    var xLen = grid.length;
    var yLen = grid[0].length;

    var tempX;
    var tempY;
    var tempCount;
    var tempObj;
    for (var i = 0; i < xLen; i++) {
        res[i] = [];
        for (var j = 0; j < yLen; j++) {
            tempX = i;
            tempY = j;
            tempCount = 0;
            tempObj = {};
            if (i == 0 || j == 0) {  /// 第 0 列 和第 0 行的左上角都是空数组，所以只要求得右下角的不同值数量就可
                while (tempX < xLen - 1 && tempY < yLen - 1) {
                    tempX++;
                    tempY++;
                    if ((grid[tempX][tempY] in tempObj) == false) {
                        tempObj[grid[tempX][tempY]] = 1;
                        tempCount++;
                    }
                }
            }
            else if (i == xLen - 1 || j == yLen - 1) { /// 最后一列 和 最后一行的 右下角都是空数组，所以只要求得左下角的不同值数量就可
                while (tempX > 0 && tempY > 0) {
                    tempX--;
                    tempY--;
                    if ((grid[tempX][tempY] in tempObj) == false) {
                        tempObj[grid[tempX][tempY]] = 1;
                        tempCount++;
                    }
                }
            }
            else {
                var ltCount = 0;
                /// 左上角不同值数量
                while (tempX > 0 && tempY > 0) {
                    tempX--;
                    tempY--;
                    if ((grid[tempX][tempY] in tempObj) == false) {
                        tempObj[grid[tempX][tempY]] = 1;
                        ltCount++;
                    }
                }
                tempX = i;
                tempY = j;
                tempObj = {};
                var rbCount = 0;
                /// 右下角不同值数量
                while (tempX < xLen - 1 && tempY < yLen - 1) {
                    tempX++;
                    tempY++;
                    if ((grid[tempX][tempY] in tempObj) == false) {
                        tempObj[grid[tempX][tempY]] = 1;
                        rbCount++;
                    }
                }
                tempCount = Math.abs(ltCount - rbCount);
            }
            res[i][j] = tempCount;
        }
    }

    return res;
};
// @lc code=end

differenceOfDistinctValues([
    [1, 2, 3],
    [3, 1, 5],
    [3, 2, 1]
]);