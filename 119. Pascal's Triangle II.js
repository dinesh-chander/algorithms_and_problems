/* https://leetcode.com/problems/pascals-triangle-ii/ */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
	let ans = new Array(rowIndex + 1);

	ans[0] = ans[ans.length - 1] = 1;

	for (let i = 1; i <= rowIndex; i++) {
		ans[i] = rowIndex - 1;
	}

	return ans;
};
