/*
    Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
    Example 1:
    Input: root = [1,2,2,3,4,4,3]
    Output: true
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isMirror = function (t1, t2) {
    if (!t1 || !t2) {
        return t1 === t2;
    }

    if(t1.val !== t2.val) {
        return false;
    }

    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);

}
var isSymmetric = function(root) {
    if(root === null) {
        return true;
    }
    return isMirror(root.left, root.right);
};

/*
[1,2,2,3,4,4,3]
[1,2,2,null,3,null,3]
[1]
[1,2,2,3,5,5,3,2,6,6,2,6,2,2,6]
*/