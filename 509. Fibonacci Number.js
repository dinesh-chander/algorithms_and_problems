/* https://leetcode.com/problems/fibonacci-number/ */

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
	if (N === 0) {
		return 0;
	}

	let i = 0,
		j = 1;

	N -= 2;

	while (0 <= N--) {
		[i, j] = [j, i + j];
	}

	return j;
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(1300));
