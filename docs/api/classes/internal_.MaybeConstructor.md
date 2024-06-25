[Package](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / MaybeConstructor

# Class: MaybeConstructor\<Va\>

[\<internal\>](../modules/internal_.md).MaybeConstructor

## Type parameters

| Name |
| :------ |
| `Va` |

## Hierarchy

- **`MaybeConstructor`**

  ↳ [`Just`](internal_.Just.md)

  ↳ [`None`](internal_.None.md)

## Implements

- [`Monad`](../interfaces/Monad.md)\<`Va`\>
- [`Alternative`](../interfaces/Alternative.md)\<`Va`\>
- [`Container`](../interfaces/Container.md)\<`Va`\>
- [`Pipe`](../interfaces/internal_.Pipe.md)

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
- [pipe](internal_.MaybeConstructor.md#pipe)
- [tap](internal_.MaybeConstructor.md#tap)
- [unwrap](internal_.MaybeConstructor.md#unwrap)
- [unwrapOr](internal_.MaybeConstructor.md#unwrapor)
- [unwrapOrElse](internal_.MaybeConstructor.md#unwraporelse)
- [zip](internal_.MaybeConstructor.md#zip)

## Constructors

### constructor

• **new MaybeConstructor**\<`Va`\>()

#### Type parameters

| Name |
| :------ |
| `Va` |

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
| `this` | [`Maybe`](../modules/internal_.md#maybe)\<[`Mapper`](../modules/internal_.md#mapper)\<`A`, `B`, `P`\>\> |
| `argument` | [`Maybe`](../modules/internal_.md#maybe)\<`A`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`B`\>

#### Implementation of

[Monad](../interfaces/Monad.md).[apply](../interfaces/Monad.md#apply)

#### Defined in

dist/maybe.d.ts:22

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
| `argument` | [`Maybe`](../modules/internal_.md#maybe)\<[`Mapper`](../modules/internal_.md#mapper)\<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`B`\>

#### Implementation of

[Monad](../interfaces/Monad.md).[apply](../interfaces/Monad.md#apply)

#### Defined in

dist/maybe.d.ts:23

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
| `this` | [`Maybe`](../modules/internal_.md#maybe)\<[`Mapper`](../modules/internal_.md#mapper)\<`A`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `argument` | [`Maybe`](../modules/internal_.md#maybe)\<`A`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`B`\>\>

#### Defined in

dist/maybe.d.ts:39

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
| `map` | [`Maybe`](../modules/internal_.md#maybe)\<[`Mapper`](../modules/internal_.md#mapper)\<`A`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`B`\>\>

#### Defined in

dist/maybe.d.ts:40

___

### asyncChain

▸ **asyncChain**\<`T`, `P`\>(`map`, `...parameters`): `Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`Va`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<[`Maybe`](../modules/internal_.md#maybe)\<`T`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`T`\>\>

#### Defined in

dist/maybe.d.ts:36

___

### asyncMap

▸ **asyncMap**\<`T`, `P`\>(`map`, `...parameters`): `Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`Va`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`T`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`T`\>\>

#### Defined in

dist/maybe.d.ts:37

___

### await

▸ **await**\<`T`\>(`this`): `Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/internal_.md#maybe)\<[`MaybePromiseLike`](../modules.md#maybepromiselike)\<`T`\>\> |

#### Returns

`Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`T`\>\>

#### Defined in

dist/maybe.d.ts:38

___

### chain

▸ **chain**\<`V`, `P`\>(`map`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)\<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`Va`, [`Maybe`](../modules/internal_.md#maybe)\<`V`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`V`\>

#### Implementation of

[Monad](../interfaces/Monad.md).[chain](../interfaces/Monad.md#chain)

#### Defined in

dist/maybe.d.ts:26

___

### default

▸ **default**(`value`): [`Maybe`](../modules/internal_.md#maybe)\<`Va`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Va` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`Va`\>

#### Implementation of

[Alternative](../interfaces/Alternative.md).[default](../interfaces/Alternative.md#default)

#### Defined in

dist/maybe.d.ts:27

___

### filter

▸ **filter**\<`T`\>(`filter`): [`Maybe`](../modules/internal_.md#maybe)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`input`: `Va`) => input is T |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`T`\>

#### Defined in

dist/maybe.d.ts:24

▸ **filter**(`filter`): [`Maybe`](../modules/internal_.md#maybe)\<`Va`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`input`: `Va`) => `boolean` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`Va`\>

#### Defined in

dist/maybe.d.ts:25

___

### flatMap

▸ **flatMap**\<`T`, `P`\>(`map`, `...parameters`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`Va`, `T`, `P`\> |
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
| `mapNone` | [`Mapper`](../modules/internal_.md#mapper)\<`void`, `B`\> |
| `mapJust` | [`Mapper`](../modules/internal_.md#mapper)\<`Va`, `A`\> |

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

dist/maybe.d.ts:18

___

### map

▸ **map**\<`V`, `P`\>(`map`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)\<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`Va`, `V`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`V`\>

#### Implementation of

[Monad](../interfaces/Monad.md).[map](../interfaces/Monad.md#map)

#### Defined in

dist/maybe.d.ts:20

___

### mapNullable

▸ **mapNullable**\<`V`, `P`\>(`map`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)\<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`Va`, `undefined` \| ``null`` \| `V`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`V`\>

#### Defined in

dist/maybe.d.ts:21

___

### or

▸ **or**(`x`): [`Maybe`](../modules/internal_.md#maybe)\<`Va`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../modules/internal_.md#maybe)\<`Va`\> |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`Va`\>

#### Implementation of

[Alternative](../interfaces/Alternative.md).[or](../interfaces/Alternative.md#or)

#### Defined in

dist/maybe.d.ts:28

___

### orAsync

▸ **orAsync**(`factory`): `Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`Va`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`MaybePromiseLike`](../modules.md#maybepromiselike)\<[`Maybe`](../modules/internal_.md#maybe)\<`Va`\>\> |

#### Returns

`Promise`\<[`Maybe`](../modules/internal_.md#maybe)\<`Va`\>\>

#### Defined in

dist/maybe.d.ts:30

___

### orLazy

▸ **orLazy**(`factory`): [`Maybe`](../modules/internal_.md#maybe)\<`Va`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`Maybe`](../modules/internal_.md#maybe)\<`Va`\> |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`Va`\>

#### Defined in

dist/maybe.d.ts:29

___

### pipe

▸ **pipe**\<`V`, `P`\>(`pipe`, `...parameters`): `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pipe` | [`Mapper`](../modules/internal_.md#mapper)\<[`Maybe`](../modules/internal_.md#maybe)\<`Va`\>, `V`, `P`\> |
| `...parameters` | `P` |

#### Returns

`V`

#### Implementation of

[Pipe](../interfaces/internal_.Pipe.md).[pipe](../interfaces/internal_.Pipe.md#pipe)

#### Defined in

dist/maybe.d.ts:19

___

### tap

▸ **tap**\<`P`\>(`callback`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)\<`Va`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Mapper`](../modules/internal_.md#mapper)\<`Va`, `void`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`Va`\>

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

[Container](../interfaces/Container.md).[unwrap](../interfaces/Container.md#unwrap)

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

[Container](../interfaces/Container.md).[unwrapOr](../interfaces/Container.md#unwrapor)

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

▸ **zip**\<`T`\>(`maybe`): [`Maybe`](../modules/internal_.md#maybe)\<[`Pair`](../modules.md#pair)\<`Va`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybe` | [`Maybe`](../modules/internal_.md#maybe)\<`T`\> |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<[`Pair`](../modules.md#pair)\<`Va`, `T`\>\>

#### Defined in

dist/maybe.d.ts:31
