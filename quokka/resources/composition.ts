{
  /**
   * 👨‍🏫 Classes are great, but...
   *
   * The greater the hierarchy of inheritance, the
   * harder it will be to do changes at the root.😖
   *
   *
   * Composition is a way to avoid deep nesting.
   *
   * This may also mitigate confusing inheritance,
   * while making bugs easier to spot. 🐜🔍
   *
   * Bite-size chunks are always easier to reason about
   * and debug. They may also be more welcoming to
   * developers new to the codebase. 👶
   *
   * 🙋‍♂️ Downsides?
   *
   * 😔 Well, yeah...
   *
   * If you use the class approach, you don't get direct access:
   *
   * ```ts
   * // Composition using classes
   * root.a.b.c.thing
   * ```
   *
   * ```ts
   * // Inheritance using classes
   * root.thing
   * ```
   */
  const hoverToSeeMarkdown = () => {};
  hoverToSeeMarkdown();
}

{
  {
    /**
     * Composition using classes
     */
  }

  class ClassA {}

  class ClassB {
    a = new ClassA();
  }

  const b01 = new ClassB();
  const b02 = new ClassB();

  console.log(b01);
  console.log(b02);
  console.log(b01 === b02);

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~

  class Pushable {
    sendPushMessage() {
      console.log("Your file has been converted successfully.");
    }
  }

  class Converter {
    push: Pushable;

    constructor() {
      this.push = new Pushable();
    }

    convert() {
      console.log("Converting...");
      return true;
    }
  }

  const converter = new Converter();
  converter.convert();
  converter.push.sendPushMessage();
}

{
  {
    /**
     * Composition without classes
     *
     * To my eyes, this looks cleaner and
     * more scalable than using classes
     */
  }
  const hasName = (name: string) => {
    return { name };
  };

  const canSayHi = (name: string) => {
    return {
      sayHi: () => `Hello, ${name}`,
    };
  };

  const Person = function (name: string) {
    return {
      ...hasName(name),
      ...canSayHi(name),
    };
  };

  const person = Person("Adam");

  console.log(person.sayHi());
  console.log(person.name);
}

{
  /**
   * > Inheritance Pro’s: Reusable code, easy to understand
   * > Inheritance Cons: Tightly coupled, fragile, can be abused
   * >
   * > Composition Pro’s: Reusable code, flexibility, loosely coupled
   * >
   * > Composition Cons: Harder to understand
   * >
   * > - [KoderHQ](https://www.koderhq.com/tutorial/typescript/composition/#pro-con)
   */
  const hoverToSeeMarkdown = () => {};
  hoverToSeeMarkdown();
}
