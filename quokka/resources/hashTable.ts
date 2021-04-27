{
  /**
   * Implementation of a hash table in TypeScript
   *
   * Inspired by [Ben Awad's tutorial](
   * https://www.youtube.com/watch?v=UOxTMOCTEZk
   * ).
   */
  class HashTable {
    /**
     * Table to store values.
     */
    #table = new Array(1021);

    /**
     * Amount of elements in the hash table.
     */
    #size = 0;

    /**
     * Threshold to decide when the table should be resized.
     */
    #loadLimit = 0.8;

    /**
     * How full, or loaded, the hash table is in percentage.
     *
     * Used together with a threshold to decide when the table should be resized.
     */
    #loadFactor = () => this.#size / this.#table.length;

    /**
     * Amount of elements in the hash table.
     */
    get size(): number {
      return this.#size;
    }

    #resize = () => {
      const newTable = new Array(this.#table.length * 2);
      this.#table.forEach((item) => {
        if (item !== undefined) {
          item.forEach(([key, value]: [string, any]) => {
            const i = hashStringToInt(key, newTable.length);
            if (newTable[i] !== undefined) {
              newTable[i].forEach(([k]: [string]) => {
                k === key && this.#size--;
              });
              newTable[i].push([key, value]);
            } else {
              newTable[i] = [[key, value]];
            }
          });
        }
      });
      this.#table = newTable;
    };

    /**
     * Inserts the given key-value-pair to the hash table.
     *
     * @param key Key in table.
     * @param value Value to insert.
     */
    readonly set = (key: string, value: any) => {
      this.#size++;

      if (this.#loadFactor() > this.#loadLimit) {
        this.#resize();
      }

      const i = hashStringToInt(key, this.#table.length);
      if (this.#table[i] !== undefined) {
        this.#table[i].forEach(([k]: [string]) => {
          k === key && this.#size--;
        });
        this.#table[i].push([key, value]);
      } else {
        this.#table[i] = [[key, value]];
      }
    };

    /**
     * Get the value stored by the given key in the hash table.
     *
     * @param key Key in table.
     */
    readonly get = (key: string) => {
      const i = hashStringToInt(key, this.#table.length);
      return this.#table[i]?.find((x: any) => x[0] === key)?.[1];
    };
  }

  /**
   *
   * @param str String to convert to an integer
   * @param maxSize Max size of target table
   * @returns Hash value as integer
   */
  function hashStringToInt(str: string, maxSize: number): number {
    let hash = 17;

    for (let i = 0; i < str.length; i++) {
      hash = (13 * hash * str.charCodeAt(i)) % maxSize;
    }

    return hash;
  }
}
