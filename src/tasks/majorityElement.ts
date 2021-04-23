/**
 * Returns the majority element, given an array `nums` of size `n`.
 *
 * The majority element is the element that appears more than `⌊n / 2⌋` times.
 *
 * Constraints:
 *
 * - `n == nums.length`
 * - `1 <= n <= 5 * 10**4`
 * - `-2**31 <= nums[i] <= 2**31 - 1`
 *
 * @param nums
 * @returns The majority element
 */
function majorityElement(nums: number[]): number {
  let majorityElement: number | undefined;
  const map: { [key: string]: number } = {};
  const halfLength = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (String(num) in map) {
      map[num] += 1;
      if (map[num] > halfLength) {
        majorityElement = num;
        break;
      }
    } else {
      map[String(num)] = 1;
    }
  }

  if (majorityElement === undefined) {
    throw "Input must contain a majority element";
  }

  return majorityElement;
}

console.log(majorityElement([3, 2, 3]));
