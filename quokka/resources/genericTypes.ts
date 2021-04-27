{
  const addIdArrow = <T>(obj: T) => {
    const id = Math.random().toString(16);
    return {
      ...obj,
      id,
    };
  };

  function addIdNormal<T>(obj: T) {
    const id = Math.random().toString(16);
    return {
      ...obj,
      id,
    };
  }

  interface IUser<D, M = undefined> {
    name: string;
    data: D;
    meta?: M;
  }

  const user: IUser<{ meta: string }, string> = {
    name: "Jack",
    data: {
      meta: "foo",
    },
    meta: "asdf",
  };

  const resultArrow = addIdArrow<IUser<{ meta: string }, string>>(user);
  console.log(resultArrow);
  const resultNormal = addIdNormal<IUser<{ meta: string }, string>>(user);
  console.log(resultNormal);

  const user2: IUser<string[]> = {
    name: "Jack",
    data: ["foo", "bar", "baz"],
  };
  const resultArrow2 = addIdArrow<IUser<string[]>>(user2);
  console.log(resultArrow2);
  const resultNormal2 = addIdNormal<IUser<string[]>>(user2);
  console.log(resultNormal2);

  // -------------------------------------------------------

  function append<T>(el: T, list: readonly T[]): T[];
  function append(el: number, list: readonly number[]) {
    return [...list, el];
  }
}
