/* https://leetcode.com/problems/path-sum/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum, currentSum = 0) {
	if (!root) {
		return false;
	}

	currentSum += root.val;

	if (root.left || root.right) {
		return !!(
			(root.left && hasPathSum(root.left, sum, currentSum)) ||
			(root.right && hasPathSum(root.right, sum, currentSum))
		);
	} else {
		return currentSum === sum;
	}
};

let s = {
	val: 1,
	left: {
		val: 2
	}
};

// let s1 = {
// 	val: 5,
// 	left: {
// 		val: 4,
// 		left: {
// 			val: 11,
// 			left: {
// 				val: 7
// 			},
// 			right: {
// 				val: 2
// 			}
// 		}
// 	},
// 	right: {
// 		val: 8,
// 		left: {
// 			val: 13
// 		},
// 		right: {
// 			val: 4,
// 			right: {
// 				val: 1
// 			}
// 		}
// 	}
// };

console.log(hasPathSum(s, 0));
