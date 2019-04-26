/* https://leetcode.com/problems/longest-increasing-subsequence/ */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
	nums.reverse();

	let temp = [0];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i - 1]) {
		}
	}
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
