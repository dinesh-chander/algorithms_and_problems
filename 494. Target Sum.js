/* https://leetcode.com/problems/target-sum/ */

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// var findTargetSumWays = function(nums, S) {
// 	var dict = [];

// 	var check = (index, currentSum) => {
// 		if (nums.length <= index) {
// 			return currentSum === S ? 1 : 0;
// 		}

// 		if (dict[index] && dict[index][currentSum] !== undefined) {
// 			return dict[index][currentSum];
// 		} else {
// 			dict[index] = dict[index] || {};
// 			dict[index][currentSum] =
// 				check(index + 1, currentSum + nums[index]) +
// 				check(index + 1, currentSum - nums[index]);

// 			return dict[index][currentSum];
// 		}
// 	};

// 	return check(0, 0);
// };

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
