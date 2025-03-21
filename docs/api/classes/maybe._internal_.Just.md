[Package](../README.md) / [Modules](../modules.md) / [maybe](../modules/maybe.md) / [\<internal\>](../modules/maybe._internal_.md) / Just

# Class: Just\<T\>

[maybe](../modules/maybe.md).[\<internal\>](../modules/maybe._internal_.md).Just

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`MaybeConstructor`](maybe._internal_.MaybeConstructor.md)\<`T`\>

  ↳ **`Just`**

## Implements

- [`SerializedJust`](../modules/maybe._internal_.md#serializedjust)\<`T`\>

## Table of contents

### Constructors

- [constructor](maybe._internal_.Just.md#constructor)

### Properties

- [value](maybe._internal_.Just.md#value)

### Accessors

- [[toStringTag]](maybe._internal_.Just.md#[tostringtag])
- [name](maybe._internal_.Just.md#name)
- [type](maybe._internal_.Just.md#type)

### Methods

- [apply](maybe._internal_.Just.md#apply)
- [asyncApply](maybe._internal_.Just.md#asyncapply)
- [asyncChain](maybe._internal_.Just.md#asyncchain)
- [asyncMap](maybe._internal_.Just.md#asyncmap)
- [await](maybe._internal_.Just.md#await)
- [chain](maybe._internal_.Just.md#chain)
- [default](maybe._internal_.Just.md#default)
- [filter](maybe._internal_.Just.md#filter)
- [flatMap](maybe._internal_.Just.md#flatmap)
- [fold](maybe._internal_.Just.md#fold)
- [isJust](maybe._internal_.Just.md#isjust)
- [isNone](maybe._internal_.Just.md#isnone)
- [join](maybe._internal_.Just.md#join)
- [map](maybe._internal_.Just.md#map)
- [mapNullable](maybe._internal_.Just.md#mapnullable)
- [or](maybe._internal_.Just.md#or)
- [orAsync](maybe._internal_.Just.md#orasync)
- [orLazy](maybe._internal_.Just.md#orlazy)
- [pipe](maybe._internal_.Just.md#pipe)
- [tap](maybe._internal_.Just.md#tap)
- [toJSON](maybe._internal_.Just.md#tojson)
- [unwrap](maybe._internal_.Just.md#unwrap)
- [unwrapOr](maybe._internal_.Just.md#unwrapor)
- [unwrapOrElse](maybe._internal_.Just.md#unwraporelse)
- [zip](maybe._internal_.Just.md#zip)
- [create](maybe._internal_.Just.md#create)

## Constructors

### constructor

• `Private` **new Just**\<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Overrides

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[constructor](maybe._internal_.MaybeConstructor.md#constructor)

#### Defined in

dist/maybe.d.ts:53

## Properties

### value

• `Readonly` **value**: `T`

#### Implementation of

SerializedJust.value

#### Defined in

dist/maybe.d.ts:48

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): [`Just`](../enums/maybe.MaybeState.md#just)

#### Returns

[`Just`](../enums/maybe.MaybeState.md#just)

#### Defined in

dist/maybe.d.ts:50

___

### name

• `get` **name**(): ``"Maybe"``

#### Returns

``"Maybe"``

#### Implementation of

SerializedJust.name

#### Defined in

dist/maybe.d.ts:51

___

### type

• `get` **type**(): [`Just`](../enums/maybe.MaybeState.md#just)

#### Returns

[`Just`](../enums/maybe.MaybeState.md#just)

#### Implementation of

SerializedJust.type

#### Defined in

dist/maybe.d.ts:52

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

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[apply](maybe._internal_.MaybeConstructor.md#apply)

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

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[apply](maybe._internal_.MaybeConstructor.md#apply)

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

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[asyncApply](maybe._internal_.MaybeConstructor.md#asyncapply)

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

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[asyncApply](maybe._internal_.MaybeConstructor.md#asyncapply)

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
| `map` | [`Mapper`](../modules/types.md#mapper)\<`T`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<[`Maybe`](../modules/maybe.md#maybe)\<`T`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`T`\>\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[asyncChain](maybe._internal_.MaybeConstructor.md#asyncchain)

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
| `map` | [`Mapper`](../modules/types.md#mapper)\<`T`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`T`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`T`\>\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[asyncMap](maybe._internal_.MaybeConstructor.md#asyncmap)

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

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[await](maybe._internal_.MaybeConstructor.md#await)

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
| `map` | [`Mapper`](../modules/types.md#mapper)\<`T`, [`Maybe`](../modules/maybe.md#maybe)\<`V`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`V`\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[chain](maybe._internal_.MaybeConstructor.md#chain)

#### Defined in

dist/maybe.d.ts:26

___

### default

▸ **default**(`value`): [`Maybe`](../modules/maybe.md#maybe)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`T`\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[default](maybe._internal_.MaybeConstructor.md#default)

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
| `filter` | (`input`: `T`) => input is T |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`T`\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[filter](maybe._internal_.MaybeConstructor.md#filter)

#### Defined in

dist/maybe.d.ts:24

▸ **filter**(`filter`): [`Maybe`](../modules/maybe.md#maybe)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`input`: `T`) => `boolean` |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`T`\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[filter](maybe._internal_.MaybeConstructor.md#filter)

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
| `map` | [`Mapper`](../modules/types.md#mapper)\<`T`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

`undefined` \| `T`

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[flatMap](maybe._internal_.MaybeConstructor.md#flatmap)

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
| `mapJust` | [`Mapper`](../modules/types.md#mapper)\<`T`, `A`\> |

#### Returns

`A` \| `B`

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[fold](maybe._internal_.MaybeConstructor.md#fold)

#### Defined in

dist/maybe.d.ts:35

___

### isJust

▸ **isJust**(): this is Just\<T\>

#### Returns

this is Just\<T\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[isJust](maybe._internal_.MaybeConstructor.md#isjust)

#### Defined in

dist/maybe.d.ts:16

___

### isNone

▸ **isNone**(): this is None\<T\>

#### Returns

this is None\<T\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[isNone](maybe._internal_.MaybeConstructor.md#isnone)

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

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[join](maybe._internal_.MaybeConstructor.md#join)

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
| `map` | [`Mapper`](../modules/types.md#mapper)\<`T`, `V`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`V`\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[map](maybe._internal_.MaybeConstructor.md#map)

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
| `map` | [`Mapper`](../modules/types.md#mapper)\<`T`, `undefined` \| ``null`` \| `V`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`V`\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[mapNullable](maybe._internal_.MaybeConstructor.md#mapnullable)

#### Defined in

dist/maybe.d.ts:21

___

### or

▸ **or**(`x`): [`Maybe`](../modules/maybe.md#maybe)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../modules/maybe.md#maybe)\<`T`\> |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`T`\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[or](maybe._internal_.MaybeConstructor.md#or)

#### Defined in

dist/maybe.d.ts:28

___

### orAsync

▸ **orAsync**(`factory`): `Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<[`Maybe`](../modules/maybe.md#maybe)\<`T`\>\> |

#### Returns

`Promise`\<[`Maybe`](../modules/maybe.md#maybe)\<`T`\>\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[orAsync](maybe._internal_.MaybeConstructor.md#orasync)

#### Defined in

dist/maybe.d.ts:30

___

### orLazy

▸ **orLazy**(`factory`): [`Maybe`](../modules/maybe.md#maybe)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`Maybe`](../modules/maybe.md#maybe)\<`T`\> |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`T`\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[orLazy](maybe._internal_.MaybeConstructor.md#orlazy)

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
| `pipe` | [`Mapper`](../modules/types.md#mapper)\<[`Maybe`](../modules/maybe.md#maybe)\<`T`\>, `V`, `P`\> |
| `...parameters` | `P` |

#### Returns

`V`

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[pipe](maybe._internal_.MaybeConstructor.md#pipe)

#### Defined in

dist/maybe.d.ts:19

___

### tap

▸ **tap**\<`P`\>(`callback`, `...parameters`): [`Maybe`](../modules/maybe.md#maybe)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Mapper`](../modules/types.md#mapper)\<`T`, `void`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<`T`\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[tap](maybe._internal_.MaybeConstructor.md#tap)

#### Defined in

dist/maybe.d.ts:32

___

### toJSON

▸ **toJSON**(): `Readonly`\<\{ `name`: ``"Maybe"`` ; `type`: [`Just`](../enums/maybe.MaybeState.md#just) ; `value`: `T`  }\>

#### Returns

`Readonly`\<\{ `name`: ``"Maybe"`` ; `type`: [`Just`](../enums/maybe.MaybeState.md#just) ; `value`: `T`  }\>

#### Defined in

dist/maybe.d.ts:54

___

### unwrap

▸ **unwrap**(`message?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`T`

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[unwrap](maybe._internal_.MaybeConstructor.md#unwrap)

#### Defined in

dist/maybe.d.ts:34

___

### unwrapOr

▸ **unwrapOr**\<`T`\>(`value`): `T` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`T` \| `T`

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[unwrapOr](maybe._internal_.MaybeConstructor.md#unwrapor)

#### Defined in

dist/maybe.d.ts:14

___

### unwrapOrElse

▸ **unwrapOrElse**\<`T`\>(`value`): `T` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | () => `T` |

#### Returns

`T` \| `T`

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[unwrapOrElse](maybe._internal_.MaybeConstructor.md#unwraporelse)

#### Defined in

dist/maybe.d.ts:15

___

### zip

▸ **zip**\<`T`\>(`maybe`): [`Maybe`](../modules/maybe.md#maybe)\<[`Pair`](../modules/index.md#pair)\<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybe` | [`Maybe`](../modules/maybe.md#maybe)\<`T`\> |

#### Returns

[`Maybe`](../modules/maybe.md#maybe)\<[`Pair`](../modules/index.md#pair)\<`T`, `T`\>\>

#### Inherited from

[MaybeConstructor](maybe._internal_.MaybeConstructor.md).[zip](maybe._internal_.MaybeConstructor.md#zip)

#### Defined in

dist/maybe.d.ts:31

___

### create

▸ `Static` **create**\<`T`\>(`value`): [`Just`](maybe._internal_.Just.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Just`](maybe._internal_.Just.md)\<`T`\>

#### Defined in

dist/maybe.d.ts:49
