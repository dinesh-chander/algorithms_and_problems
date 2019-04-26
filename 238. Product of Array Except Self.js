/* https://leetcode.com/problems/product-of-array-except-self/ */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
	if (nums.length < 2) {
		return nums;
	}

	let product = 1;
	let a = [nums[0]];
	let b = [];
	let i = 1,
		j = nums.length - 2;

	b[nums.length - 1] = nums[nums.length - 1];

	while (i < nums.length && 0 <= j) {
		a[i] = nums[i] * a[i - 1];
		b[j] = nums[j] * b[j + 1];

		i++;
		j--;
	}

	for (let i = 1; i < nums.length - 1; i++) {
		nums[i] = a[i - 1] * b[i + 1];
	}

	nums[0] = b[1];
	nums[nums.length - 1] = a[nums.length - 2];

	return nums;
};

// var productExceptSelf = function(nums) {
// 	if (nums.length < 2) {
// 		return nums;
// 	}

// 	let temp;

// 	let compute = (index, product) => {
// 		if (index === nums.length - 1) {
// 			temp = nums[index];
// 			nums[index] = product;
// 			return temp;
// 		}

// 		temp = compute(index + 1, product * nums[index]);

// 		if (0 < index) {
// 			[temp, nums[index]] = [nums[index] * temp, product * temp];
// 			return temp;
// 		} else {
// 			nums[index] = temp;
// 			return;
// 		}
// 	};

// 	compute(0, 1);

// 	return nums;
// };

console.log(productExceptSelf([1]));
console.log(productExceptSelf([1, 2, 3, 4]));
