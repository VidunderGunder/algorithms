/**
 * Last in first out (LIFO) data structure
 */
class Stack<T> {
  #store: T[] = [];

  push(value: T) {
    this.#store.push(value);
  }

  pop(): T | undefined {
    return this.#store.pop();
  }
}

const stack = new Stack<number>();

stack.push(3);
stack.push(2);
stack.push(1);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
