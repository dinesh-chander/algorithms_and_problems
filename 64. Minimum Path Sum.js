/* https://leetcode.com/problems/minimum-path-sum/ */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
	for (let i = grid.length - 1; 0 <= i; i--) {
		for (let j = grid[i].length - 1; 0 <= j; j--) {
			if (j === grid[i].length - 1 && i + 1 <= grid.length - 1) {
				grid[i][j] += grid[i + 1][j];
			} else if (i === grid.length - 1 && j + 1 <= grid[i].length - 1) {
				grid[i][j] += grid[i][j + 1];
			} else if (j + 1 <= grid[i].length - 1 && i + 1 <= grid.length - 1) {
				grid[i][j] += Math.min(grid[i + 1][j], grid[i][j + 1]);
			}
		}
	}

	return grid[0][0];
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));

/*
[
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]

[
	[ 2, 5, 2 ],
	[ 5, 7, 2 ],
	[ 7, 3, 1 ] ]
 */
