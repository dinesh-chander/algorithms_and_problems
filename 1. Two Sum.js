/* https://leetcode.com/problems/two-sum/ */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let dict = [];
	let ans = [];

	for (let i = 0; i < nums.length; i++) {
		dict[nums[i]] = i;
	}

	for (let i = 0; i < nums.length; i++) {
		let temp = dict[target - nums[i]];

		if (temp !== undefined && temp !== i) {
			ans[0] = i;
			ans[1] = temp;
			break;
		}
	}

	return ans;
};

// console.log(twoSum([2, 7, 11, 15], 9));

console.log(twoSum([3, 2, 4], 6));
