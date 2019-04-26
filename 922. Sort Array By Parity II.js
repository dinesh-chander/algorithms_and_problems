/* https://leetcode.com/problems/sort-array-by-parity-ii/ */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
	let a = [],
		b = [];
	let ans = [];

	for (let i = 0; i < A.length; i++) {
		A[i] % 2 ? a.push(A[i]) : b.push(A[i]);
	}

	for (let i = 0; i < A.length; i++) {
		i % 2 ? ans.push(a.pop()) : ans.push(b.pop());
	}

	return ans;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
