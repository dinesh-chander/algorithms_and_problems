/* https://leetcode.com/problems/path-sum-iii/ */

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
 * @return {number}
 */

var pathSum = function(root, sum) {
	var count = 0;

	var compute = function(root, currentSum) {
		console.log(root);
		if (!root) {
			return;
		}

		currentSum += root.val;

		if (currentSum === sum) {
			console.log('Matched', root);
			count++;
		}

		if (root.left) {
			if (!root.left.started) {
				root.left.started = true;
				compute(root.left, 0);
			}

			compute(root.left, currentSum);
		}

		if (root.right) {
			if (!root.right.started) {
				root.right.started = true;
				compute(root.right, 0);
			}

			compute(root.right, currentSum);
		}
	};

	compute(root, 0);
	return count;
};

var tree = {
	val: 1,
	left: null,
	right: {
		val: 2,
		left: null,
		right: {
			val: 3,
			left: null,
			right: {
				val: 4,
				left: null,
				right: {
					val: 5,
					left: null,
					right: null
				}
			}
		}
	}
};

console.log(pathSum(tree, 3));
