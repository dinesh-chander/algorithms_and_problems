/* https://leetcode.com/problems/contains-duplicate/ */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	let dict = {};

	for (let i = 0; i < nums.length; i++) {
		if (!dict[nums[i]]) {
			dict[nums[i]] = true;
		} else {
			return true;
		}
	}

	return false;
};
