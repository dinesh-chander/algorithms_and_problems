/* https://leetcode.com/problems/subtree-of-another-tree/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

var isSubtree = function(s, t, lastMatched) {
	if (!s && t) {
		return false;
	}

	if (s && !t) {
		return false;
	}

	if (!s && !t) {
		return true;
	}

	if (s.val === t.val) {
		if (isSubtree(s.left, t.left, true) && isSubtree(s.right, t.right, true)) {
			return true;
		}
	}

	if (lastMatched) {
		return false;
	}

	return isSubtree(s.left, t) || isSubtree(s.right, t);
};

var s = {
	val: 1,
	left: {
		val: 2,
		left: {
			val: 4,
			left: null,
			right: null
		},
		right: {
			val: 5,
			left: null,
			right: null
		}
	},
	right: {
		val: 3,
		left: null,
		right: null
	}
};

var t = {
	val: 2,
	left: {
		val: 4,
		left: null,
		right: null
	},
	right: {
		val: 5,
		left: null,
		right: null
	}
};

console.log(isSubtree(s, t));

var s = {
	val: 1,
	left: {
		val: 1,
		left: null,
		right: null
	},
	right: null
};

var t = {
	val: 1,
	left: null,
	right: null
};

console.log(isSubtree(s, t));

var s = {
	val: 3,
	left: {
		val: 4,
		left: {
			val: 1,
			left: null,
			right: null
		},
		right: null
	},
	right: {
		val: 5,
		left: {
			val: 2,
			left: null,
			right: null
		},
		right: null
	}
};

var t = {
	val: 3,
	left: {
		val: 1,
		left: null,
		right: null
	},
	right: {
		val: 2,
		left: null,
		right: null
	}
};

console.log(isSubtree(s, t));
