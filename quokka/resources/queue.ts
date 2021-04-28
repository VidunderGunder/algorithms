{
  /**
   * First in first out (FIFO) data structure
   *
   * Easy way, so pop is O(n)
   */
  class Queue<T> {
    #store: T[] = [];

    enqueue(value: T) {
      this.#store.push(value);
    }

    dequeue(): T | undefined {
      return this.#store.shift();
    }
  }

  const queue = new Queue<number>();

  queue.enqueue(3);
  queue.enqueue(2);
  queue.enqueue(1);
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
}

{
  /**
   * First in first out (FIFO) data structure
   *
   * Pop is O(1)
   */
  class QueueNode<T> {
    next?: QueueNode<T>;
    constructor(public value: T) {}
  }

  class Queue<T> {
    end?: QueueNode<T>;
    start?: QueueNode<T>;
    size: number = 0;

    enqueue(value: T) {
      const newNode = new QueueNode(value);

      if (this.size === 0) {
        this.end = newNode;
        this.start = this.end;
      } else {
        this.start.next = newNode;
        this.start = newNode;
      }

      this.size++;

      return this;
    }

    dequeue() {
      if (this.size === 0) return undefined;

      const dequeuedNode = this.end;
      const newFront = this.end.next;

      if (this.end.next === undefined) {
        this.start = this.end.next;
      }

      this.end = newFront;
      this.size--;

      return dequeuedNode.value;
    }
  }

  const queue = new Queue<number>();

  queue.enqueue(3);
  queue.enqueue(2);
  queue.enqueue(1);
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
}
