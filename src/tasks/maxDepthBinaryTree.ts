// https://leetcode.com/problems/maximum-depth-of-binary-tree/

class TreeNode {
  constructor(
    public val?: number,
    public left?: TreeNode | null,
    public right?: TreeNode | null
  ) {}
}

function arrayToTree(
  array: (number | null)[],
  parentIndex: number = 0
): TreeNode | null {
  return array.length === 0
    ? null
    : parentIndex * 2 + 2 > array.length
    ? new TreeNode(array[parentIndex] ?? undefined)
    : new TreeNode(
        array[parentIndex] ?? undefined,
        array[parentIndex * 2 + 1] === null
          ? null
          : arrayToTree(array, parentIndex * 2 + 1),
        array[parentIndex * 2 + 2] === null
          ? null
          : arrayToTree(array, parentIndex * 2 + 2)
      );
}

function traverse(
  leaf: TreeNode | null | undefined,
  depth: number = 0
): number {
  if (leaf === undefined || leaf === null) return depth;
  return Math.max(traverse(leaf.left, ++depth), traverse(leaf.right, depth));
}

function maxDepth(root: TreeNode | null): number {
  return traverse(root);
}

/**
 * Depth:
 * - 0 if array of length 0
 * - Otherwise add 1 to how many times the array length
 * is divisible by 2
 *
 * The length of the array doubles for every depth:
 * 1, 2, 4, 8, 16, 32, ...
 *
 * ### Assumptions:
 *
 * - Assuming no null leaves at bottom
 * (if needed, add check and subtract one)
 */
function maxDepthFromArray(array: (number | null)[]): number {
  return array.length === 0
    ? 0
    : 1 + Math.floor(Math.log(array.length) / Math.log(2));
}

export function test() {
  const tests: [TreeNode | null, number][] = [
    [arrayToTree([3, 9, 20, null, null, 15, 7]), 3],
    [arrayToTree([1, null, 2]), 2],
    [arrayToTree([]), 0],
    [arrayToTree([0]), 1],
  ];

  console.log(maxDepthFromArray([3, 9, 20, null, null, 15, 7]));
  console.log(maxDepthFromArray([1, null, 2]));
  console.log(maxDepthFromArray([]));
  console.log(maxDepthFromArray([0]));

  tests.forEach((t, i) => {
    console.assert(maxDepth(t[0]) === t[1], i);
  });
}
