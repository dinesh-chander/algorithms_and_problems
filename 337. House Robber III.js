/* https://leetcode.com/problems/house-robber-iii/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
	if (!root) {
		return root;
	}

	let compute = (root, lastUsed) => {
		if (!root) {
			return 0;
		}

		let a = 0,
			b = 0,
			c = 0,
			d = 0;

		if (!lastUsed) {
			a = compute(root.right, true);
			b = compute(root.left, true);
		}

		c = compute(root.left, false);
		d = compute(root.right, false);

		return Math.max();
	};

	return compute(root, false);
};

var s = {
	val: 3,
	left: {
		val: 2,
		right: {
			val: 3
		}
	},
	right: {
		val: 3,
		right: {
			val: 1
		}
	}
};

console.log(rob(s));
