{
  class Node {
    constructor(
      public value: number,
      public left?: Node,
      public right?: Node
    ) {}

    insert(value: number) {
      if (value <= this.value) {
        if (this.left === undefined) {
          this.left = new Node(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === undefined) {
          this.right = new Node(value);
        } else {
          this.right.insert(value);
        }
      }
    }

    contains(value: number): boolean {
      if (value === this.value) {
        return true;
      } else if (value < this.value) {
        if (this.left === undefined) {
          return false;
        } else {
          return this.left.contains(value);
        }
      } else {
        if (this.right === undefined) {
          return false;
        } else {
          return this.right.contains(value);
        }
      }
    }

    inOrderLog() {
      if (this.left !== undefined) {
        this.left.inOrderLog();
      }
      console.log(this.value);
      if (this.right !== undefined) {
        this.right.inOrderLog();
      }
    }
  }

  const root = new Node(10);
  root.insert(4);
  root.insert(2);
  root.insert(5);
  root.insert(7);
  root.insert(1);
  root.insert(4);
  root.insert(20);
  root.insert(1);
  root.insert(6);

  root.inOrderLog();
}

{
  abstract class Heap {
    static depth(nodes: number) {
      const result = Math.log2(nodes + 1) - 1;
      if (result % 1 > 0) throw "Not a complete tree.";
      return result;
    }
  }

  console.log(Heap.depth(15));
}
