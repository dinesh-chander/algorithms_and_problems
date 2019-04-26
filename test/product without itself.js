/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
	let a = [nums[0]];
	let b = [];

	let i = 1,
		j = nums.length - 2;

	b[nums.length - 1] = nums[nums.length - 1];

	while (i < nums.length && 0 <= j) {
		a[i] = a[i - 1] * nums[i];
		b[j] = nums[j] * b[j + 1];

		i++;
		j--;
	}

	nums[0] = b[1];
	nums[nums.length - 1] = a[a.length - 2];

	for (j = 1; j < nums.length - 1; j++) {
		nums[j] = a[j - 1] * b[j + 1];
	}

	return nums;
};

console.log(productExceptSelf([1, 2, 3, 4]));
