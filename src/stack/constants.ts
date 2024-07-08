export interface IStack<T> {
  /**
   * 入栈
   * @param element
   */
  push(element: T): void;
  /**
   * 出栈
   */
  pop(): T | undefined;
  /**
   * 返回栈顶的元素
   */
  peek(): T | undefined;
  /**
   * 判断栈是否为空
   */
  isEmpty(): boolean;
  /**
   * 返回栈的长度
   */
  size(): number;
}
