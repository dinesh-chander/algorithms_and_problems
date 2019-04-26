/* https://leetcode.com/problems/sort-array-by-parity/ */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
	let temp2 = [];

	for (let i = 0; i < A.length; i++) {
		A[i] % 2 === 0 ? temp2.push(...A.splice(i--, 1)) : 0;
	}

	return temp2.concat(A);
};

console.log(sortArrayByParity([3, 1, 2, 4]));

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([2]));
