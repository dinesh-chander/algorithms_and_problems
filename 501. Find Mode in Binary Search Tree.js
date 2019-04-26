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

var findMode = function(root) {
	if (!root) {
		return [];
	}

	let ans = [];
	let maxCount = 0;
	let dict = {};

	var compute = root => {
		dict[root.val] = dict[root.val] + 1 || 1;

		if (maxCount < dict[root.val]) {
			maxCount = dict[root.val];
			ans.length = 0;
			ans.push(root.val);
		} else if (maxCount === dict[root.val]) {
			ans.push(root.val);
		}

		if (root.left) {
			compute(root.left);
		}

		if (root.right) {
			compute(root.right);
		}
	};

	compute(root);
	return ans;
};

// var findMode = function(root) {
// 	if (!root) {
// 		return [];
// 	}

// 	let ans = [];
// 	let maxCount = 0;

// 	var compute = (root, val, count) => {
// 		console.log(root, maxCount);
// 		if (maxCount < count && ans.indexOf(val) === -1) {
// 			maxCount = count;
// 			ans.length = 0;
// 			ans.push(val);
// 		} else if (maxCount === count && ans.indexOf(val) === -1) {
// 			ans.push(val);
// 		}

// 		if (root.left) {
// 			if (root.left.val === val) {
// 				compute(root.left, root.val, count + 1);
// 			} else {
// 				compute(root.left, root.left.val, 1);
// 			}
// 		}

// 		if (root.right) {
// 			if (root.right.val === val) {
// 				compute(root.right, root.val, count + 1);
// 			} else {
// 				compute(root.right, root.right.val, 1);
// 			}
// 		}
// 	};

// 	compute(root, root.val, 1);
// 	return ans;
// };

// var s = {
// 	val: 1,
// 	left: {
// 		val: 2,
// 		left: {
// 			val: 2,
// 			left: null,
// 			right: null
// 		},
// 		right: {
// 			val: 5,
// 			left: null,
// 			right: null
// 		}
// 	},
// 	right: {
// 		val: 3,
// 		left: null,
// 		right: null
// 	}
// };

var s = {
	val: 1,
	left: null,
	right: {
		val: 2,
		left: null,
		right: {
			val: 2,
			left: null,
			right: null
		}
	}
};

console.log(findMode(s));
