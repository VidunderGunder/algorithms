// https://leetcode.com/problems/contains-duplicate/submissions/

function containsDuplicate(nums: number[]): boolean {
  const counts: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in counts) return true;
    counts[num] = 1;
  }

  return false;
}

let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));

nums = [1, 2, 3];
console.log(containsDuplicate(nums));
