{
  /**
   * First in first out (FIFO) data structure
   */
  class Queue<T> {
    #store: T[] = [];

    push(value: T) {
      this.#store.push(value);
    }

    pop(): T | undefined {
      return this.#store.shift();
    }
  }

  const queue = new Queue<number>();

  queue.push(3);
  queue.push(2);
  queue.push(1);
  console.log(queue.pop());
  console.log(queue.pop());
  console.log(queue.pop());
  console.log(queue.pop());
}
