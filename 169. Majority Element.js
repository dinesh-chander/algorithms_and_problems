/**
 * @param {number[]} nums
 * @return {number}
 */

// var majorityElement = function(nums) {
// 	nums.sort((a, b) => {
// 		return a - b;
// 	});

// 	return nums[parseInt(nums.length / 2)];

// 	// let lastIndex = 0,
// 	// 	max = 0,
// 	// 	ans = nums[0],
// 	// 	temp,
// 	// 	i = 0;

// 	// while (i <= nums.length) {
// 	// 	if (nums[i] != nums[lastIndex]) {
// 	// 		temp = i - 1 - lastIndex;

// 	// 		console.log(max, temp);

// 	// 		if (max < temp) {
// 	// 			ans = nums[lastIndex];
// 	// 			max = temp;
// 	// 		}

// 	// 		lastIndex = i;
// 	// 	} else {
// 	// 		i++;
// 	// 	}
// 	// }

// 	// return ans;
// };

var majorityElement = nums => {
	let count = 0;
	let candidate = nums[0];

	for (let i = 0; i < nums.length; i++) {
		console.log(candidate, count);
		if (count === 0) {
			candidate = nums[i];
			count = 1;
		} else {
			count += candidate === nums[i] ? 1 : -1;
		}
	}

	return candidate;
};

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// console.log(majorityElement([1, 2]));
console.log(majorityElement([3, 3, 4]));
