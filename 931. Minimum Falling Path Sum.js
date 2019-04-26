/* https://leetcode.com/problems/minimum-falling-path-sum/ */

/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
	for (let i = A.length - 2; 0 <= i; i--) {
		for (j = 0; j < A[i].length; j++) {
			if (j - 1 < 0) {
				A[i][j] += Math.min(A[i + 1][j], A[i + 1][j + 1]);
			} else if (A[i].length <= j + 1) {
				A[i][j] += Math.min(A[i + 1][j], A[i + 1][j - 1]);
			} else {
				A[i][j] += Math.min(A[i + 1][j], A[i + 1][j - 1], A[i + 1][j + 1]);
			}
		}
	}

	return Math.min(...A[0]);
};

console.log(minFallingPathSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
