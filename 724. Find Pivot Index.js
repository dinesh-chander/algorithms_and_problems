/* https://leetcode.com/problems/find-pivot-index/ */

/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {
	let i = 0,
		sum1 = 0,
		sum2 = 0;

	while (i < nums.length) {
		sum2 += nums[i++];
	}

	for (let i = 0; i < nums.length; i++) {
		if (sum1 === sum2 - nums[i] - sum1) {
			return i;
		}

		sum1 += nums[i];
	}

	return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([[1, 2, 3]]));

console.log(pivotIndex([-1, -1, -1, 0, 1, 1]));
