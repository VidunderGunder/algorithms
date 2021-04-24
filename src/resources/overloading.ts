// Classes

class Base {
  id!: number | string;
}

class NumberBase extends Base {
  id!: number;
}

// Functions

// Not overloadable
function base(arg: string): string {
  return "Hi " + arg;
}

function getID(qty?: number): number | number[] {
  if (qty === undefined) {
    return Math.random();
  }

  return [...new Array(qty)].map(() => Math.random());
}

console.log(getID());
console.log(getID(4));
