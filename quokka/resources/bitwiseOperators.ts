{
  // ----------------
  // PLAYGROUND
  // ----------------

  console.log(n2b(0));
  console.log(n2b(1));
  console.log(n2b(2));
  console.log(n2b(3));
  console.log(n2b(4));
  console.log(n2b(5));
  console.log(n2b(6));
  console.log(n2b(7));
  console.log(n2b(8));
  console.log(n2b(9));
  console.log(n2b(10));

  console.log(1 | 2);

  console.log(n2b(1));
  console.log(n2b(2));
  console.log(1 & 2);

  // Read, Write, Execute
  // 00000100
  // 00000110
  // 00000111

  const read = 0b100;
  const write = 0b10;
  const execute = 0b1;

  console.log(read, 0b100);
  console.log(write, 0b10);
  console.log(execute, 0b1);

  console.log({ read, write, execute });

  let permission = execute | write | read;
  console.log(permission);
  console.log(n2b(permission));

  console.log(permission & read ? true : false);

  // ----------------
  // HELPERS
  // ----------------

  function n2b(n: number): string {
    return (n >>> 0).toString(2);
  }

  function b2n(b: string): number {
    return parseInt(b, 2);
  }

  // ----------------
  // TESTS
  // ----------------

  function tests() {
    if (n2b(3) !== "11") return false;
    if (b2n("1") !== 1) return false;
    if (b2n(n2b(42)) !== 42) return false;
    return true;
  }

  console.log(tests());
}
