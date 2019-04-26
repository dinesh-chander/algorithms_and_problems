/* https://leetcode.com/problems/positions-of-large-groups/ */

/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
	let index = 0;
	let current;
	let ans = [];

	for (let i = 0; i <= S.length; i++) {
		if (current !== S[i]) {
			if (3 <= i - index) {
				ans.push([index, i - 1]);
			}

			current = S[i];
			index = i;
		}
	}

	return ans;
};

console.log(largeGroupPositions('abbxxxxzzy'));
