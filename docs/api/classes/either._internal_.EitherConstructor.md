[Package](../README.md) / [Modules](../modules.md) / [either](../modules/either.md) / [\<internal\>](../modules/either._internal_.md) / EitherConstructor

# Class: EitherConstructor\<L, R\>

[either](../modules/either.md).[\<internal\>](../modules/either._internal_.md).EitherConstructor

## Type parameters

| Name |
| :------ |
| `L` |
| `R` |

## Hierarchy

- **`EitherConstructor`**

  ↳ [`Right`](either._internal_.Right.md)

  ↳ [`Left`](either._internal_.Left.md)

## Implements

- [`AsyncMonad`](../interfaces/index.AsyncMonad.md)\<`R`\>
- [`Alternative`](../interfaces/index.Alternative.md)\<`R`\>
- [`Container`](../interfaces/index.Container.md)\<`R`\>
- [`Pipe`](../interfaces/types.Pipe.md)

## Table of contents

### Constructors

- [constructor](either._internal_.EitherConstructor.md#constructor)

### Methods

- [any](either._internal_.EitherConstructor.md#any)
- [apply](either._internal_.EitherConstructor.md#apply)
- [asyncApply](either._internal_.EitherConstructor.md#asyncapply)
- [asyncChain](either._internal_.EitherConstructor.md#asyncchain)
- [asyncMap](either._internal_.EitherConstructor.md#asyncmap)
- [await](either._internal_.EitherConstructor.md#await)
- [biMap](either._internal_.EitherConstructor.md#bimap)
- [chain](either._internal_.EitherConstructor.md#chain)
- [chainLeft](either._internal_.EitherConstructor.md#chainleft)
- [default](either._internal_.EitherConstructor.md#default)
- [fold](either._internal_.EitherConstructor.md#fold)
- [isLeft](either._internal_.EitherConstructor.md#isleft)
- [isRight](either._internal_.EitherConstructor.md#isright)
- [join](either._internal_.EitherConstructor.md#join)
- [map](either._internal_.EitherConstructor.md#map)
- [mapLeft](either._internal_.EitherConstructor.md#mapleft)
- [mapRight](either._internal_.EitherConstructor.md#mapright)
- [or](either._internal_.EitherConstructor.md#or)
- [orAsync](either._internal_.EitherConstructor.md#orasync)
- [orLazy](either._internal_.EitherConstructor.md#orlazy)
- [pipe](either._internal_.EitherConstructor.md#pipe)
- [promise](either._internal_.EitherConstructor.md#promise)
- [swap](either._internal_.EitherConstructor.md#swap)
- [tap](either._internal_.EitherConstructor.md#tap)
- [throw](either._internal_.EitherConstructor.md#throw)
- [unwrap](either._internal_.EitherConstructor.md#unwrap)
- [unwrapOr](either._internal_.EitherConstructor.md#unwrapor)
- [unwrapOrElse](either._internal_.EitherConstructor.md#unwraporelse)
- [value](either._internal_.EitherConstructor.md#value)
- [zip](either._internal_.EitherConstructor.md#zip)

## Constructors

### constructor

• **new EitherConstructor**\<`L`, `R`\>()

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

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
| `this` | [`Either`](../modules/either.md#either)\<`T`, `T`\> |

#### Returns

`T`

#### Defined in

dist/either.d.ts:68

___

### apply

▸ **apply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Either`](../modules/either.md#either)\<`L`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/either.md#either)\<`L`, [`Mapper`](../modules/types.md#mapper)\<`A`, `B`, `P`\>\> |
| `argument` | [`Either`](../modules/either.md#either)\<`L`, `A`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `B`\>

#### Implementation of

[AsyncMonad](../interfaces/index.AsyncMonad.md).[apply](../interfaces/index.AsyncMonad.md#apply)

#### Defined in

dist/either.d.ts:20

▸ **apply**\<`A`, `B`, `P`\>(`this`, `map`, `...parameters`): [`Either`](../modules/either.md#either)\<`L`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/either.md#either)\<`L`, `A`\> |
| `map` | [`Either`](../modules/either.md#either)\<`L`, [`Mapper`](../modules/types.md#mapper)\<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `B`\>

#### Implementation of

[AsyncMonad](../interfaces/index.AsyncMonad.md).[apply](../interfaces/index.AsyncMonad.md#apply)

#### Defined in

dist/either.d.ts:21

___

### asyncApply

▸ **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): `Promise`\<[`Either`](../modules/either.md#either)\<`L`, `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/either.md#either)\<`L`, [`Mapper`](../modules/types.md#mapper)\<`A`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `argument` | [`Either`](../modules/either.md#either)\<`L`, `A`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/either.md#either)\<`L`, `B`\>\>

#### Defined in

dist/either.d.ts:22

▸ **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, `...parameters`): `Promise`\<[`Either`](../modules/either.md#either)\<`L`, `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/either.md#either)\<`L`, `A`\> |
| `map` | [`Either`](../modules/either.md#either)\<`L`, [`Mapper`](../modules/types.md#mapper)\<`A`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/either.md#either)\<`L`, `B`\>\>

#### Defined in

dist/either.d.ts:23

___

### asyncChain

▸ **asyncChain**\<`A`, `B`, `P`\>(`map`, `...parameters`): `Promise`\<[`Either`](../modules/either.md#either)\<`L` \| `A`, `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`R`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<[`Either`](../modules/either.md#either)\<`A`, `B`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/either.md#either)\<`L` \| `A`, `B`\>\>

#### Implementation of

[AsyncMonad](../interfaces/index.AsyncMonad.md).[asyncChain](../interfaces/index.AsyncMonad.md#asyncchain)

#### Defined in

dist/either.d.ts:28

___

### asyncMap

▸ **asyncMap**\<`A`, `B`, `P`\>(`map`, `...parameters`): `Promise`\<[`Either`](../modules/either.md#either)\<`L` \| `A`, `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`R`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/either.md#either)\<`L` \| `A`, `B`\>\>

#### Defined in

dist/either.d.ts:29

___

### await

▸ **await**\<`T`\>(`this`): `Promise`\<[`Either`](../modules/either.md#either)\<`L`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/either.md#either)\<`L`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`T`\>\> |

#### Returns

`Promise`\<[`Either`](../modules/either.md#either)\<`L`, `T`\>\>

#### Implementation of

[AsyncMonad](../interfaces/index.AsyncMonad.md).[await](../interfaces/index.AsyncMonad.md#await)

#### Defined in

dist/either.d.ts:30

___

### biMap

▸ **biMap**\<`A`, `B`\>(`mapLeft`, `mapRight`): [`Either`](../modules/either.md#either)\<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapLeft` | [`Mapper`](../modules/types.md#mapper)\<`L`, `A`\> |
| `mapRight` | [`Mapper`](../modules/types.md#mapper)\<`R`, `B`\> |

#### Returns

[`Either`](../modules/either.md#either)\<`A`, `B`\>

#### Defined in

dist/either.d.ts:27

___

### chain

▸ **chain**\<`A`, `B`, `P`\>(`map`, `...parameters`): [`Either`](../modules/either.md#either)\<`L` \| `A`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`R`, [`Either`](../modules/either.md#either)\<`A`, `B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`L` \| `A`, `B`\>

#### Implementation of

[AsyncMonad](../interfaces/index.AsyncMonad.md).[chain](../interfaces/index.AsyncMonad.md#chain)

#### Defined in

dist/either.d.ts:25

___

### chainLeft

▸ **chainLeft**\<`A`, `B`, `P`\>(`map`, `...parameters`): [`Either`](../modules/either.md#either)\<`A`, `R` \| `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`L`, [`Either`](../modules/either.md#either)\<`A`, `B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`A`, `R` \| `B`\>

#### Defined in

dist/either.d.ts:26

___

### default

▸ **default**(`value`): [`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `R` |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Implementation of

[Alternative](../interfaces/index.Alternative.md).[default](../interfaces/index.Alternative.md#default)

#### Defined in

dist/either.d.ts:39

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
| `mapLeft` | [`Mapper`](../modules/types.md#mapper)\<`L`, `A`\> |
| `mapRight` | [`Mapper`](../modules/types.md#mapper)\<`R`, `B`\> |

#### Returns

`A` \| `B`

**`Throws`**

- InvalidStateError if Either state is neither Left neither Right, this probably should never happen

#### Defined in

dist/either.d.ts:38

___

### isLeft

▸ **isLeft**(): this is Left\<L, R\>

#### Returns

this is Left\<L, R\>

#### Defined in

dist/either.d.ts:12

___

### isRight

▸ **isRight**(): this is Right\<L, R\>

#### Returns

this is Right\<L, R\>

#### Defined in

dist/either.d.ts:13

___

### join

▸ **join**\<`L1`, `L2`, `R`\>(`this`): [`Either`](../modules/either.md#either)\<`L1` \| `L2`, `R`\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `L2` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/either.md#either)\<`L1`, [`Either`](../modules/either.md#either)\<`L2`, `R`\>\> |

#### Returns

[`Either`](../modules/either.md#either)\<`L1` \| `L2`, `R`\>

#### Implementation of

[AsyncMonad](../interfaces/index.AsyncMonad.md).[join](../interfaces/index.AsyncMonad.md#join)

#### Defined in

dist/either.d.ts:16

___

### map

▸ **map**\<`T`, `P`\>(`map`, `...parameters`): [`Either`](../modules/either.md#either)\<`L`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`R`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `T`\>

#### Implementation of

[AsyncMonad](../interfaces/index.AsyncMonad.md).[map](../interfaces/index.AsyncMonad.md#map)

#### Defined in

dist/either.d.ts:18

___

### mapLeft

▸ **mapLeft**\<`T`, `P`\>(`map`, `...parameters`): [`Either`](../modules/either.md#either)\<`T`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`L`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`T`, `R`\>

#### Defined in

dist/either.d.ts:17

___

### mapRight

▸ **mapRight**\<`T`, `P`\>(`map`, `...parameters`): [`Either`](../modules/either.md#either)\<`L`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`R`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `T`\>

#### Defined in

dist/either.d.ts:19

___

### or

▸ **or**(`x`): [`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Either`](../modules/either.md#either)\<`L`, `R`\> |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Implementation of

[Alternative](../interfaces/index.Alternative.md).[or](../interfaces/index.Alternative.md#or)

#### Defined in

dist/either.d.ts:40

___

### orAsync

▸ **orAsync**(`factory`): `Promise`\<[`Either`](../modules/either.md#either)\<`L`, `R`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<[`Either`](../modules/either.md#either)\<`L`, `R`\>\> |

#### Returns

`Promise`\<[`Either`](../modules/either.md#either)\<`L`, `R`\>\>

#### Defined in

dist/either.d.ts:42

___

### orLazy

▸ **orLazy**(`factory`): [`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`Either`](../modules/either.md#either)\<`L`, `R`\> |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Defined in

dist/either.d.ts:41

___

### pipe

▸ **pipe**\<`T`, `P`\>(`pipe`, `...parameters`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pipe` | [`Mapper`](../modules/types.md#mapper)\<[`Either`](../modules/either.md#either)\<`L`, `R`\>, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

`T`

#### Implementation of

[Pipe](../interfaces/types.Pipe.md).[pipe](../interfaces/types.Pipe.md#pipe)

#### Defined in

dist/either.d.ts:11

___

### promise

▸ **promise**(): `Promise`\<`R`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

dist/either.d.ts:53

___

### swap

▸ **swap**(): [`Either`](../modules/either.md#either)\<`R`, `L`\>

#### Returns

[`Either`](../modules/either.md#either)\<`R`, `L`\>

#### Defined in

dist/either.d.ts:24

___

### tap

▸ **tap**\<`P`\>(`callback`, `...parameters`): [`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Mapper`](../modules/types.md#mapper)\<`R`, `void`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `R`\>

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

#### Defined in

dist/either.d.ts:59

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

- **If Left value is Error use [throw](either._internal_.Right.md#throw) instead**

**`Throws`**

- UnwrapCustomError is Left with provided message

#### Implementation of

[Container](../interfaces/index.Container.md).[unwrap](../interfaces/index.Container.md#unwrap)

#### Defined in

dist/either.d.ts:52

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

#### Implementation of

[Container](../interfaces/index.Container.md).[unwrapOr](../interfaces/index.Container.md#unwrapor)

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

#### Defined in

dist/either.d.ts:14

___

### value

▸ **value**(): `L` \| `R`

Return value of Either independent if it is Right or Left

#### Returns

`L` \| `R`

**`Deprecated`**

- probably should not be used, please refactor code or use [fold](either._internal_.Right.md#fold)

**`See`**

[fold](either._internal_.Right.md#fold)

#### Defined in

dist/either.d.ts:67

___

### zip

▸ **zip**\<`A`, `B`\>(`either`): [`Either`](../modules/either.md#either)\<`L` \| `A`, [`Pair`](../modules/index.md#pair)\<`R`, `B`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Either`](../modules/either.md#either)\<`A`, `B`\> |

#### Returns

[`Either`](../modules/either.md#either)\<`L` \| `A`, [`Pair`](../modules/index.md#pair)\<`R`, `B`\>\>

#### Defined in

dist/either.d.ts:43
