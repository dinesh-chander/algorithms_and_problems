/* https://leetcode.com/problems/maximal-rectangle/ */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
	let maxArea = 0;
	let dict = [];

	for (let i = 0; i < matrix.length; i++) {
		dict[i] = [];

		for (let j = 0; j < matrix[0].length; j++) {
			matrix[i][j] = parseInt(matrix[i][j]);

			if (0 <= i - 1 && 0 <= j - 1) {
				dict[i][j] = {
					r: dict[i - 1][j].r + matrix[i][j],
					c: dict[i][j - 1].c + matrix[i][j]
				};
			} else {
				dict[i][j] = {
					r: i - 1 < 0 ? matrix[i][j] : matrix[i][j] + dict[i - 1][j].r,
					c: j - 1 < 0 ? matrix[i][j] : matrix[i][j] + dict[i][j - 1].c
				};
			}
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {}
	}

	return maxArea;
};

console.log(
	maximalRectangle([
		['1', '0', '1', '0', '0'],
		['1', '0', '1', '1', '1'],
		['1', '1', '1', '1', '1'],
		['1', '0', '0', '1', '0']
	])
);

[
	[
		{ r: 1, c: 1 },
		{ r: 0, c: 1 },
		{ r: 1, c: 2 },
		{ r: 0, c: 2 },
		{ r: 0, c: 2 }
	],
	[
		{ r: 2, c: 1 },
		{ r: 0, c: 1 },
		{ r: 2, c: 2 },
		{ r: 1, c: 3 },
		{ r: 1, c: 4 }
	],
	[
		{ r: 3, c: 1 },
		{ r: 1, c: 2 },
		{ r: 3, c: 3 },
		{ r: 2, c: 4 },
		{ r: 2, c: 5 }
	],
	[
		{ r: 4, c: 1 },
		{ r: 1, c: 1 },
		{ r: 3, c: 1 },
		{ r: 3, c: 2 },
		{ r: 2, c: 2 }
	]
];
