/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */


var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  let ans = [];

  let compute = (root, level) => {
    ans[level] = ans[level] || [];

    ans[level].push(root.val);

    level++;

    root.left && compute(root.left, level);
    root.right && compute(root.right, level);
  };

  compute(root, 0);
  return ans;
};