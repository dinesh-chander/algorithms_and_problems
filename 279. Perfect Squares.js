/* https://leetcode.com/problems/perfect-squares/ */

/**
 * @param {number} n
 * @return {number}
 */

var numSquares = function (n) {
	let squares = [];
	let i,
		j = parseInt(Math.sqrt(n));

	while (j) {
		squares.push(j * j);
		j--;
	}

	let dict = {};

	let compute = val => {
		if (val <= 0) {
			return 0;
		}

		if (val in dict) {
			return dict[val];
		}

		j = Infinity;
		for (let i = 0; i < squares.length; i++) {
			if (0 <= val - squares[i]) {
				j = Math.min(j, compute(val - squares[i]));
			}
		}

		dict[val] = j === Infinity ? 0 : j + 1;
		return dict[val];
	};

	compute(n);
	return dict[n];
};

console.log(numSquares(89061));
console.log(numSquares(13));