/* https://leetcode.com/problems/binary-tree-inorder-traversal/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
// 	let ans = [];

// 	let traverse = root => {
// 		if (!root) {
// 			return;
// 		}

// 		traverse(root.left);
// 		ans.push(root.val);
// 		traverse(root.right);
// 	};

// 	traverse(root);
// 	return ans;
// };

var inorderTraversal = function(root) {
	let temp = [];
	let ans = [];

	while (root || temp.length) {
		root && temp.push(root);

		if (root && root.left) {
			root = root.left;
		} else {
			root = temp.pop();
			ans.push(root.val);
			root = root.right;
		}
	}

	return ans;
};

let s = {
	val: 1,
	right: {
		val: 2,
		left: {
			val: 3
		}
	}
};

console.log(inorderTraversal(s));
