// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

class TreeNode {
  constructor(
    public val: number = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  let maxDepth = nums.length === 0 ? 0 : timesDivisible(nums.length) + 1;
  const totalNodes = maxDepth === 0 ? 0 : 2 ** maxDepth - 1;
  const missingLeaves = totalNodes === 0 ? 0 : totalNodes - nums.length;

  let i = 0;
  function grow(depth = 0): TreeNode | null {
    // TODO
    return null;
  }

  return grow();
}

function timesDivisible(n: number, by = 2) {
  return n === 0 ? 0 : Math.floor(Math.log(n) / Math.log(by));
}

// const nums = [1, 2, 2, 4, 4, 4, 4];

// let maxDepth = nums.length === 0 ? 0 : timesDivisible(nums.length) + 1;
// maxDepth;

// const nodes = maxDepth === 0 ? 0 : 2 ** maxDepth - 1;
// nodes;

// const missingLeaves = nodes === 0 ? 0 : nodes - nums.length;
// missingLeaves;
