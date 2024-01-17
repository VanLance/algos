class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
function rangeSumBST(root: TreeNode | null, low: number, high: number ): number {
  function recurseTree(root: TreeNode | null, low: number, high: number , total: number): number{
    if (!root) return 0 
    if (root?.val < low){
      return recurseTree(root?.right, low, high, total)
    } 
    if (root.val > high) {
      return recurseTree(root.left, low, high, total)
    }
    total += root.val
    total += recurseTree(root.left, low, high, total)
    total += recurseTree(root.right, low, high, total)
    return total
  }
  return recurseTree(root, low, high, 0)
}