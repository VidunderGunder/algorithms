/**
 * Fisher–Yates shuffle
 *
 * Recommended simple algorithm for shuffling
 *
 * O(n)
 */
function shuffleInPlace<T>(array: T[]): T[] {
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length; i++) {
    const randomIndex = randInt(i, array.length - 1);
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}

console.log(shuffleInPlace(["Hearts", "Clubs", "Diamonds", "Spades"]));
console.log(shuffleInPlace([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

// ---------------------------------------

/**
 *  Random number in range[floor, ceiling)
 */
function randInt(floor = 0, ceiling = 1) {
  return Math.floor(Math.random() * (ceiling - floor + 1) + floor);
}

const floor = 0;
const ceil = 1;
let r: number;

// Log some values
for (let i = 0; i < 8; i++) {
  r = randInt(floor, ceil);
  if (r > ceil) throw `${r} > ${ceil} at iteration ${i}`;
  if (r < floor) throw `${r} < ${floor} at iteration ${i}`;
}

// Test if outside range
for (let i = 0; i < 2 ** 20; i++) {
  r = randInt(floor, ceil);
  if (r > ceil) throw `${r} > ${ceil} at iteration ${i}`;
  if (r < floor) throw `${r} < ${floor} at iteration ${i}`;
}
