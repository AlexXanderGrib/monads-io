[Package](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / EitherConstructor

# Class: EitherConstructor\<L, R\>

[\<internal\>](../modules/internal_.md).EitherConstructor

## Type parameters

| Name |
| :------ |
| `L` |
| `R` |

## Hierarchy

- **`EitherConstructor`**

  ↳ [`Right`](internal_.Right.md)

  ↳ [`Left`](internal_.Left.md)

## Implements

- [`AsyncMonad`](../interfaces/AsyncMonad.md)\<`R`\>
- [`Alternative`](../interfaces/Alternative.md)\<`R`\>
- [`Container`](../interfaces/Container.md)\<`R`\>
- [`Pipe`](../interfaces/internal_.Pipe.md)

## Table of contents

### Constructors

- [constructor](internal_.EitherConstructor.md#constructor)

### Methods

- [any](internal_.EitherConstructor.md#any)
- [apply](internal_.EitherConstructor.md#apply)
- [asyncApply](internal_.EitherConstructor.md#asyncapply)
- [asyncChain](internal_.EitherConstructor.md#asyncchain)
- [asyncMap](internal_.EitherConstructor.md#asyncmap)
- [await](internal_.EitherConstructor.md#await)
- [biMap](internal_.EitherConstructor.md#bimap)
- [chain](internal_.EitherConstructor.md#chain)
- [default](internal_.EitherConstructor.md#default)
- [fold](internal_.EitherConstructor.md#fold)
- [isLeft](internal_.EitherConstructor.md#isleft)
- [isRight](internal_.EitherConstructor.md#isright)
- [join](internal_.EitherConstructor.md#join)
- [map](internal_.EitherConstructor.md#map)
- [mapLeft](internal_.EitherConstructor.md#mapleft)
- [mapRight](internal_.EitherConstructor.md#mapright)
- [or](internal_.EitherConstructor.md#or)
- [orAsync](internal_.EitherConstructor.md#orasync)
- [orLazy](internal_.EitherConstructor.md#orlazy)
- [pipe](internal_.EitherConstructor.md#pipe)
- [promise](internal_.EitherConstructor.md#promise)
- [swap](internal_.EitherConstructor.md#swap)
- [tap](internal_.EitherConstructor.md#tap)
- [throw](internal_.EitherConstructor.md#throw)
- [unwrap](internal_.EitherConstructor.md#unwrap)
- [unwrapOr](internal_.EitherConstructor.md#unwrapor)
- [unwrapOrElse](internal_.EitherConstructor.md#unwraporelse)
- [value](internal_.EitherConstructor.md#value)
- [zip](internal_.EitherConstructor.md#zip)

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
| `this` | [`Either`](../modules/internal_.md#either)\<`T`, `T`\> |

#### Returns

`T`

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

#### Implementation of

[AsyncMonad](../interfaces/AsyncMonad.md).[apply](../interfaces/AsyncMonad.md#apply)

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

#### Implementation of

[AsyncMonad](../interfaces/AsyncMonad.md).[apply](../interfaces/AsyncMonad.md#apply)

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

#### Implementation of

[AsyncMonad](../interfaces/AsyncMonad.md).[asyncChain](../interfaces/AsyncMonad.md#asyncchain)

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

#### Implementation of

[AsyncMonad](../interfaces/AsyncMonad.md).[await](../interfaces/AsyncMonad.md#await)

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

#### Implementation of

[AsyncMonad](../interfaces/AsyncMonad.md).[chain](../interfaces/AsyncMonad.md#chain)

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

#### Implementation of

[Alternative](../interfaces/Alternative.md).[default](../interfaces/Alternative.md#default)

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

#### Defined in

dist/either.d.ts:37

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

#### Implementation of

[AsyncMonad](../interfaces/AsyncMonad.md).[join](../interfaces/AsyncMonad.md#join)

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

#### Implementation of

[AsyncMonad](../interfaces/AsyncMonad.md).[map](../interfaces/AsyncMonad.md#map)

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

#### Implementation of

[Alternative](../interfaces/Alternative.md).[or](../interfaces/Alternative.md#or)

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

#### Implementation of

[Pipe](../interfaces/internal_.Pipe.md).[pipe](../interfaces/internal_.Pipe.md#pipe)

#### Defined in

dist/either.d.ts:11

___

### promise

▸ **promise**(): `Promise`\<`R`\>

#### Returns

`Promise`\<`R`\>

#### Defined in

dist/either.d.ts:52

___

### swap

▸ **swap**(): [`Either`](../modules/internal_.md#either)\<`R`, `L`\>

#### Returns

[`Either`](../modules/internal_.md#either)\<`R`, `L`\>

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

dist/either.d.ts:58

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

#### Implementation of

[Container](../interfaces/Container.md).[unwrap](../interfaces/Container.md#unwrap)

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

#### Implementation of

[Container](../interfaces/Container.md).[unwrapOr](../interfaces/Container.md#unwrapor)

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

- probably should not be used, please refactor code or use [fold](internal_.Right.md#fold)

**`See`**

[fold](internal_.Right.md#fold)

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

#### Defined in

dist/either.d.ts:42
