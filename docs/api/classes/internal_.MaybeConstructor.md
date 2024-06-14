[Package](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / MaybeConstructor

# Class: MaybeConstructor\<T\>

[\<internal\>](../modules/internal_.md).MaybeConstructor

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`MaybeConstructor`**

  ↳ [`Just`](internal_.Just.md)

  ↳ [`None`](internal_.None.md)

## Implements

- [`Monad`](../interfaces/Monad.md)\<`T`\>
- [`Alternative`](../interfaces/Alternative.md)\<`T`\>
- [`Container`](../interfaces/Container.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](internal_.MaybeConstructor.md#constructor)

### Methods

- [apply](internal_.MaybeConstructor.md#apply)
- [asyncApply](internal_.MaybeConstructor.md#asyncapply)
- [asyncChain](internal_.MaybeConstructor.md#asyncchain)
- [asyncMap](internal_.MaybeConstructor.md#asyncmap)
- [await](internal_.MaybeConstructor.md#await)
- [chain](internal_.MaybeConstructor.md#chain)
- [default](internal_.MaybeConstructor.md#default)
- [filter](internal_.MaybeConstructor.md#filter)
- [flatMap](internal_.MaybeConstructor.md#flatmap)
- [fold](internal_.MaybeConstructor.md#fold)
- [isJust](internal_.MaybeConstructor.md#isjust)
- [isNone](internal_.MaybeConstructor.md#isnone)
- [join](internal_.MaybeConstructor.md#join)
- [map](internal_.MaybeConstructor.md#map)
- [mapNullable](internal_.MaybeConstructor.md#mapnullable)
- [or](internal_.MaybeConstructor.md#or)
- [orAsync](internal_.MaybeConstructor.md#orasync)
- [orLazy](internal_.MaybeConstructor.md#orlazy)
- [tap](internal_.MaybeConstructor.md#tap)
- [unwrap](internal_.MaybeConstructor.md#unwrap)
- [unwrapOr](internal_.MaybeConstructor.md#unwrapor)
- [unwrapOrElse](internal_.MaybeConstructor.md#unwraporelse)
- [zip](internal_.MaybeConstructor.md#zip)

## Constructors

### constructor

• **new MaybeConstructor**\<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

## Methods

### apply

▸ **apply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/internal_.md#maybe)\<[`Pm`](../modules/internal_.md#pm)\<`A`, `B`, `P`\>\> |
| `argument` | [`Maybe`](../modules/internal_.md#maybe)\<`A`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`B`\>

#### Implementation of

[Monad](../interfaces/Monad.md).[apply](../interfaces/Monad.md#apply)

#### Defined in

dist/maybe.d.ts:18

▸ **apply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/internal_.md#maybe)\<`A`\> |
| `argument` | [`Maybe`](../modules/internal_.md#maybe)\<[`Pm`](../modules/internal_.md#pm)\<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`B`\>

#### Implementation of

[Monad](../interfaces/Monad.md).[apply](../interfaces/Monad.md#apply)

#### Defined in

dist/maybe.d.ts:19

___

### asyncApply

▸ **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): `Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/internal_.md#maybe)\<[`Pm`](../modules/internal_.md#pm)\<`A`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `argument` | [`Maybe`](../modules/internal_.md#maybe)\<`A`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`B`\>\>

#### Defined in

dist/maybe.d.ts:35

▸ **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, `...parameters`): `Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/internal_.md#maybe)\<`A`\> |
| `map` | [`Maybe`](../modules/internal_.md#maybe)\<[`Pm`](../modules/internal_.md#pm)\<`A`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`B`\>\>

#### Defined in

dist/maybe.d.ts:36

___

### asyncChain

▸ **asyncChain**\<`V`, `P`\>(`map`, `...parameters`): `Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`T`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<[`Maybe`](../modules/internal_.md#maybe)\<`V`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`V`\>\>

#### Defined in

dist/maybe.d.ts:32

___

### asyncMap

▸ **asyncMap**\<`A`, `P`\>(`map`, `...parameters`): `Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`T`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`A`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`A`\>\>

#### Defined in

dist/maybe.d.ts:33

___

### await

▸ **await**\<`X`\>(`this`): `Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`X`\>\>

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/internal_.md#maybe)\<[`MaybePromiseLike`](../modules.md#maybepromiselike)\<`X`\>\> |

#### Returns

`Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`X`\>\>

#### Defined in

dist/maybe.d.ts:34

___

### chain

▸ **chain**\<`V`, `A`\>(`map`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)\<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `A` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`T`, [`Maybe`](../modules/internal_.md#maybe)\<`V`\>, `A`\> |
| `...parameters` | `A` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`V`\>

#### Implementation of

[Monad](../interfaces/Monad.md).[chain](../interfaces/Monad.md#chain)

#### Defined in

dist/maybe.d.ts:22

___

### default

▸ **default**(`value`): [`Maybe`](../modules/internal_.md#maybe)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`T`\>

#### Implementation of

[Alternative](../interfaces/Alternative.md).[default](../interfaces/Alternative.md#default)

#### Defined in

dist/maybe.d.ts:23

___

### filter

▸ **filter**\<`X`\>(`filter`): [`Maybe`](../modules/internal_.md#maybe)\<`X`\>

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`input`: `T`) => input is X |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`X`\>

#### Defined in

dist/maybe.d.ts:20

▸ **filter**(`filter`): [`Maybe`](../modules/internal_.md#maybe)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`input`: `T`) => `boolean` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`T`\>

#### Defined in

dist/maybe.d.ts:21

___

### flatMap

▸ **flatMap**\<`V`, `P`\>(`map`, `...parameters`): `undefined` \| `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`T`, `V`, `P`\> |
| `...parameters` | `P` |

#### Returns

`undefined` \| `V`

#### Defined in

dist/maybe.d.ts:29

___

### fold

▸ **fold**\<`A`, `B`\>(`mapJust`, `mapNone`): `A` \| `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapJust` | [`Pm`](../modules/internal_.md#pm)\<`T`, `A`\> |
| `mapNone` | [`Pm`](../modules/internal_.md#pm)\<`void`, `B`\> |

#### Returns

`A` \| `B`

#### Defined in

dist/maybe.d.ts:31

___

### isJust

▸ **isJust**(): this is Just\<T\>

#### Returns

this is Just\<T\>

#### Defined in

dist/maybe.d.ts:13

___

### isNone

▸ **isNone**(): this is None\<T\>

#### Returns

this is None\<T\>

#### Defined in

dist/maybe.d.ts:14

___

### join

▸ **join**\<`V`\>(`this`): [`Maybe`](../modules/internal_.md#maybe)\<`V`\>

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/internal_.md#maybe)\<[`Maybe`](../modules/internal_.md#maybe)\<`V`\>\> |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`V`\>

#### Implementation of

[Monad](../interfaces/Monad.md).[join](../interfaces/Monad.md#join)

#### Defined in

dist/maybe.d.ts:15

___

### map

▸ **map**\<`V`, `A`\>(`map`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)\<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `A` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`T`, `V`, `A`\> |
| `...parameters` | `A` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`V`\>

#### Implementation of

[Monad](../interfaces/Monad.md).[map](../interfaces/Monad.md#map)

#### Defined in

dist/maybe.d.ts:16

___

### mapNullable

▸ **mapNullable**\<`V`, `A`\>(`map`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)\<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `A` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`T`, `undefined` \| ``null`` \| `V`, `A`\> |
| `...parameters` | `A` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`V`\>

#### Defined in

dist/maybe.d.ts:17

___

### or

▸ **or**(`x`): [`Maybe`](../modules/internal_.md#maybe)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../modules/internal_.md#maybe)\<`T`\> |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`T`\>

#### Implementation of

[Alternative](../interfaces/Alternative.md).[or](../interfaces/Alternative.md#or)

#### Defined in

dist/maybe.d.ts:24

___

### orAsync

▸ **orAsync**(`factory`): `Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`MaybePromiseLike`](../modules.md#maybepromiselike)\<[`Maybe`](../modules/internal_.md#maybe)\<`T`\>\> |

#### Returns

`Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`T`\>\>

#### Defined in

dist/maybe.d.ts:26

___

### orLazy

▸ **orLazy**(`factory`): [`Maybe`](../modules/internal_.md#maybe)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`Maybe`](../modules/internal_.md#maybe)\<`T`\> |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`T`\>

#### Defined in

dist/maybe.d.ts:25

___

### tap

▸ **tap**\<`P`\>(`callback`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Pm`](../modules/internal_.md#pm)\<`T`, `void`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`T`\>

#### Defined in

dist/maybe.d.ts:28

___

### unwrap

▸ **unwrap**(`message?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`T`

#### Implementation of

[Container](../interfaces/Container.md).[unwrap](../interfaces/Container.md#unwrap)

#### Defined in

dist/maybe.d.ts:30

___

### unwrapOr

▸ **unwrapOr**\<`X`\>(`value`): `T` \| `X`

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `X` |

#### Returns

`T` \| `X`

#### Implementation of

[Container](../interfaces/Container.md).[unwrapOr](../interfaces/Container.md#unwrapor)

#### Defined in

dist/maybe.d.ts:11

___

### unwrapOrElse

▸ **unwrapOrElse**\<`X`\>(`value`): `T` \| `X`

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | () => `X` |

#### Returns

`T` \| `X`

#### Defined in

dist/maybe.d.ts:12

___

### zip

▸ **zip**\<`A`\>(`maybe`): [`Maybe`](../modules/internal_.md#maybe)\<[`Pair`](../modules.md#pair)\<`T`, `A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybe` | [`Maybe`](../modules/internal_.md#maybe)\<`A`\> |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<[`Pair`](../modules.md#pair)\<`T`, `A`\>\>

#### Defined in

dist/maybe.d.ts:27
