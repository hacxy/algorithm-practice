// 约瑟夫环问题 (leetcode LCR 187)
export const iceBreakingGame = (num: number, target: number) => {
  const queue: number[] = [];
  for (let i = 0; i < num; i++) {
    queue.push(i);
  }
  while (queue.length > 1) {
    for (let i = 0; i < target - 1; i++) {
      queue.push(queue.shift()!);
    }
    queue.shift();
  }
  return queue[0];
};

console.log(iceBreakingGame(7, 4));
console.log(iceBreakingGame(12, 5));
