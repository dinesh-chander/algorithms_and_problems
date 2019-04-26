/* https://leetcode.com/problems/convert-bst-to-greater-tree/ */

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

var convertBST = function(root) {
	if (!root) {
		return;
	}

	let currentSum = 0;

	let convert = root => {
		if (root.right) {
			convert(root.right);
		}

		root.val += currentSum;
		currentSum = root.val;

		if (root.left) {
			convert(root.left);
		}
	};

	convert(root);

	return root;
};

// var convertBST = function(root) {
// 	if (!root) {
// 		return;
// 	}

// 	let start = root,
// 		tempNode;
// 	let currentSum = 0;
// 	let tempStack = [];
// 	let stack = [];

// 	while (root) {
// 		if (root.left) {
// 			stack.push(root.left);
// 		}

// 		tempStack.push(root);

// 		if (root.right) {
// 			root = root.right;
// 		} else {
// 			tempNode = tempStack.pop();
// 			if (tempNode) {
// 				tempNode.val += currentSum;
// 				currentSum = tempNode.val;
// 			}

// 			root.val += currentSum;
// 			currentSum = root.val;

// 			root = stack.pop();
// 		}
// 	}

// 	return start;
// };

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

convertBST(s);
console.log(s);
