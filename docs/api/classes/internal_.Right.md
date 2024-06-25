[Package](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Right

# Class: Right\<L, R\>

[\<internal\>](../modules/internal_.md).Right

## Type parameters

| Name |
| :------ |
| `L` |
| `R` |

## Hierarchy

- [`EitherConstructor`](internal_.EitherConstructor.md)\<`L`, `R`\>

  ↳ **`Right`**

## Implements

- [`SerializedRight`](../modules/internal_.md#serializedright)\<`R`\>

## Table of contents

### Constructors

- [constructor](internal_.Right.md#constructor)

### Properties

- [right](internal_.Right.md#right)

### Accessors

- [[toStringTag]](internal_.Right.md#[tostringtag])
- [name](internal_.Right.md#name)
- [type](internal_.Right.md#type)

### Methods

- [any](internal_.Right.md#any)
- [apply](internal_.Right.md#apply)
- [asyncApply](internal_.Right.md#asyncapply)
- [asyncChain](internal_.Right.md#asyncchain)
- [asyncMap](internal_.Right.md#asyncmap)
- [await](internal_.Right.md#await)
- [biMap](internal_.Right.md#bimap)
- [chain](internal_.Right.md#chain)
- [default](internal_.Right.md#default)
- [fold](internal_.Right.md#fold)
- [getLeft](internal_.Right.md#getleft)
- [getRight](internal_.Right.md#getright)
- [isLeft](internal_.Right.md#isleft)
- [isRight](internal_.Right.md#isright)
- [join](internal_.Right.md#join)
- [map](internal_.Right.md#map)
- [mapLeft](internal_.Right.md#mapleft)
- [mapRight](internal_.Right.md#mapright)
- [or](internal_.Right.md#or)
- [orAsync](internal_.Right.md#orasync)
- [orLazy](internal_.Right.md#orlazy)
- [pipe](internal_.Right.md#pipe)
- [promise](internal_.Right.md#promise)
- [swap](internal_.Right.md#swap)
- [tap](internal_.Right.md#tap)
- [throw](internal_.Right.md#throw)
- [toJSON](internal_.Right.md#tojson)
- [unwrap](internal_.Right.md#unwrap)
- [unwrapOr](internal_.Right.md#unwrapor)
- [unwrapOrElse](internal_.Right.md#unwraporelse)
- [value](internal_.Right.md#value)
- [zip](internal_.Right.md#zip)
- [create](internal_.Right.md#create)

## Constructors

### constructor

• `Private` **new Right**\<`L`, `R`\>()

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Overrides

[EitherConstructor](internal_.EitherConstructor.md).[constructor](internal_.EitherConstructor.md#constructor)

#### Defined in

dist/either.d.ts:112

## Properties

### right

• `Readonly` **right**: `R`

**`Deprecated`**

Should not be used directly, public only for serialization & type check use [getRight](internal_.Right.md#getright)

**`See`**

[getRight](internal_.Right.md#getright)

**`Memberof`**

Right

#### Implementation of

SerializedRight.right

#### Defined in

dist/either.d.ts:106

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): [`Right`](../modules/internal_.md#right)

#### Returns

[`Right`](../modules/internal_.md#right)

#### Defined in

dist/either.d.ts:107

___

### name

• `get` **name**(): ``"Either"``

#### Returns

``"Either"``

#### Implementation of

SerializedRight.name

#### Defined in

dist/either.d.ts:108

___

### type

• `get` **type**(): [`Right`](../modules/internal_.md#right)

#### Returns

[`Right`](../modules/internal_.md#right)

#### Implementation of

SerializedRight.type

#### Defined in

dist/either.d.ts:109

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

dist/either.d.ts:67

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
| `this` | [`Either`](../modules/internal_.md#either)\<`L`, [`Mapper`](../modules/internal_.md#mapper)\<`A`, `B`, `P`\>\> |
| `argument` | [`Either`](../modules/internal_.md#either)\<`L`, `A`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L`, `B`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[apply](internal_.EitherConstructor.md#apply)

#### Defined in

dist/either.d.ts:20

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
| `map` | [`Either`](../modules/internal_.md#either)\<`L`, [`Mapper`](../modules/internal_.md#mapper)\<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L`, `B`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[apply](internal_.EitherConstructor.md#apply)

#### Defined in

dist/either.d.ts:21

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
| `this` | [`Either`](../modules/internal_.md#either)\<`L`, [`Mapper`](../modules/internal_.md#mapper)\<`A`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `argument` | [`Either`](../modules/internal_.md#either)\<`L`, `A`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/internal_.md#either)\<`L`, `B`\>\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[asyncApply](internal_.EitherConstructor.md#asyncapply)

#### Defined in

dist/either.d.ts:22

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
| `map` | [`Either`](../modules/internal_.md#either)\<`L`, [`Mapper`](../modules/internal_.md#mapper)\<`A`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/internal_.md#either)\<`L`, `B`\>\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[asyncApply](internal_.EitherConstructor.md#asyncapply)

#### Defined in

dist/either.d.ts:23

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
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`R`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<[`Either`](../modules/internal_.md#either)\<`A`, `B`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/internal_.md#either)\<`L` \| `A`, `B`\>\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[asyncChain](internal_.EitherConstructor.md#asyncchain)

#### Defined in

dist/either.d.ts:27

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
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`R`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/internal_.md#either)\<`L` \| `A`, `B`\>\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[asyncMap](internal_.EitherConstructor.md#asyncmap)

#### Defined in

dist/either.d.ts:28

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

dist/either.d.ts:29

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
| `mapLeft` | [`Mapper`](../modules/internal_.md#mapper)\<`L`, `A`\> |
| `mapRight` | [`Mapper`](../modules/internal_.md#mapper)\<`R`, `B`\> |

#### Returns

[`Either`](../modules/internal_.md#either)\<`A`, `B`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[biMap](internal_.EitherConstructor.md#bimap)

#### Defined in

dist/either.d.ts:26

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
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`R`, [`Either`](../modules/internal_.md#either)\<`A`, `B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L` \| `A`, `B`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[chain](internal_.EitherConstructor.md#chain)

#### Defined in

dist/either.d.ts:25

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

dist/either.d.ts:38

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
| `mapLeft` | [`Mapper`](../modules/internal_.md#mapper)\<`L`, `A`\> |
| `mapRight` | [`Mapper`](../modules/internal_.md#mapper)\<`R`, `B`\> |

#### Returns

`A` \| `B`

**`Throws`**

- [InvalidStateError](InvalidStateError.md) if Either state is neither Left neither Right, this probably should never happen

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[fold](internal_.EitherConstructor.md#fold)

#### Defined in

dist/either.d.ts:37

___

### getLeft

▸ **getLeft**(): `undefined`

#### Returns

`undefined`

#### Defined in

dist/either.d.ts:111

___

### getRight

▸ **getRight**(): `R`

#### Returns

`R`

#### Defined in

dist/either.d.ts:110

___

### isLeft

▸ **isLeft**(): this is Left\<L, R\>

#### Returns

this is Left\<L, R\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[isLeft](internal_.EitherConstructor.md#isleft)

#### Defined in

dist/either.d.ts:12

___

### isRight

▸ **isRight**(): this is Right\<L, R\>

#### Returns

this is Right\<L, R\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[isRight](internal_.EitherConstructor.md#isright)

#### Defined in

dist/either.d.ts:13

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

dist/either.d.ts:16

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
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`R`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L`, `T`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[map](internal_.EitherConstructor.md#map)

#### Defined in

dist/either.d.ts:18

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
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`L`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`T`, `R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[mapLeft](internal_.EitherConstructor.md#mapleft)

#### Defined in

dist/either.d.ts:17

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
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`R`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L`, `T`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[mapRight](internal_.EitherConstructor.md#mapright)

#### Defined in

dist/either.d.ts:19

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

dist/either.d.ts:39

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

dist/either.d.ts:41

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

dist/either.d.ts:40

___

### pipe

▸ **pipe**\<`T`, `P`\>(`pipe`, `...parameters`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pipe` | [`Mapper`](../modules/internal_.md#mapper)\<[`Either`](../modules/internal_.md#either)\<`L`, `R`\>, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

`T`

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[pipe](internal_.EitherConstructor.md#pipe)

#### Defined in

dist/either.d.ts:11

___

### promise

▸ **promise**(): `Promise`\<`R`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[promise](internal_.EitherConstructor.md#promise)

#### Defined in

dist/either.d.ts:52

___

### swap

▸ **swap**(): [`Either`](../modules/internal_.md#either)\<`R`, `L`\>

#### Returns

[`Either`](../modules/internal_.md#either)\<`R`, `L`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[swap](internal_.EitherConstructor.md#swap)

#### Defined in

dist/either.d.ts:24

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
| `callback` | [`Mapper`](../modules/internal_.md#mapper)\<`R`, `void`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)\<`L`, `R`\>

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[tap](internal_.EitherConstructor.md#tap)

#### Defined in

dist/either.d.ts:10

___

### throw

▸ **throw**(): `R`

#### Returns

`R`

- Right value if current state is Right,

**`Throws`**

- L if current state is Left

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[throw](internal_.EitherConstructor.md#throw)

#### Defined in

dist/either.d.ts:58

___

### toJSON

▸ **toJSON**(): `Readonly`\<\{ `name`: ``"Either"`` ; `right`: `R` ; `type`: [`Right`](../modules/internal_.md#right)  }\>

#### Returns

`Readonly`\<\{ `name`: ``"Either"`` ; `right`: `R` ; `type`: [`Right`](../modules/internal_.md#right)  }\>

#### Defined in

dist/either.d.ts:113

___

### unwrap

▸ **unwrap**(`message?`): `R`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message?` | `string` | Error message, if either is left. By default "Either state is Left" |

#### Returns

`R`

- Right value of Either, if right

**`Deprecated`**

- **If Left value is Error use [throw](internal_.Right.md#throw) instead**

**`Throws`**

- [UnwrapCustomError](UnwrapCustomError.md) is Left with provided message

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[unwrap](internal_.EitherConstructor.md#unwrap)

#### Defined in

dist/either.d.ts:51

___

### unwrapOr

▸ **unwrapOr**\<`T`\>(`value`): `R` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`R` \| `T`

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[unwrapOr](internal_.EitherConstructor.md#unwrapor)

#### Defined in

dist/either.d.ts:15

___

### unwrapOrElse

▸ **unwrapOrElse**\<`T`\>(`fallback`): `R` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | (`value`: `L`) => `T` |

#### Returns

`R` \| `T`

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[unwrapOrElse](internal_.EitherConstructor.md#unwraporelse)

#### Defined in

dist/either.d.ts:14

___

### value

▸ **value**(): `L` \| `R`

Return value of Either independent if it is Right or Left

#### Returns

`L` \| `R`

**`Deprecated`**

- probably should not be used, please refactor code or use [fold](internal_.Right.md#fold)

**`See`**

[fold](internal_.Right.md#fold)

#### Inherited from

[EitherConstructor](internal_.EitherConstructor.md).[value](internal_.EitherConstructor.md#value)

#### Defined in

dist/either.d.ts:66

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

dist/either.d.ts:42

___

### create

▸ `Static` **create**\<`R`, `L`\>(`right`): [`Right`](internal_.Right.md)\<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `L` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | `R` |

#### Returns

[`Right`](internal_.Right.md)\<`L`, `R`\>

#### Defined in

dist/either.d.ts:98
