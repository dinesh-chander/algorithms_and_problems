/* https://leetcode.com/problems/sum-root-to-leaf-numbers/ */

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
var sumNumbers = function(root) {
	let ans = 0;

	let compute = (root, s) => {
		if (!root) {
			return 0;
		}

		s += root.val;

		if (root.left || root.right) {
			compute(root.left, s);
			compute(root.right, s);
		} else {
			ans += parseInt(s);
		}
	};

	compute(root, '0');
	return ans;
};
