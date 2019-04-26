/**
 * @param {number[]} nums
 * @return {number}
 */

var findUnsortedSubarray = function (nums) {
	let i = 0, j = nums.length - 1;

	while (nums[i] <= nums[i + 1]) {
		i++;
	}

	while (nums[j - 1] <= nums[j]) {
		j--;
	}

	if (j <= i) {
		return 0;
	}

	let min = nums[i], max = nums[j];

	for (let k = i; k <= j; k++) {
		min = Math.min(min, nums[k]);
		max = Math.max(max, nums[k]);
	}

	i = 0;
	j = nums.length - 1;

	while (nums[i] <= min) {
		i++;
	}

	while (max <= nums[j]) {
		j--;
	}

	return j - i + 1;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log(findUnsortedSubarray([1]));
console.log(findUnsortedSubarray([0,1]));
console.log(findUnsortedSubarray([0, 2, 1, 3, 3, 3]));
console.log(findUnsortedSubarray([1, 0]));
console.log(findUnsortedSubarray([0, 2, 4, 3, 3, 3]));
console.log(findUnsortedSubarray([1, 3, 5, 4, 2]));

/*
  Input: [2, 6, 4, 8, 10, 9, 15]
  Output: 5
  Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
*/