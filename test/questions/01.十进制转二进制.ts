import { ArrayStack } from '../../dist';
const decToBin = (dec: number) => {
  const stack = new ArrayStack();
  let binary = '';
  let num = dec;
  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }

  while (!stack.isEmpty()) {
    binary += stack.pop();
  }

  return binary;
};

console.log(decToBin(37));
console.log(decToBin(100));
