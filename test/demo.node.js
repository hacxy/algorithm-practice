import { ArrayQueue } from '../dist/index.js';
const arrayQueue = new ArrayQueue();

arrayQueue.enqueue(1);
arrayQueue.enqueue(3);
arrayQueue.enqueue(2);
console.log(arrayQueue.dequeue());
console.log(arrayQueue.peek());
