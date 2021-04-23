export function primes(below = 1000, above = 0): number[] {
  const primes: number[] = [];

  if (below < 0 || below <= above) return primes;

  for (let i = 0; i < below; i++) {
    if (isPrime(i)) primes.push(i);
  }

  return primes;
}

export function isPrime(num: number) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}
