// O(1)

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));

// O(logn)

function guessNumber(num: number): number {
  const min = 1;
  const max = 10;

  if (num < min || num > max) {
    throw `Number must be in range ${min}-${max}.`;
  }

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const guess = (guesses = 1, i = Math.floor(nums.length / 2)): number => {
    if (nums[i] === num) return guesses;
    if (nums[i] > num) {
      return guess(++guesses, i - Math.floor(nums.length / (2 * guesses)));
    } else {
      return guess(++guesses, i + Math.floor(nums.length / (2 * guesses)));
    }
  };

  return guess();
}

for (let i = 1; i <= 10; i++) {
  console.log([i, guessNumber(i)]);
}

// O(n)

function max(nums: number[]): number {
  return nums.reduce((max, num) => (num > max ? num : max));
}

console.log(max([1, 2, 3]));
console.log(max([1, 8, 3]));
console.log(max([9, 8, 3]));

// O(nlogn)

function guessNumbers(nums: number[]): number[] {
  return nums.map((num) => guessNumber(num));
}

console.log(guessNumbers([1]));
console.log(guessNumbers([1, 5]));
console.log(guessNumbers([1, 5, 6]));

// O(n**2)

function maxes(numArrs: number[][]): number[] {
  return numArrs.map((nums) => max(nums));
}

console.log(
  maxes([
    [1, 2, 3],
    [1, 8, 3],
    [9, 8, 3],
  ])
);
