/* https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
	if (!root) {
		return root;
	}

	if (root === p || root === q) {
		return root;
	}

	let left = lowestCommonAncestor(root.left, p, q);

	let right = lowestCommonAncestor(root.right, p, q);

	if (left && right) {
		return root;
	}

	return left || right;
};

let p = { val: 5 };
let q = { val: 1 };

let s = {
	val: 3,
	left: {
		val: 5,
		left: {
			val: 6
		},
		right: {
			val: 2,
			left: {
				val: 7
			},
			right: {
				val: 4
			}
		}
	},
	right: {
		val: 1,
		left: {
			val: 0
		},
		right: {
			val: 8
		}
	}
};

console.log(lowestCommonAncestor(s, p, q));
