/* https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/ */

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

	if (root.val > p.val && root.val > q.val) {
		return lowestCommonAncestor(root.left, p, q);
	} else if (root.val < p.val && root.val < q.val) {
		return lowestCommonAncestor(root.right, p, q);
	} else {
		return root;
	}
};

let q = {
	val: 4,
	left: {
		val: 3
	},
	right: {
		val: 5
	}
};

let p = {
	val: 2,
	left: {
		val: 0
	},
	right: q
};

let s = {
	val: 6,
	left: p,
	right: {
		val: 8,
		left: {
			val: 7
		},
		right: {
			val: 9
		}
	}
};

console.log(lowestCommonAncestor(s, p, q));
