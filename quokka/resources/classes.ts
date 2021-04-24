// ---------------------
// CLASS PLAYGROUND
// ---------------------

class Bit<T extends any> {
  #value: T;
  set value(value) {
    this.#value = value;
  }
  get value() {
    return this.#value;
  }
  constructor(value: T) {
    this.#value = value;
  }
}

class BitBoolean extends Bit<boolean> {
  constructor(test = false) {
    super(test);
    this.value = test;
  }
}

class BitInt extends Bit<0 | 1> {
  constructor(value: 0 | 1 = 0) {
    super(value);
    this.value = value;
  }
}

const bitInt = new BitInt();
const bitBool = new BitBoolean();

console.log(bitInt.value);
console.log(bitBool.value);

bitInt.value = 1;
bitBool.value = true;

console.log(bitInt.value);
console.log(bitBool.value);

console.log(new BitBoolean().value);
console.log(new BitBoolean(false).value);
console.log(new BitBoolean(true).value);

console.log(new BitInt().value);
console.log(new BitInt(0).value);
console.log(new BitInt(1).value);
