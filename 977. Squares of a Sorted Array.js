/* https://leetcode.com/problems/squares-of-a-sorted-array/ */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
	return A.sort((a, b) => Math.abs(a) - Math.abs(b)).map(a => Math.pow(a, 2));
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
