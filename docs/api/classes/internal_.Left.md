[Package](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Left

# Class: Left\<L, R\>

[\<internal\>](../modules/internal_.md).Left

## Type parameters

| Name |
| :------ |
| `L` |
| `R` |

## Hierarchy

- [`EitherConstructor`](internal_.EitherConstructor.md)\<`L`, `R`\>

  ↳ **`Left`**

## Implements

- [`SerializedLeft`](../modules/internal_.md#serializedleft)\<`L`\>

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

- [any](internal_.Left.md#any)
- [apply](internal_.Left.md#apply)
- [asyncApply](internal_.Left.md#asyncapply)
- [asyncChain](internal_.Left.md#asyncchain)
- [asyncMap](internal_.Left.md#asyncmap)
- [await](internal_.Left.md#await)
- [biMap](internal_.Left.md#bimap)
- [chain](internal_.Left.md#chain)
- [default](internal_.Left.md#default)
- [fold](internal_.Left.md#fold)
- [getLeft](internal_.Left.md#getleft)
- [getRight](internal_.Left.md#getright)
- [isLeft](internal_.Left.md#isleft)
- [isRight](internal_.Left.md#isright)
- [join](internal_.Left.md#join)
- [map](internal_.Left.md#map)
- [mapLeft](internal_.Left.md#mapleft)
- [mapRight](internal_.Left.md#mapright)
- [or](internal_.Left.md#or)
- [orAsync](internal_.Left.md#orasync)
- [orLazy](internal_.Left.md#orlazy)
- [promise](internal_.Left.md#promise)
- [swap](internal_.Left.md#swap)
- [tap](internal_.Left.md#tap)
- [throw](internal_.Left.md#throw)
- [toJSON](internal_.Left.md#tojson)
- [unwrap](internal_.Left.md#unwrap)
- [unwrapOr](internal_.Left.md#unwrapor)
- [unwrapOrElse](internal_.Left.md#unwraporelse)
- [value](internal_.Left.md#value)
- [zip](internal_.Left.md#zip)
- [create](internal_.Left.md#create)

## Constructors

### constructor

• `Private` **new Left**\<`L`, `R`\>()

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Overrides

[EitherConstructor](internal_.EitherConstructor.md).[constructor](internal_.EitherConstructor.md#constructor)

#### Defined in

dist/either.d.ts:56

## Properties

### left

• `Readonly` **left**: `L`

#### Implementation of

SerializedLeft.left

#### Defined in

dist/either.d.ts:49

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): ``"Left"``

#### Returns

``"Left"``

#### Defined in

dist/either.d.ts:51

___

### name

• `get` **name**(): ``"Either"``

#### Returns

``"Either"``

#### Implementation of

SerializedLeft.name

#### Defined in

dist/either.d.ts:52

___

### type

• `get` **type**(): [`Left`](../modules/internal_.md#left)

#### Returns

[`Left`](../modules/internal_.md#left)

#### Implementation of

SerializedLeft.type

#### Defined in

dist/either.d.ts:55

## Methods

### any

▸ **any**\<`T`\>(`this`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/internal_.md#either)\<`T`, `T`\> |

#### Returns

`T`

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[any](internal_.EitherConstructor.md#any)

#### Defined in

dist/either.d.ts:41

___

### apply

▸ **apply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Either`](../modules/internal_.md#either)\<`L`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/internal_.md#either)\<`L`, [`Pm`](../modules/internal_.md#pm)\<`A`, `B`, `P`\>\> |
| `argument` | [`Either`](../modules/internal_.md#either)\<`L`, `A`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L`, `B`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[apply](internal_.EitherConstructor.md#apply)

#### Defined in

dist/either.d.ts:21

▸ **apply**\<`A`, `B`, `P`\>(`this`, `map`, `...parameters`): [`Either`](../modules/internal_.md#either)\<`L`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/internal_.md#either)\<`L`, `A`\> |
| `map` | [`Either`](../modules/internal_.md#either)\<`L`, [`Pm`](../modules/internal_.md#pm)\<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L`, `B`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[apply](internal_.EitherConstructor.md#apply)

#### Defined in

dist/either.d.ts:22

___

### asyncApply

▸ **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): `Promise`\<[`Either`](../modules/internal_.md#either)\<`L`, `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/internal_.md#either)\<`L`, [`Pm`](../modules/internal_.md#pm)\<`A`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `argument` | [`Either`](../modules/internal_.md#either)\<`L`, `A`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/internal_.md#either)\<`L`, `B`\>\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[asyncApply](internal_.EitherConstructor.md#asyncapply)

#### Defined in

dist/either.d.ts:23

▸ **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, `...parameters`): `Promise`\<[`Either`](../modules/internal_.md#either)\<`L`, `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/internal_.md#either)\<`L`, `A`\> |
| `map` | [`Either`](../modules/internal_.md#either)\<`L`, [`Pm`](../modules/internal_.md#pm)\<`A`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/internal_.md#either)\<`L`, `B`\>\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[asyncApply](internal_.EitherConstructor.md#asyncapply)

#### Defined in

dist/either.d.ts:24

___

### asyncChain

▸ **asyncChain**\<`A`, `B`, `P`\>(`map`, `...parameters`): `Promise`\<[`Either`](../modules/internal_.md#either)\<`L` \| `A`, `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`R`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<[`Either`](../modules/internal_.md#either)\<`A`, `B`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/internal_.md#either)\<`L` \| `A`, `B`\>\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[asyncChain](internal_.EitherConstructor.md#asyncchain)

#### Defined in

dist/either.d.ts:28

___

### asyncMap

▸ **asyncMap**\<`A`, `B`, `P`\>(`map`, `...parameters`): `Promise`\<[`Either`](../modules/internal_.md#either)\<`L` \| `A`, `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`R`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/internal_.md#either)\<`L` \| `A`, `B`\>\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[asyncMap](internal_.EitherConstructor.md#asyncmap)

#### Defined in

dist/either.d.ts:29

___

### await

▸ **await**\<`T`\>(`this`): `Promise`\<[`Either`](../modules/internal_.md#either)\<`L`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/internal_.md#either)\<`L`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`T`\>\> |

#### Returns

`Promise`\<[`Either`](../modules/internal_.md#either)\<`L`, `T`\>\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[await](internal_.EitherConstructor.md#await)

#### Defined in

dist/either.d.ts:30

___

### biMap

▸ **biMap**\<`A`, `B`\>(`mapLeft`, `mapRight`): [`Either`](../modules/internal_.md#either)\<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapLeft` | [`Pm`](../modules/internal_.md#pm)\<`L`, `A`\> |
| `mapRight` | [`Pm`](../modules/internal_.md#pm)\<`R`, `B`\> |

#### Returns

[`Either`](../modules/internal_.md#either)\<`A`, `B`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[biMap](internal_.EitherConstructor.md#bimap)

#### Defined in

dist/either.d.ts:27

___

### chain

▸ **chain**\<`A`, `B`, `P`\>(`map`, `...parameters`): [`Either`](../modules/internal_.md#either)\<`L` \| `A`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`R`, [`Either`](../modules/internal_.md#either)\<`A`, `B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L` \| `A`, `B`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[chain](internal_.EitherConstructor.md#chain)

#### Defined in

dist/either.d.ts:26

___

### default

▸ **default**(`value`): [`Either`](../modules/internal_.md#either)\<`L`, `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `R` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L`, `R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[default](internal_.EitherConstructor.md#default)

#### Defined in

dist/either.d.ts:32

___

### fold

▸ **fold**\<`A`, `B`\>(`mapLeft`, `mapRight`): `A` \| `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapLeft` | [`Pm`](../modules/internal_.md#pm)\<`L`, `A`\> |
| `mapRight` | [`Pm`](../modules/internal_.md#pm)\<`R`, `B`\> |

#### Returns

`A` \| `B`

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[fold](internal_.EitherConstructor.md#fold)

#### Defined in

dist/either.d.ts:31

___

### getLeft

▸ **getLeft**(): `L`

#### Returns

`L`

#### Overrides

[EitherConstructor](internal_.EitherConstructor.md).[getLeft](internal_.EitherConstructor.md#getleft)

#### Defined in

dist/either.d.ts:54

___

### getRight

▸ **getRight**(): `undefined`

#### Returns

`undefined`

#### Overrides

[EitherConstructor](internal_.EitherConstructor.md).[getRight](internal_.EitherConstructor.md#getright)

#### Defined in

dist/either.d.ts:53

___

### isLeft

▸ **isLeft**(): this is Left\<L, R\>

#### Returns

this is Left\<L, R\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[isLeft](internal_.EitherConstructor.md#isleft)

#### Defined in

dist/either.d.ts:13

___

### isRight

▸ **isRight**(): this is Right\<L, R\>

#### Returns

this is Right\<L, R\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[isRight](internal_.EitherConstructor.md#isright)

#### Defined in

dist/either.d.ts:14

___

### join

▸ **join**\<`L1`, `L2`, `R`\>(`this`): [`Either`](../modules/internal_.md#either)\<`L1` \| `L2`, `R`\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `L2` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/internal_.md#either)\<`L1`, [`Either`](../modules/internal_.md#either)\<`L2`, `R`\>\> |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L1` \| `L2`, `R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[join](internal_.EitherConstructor.md#join)

#### Defined in

dist/either.d.ts:17

___

### map

▸ **map**\<`T`, `P`\>(`map`, `...parameters`): [`Either`](../modules/internal_.md#either)\<`L`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`R`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L`, `T`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[map](internal_.EitherConstructor.md#map)

#### Defined in

dist/either.d.ts:19

___

### mapLeft

▸ **mapLeft**\<`T`, `P`\>(`map`, `...parameters`): [`Either`](../modules/internal_.md#either)\<`T`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`L`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`T`, `R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[mapLeft](internal_.EitherConstructor.md#mapleft)

#### Defined in

dist/either.d.ts:18

___

### mapRight

▸ **mapRight**\<`T`, `P`\>(`map`, `...parameters`): [`Either`](../modules/internal_.md#either)\<`L`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`R`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L`, `T`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[mapRight](internal_.EitherConstructor.md#mapright)

#### Defined in

dist/either.d.ts:20

___

### or

▸ **or**(`x`): [`Either`](../modules/internal_.md#either)\<`L`, `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Either`](../modules/internal_.md#either)\<`L`, `R`\> |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L`, `R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[or](internal_.EitherConstructor.md#or)

#### Defined in

dist/either.d.ts:33

___

### orAsync

▸ **orAsync**(`factory`): `Promise`\<[`Either`](../modules/internal_.md#either)\<`L`, `R`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`MaybePromiseLike`](../modules.md#maybepromiselike)\<[`Either`](../modules/internal_.md#either)\<`L`, `R`\>\> |

#### Returns

`Promise`\<[`Either`](../modules/internal_.md#either)\<`L`, `R`\>\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[orAsync](internal_.EitherConstructor.md#orasync)

#### Defined in

dist/either.d.ts:35

___

### orLazy

▸ **orLazy**(`factory`): [`Either`](../modules/internal_.md#either)\<`L`, `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`Either`](../modules/internal_.md#either)\<`L`, `R`\> |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L`, `R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[orLazy](internal_.EitherConstructor.md#orlazy)

#### Defined in

dist/either.d.ts:34

___

### promise

▸ **promise**(): `Promise`\<`R`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[promise](internal_.EitherConstructor.md#promise)

#### Defined in

dist/either.d.ts:38

___

### swap

▸ **swap**(): [`Either`](../modules/internal_.md#either)\<`R`, `L`\>

#### Returns

[`Either`](../modules/internal_.md#either)\<`R`, `L`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[swap](internal_.EitherConstructor.md#swap)

#### Defined in

dist/either.d.ts:25

___

### tap

▸ **tap**\<`P`\>(`callback`, `...parameters`): [`Either`](../modules/internal_.md#either)\<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Pm`](../modules/internal_.md#pm)\<`R`, `void`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L`, `R`\>

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

dist/either.d.ts:39

___

### toJSON

▸ **toJSON**(): `Readonly`\<\{ `left`: `L` ; `name`: ``"Either"`` ; `type`: [`Left`](../modules/internal_.md#left)  }\>

#### Returns

`Readonly`\<\{ `left`: `L` ; `name`: ``"Either"`` ; `type`: [`Left`](../modules/internal_.md#left)  }\>

#### Defined in

dist/either.d.ts:57

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

dist/either.d.ts:37

___

### unwrapOr

▸ **unwrapOr**\<`X`\>(`value`): `R` \| `X`

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

### unwrapOrElse

▸ **unwrapOrElse**\<`X`\>(`fallback`): `R` \| `X`

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | (`value`: `L`) => `X` |

#### Returns

`R` \| `X`

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[unwrapOrElse](internal_.EitherConstructor.md#unwraporelse)

#### Defined in

dist/either.d.ts:15

___

### value

▸ **value**(): `L` \| `R`

#### Returns

`L` \| `R`

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[value](internal_.EitherConstructor.md#value)

#### Defined in

dist/either.d.ts:40

___

### zip

▸ **zip**\<`A`, `B`\>(`either`): [`Either`](../modules/internal_.md#either)\<`L` \| `A`, [`Pair`](../modules.md#pair)\<`R`, `B`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Either`](../modules/internal_.md#either)\<`A`, `B`\> |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L` \| `A`, [`Pair`](../modules.md#pair)\<`R`, `B`\>\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[zip](internal_.EitherConstructor.md#zip)

#### Defined in

dist/either.d.ts:36

___

### create

▸ `Static` **create**\<`L`, `R`\>(`left`): [`Left`](internal_.Left.md)\<`L`, `R`\>

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

[`Left`](internal_.Left.md)\<`L`, `R`\>

#### Defined in

dist/either.d.ts:50
