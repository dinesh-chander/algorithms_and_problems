/* https://leetcode.com/problems/flipping-an-image/ */

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
	for (let i = 0; i < A.length; i++) {
		A[i] = A[i].reverse();

		for (let j = 0; j < A[i].length; j++) {
			A[i][j] = A[i][j] === 0 ? 1 : 0;
		}
	}

	return A;
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
