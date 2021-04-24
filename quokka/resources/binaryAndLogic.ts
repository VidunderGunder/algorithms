// ---------------------
// BINARY IN TYPESCRIPT
// ---------------------

/**
 * Fooling around with binary
 * More interesting things below
 */

console.log(0b0);
console.log(0b1);

console.log(0b11);
console.log((3).toString(2));

console.log(-0b11);
console.log((-3).toString(2));

console.log(0b0_00000000_00000000000000000000000);
console.log(0b1_00000000_00000000000000000000000);
console.log(0b0_00000001_00000000000000000000000);
console.log(0b0_10000000_00000000000000000000000);
console.log((1.1).toString(2));

console.log((-3 >>> 0).toString(2));
console.log("11111111111111111111111111111101".length);

// ---------------------
// XOR addition?
// ---------------------

console.log(0b0 ^ 0b0);
console.log(0b0 ^ 0b1);
console.log(0b1 ^ 0b0);
console.log(0b1 ^ 0b1);
console.log(0 ^ 0);
console.log(0 ^ 1);
console.log(1 ^ 0);
console.log(1 ^ 1);
// Last value must be pushed to the next bit somehow:
// 01 XOR 01 -> 10

// ---------------------
// SIMULATED LOGIC GATES
// ---------------------

type OneOrZero = 0 | 1;

function xor(a: boolean, b: boolean): boolean;
function xor(a: OneOrZero, b: OneOrZero): OneOrZero;
function xor(a: any, b: any): any {
  switch (typeof a) {
    case "boolean":
      return a !== b;
    case "number":
      return ((a as OneOrZero) ^ (b as OneOrZero)) as OneOrZero;
  }
}

function and(a: boolean, b: boolean): boolean;
function and(a: OneOrZero, b: OneOrZero): OneOrZero;
function and(a: any, b: any): any {
  switch (typeof a) {
    case "boolean":
      return a && b;
    case "number":
      return ((a as OneOrZero) & (b as OneOrZero)) as OneOrZero;
  }
}

function or(a: boolean, b: boolean): boolean;
function or(a: OneOrZero, b: OneOrZero): OneOrZero;
function or(a: any, b: any): any {
  switch (typeof a) {
    case "boolean":
      return a || b;
    case "number":
      return ((a as OneOrZero) | (b as OneOrZero)) as OneOrZero;
  }
}

// ---------------------
// SIMULATED HALF ADDER
// ---------------------

function halfAdder(a: boolean, b: boolean): [boolean, boolean];
function halfAdder(a: OneOrZero, b: OneOrZero): [OneOrZero, OneOrZero];
function halfAdder(a: any, b: any): [any, any] {
  const sum = xor(a, b); // XOR
  const carry = and(a, b); // AND
  return [carry, sum];
}

// ---------------------

console.log(halfAdder(0, 0));
console.log(halfAdder(1, 0));
console.log(halfAdder(0, 1));
console.log(halfAdder(1, 1));

console.log(halfAdder(false, false));
console.log(halfAdder(true, false));
console.log(halfAdder(false, true));
console.log(halfAdder(true, true));

// ---------------------
// SIMULATED FULL ADDER
// ---------------------

function fullAdder(a: boolean, b: boolean, c: boolean): [boolean, boolean];
function fullAdder(
  a: OneOrZero,
  b: OneOrZero,
  c: OneOrZero
): [OneOrZero, OneOrZero];
function fullAdder(a: any, b: any, c: any): [any, any] {
  const [c1, s1] = halfAdder(a, b);
  const [c2, s2] = halfAdder(s1, c);
  const c3 = xor(c1, c2);
  return [c3, s2];
}

// ---------------------
// SIMULATED 8-bit ADDER
// ---------------------

type ByteInt = [
  OneOrZero,
  OneOrZero,
  OneOrZero,
  OneOrZero,
  OneOrZero,
  OneOrZero,
  OneOrZero,
  OneOrZero
];

type ByteBool = [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean
];

function add8Bit(a: ByteInt, b: ByteInt): ByteInt;
function add8Bit(a: ByteBool, b: ByteBool): ByteBool;
function add8Bit(a: any, b: any): any {
  let [c, s] = halfAdder(a[7], b[7]);

  const sum = [0, 0, 0, 0, 0, 0, 0, s];

  for (let i = 6; i >= 0; i--) {
    [c, s] = fullAdder(a[i], b[i], c);
    sum[i] = s;
  }

  return [sum, c];
}

// ---------------------

let intByteA: ByteInt = [1, 1, 0, 1, 0, 0, 1, 1];
let intByteB: ByteInt = [1, 0, 0, 1, 0, 0, 0, 1];
let boolByteA: ByteBool = [
  false,
  false,
  false,
  false,
  true,
  false,
  false,
  true,
];
let boolByteB: ByteBool = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
];

console.log(add8Bit(intByteA, intByteB));
console.log(add8Bit(boolByteA, boolByteB));
