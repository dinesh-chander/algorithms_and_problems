/* https://leetcode.com/problems/maximum-length-of-pair-chain/ */

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
	let dict = {};
	let ans = 0;

	pairs.sort((a, b) => {
		return a[1] - b[1];
	});

	let compute = (index, len) => {
		if (dict[index] !== undefined) {
			return dict[index];
		}

		len++;
		let temp = pairs[index];
		pairs.splice(index, 1);

		ans = Math.max(ans, len);

		for (let i = index; i < pairs.length; i++) {
			if (temp[1] < pairs[i][0]) {
				compute(i, len);
			}
		}

		dict[index] = Math.max(len, dict[index] || 0);
		pairs.splice(index, 0, temp);
	};

	compute(0, 0);

	return ans;
};

console.log(findLongestChain([[1, 2], [2, 3], [3, 4]]));
console.log(
	findLongestChain([
		[-10, -8],
		[8, 9],
		[-5, 0],
		[6, 10],
		[-6, -4],
		[1, 7],
		[9, 10],
		[-4, 7]
	])
);
