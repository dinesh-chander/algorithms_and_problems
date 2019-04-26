/* https://leetcode.com/problems/validate-binary-search-tree/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function(root, min, max) {
	if (!root) {
		return true;
	}

	if (min !== undefined && root.val <= min) {
		return false;
	}

	if (max !== undefined && root.val >= max) {
		return false;
	}

	return (
		isValidBST(root.left, min, root.val) &&
		isValidBST(root.right, root.val, max)
	);
};

let s = {
	val: 5,
	left: {
		val: 1
	},
	right: {
		val: 4,
		left: {
			val: 3
		},
		right: {
			val: 6
		}
	}
};

console.log(isValidBST(s));
