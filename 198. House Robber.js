/* https://leetcode.com/problems/house-robber/ */
/**
 * @param {number[]} nums
 * @return {number}
 */

// var rob = function(nums) {
// 	let dict = {};

// 	let check = (index, sum) => {
// 		if (nums.length <= index) {
// 			return sum;
// 		}

// 		dict[index] = dict[index] || {};

// 		if (dict[index][sum] !== undefined) {
// 			return dict[index][sum];
// 		}

// 		dict[index][sum] = Math.max(
// 			check(index + 1, sum),
// 			check(index + 2, sum + nums[index])
// 		);

// 		return dict[index][sum];
// 	};

// 	dict[0] = {};
// 	check(0, 0);

// 	return dict[0][0] || 0;
// };

var rob = function(nums) {
	if (nums.length === 0) {
		return 0;
	}

	if (nums.length === 1) {
		return nums[0];
	}
	let temp1 = 0,
		temp2 = nums[0],
		temp3;

	for (let i = 1; i < nums.length; i++) {
		temp3 = Math.max(temp2, temp1 + nums[i]);
		temp1 = temp2;
		temp2 = temp3;
	}

	return temp2;
};

console.log(rob([2, 1, 1, 2]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
