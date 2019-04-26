/* https://leetcode.com/problems/invert-binary-tree/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// var invertTree = function(root) {
// 	if (!root) {
// 		return root;
// 	}

// 	let temp = root.left;

// 	root.left = root.right;
// 	root.right = temp;

// 	root.left && invertTree(root.left);
// 	root.right && invertTree(root.right);

// 	return root;
// };

let invertTree = function(root) {
	let tempList = [];
	let start = root;

	while (root) {
		[root.left, root.right] = [root.right, root.left];

		root.right && tempList.push(root.right);

		if (root.left) {
			root = root.left;
		} else {
			root = tempList.pop();
		}
	}

	return start;
};
