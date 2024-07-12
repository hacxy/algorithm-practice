export function numberGame(nums: number[]): number[] {
  const stackArr: (number | undefined)[] = [];
  const arr: number[] = [];

  nums = nums.sort((n1, n2) => n1 - n2);
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    stackArr.push(nums.shift());
    if ((i + 1) % 2 === 0) {
      while (stackArr.length > 0) {
        const num1 = stackArr.pop();
        if (num1 !== undefined) arr.push(num1);
      }
    }
  }
  return arr;
}

console.log(numberGame([5, 4, 2, 3]));
console.log(numberGame([2, 5]));
