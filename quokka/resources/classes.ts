{
  // FIRESHIP - OOP vs FUNCTIONAL
  // https://youtu.be/fsVL_xrYO0w

  // ----------------------------
  // BASIC
  // ----------------------------

  class Emoji {
    icon: string;
    constructor(icon: string) {
      if (icon.length === 0) throw "String must contain at least one character";
      this.icon = icon;
    }
  }

  console.log(new Emoji("🌞"));
  console.log(new Emoji("🌞").icon);

  // ----------------------------
  // LESS BOILERPLATE
  // ----------------------------

  class EmojiClean {
    constructor(public icon: string) {
      if (icon.length === 0) throw "String must contain at least one character";
    }
  }

  console.log(new EmojiClean("🌞"));
  console.log(new EmojiClean("🌞").icon);

  // ----------------------------
  // PRIVACY AND IMMUTABILITY
  // ----------------------------

  class EmojiImmutable {
    #prev: string;

    constructor(private _icon: string) {
      this.validIcon(_icon);
    }

    get icon() {
      return this._icon;
    }

    get prev() {
      return this.#prev;
    }

    set icon(icon) {
      this.validIcon(icon);
      this.#prev = this._icon;
      this._icon = icon;
    }

    private validIcon(icon: string) {
      if (icon.length === 0) throw "String must contain at least one character";
    }
  }

  const cool = new EmojiImmutable("😎");

  console.log(cool.icon);

  cool.icon = "🤓";

  console.log(cool.icon);
  console.log(cool.prev);

  cool.icon = cool.prev;

  console.log(cool.icon);
  console.log(cool.prev);

  // ----------------------------
  // STATIC VARIABLES AND METHODS
  // ----------------------------

  class Mathematics {
    private static _variables = {};

    static getVariable(name: string): number {
      return this._variables[name];
    }

    static setVariable(name: string, value: number) {
      this._variables[name] = value;
    }

    static add(a: number, b: number) {
      return a + b;
    }
    static subtract(a: number, b: number) {
      return a - b;
    }
    static multiply(a: number, b: number) {
      return a * b;
    }
    static divide(a: number, b: number) {
      return a / b;
    }
    static modulo(a: number, b: number) {
      return a % b;
    }
  }

  Mathematics.setVariable("a", 1);
  Mathematics.setVariable("b", 2);

  console.log(Mathematics.getVariable("a"));
  console.log(Mathematics.getVariable("b"));

  console.log(Mathematics.add(1, 2));
  console.log(Mathematics.subtract(3, 1));
  console.log(Mathematics.multiply(2, 2));
  console.log(Mathematics.divide(2, 2));
  console.log(Mathematics.modulo(3, 2));

  class Statistics {
    /**
     * Random number in range `[0, 1)` from a gaussian distribution.
     *
     * `Iterations = 1` is identical to `Math.random()`.
     */
    static randomGaussian(iterations = 3): number {
      let value = 0;
      for (let i = 0; i < iterations; i++) value += Math.random();
      return value / iterations;
    }

    /**
     * Converts a random number from range `[0, 1)`
     * to a given range `[start, stop)`
     */
    static randomToRange(randomNumber: number, start: number, stop: number) {
      if (randomNumber < 0 || randomNumber >= 1) {
        throw "Random number input must be in range [0, 1).";
      }
      return randomNumber * (stop - start) + start;
    }
  }

  // ----------------------------
  // INHERITANCE
  // ----------------------------

  class Name {
    constructor(
      protected _first?: string,
      protected _middle?: string,
      protected _last?: string,
      protected _other?: {
        [key: string]: string;
      },
      protected _secret = false
    ) {}

    private protecSecret(thing: any) {
      if (this._secret) return "secret";
      return thing;
    }

    get first() {
      return this.protecSecret(this._first);
    }
    get middle() {
      return this.protecSecret(this._middle);
    }
    get last() {
      return this.protecSecret(this._last);
    }
    get other() {
      return this.protecSecret(this._other);
    }
    protected set secret(value: boolean) {
      this._secret = value;
    }
    protected get secret() {
      return this._secret;
    }
  }

  enum BiologicGender {
    Boy = "boy",
    Girl = "girl",
    NonBinary = "non-binary",
  }
  type GenderIdentity = string | undefined;

  class Gender {
    #biologic: BiologicGender;
    #identity?: GenderIdentity;

    get biologic() {
      return this.#biologic;
    }
    get identity() {
      return this.#identity;
    }

    constructor(biologic?: BiologicGender) {
      this.#biologic = biologic ?? Gender.newBiologicGender();
    }

    static newBiologicGender() {
      return Math.random() > 0.0005
        ? Math.random() > 0.488
          ? BiologicGender.Boy
          : BiologicGender.Girl
        : BiologicGender.NonBinary;
    }

    identify(identity: GenderIdentity) {
      this.#identity = identity;
    }
  }

  class Human {
    get name() {
      return this._name;
    }
    /**
     * Height in `cm`
     */
    get height() {
      return this._height;
    }
    get gender() {
      return this._gender;
    }

    static newBirthHeight() {
      return parseFloat(
        Statistics.randomToRange(Statistics.randomGaussian(), 35, 65).toFixed(1)
      );
    }

    constructor(
      protected _name = new Name(),
      protected _height = Human.newBirthHeight(),
      protected _gender = new Gender()
    ) {}

    sayHi() {
      return `Hello, ${this.name}`;
    }
  }

  const humans: Human[] = [];

  for (let i = 0, amount = 5; i < amount; i++) {
    humans.push(new Human());
  }

  console.log(humans);
  humans.forEach((human) => {
    console.log(human.name.first);
    console.log(human.name.middle);
    console.log(human.name.last);
    console.log(human.height);
    console.log(human.gender.biologic);
  });

  type SuperPowers = string[];

  class SuperHero extends Human {
    constructor(
      protected _name = new Name(),
      protected _height = Human.newBirthHeight(),
      protected _gender = new Gender(),
      private _superHeroName: string,
      private _superPowers: SuperPowers
    ) {
      super(_name, _height, _gender);
    }

    get superHeroName() {
      return this._superHeroName;
    }
    get superPowers() {
      return this._superPowers;
    }
  }

  // ----------------------------
  // ABSTRACT CLASS vs INTERFACE
  // ----------------------------
  /**
   * - Interfaces can be combined
   * - Abstract classes can do actual implementation
   * - Abstract classes compiles to JavaScript
   * - Interfaces are only available in TypeScript
   * - Abstract classes are related (inheritance)
   */
  // ----------------------------
  {
  }

  // Overkill, doubledoubles and confusing stuff below
  // Just testing to see how interfaces and classes interact

  type GenericTypeA<T> = {
    thing: T;
  };
  type GenericTypeB<U> = {
    thang: U;
  };
  type GenericTypeAB<T, U> = GenericTypeA<T> & GenericTypeB<U>;

  interface IGenericA<T> {
    thing: T;
  }
  interface IGenericB<U> {
    thang: U;
  }
  interface GenericAB<T, U> extends IGenericA<T>, IGenericB<U> {}
  class GenericAB<T, U> implements GenericTypeAB<T, U> {
    constructor(private _a: T, private _b: U) {}
    get a() {
      return this._a;
    }
    get b() {
      return this._b;
    }
  }

  interface Person {
    name: string;
  }
  interface IPerson {
    name: string;
    greeting: () => string;
  }
  abstract class Person {
    constructor(public name: string) {}

    log() {
      console.log(this.name);
    }

    abstract greeting(): string;
  }

  class Employee extends Person {
    static codes = 0;

    constructor(name: string, public code: number) {
      super(name);
      if (code === undefined) code = ++Employee.codes;
    }

    greeting(): string {
      return `Hi, my name is ${this.name} and my employee code is ${this.code}.`;
    }
  }

  {
    const people: Person[] = [];

    let employee: Person = new Employee("James", 100);
    console.log(employee.greeting());
  }
  // ----------------------------
  // CLASS PLAYGROUND
  // ----------------------------

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
}
