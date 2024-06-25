[Package](../README.md) / [Modules](../modules.md) / [maybe](../modules/maybe.md) / [\<internal\>](../modules/maybe._internal_.md) / MaybeConstructor

# Class: MaybeConstructor\<Va\>

[maybe](../modules/maybe.md).[\<internal\>](../modules/maybe._internal_.md).MaybeConstructor

## Type parameters

| Name |
| :------ |
| `Va` |

## Hierarchy

- **`MaybeConstructor`**

  ↳ [`Just`](maybe._internal_.Just.md)

  ↳ [`None`](maybe._internal_.None.md)

## Implements

- [`Monad`](../interfaces/index.Monad.md)\<`Va`\>
- [`Alternative`](../interfaces/index.Alternative.md)\<`Va`\>
- [`Container`](../interfaces/index.Container.md)\<`Va`\>
- [`Pipe`](../interfaces/types.Pipe.md)

## Table of contents

### Constructors

- [constructor](maybe._internal_.MaybeConstructor.md#constructor)

### Methods

- [apply](maybe._internal_.MaybeConstructor.md#apply)
- [asyncApply](maybe._internal_.MaybeConstructor.md#asyncapply)
- [asyncChain](maybe._internal_.MaybeConstructor.md#asyncchain)
- [asyncMap](maybe._internal_.MaybeConstructor.md#asyncmap)
- [await](maybe._internal_.MaybeConstructor.md#await)
- [chain](maybe._internal_.MaybeConstructor.md#chain)
- [default](maybe._internal_.MaybeConstructor.md#default)
- [filter](maybe._internal_.MaybeConstructor.md#filter)
- [flatMap](maybe._internal_.MaybeConstructor.md#flatmap)
- [fold](maybe._internal_.MaybeConstructor.md#fold)
- [isJust](maybe._internal_.MaybeConstructor.md#isjust)
- [isNone](maybe._internal_.MaybeConstructor.md#isnone)
- [join](maybe._internal_.MaybeConstructor.md#join)
- [map](maybe._internal_.MaybeConstructor.md#map)
- [mapNullable](maybe._internal_.MaybeConstructor.md#mapnullable)
- [or](maybe._internal_.MaybeConstructor.md#or)
- [orAsync](maybe._internal_.MaybeConstructor.md#orasync)
- [orLazy](maybe._internal_.MaybeConstructor.md#orlazy)
- [pipe](maybe._internal_.MaybeConstructor.md#pipe)
- [tap](maybe._internal_.MaybeConstructor.md#tap)
- [unwrap](maybe._internal_.MaybeConstructor.md#unwrap)
- [unwrapOr](maybe._internal_.MaybeConstructor.md#unwrapor)
- [unwrapOrElse](maybe._internal_.MaybeConstructor.md#unwraporelse)
- [zip](maybe._internal_.MaybeConstructor.md#zip)

## Constructors

### constructor

• **new MaybeConstructor**\<`Va`\>()

#### Type parameters

| Name |
| :------ |
| `Va` |

## Methods

### apply

▸ **apply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Maybe`](../modules/maybe.md#maybe)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/maybe.md#maybe)\<[`Mapper`](../modules/types.md#mapper)\<`A`, `B`, `P`\>\> |
| `argument` | [`Maybe`](../modules/maybe.md#maybe)\<`A`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`B`\>

#### Implementation of

[Monad](../interfaces/index.Monad.md).[apply](../interfaces/index.Monad.md#apply)

#### Defined in

dist/maybe.d.ts:22

▸ **apply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Maybe`](../modules/maybe.md#maybe)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/maybe.md#maybe)\<`A`\> |
| `argument` | [`Maybe`](../modules/maybe.md#maybe)\<[`Mapper`](../modules/types.md#mapper)\<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`B`\>

#### Implementation of

[Monad](../interfaces/index.Monad.md).[apply](../interfaces/index.Monad.md#apply)

#### Defined in

dist/maybe.d.ts:23

___

### asyncApply

▸ **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): `Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/maybe.md#maybe)\<[`Mapper`](../modules/types.md#mapper)\<`A`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `argument` | [`Maybe`](../modules/maybe.md#maybe)\<`A`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`B`\>\>

#### Defined in

dist/maybe.d.ts:39

▸ **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, `...parameters`): `Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/maybe.md#maybe)\<`A`\> |
| `map` | [`Maybe`](../modules/maybe.md#maybe)\<[`Mapper`](../modules/types.md#mapper)\<`A`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`B`\>\>

#### Defined in

dist/maybe.d.ts:40

___

### asyncChain

▸ **asyncChain**\<`T`, `P`\>(`map`, `...parameters`): `Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`Va`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<[`Maybe`](../modules/maybe.md#maybe)\<`T`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`T`\>\>

#### Defined in

dist/maybe.d.ts:36

___

### asyncMap

▸ **asyncMap**\<`T`, `P`\>(`map`, `...parameters`): `Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`Va`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`T`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`T`\>\>

#### Defined in

dist/maybe.d.ts:37

___

### await

▸ **await**\<`T`\>(`this`): `Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/maybe.md#maybe)\<[`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`T`\>\> |

#### Returns

`Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`T`\>\>

#### Defined in

dist/maybe.d.ts:38

___

### chain

▸ **chain**\<`V`, `P`\>(`map`, `...parameters`): [`Maybe`](../modules/maybe.md#maybe)\<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`Va`, [`Maybe`](../modules/maybe.md#maybe)\<`V`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`V`\>

#### Implementation of

[Monad](../interfaces/index.Monad.md).[chain](../interfaces/index.Monad.md#chain)

#### Defined in

dist/maybe.d.ts:26

___

### default

▸ **default**(`value`): [`Maybe`](../modules/maybe.md#maybe)\<`Va`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Va` |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`Va`\>

#### Implementation of

[Alternative](../interfaces/index.Alternative.md).[default](../interfaces/index.Alternative.md#default)

#### Defined in

dist/maybe.d.ts:27

___

### filter

▸ **filter**\<`T`\>(`filter`): [`Maybe`](../modules/maybe.md#maybe)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`input`: `Va`) => input is T |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`T`\>

#### Defined in

dist/maybe.d.ts:24

▸ **filter**(`filter`): [`Maybe`](../modules/maybe.md#maybe)\<`Va`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`input`: `Va`) => `boolean` |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`Va`\>

#### Defined in

dist/maybe.d.ts:25

___

### flatMap

▸ **flatMap**\<`T`, `P`\>(`map`, `...parameters`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`Va`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

`undefined` \| `T`

#### Defined in

dist/maybe.d.ts:33

___

### fold

▸ **fold**\<`A`, `B`\>(`mapNone`, `mapJust`): `A` \| `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapNone` | [`Mapper`](../modules/types.md#mapper)\<`void`, `B`\> |
| `mapJust` | [`Mapper`](../modules/types.md#mapper)\<`Va`, `A`\> |

#### Returns

`A` \| `B`

#### Defined in

dist/maybe.d.ts:35

___

### isJust

▸ **isJust**(): this is Just\<Va\>

#### Returns

this is Just\<Va\>

#### Defined in

dist/maybe.d.ts:16

___

### isNone

▸ **isNone**(): this is None\<Va\>

#### Returns

this is None\<Va\>

#### Defined in

dist/maybe.d.ts:17

___

### join

▸ **join**\<`V`\>(`this`): [`Maybe`](../modules/maybe.md#maybe)\<`V`\>

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/maybe.md#maybe)\<[`Maybe`](../modules/maybe.md#maybe)\<`V`\>\> |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`V`\>

#### Implementation of

[Monad](../interfaces/index.Monad.md).[join](../interfaces/index.Monad.md#join)

#### Defined in

dist/maybe.d.ts:18

___

### map

▸ **map**\<`V`, `P`\>(`map`, `...parameters`): [`Maybe`](../modules/maybe.md#maybe)\<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`Va`, `V`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`V`\>

#### Implementation of

[Monad](../interfaces/index.Monad.md).[map](../interfaces/index.Monad.md#map)

#### Defined in

dist/maybe.d.ts:20

___

### mapNullable

▸ **mapNullable**\<`V`, `P`\>(`map`, `...parameters`): [`Maybe`](../modules/maybe.md#maybe)\<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`Va`, `undefined` \| ``null`` \| `V`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`V`\>

#### Defined in

dist/maybe.d.ts:21

___

### or

▸ **or**(`x`): [`Maybe`](../modules/maybe.md#maybe)\<`Va`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../modules/maybe.md#maybe)\<`Va`\> |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`Va`\>

#### Implementation of

[Alternative](../interfaces/index.Alternative.md).[or](../interfaces/index.Alternative.md#or)

#### Defined in

dist/maybe.d.ts:28

___

### orAsync

▸ **orAsync**(`factory`): `Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`Va`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<[`Maybe`](../modules/maybe.md#maybe)\<`Va`\>\> |

#### Returns

`Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`Va`\>\>

#### Defined in

dist/maybe.d.ts:30

___

### orLazy

▸ **orLazy**(`factory`): [`Maybe`](../modules/maybe.md#maybe)\<`Va`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`Maybe`](../modules/maybe.md#maybe)\<`Va`\> |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`Va`\>

#### Defined in

dist/maybe.d.ts:29

___

### pipe

▸ **pipe**\<`V`, `P`\>(`pipe`, `...parameters`): `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pipe` | [`Mapper`](../modules/types.md#mapper)\<[`Maybe`](../modules/maybe.md#maybe)\<`Va`\>, `V`, `P`\> |
| `...parameters` | `P` |

#### Returns

`V`

#### Implementation of

[Pipe](../interfaces/types.Pipe.md).[pipe](../interfaces/types.Pipe.md#pipe)

#### Defined in

dist/maybe.d.ts:19

___

### tap

▸ **tap**\<`P`\>(`callback`, `...parameters`): [`Maybe`](../modules/maybe.md#maybe)\<`Va`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Mapper`](../modules/types.md#mapper)\<`Va`, `void`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`Va`\>

#### Defined in

dist/maybe.d.ts:32

___

### unwrap

▸ **unwrap**(`message?`): `Va`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`Va`

#### Implementation of

[Container](../interfaces/index.Container.md).[unwrap](../interfaces/index.Container.md#unwrap)

#### Defined in

dist/maybe.d.ts:34

___

### unwrapOr

▸ **unwrapOr**\<`T`\>(`value`): `Va` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`Va` \| `T`

#### Implementation of

[Container](../interfaces/index.Container.md).[unwrapOr](../interfaces/index.Container.md#unwrapor)

#### Defined in

dist/maybe.d.ts:14

___

### unwrapOrElse

▸ **unwrapOrElse**\<`T`\>(`value`): `Va` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | () => `T` |

#### Returns

`Va` \| `T`

#### Defined in

dist/maybe.d.ts:15

___

### zip

▸ **zip**\<`T`\>(`maybe`): [`Maybe`](../modules/maybe.md#maybe)\<[`Pair`](../modules/index.md#pair)\<`Va`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybe` | [`Maybe`](../modules/maybe.md#maybe)\<`T`\> |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<[`Pair`](../modules/index.md#pair)\<`Va`, `T`\>\>

#### Defined in

dist/maybe.d.ts:31
