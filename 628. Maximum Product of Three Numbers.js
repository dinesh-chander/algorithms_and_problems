/* https://leetcode.com/problems/maximum-product-of-three-numbers/ */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
	nums.sort((a, b) => a - b);
	let a = nums[0] * nums[1] * nums[nums.length - 1];
	let b = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
	return Math.max(a, b);
};

console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([1, 2, 3, 4]));
