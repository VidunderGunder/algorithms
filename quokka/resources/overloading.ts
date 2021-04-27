{
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

  // See `binaryAndLogic.ts` for implementations of overloading
}
