/* https://leetcode.com/problems/find-the-duplicate-number/ */

/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function (nums) {
	let sum = 0,
		sum1 = 0;
	let max = Math.max(...nums);

	for (let i = 1; i <= max; i++) {
		sum1 += i;
	}

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
	}

	if (sum < sum1) {
		console.log(sum);
	} else {
		console.log(sum);
	}
};
console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([1, 2, 2]));
console.log(findDuplicate([1, 1]));