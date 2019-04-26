/* https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/ */

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
	let sum = 0;
	for (let i = 0; i < A.length; i++) {
		sum += A[i];
	}

	let count = 0;
	let temp = 0;
	let thirdPart = sum / 3;

	for (let i = 0; i <= A.length; i++) {
		if (temp === thirdPart) {
			temp = 0;
			count++;
		}

		temp += A[i];
	}

	console.log(count);
	return count === 3;
};

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]));
