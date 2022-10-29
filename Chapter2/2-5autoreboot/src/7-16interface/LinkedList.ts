interface List<T> {
  add(ele: T): void;
  size(): number;
  get(index: number): T;
  remove(value: T): T;
}

class LinkedList<T> implements List<T> {
  get(index: number): T {
    throw new Error("Method not implemented.");
  }
  remove(value: T): T {
    throw new Error("Method not implemented.");
  }
  add(ele: T): void {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
}
