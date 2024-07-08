import { ArrayStack } from '../dist/index.js';
const stack = new ArrayStack();

stack.push('a');
stack.push('b');
stack.push('c');
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
