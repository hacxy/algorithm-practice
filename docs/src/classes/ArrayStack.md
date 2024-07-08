[**algorithm-practice**](../README.md) • **Docs**

***

# 类: ArrayStack\<T\>

使用数组实现栈结构

## 类型参数

| 类型参数 | Value |
| :------ | :------ |
| `T` | `any` |

## 实现

- [`IStack`](../interfaces/IStack.md)\<`T`\>

## Constructors

### new ArrayStack()

> **new ArrayStack**\<`T`\>(): [`ArrayStack`](ArrayStack.md)\<`T`\>

#### 返回值类型

[`ArrayStack`](ArrayStack.md)\<`T`\>

## Properties

### data

> `private` **data**: `T`[] = `[]`

#### 查看源码

stack/array-stack.ts:7

## Methods

### isEmpty()

> **isEmpty**(): `boolean`

判断栈是否为空

#### 返回值类型

`boolean`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`isEmpty`](../interfaces/IStack.md#isempty)

#### 查看源码

stack/array-stack.ts:17

***

### peek()

> **peek**(): `T`

返回栈顶的元素

#### 返回值类型

`T`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`peek`](../interfaces/IStack.md#peek)

#### 查看源码

stack/array-stack.ts:14

***

### pop()

> **pop**(): `undefined` \| `T`

出栈

#### 返回值类型

`undefined` \| `T`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`pop`](../interfaces/IStack.md#pop)

#### 查看源码

stack/array-stack.ts:11

***

### push()

> **push**(`element`): `void`

入栈

#### 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `element` | `T` |  |

#### 返回值类型

`void`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`push`](../interfaces/IStack.md#push)

#### 查看源码

stack/array-stack.ts:8

***

### size()

> **size**(): `number`

返回栈的长度

#### 返回值类型

`number`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`size`](../interfaces/IStack.md#size)

#### 查看源码

stack/array-stack.ts:20
