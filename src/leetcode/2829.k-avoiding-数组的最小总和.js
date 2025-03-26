/*
 * @lc app=leetcode.cn id=2829 lang=javascript
 *
 * [2829] k-avoiding 数组的最小总和
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function (n, k) {
    if (n == 1) { /// 此时数组压根没有元素对 所以本身就是 k-avoiding 数组
        return 1;
    }

    var res = 0;
    /// 默认数组为递增[1,2,3,4,……,n] 也就是最大的求和元素对 为尾项和次尾项， 判断其是否＞=k 如果>=k 代表数组中可以找出求和=k的元素对，此时需要把该元素对，大的那个值去掉，并且增加n+1
    if (2 * n - 1 >= k) {
        var count = parseInt((k - 1) / 2);
        /// 可以找到规则 实际需要把等差数列 k之前的由大到小一半元素去除，并在末尾增加相应个数 而他们的差值其实是固定的可得公式[n+count-(k-1)]*count 然后再加上原本等差数列的值即是k-avoiding 数组的可能的最小总和
        res = (n + count - (k - 1)) * count + ((1 + n) * n / 2); 
    }
    else {
        /// 因为是一开始默认是等差数组 求合可以用公式
        res = ((1 + n) * n / 2);
    }
    return res;
};
// @lc code=end

minimumSum(3, 5);