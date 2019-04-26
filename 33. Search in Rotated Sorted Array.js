/* https://leetcode.com/problems/search-in-rotated-sorted-array/ */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// var search = function (nums, target) {
// 	let start = 0,
// 		end = nums.length - 1,
// 		mid;

// 	while (start <= end) {
// 		mid = Math.floor((start + end) / 2);

// 		if (nums[mid] === target) {
// 			return mid;
// 		}

// 		if (nums[mid] < target) {
// 			if (nums[end] < nums[mid] || target <= nums[end]) {
// 				start = mid + 1;
// 			} else {
// 				end = mid;
// 			}
// 		} else {
// 			if (nums[mid] < nums[start] || nums[start] <= target) {
// 				end = mid;
// 			} else {
// 				start = mid + 1;
// 			}
// 		}
// 	}

// 	return -1;
// };


console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([5, 1, 3], 5));
console.log(search([3, 1], 3));
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8));
console.log(search([3, 4, 5, 6, 1, 2], 2));
console.log(search([3, 5, 1], 3));
console.log(search([], 5));
console.log(search([1, 3, 5], 5));