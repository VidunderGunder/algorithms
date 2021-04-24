function fizzBuzz(n: number): string[] {
  const output = ["1"];

  for (let i = 2; i <= n; i++) {
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;

    if (fizz && buzz) {
      output.push("FizzBuzz");
    } else if (fizz) {
      output.push("Fizz");
    } else if (buzz) {
      output.push("Buzz");
    } else {
      output.push(i.toString());
    }
  }

  return output;
}

console.log(fizzBuzz(4));
console.log(0 % 3);
