class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value) {
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
      let i = 0;
      while (i < position - 1) {
        currentNode = currentNode!.next;
        i++;
      }
      newNode.next = currentNode!.next;
      currentNode!.next = newNode;
    }
    this.size++;
    return true;
  }
  get length() {
    return this.size;
  }
}
