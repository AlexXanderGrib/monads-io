[Package](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Left

# Class: Left<L, R\>

[<internal>](../modules/internal_.md).Left

## Type parameters

| Name |
| :------ |
| `L` |
| `R` |

## Hierarchy

- [`EitherConstructor`](internal_.EitherConstructor.md)<`L`, `R`\>

  ↳ **`Left`**

## Implements

- [`SerializedLeft`](../modules/internal_.md#serializedleft)<`L`\>

## Table of contents

### Constructors

- [constructor](internal_.Left.md#constructor)

### Properties

- [left](internal_.Left.md#left)

### Accessors

- [[toStringTag]](internal_.Left.md#[tostringtag])
- [name](internal_.Left.md#name)
- [type](internal_.Left.md#type)

### Methods

- [apply](internal_.Left.md#apply)
- [asyncChain](internal_.Left.md#asyncchain)
- [await](internal_.Left.md#await)
- [biMap](internal_.Left.md#bimap)
- [biMatch](internal_.Left.md#bimatch)
- [chain](internal_.Left.md#chain)
- [default](internal_.Left.md#default)
- [getLeft](internal_.Left.md#getleft)
- [getRight](internal_.Left.md#getright)
- [isLeft](internal_.Left.md#isleft)
- [isRight](internal_.Left.md#isright)
- [join](internal_.Left.md#join)
- [map](internal_.Left.md#map)
- [mapLeft](internal_.Left.md#mapleft)
- [or](internal_.Left.md#or)
- [promise](internal_.Left.md#promise)
- [swap](internal_.Left.md#swap)
- [tap](internal_.Left.md#tap)
- [throw](internal_.Left.md#throw)
- [toJSON](internal_.Left.md#tojson)
- [unwrap](internal_.Left.md#unwrap)
- [unwrapOr](internal_.Left.md#unwrapor)
- [zip](internal_.Left.md#zip)
- [create](internal_.Left.md#create)
- [left](internal_.Left.md#left-1)
- [right](internal_.Left.md#right)

## Constructors

### constructor

• `Private` **new Left**<`L`, `R`\>()

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Overrides

[EitherConstructor](internal_.EitherConstructor.md).[constructor](internal_.EitherConstructor.md#constructor)

#### Defined in

dist/either.d.ts:46

## Properties

### left

• `Readonly` **left**: `L`

#### Implementation of

SerializedLeft.left

#### Defined in

dist/either.d.ts:41

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Overrides

EitherConstructor.\_\_@toStringTag@216

#### Defined in

dist/either.d.ts:43

___

### name

• `get` **name**(): ``"Either"``

#### Returns

``"Either"``

#### Implementation of

SerializedLeft.name

#### Defined in

dist/either.d.ts:44

___

### type

• `get` **type**(): [`Left`](../modules/internal_.md#left)

#### Returns

[`Left`](../modules/internal_.md#left)

#### Implementation of

SerializedLeft.type

#### Defined in

dist/either.d.ts:45

## Methods

### apply

▸ **apply**<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Either`](../modules/internal_.md#either)<`L`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/internal_.md#either)<`L`, [`Pm`](../modules/internal_.md#pm)<`A`, `B`, `P`\>\> |
| `argument` | [`Either`](../modules/internal_.md#either)<`L`, `A`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)<`L`, `B`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[apply](internal_.EitherConstructor.md#apply)

#### Defined in

dist/either.d.ts:20

▸ **apply**<`A`, `B`, `P`\>(`this`, `map`, `...parameters`): [`Either`](../modules/internal_.md#either)<`L`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/internal_.md#either)<`L`, `A`\> |
| `map` | [`Either`](../modules/internal_.md#either)<`L`, [`Pm`](../modules/internal_.md#pm)<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)<`L`, `B`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[apply](internal_.EitherConstructor.md#apply)

#### Defined in

dist/either.d.ts:21

___

### asyncChain

▸ **asyncChain**<`A`, `B`, `P`\>(`map`, `...parameters`): `Promise`<[`Either`](../modules/internal_.md#either)<`L` \| `A`, `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`R`, [`MaybePromiseLike`](../modules.md#maybepromiselike)<[`Either`](../modules/internal_.md#either)<`A`, `B`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`<[`Either`](../modules/internal_.md#either)<`L` \| `A`, `B`\>\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[asyncChain](internal_.EitherConstructor.md#asyncchain)

#### Defined in

dist/either.d.ts:25

___

### await

▸ **await**<`T`\>(`this`): `Promise`<[`Either`](../modules/internal_.md#either)<`L`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`EitherConstructor`](internal_.EitherConstructor.md)<`L`, [`MaybePromiseLike`](../modules.md#maybepromiselike)<`T`\>\> |

#### Returns

`Promise`<[`Either`](../modules/internal_.md#either)<`L`, `T`\>\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[await](internal_.EitherConstructor.md#await)

#### Defined in

dist/either.d.ts:26

___

### biMap

▸ **biMap**<`A`, `B`\>(`mapLeft`, `mapRight`): [`Either`](../modules/internal_.md#either)<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapLeft` | [`Pm`](../modules/internal_.md#pm)<`L`, `A`\> |
| `mapRight` | [`Pm`](../modules/internal_.md#pm)<`R`, `B`\> |

#### Returns

[`Either`](../modules/internal_.md#either)<`A`, `B`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[biMap](internal_.EitherConstructor.md#bimap)

#### Defined in

dist/either.d.ts:24

___

### biMatch

▸ **biMatch**<`A`, `B`\>(`mapLeft`, `mapRight`): `A` \| `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapLeft` | [`Pm`](../modules/internal_.md#pm)<`L`, `A`\> |
| `mapRight` | [`Pm`](../modules/internal_.md#pm)<`R`, `B`\> |

#### Returns

`A` \| `B`

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[biMatch](internal_.EitherConstructor.md#bimatch)

#### Defined in

dist/either.d.ts:27

___

### chain

▸ **chain**<`A`, `B`, `P`\>(`map`, `...parameters`): [`Either`](../modules/internal_.md#either)<`L` \| `A`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`R`, [`Either`](../modules/internal_.md#either)<`A`, `B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)<`L` \| `A`, `B`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[chain](internal_.EitherConstructor.md#chain)

#### Defined in

dist/either.d.ts:23

___

### default

▸ **default**(`value`): [`Either`](../modules/internal_.md#either)<`L`, `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `R` |

#### Returns

[`Either`](../modules/internal_.md#either)<`L`, `R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[default](internal_.EitherConstructor.md#default)

#### Defined in

dist/either.d.ts:28

___

### getLeft

▸ **getLeft**(): `undefined` \| `L`

#### Returns

`undefined` \| `L`

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[getLeft](internal_.EitherConstructor.md#getleft)

#### Defined in

dist/either.d.ts:11

___

### getRight

▸ **getRight**(): `undefined` \| `R`

#### Returns

`undefined` \| `R`

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[getRight](internal_.EitherConstructor.md#getright)

#### Defined in

dist/either.d.ts:10

___

### isLeft

▸ **isLeft**(): this is Left<L, R\>

#### Returns

this is Left<L, R\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[isLeft](internal_.EitherConstructor.md#isleft)

#### Defined in

dist/either.d.ts:14

___

### isRight

▸ **isRight**(): this is Right<L, R\>

#### Returns

this is Right<L, R\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[isRight](internal_.EitherConstructor.md#isright)

#### Defined in

dist/either.d.ts:15

___

### join

▸ **join**<`L1`, `L2`, `R`\>(`this`): [`Either`](../modules/internal_.md#either)<`L1` \| `L2`, `R`\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `L2` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/internal_.md#either)<`L1`, [`Either`](../modules/internal_.md#either)<`L2`, `R`\>\> |

#### Returns

[`Either`](../modules/internal_.md#either)<`L1` \| `L2`, `R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[join](internal_.EitherConstructor.md#join)

#### Defined in

dist/either.d.ts:17

___

### map

▸ **map**<`T`, `P`\>(`map`, `...parameters`): [`Either`](../modules/internal_.md#either)<`L`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`R`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)<`L`, `T`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[map](internal_.EitherConstructor.md#map)

#### Defined in

dist/either.d.ts:19

___

### mapLeft

▸ **mapLeft**<`T`, `P`\>(`map`, `...parameters`): [`Either`](../modules/internal_.md#either)<`T`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`L`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)<`T`, `R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[mapLeft](internal_.EitherConstructor.md#mapleft)

#### Defined in

dist/either.d.ts:18

___

### or

▸ **or**(`x`): [`Either`](../modules/internal_.md#either)<`L`, `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Either`](../modules/internal_.md#either)<`L`, `R`\> |

#### Returns

[`Either`](../modules/internal_.md#either)<`L`, `R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[or](internal_.EitherConstructor.md#or)

#### Defined in

dist/either.d.ts:29

___

### promise

▸ **promise**(): `Promise`<`R`\>

#### Returns

`Promise`<`R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[promise](internal_.EitherConstructor.md#promise)

#### Defined in

dist/either.d.ts:32

___

### swap

▸ **swap**(): [`Either`](../modules/internal_.md#either)<`R`, `L`\>

#### Returns

[`Either`](../modules/internal_.md#either)<`R`, `L`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[swap](internal_.EitherConstructor.md#swap)

#### Defined in

dist/either.d.ts:22

___

### tap

▸ **tap**<`P`\>(`callback`, `...parameters`): [`Either`](../modules/internal_.md#either)<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Pm`](../modules/internal_.md#pm)<`R`, `void`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)<`L`, `R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[tap](internal_.EitherConstructor.md#tap)

#### Defined in

dist/either.d.ts:12

___

### throw

▸ **throw**(): `R`

#### Returns

`R`

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[throw](internal_.EitherConstructor.md#throw)

#### Defined in

dist/either.d.ts:33

___

### toJSON

▸ **toJSON**(): `Readonly`<{ `left`: `L` ; `name`: ``"Either"`` ; `type`: [`Left`](../modules/internal_.md#left)  }\>

#### Returns

`Readonly`<{ `left`: `L` ; `name`: ``"Either"`` ; `type`: [`Left`](../modules/internal_.md#left)  }\>

#### Defined in

dist/either.d.ts:47

___

### unwrap

▸ **unwrap**(`message?`): `R`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`R`

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[unwrap](internal_.EitherConstructor.md#unwrap)

#### Defined in

dist/either.d.ts:31

___

### unwrapOr

▸ **unwrapOr**<`X`\>(`value`): `R` \| `X`

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `X` |

#### Returns

`R` \| `X`

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[unwrapOr](internal_.EitherConstructor.md#unwrapor)

#### Defined in

dist/either.d.ts:16

___

### zip

▸ **zip**<`A`, `B`\>(`either`): [`Either`](../modules/internal_.md#either)<`L` \| `A`, [`Pair`](../modules.md#pair)<`R`, `B`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Either`](../modules/internal_.md#either)<`A`, `B`\> |

#### Returns

[`Either`](../modules/internal_.md#either)<`L` \| `A`, [`Pair`](../modules.md#pair)<`R`, `B`\>\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[zip](internal_.EitherConstructor.md#zip)

#### Defined in

dist/either.d.ts:30

___

### create

▸ `Static` **create**<`L`, `R`\>(`left`): [`Left`](internal_.Left.md)<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `L` |
| `R` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `L` |

#### Returns

[`Left`](internal_.Left.md)<`L`, `R`\>

#### Defined in

dist/either.d.ts:42

___

### left

▸ `Static` **left**<`T`, `R`\>(`value`): [`Either`](../modules/internal_.md#either)<`T`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |
| `R` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Either`](../modules/internal_.md#either)<`T`, `R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[left](internal_.EitherConstructor.md#left)

#### Defined in

dist/either.d.ts:9

___

### right

▸ `Static` **right**<`L`, `T`\>(`right`): [`Either`](../modules/internal_.md#either)<`L`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `never` |
| `T` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | `T` |

#### Returns

[`Either`](../modules/internal_.md#either)<`L`, `T`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[right](internal_.EitherConstructor.md#right)

#### Defined in

dist/either.d.ts:8
