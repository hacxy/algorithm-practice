class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  head: Node<T> | null = null;
  private size: number = 0;

  append(value: T) {
    const newNode = new Node<T>(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.size++;
  }

  traverse() {
    let currentNode = this.head;
    const values: T[] = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join('->'));
  }

  insert(value: T, position: number) {
    if (position > this.size || position < 0) return false;
    const newNode = new Node<T>(value);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      let preNode = this.head;
      let i = 0;
      while (i++ < position && currentNode) {
        preNode = currentNode;
        currentNode = currentNode.next;
      }
      preNode!.next = newNode;
      newNode.next = currentNode;
    }
    this.size++;
    return true;
  }

  // 删除
  removeAt(position: number): Node<T> | null {
    if (position > this.size || position < 0) return null;
    let index = 0;
    let preNode = this.head;
    let currentNode = this.head;

    if (position === 0) {
      const oldHead = this.head;
      this.head = this.head!.next!;
      return oldHead;
    } else {
      while (index++ < position && currentNode) {
        preNode = currentNode;
        currentNode = currentNode.next;
      }
      preNode!.next = currentNode!.next;
      return currentNode;
    }
  }

  get length() {
    return this.size;
  }
}
