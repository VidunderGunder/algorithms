// https://leetcode.com/problems/single-number/

function singleNumber(nums: number[], result = 0, i = 0): number {
  return i >= nums.length ? result : singleNumber(nums, result ^ nums[i], ++i);
}
