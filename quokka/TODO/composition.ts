{
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
