/* https://leetcode.com/problems/merge-two-binary-trees/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

var mergeTrees = function(t1, t2) {
	if (!t1) {
		return t2;
	}

	if (!t2) {
		return t1;
	}

	t1.val = t1.val + t2.val;

	t1.left = mergeTrees(t1.left, t2.left);
	t1.right = mergeTrees(t1.right, t2.right);

	return t1;
};

var s1 = {
	val: 1,
	left: {
		val: 3,
		left: {
			val: 5
		}
	},
	right: {
		val: 2
	}
};

var s2 = {
	val: 2,
	left: {
		val: 1,
		right: {
			val: 4
		}
	},
	right: {
		val: 3,
		right: {
			val: 7
		}
	}
};

console.log(mergeTrees(s1, s2));
