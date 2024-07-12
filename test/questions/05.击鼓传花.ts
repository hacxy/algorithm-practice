import { ArrayQueue } from '../../dist/index';

// 击鼓传花
export const hotPotato = (names: string[], num: number) => {
  if (names.length === 0) return;
  const queue = new ArrayQueue<string>();

  for (const name of names) {
    queue.enqueue(name);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      const name = queue.dequeue()!;
      queue.enqueue(name);
    }
    queue.dequeue();
  }

  return queue.dequeue()!;
};

console.log(hotPotato(['A', 'B', 'C', 'D'], 3));
