/* https://leetcode.com/problems/maximum-average-subarray-i/ */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
	let ans = 0,
		sum = 0;

	for (let i = 0; i < k; i++) {
		sum += nums[i];
	}

	ans = sum / k;

	for (let i = 1; i + k - 1 < nums.length; i++) {
		sum += nums[i + k - 1] - nums[i - 1];
		console.log(sum);
		ans = Math.max(sum / k, ans);
	}

	return ans;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
