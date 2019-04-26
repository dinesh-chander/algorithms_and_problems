/* https://leetcode.com/problems/maximum-depth-of-n-ary-tree/ */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */

var maxDepth = function(root) {
	if (!root) {
		return 0;
	}

	let max = 0;

	let compute = (root, currentSum) => {
		currentSum++;

		if (0 < root.children.length) {
			for (let i = 0; i < root.children.length; i++) {
				compute(root.children[i], currentSum);
			}
		} else {
			max = Math.max(max, currentSum);
		}
	};

	compute(root, 0);
	return max;
};

console.log(
	maxDepth({
		$id: '1',
		children: [
			{
				$id: '2',
				children: [
					{ $id: '5', children: [], val: 5 },
					{ $id: '6', children: [], val: 6 }
				],
				val: 3
			},
			{ $id: '3', children: [], val: 2 },
			{ $id: '4', children: [], val: 4 }
		],
		val: 1
	})
);
