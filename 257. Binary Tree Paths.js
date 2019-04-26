/* https://leetcode.com/problems/binary-tree-paths/ */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// var binaryTreePaths = function(root) {
// 	let ans = [];
// 	let temp = [];

// 	let compute = root => {
// 		if (!root) {
// 			return root;
// 		}

// 		temp.push(root.val);
// 		if (root.left || root.right) {
// 			compute(root.left, temp);
// 			compute(root.right, temp);
// 		} else {
// 			ans.push(Array.from(temp));
// 		}

// 		temp.pop();
// 	};

// 	compute(root);
// 	return ans.map(temp => {
// 		return temp.join('->');
// 	});
// };

var binaryTreePaths = function(root) {
	if (!root) {
		return [];
	}

	let ans = [];
	let stack = [];
	let temp = [];

	while (root) {
		temp.push(root.val);

		if (root.right) {
			stack.push({ root: root.right, idx: temp.length });
		}

		if (root.left) {
			root = root.left;
		} else {
			let noChildElements = !(root.right || root.left);
			noChildElements && ans.push(Array.from(temp));

			let temp1 = stack.pop();
			root = temp1 ? temp1.root : null;
			temp.length = root ? temp1.idx : 0;
		}
	}

	return ans.map(temp => {
		return temp.join('->');
	});
};

var s1 = {
	val: 1,
	left: {
		val: 2
	},
	right: {
		val: 3,
		right: {
			val: 4
		}
	}
};

console.log(binaryTreePaths(s1));
