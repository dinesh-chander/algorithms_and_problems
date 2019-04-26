/* https://leetcode.com/problems/diameter-of-binary-tree/ */

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

var diameterOfBinaryTree = function (root) {
    let ans = 0;

    var compute = function (root) {
        if (!root) return 0;
        let a = 0, b = 0;

        if (root.left) {
            a = 1 + compute(root.left);
        }

        if (root.right) {
            b = 1 + compute(root.right);
        }

        ans = Math.max(ans, a + b);

        return Math.max(a, b);
    };

    compute(root);
    return ans;
};

var tree = {
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

console.log(diameterOfBinaryTree(tree));
