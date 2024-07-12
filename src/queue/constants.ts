export interface IQueue<T> {
  /**
   *  入队
   * @param element
   */
  enqueue(element: T): void;
  /**
   * 出队
   */
  dequeue(): T | undefined;
  /**
   * 查看队首元素
   */
  peek(): T | undefined;
  /**
   * 队列是否为空
   */
  isEmpty(): boolean;
  /**
   * 队列大小
   */
  size(): number;
}
