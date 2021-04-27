{
  /**
   * https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
   *
   * Copy-paste everything to index.ts and run with Node to see outputs
   * Comment or delete everything here to avoid duplicate definition warnings
   */

  function a() {
    console.log(this);
  }

  console.log("Simple invocation, global object:\n" + "-".repeat(42));
  a();
  console.log("-".repeat(42) + "\n");

  const b = {
    method() {
      console.log(this);
    },
  };

  console.log("Method invokation:\n" + "-".repeat(42));
  b.method();
  console.log("-".repeat(42) + "\n");

  const context = { value: "A" };

  console.log("Indirect invocation:\n" + "-".repeat(42));
  a.call(context);
  a.apply(context);
  console.log("-".repeat(42) + "\n");

  function A() {
    console.log(this);
  }

  console.log("Constructor invocation:\n" + "-".repeat(42));
  // @ts-ignore
  new A();
  console.log("-".repeat(42) + "\n");

  const d = {
    method(items: any) {
      console.log(this);
      const callback = () => {
        console.log(this);
      };
      items.forEach(callback);
    },
  };

  console.log("Arrow functions:\n" + "-".repeat(42));
  d.method([1, 2, 3]);
  console.log("-".repeat(42) + "\n");

  const e = () => "implicit";

  console.log("Implicit returns (arrow functions):\n" + "-".repeat(42));
  console.log(e());
  console.log("-".repeat(42) + "\n");

  class Hero {
    constructor(public heroName: string) {
      this.heroName = heroName;
    }

    /**
     * If run with setTimeout, method gets separated from object:
     *
     * ```ts
     * setTimeout(batman.logNameNormal, 1000); // Undefined
     * ```
     *
     * Can be worked around, for example:
     *
     * ```ts
     * setTimeout(batman.logNameNormal.bind(batman), 1000); // "Batman"
     * ```
     */
    logNameNormal() {
      console.log("Regular function:", this.heroName);
    }

    /**
     * Arrow functions binds this lexically (statically) to the class instance
     *
     * So no extra boilerplate is needed when using setTimeout:
     *
     * ```ts
     * setTimeout(batman.logNameArrow, 1000); // Batman
     * ```
     */
    logNameArrow = () => {
      console.log("Arrow function:", this.heroName);
    };
  }

  const batman = new Hero("Batman");

  setTimeout(batman.logNameNormal, 1000);
  setTimeout(batman.logNameNormal.bind(batman), 1000);
  setTimeout(batman.logNameArrow, 1000);
}
