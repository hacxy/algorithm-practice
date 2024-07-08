import { IStack } from './constants';

/**
 *  使用数组实现栈结构
 */
export class ArrayStack<T> implements IStack<T> {
  private data: T[] = [];
  push(element: T) {
    this.data.push(element);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  isEmpty() {
    return !this.data.length;
  }
  size() {
    return this.data.length;
  }
}
