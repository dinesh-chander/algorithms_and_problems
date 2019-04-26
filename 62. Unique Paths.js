/* https://leetcode.com/problems/unique-paths/ */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
// 	let dict = [];

// 	let compute = (i, j) => {
// 		dict[i] = dict[i] || [];

// 		let a = 0,
// 			b = 0;

// 		if (dict[i][j] !== undefined) {
// 			return dict[i][j];
// 		}

// 		if (i === m - 1 && j === n - 1) {
// 			return 1;
// 		}

// 		if (i + 1 < m) {
// 			a = compute(i + 1, j);
// 		}

// 		if (j + 1 < n) {
// 			b = compute(i, j + 1);
// 		}

// 		dict[i][j] = a + b;

// 		return dict[i][j];
// 	};

// 	dict[0] = [compute(0, 0)];
// 	return dict[0][0];
// };

var uniquePaths = function(m, n) {
	let dict = [];

	let compute = (i, j) => {
		if (m <= i || n <= j) {
			return 0;
		}

		dict[i] = dict[i] || [];

		if (dict[i][j] !== undefined) {
			return dict[i][j];
		}

		if (i === m - 1 && j === n - 1) {
			return 1;
		}

		dict[i][j] = compute(i + 1, j) + compute(i, j + 1);

		return dict[i][j];
	};

	dict[0] = [compute(0, 0)];
	return dict[0][0];
};

// var uniquePaths = function(m, n) {
// 	let dp = [];
// 	for (let i = 0; i < n; i++) {
// 		dp[i] = 1;
// 	}
// 	for (let i = 1; i < m; i++) {
// 		for (let j = 1; j < n; j++) {
// 			dp[j] += dp[j - 1];
// 		}
// 	}
// 	return dp[n - 1];
// };

console.log(uniquePaths(1, 1));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
