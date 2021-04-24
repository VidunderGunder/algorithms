// ---------------------
// SIMULATED LOGIC GATES
// ---------------------

type BitInt = 0 | 1;

function xor(a: boolean, b: boolean): boolean;
function xor(a: BitInt, b: BitInt): BitInt;
function xor(a: any, b: any): any {
  switch (typeof a) {
    case "boolean":
      return a !== b;
    case "number":
      return a ^ b;
  }
}

function and(a: boolean, b: boolean): boolean;
function and(a: BitInt, b: BitInt): BitInt;
function and(a: any, b: any): any {
  switch (typeof a) {
    case "boolean":
      return a && b;
    case "number":
      return a & (b as BitInt);
  }
}

function or(a: boolean, b: boolean): boolean;
function or(a: BitInt, b: BitInt): BitInt;
function or(a: any, b: any): any {
  switch (typeof a) {
    case "boolean":
      return a || b;
    case "number":
      return a | (b as BitInt);
  }
}

// ---------------------
// SIMULATED HALF ADDER
// ---------------------

function halfAdder(a: boolean, b: boolean): [boolean, boolean];
function halfAdder(a: BitInt, b: BitInt): [BitInt, BitInt];
function halfAdder(a: any, b: any): [any, any] {
  const sum = xor(a, b); // XOR
  const carry = and(a, b); // AND
  return [carry, sum];
}

// ---------------------
// SIMULATED FULL ADDER
// ---------------------

function fullAdder(a: boolean, b: boolean, c: boolean): [boolean, boolean];
function fullAdder(a: BitInt, b: BitInt, c: BitInt): [BitInt, BitInt];
function fullAdder(a: any, b: any, c: any): [any, any] {
  const [c1, s1] = halfAdder(a, b);
  const [c2, s2] = halfAdder(s1, c);
  const c3 = xor(c1, c2);
  return [c3, s2];
}

// ---------------------
// SIMULATED 8-bit ADDER
// ---------------------

type ByteInt = [BitInt, BitInt, BitInt, BitInt, BitInt, BitInt, BitInt, BitInt];

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
