[**algorithm-practice**](../README.md) • **Docs**

***

# 接口: IStack\<T\>

## 类型参数

| 类型参数 | Value |
| :------ | :------ |
| `T` | `any` |

## Methods

### isEmpty()

> **isEmpty**(): `boolean`

判断栈是否为空

#### 返回值类型

`boolean`

#### 查看源码

stack/constants.ts:18

***

### peek()

> **peek**(): `undefined` \| `T`

返回栈顶的元素

#### 返回值类型

`undefined` \| `T`

#### 查看源码

stack/constants.ts:14

***

### pop()

> **pop**(): `undefined` \| `T`

出栈

#### 返回值类型

`undefined` \| `T`

#### 查看源码

stack/constants.ts:10

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

#### 查看源码

stack/constants.ts:6

***

### size()

> **size**(): `number`

返回栈的长度

#### 返回值类型

`number`

#### 查看源码

stack/constants.ts:22
