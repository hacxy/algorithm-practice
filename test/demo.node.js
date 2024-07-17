// import { ArrayQueue } from '../dist/index.js';
// const arrayQueue = new ArrayQueue();

// arrayQueue.enqueue(1);
// arrayQueue.enqueue(3);
// arrayQueue.enqueue(2);
// console.log(arrayQueue.dequeue());
// console.log(arrayQueue.peek());

import { LinkedList } from '../dist/index.js';
const linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(2);
linkedList.append(3);
linkedList.append(1);
linkedList.append(4);
// console.log(linkedList.head);
linkedList.insert(100, 0);
// linkedList.insert(1111, 2);
linkedList.insert(2222, 1);
linkedList.insert(3333, 7);

linkedList.traverse();

linkedList.removeAt(2);
linkedList.traverse();

linkedList.removeAt(0);
linkedList.traverse();
