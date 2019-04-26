/* https://leetcode.com/problems/maximum-product-subarray/ */

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
	let a, b, ans, temp2, temp3;
	ans = a = b = nums[0];

	for (let i = 1; i < nums.length; i++) {
		temp = nums[i];
		temp2 = a * temp;
		temp3 = b * temp;

		a = Math.min(temp, temp2, temp3);
		b = Math.max(temp, temp2, temp3);

		ans = Math.max(ans, b);
	}

	return ans;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
