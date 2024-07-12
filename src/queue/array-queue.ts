import { IQueue } from '@/queue/constants';

// 使用数组实现队列
export class ArrayQueue<T> implements IQueue<T> {
  private data: T[] = [];
  enqueue(element: T): void {
    this.data.push(element);
  }
  dequeue(): T | undefined {
    return this.data.shift();
  }
  peek(): T | undefined {
    return this.data[0];
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  size(): number {
    return this.data.length;
  }
}
