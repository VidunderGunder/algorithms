// https://leetcode.com/problems/move-zeroes/

function moveZeroes(nums: number[]) {
  let zeros = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros++;
    } else if (zeros > 0) {
      nums[i - zeros] = nums[i];
      nums[i] = 0;
    }
  }
}
