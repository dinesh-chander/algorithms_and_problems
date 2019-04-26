/* https://leetcode.com/problems/kth-largest-element-in-an-array/ */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// var findKthLargest = function(nums, k) {
// let ans;
// let root = {
// 	val: nums[0],
// 	count: 1
// };
// let add = (root, val) => {
// 	if (val === root.val) {
// 		root.count++;
// 		return;
// 	}
// 	if (val < root.val) {
// 		if (!root.left) {
// 			root.left = {
// 				val: val,
// 				count: 1
// 			};
// 		} else {
// 			add(root.left, val);
// 		}
// 	}
// 	if (root.val < val) {
// 		if (!root.right) {
// 			root.right = {
// 				val: val,
// 				count: 1
// 			};
// 		} else {
// 			add(root.right, val);
// 		}
// 	}
// };
// for (let i = 1; i < nums.length; i++) {
// 	add(root, nums[i]);
// }
// let compute = (root, sum) => {
// 	if (ans !== undefined) {
// 		return 0;
// 	}
// 	if (root.right) {
// 		sum = compute(root.right, sum);
// 	}
// 	sum += root.count;
// 	if (ans === undefined && k <= sum) {
// 		ans = root.val;
// 	}
// 	if (root.left) {
// 		sum = compute(root.left, sum);
// 		if (ans === undefined && k <= sum) {
// 			ans = root.val;
// 		}
// 	}
// 	return sum;
// };
// compute(root, 0);
// console.log(root);
// return ans;
// };

var findKthLargest = function(nums, k) {
	nums.sort((a, b) => b - a);

	return nums[k - 1];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4, 2], 2));
console.log(findKthLargest([0, -1, 2], 2));
