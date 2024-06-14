[Package](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Just

# Class: Just\<T\>

[\<internal\>](../modules/internal_.md).Just

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`MaybeConstructor`](internal_.MaybeConstructor.md)\<`T`\>

  ↳ **`Just`**

## Implements

- [`SerializedJust`](../modules/internal_.md#serializedjust)\<`T`\>

## Table of contents

### Constructors

- [constructor](internal_.Just.md#constructor)

### Properties

- [value](internal_.Just.md#value)

### Accessors

- [[toStringTag]](internal_.Just.md#[tostringtag])
- [name](internal_.Just.md#name)
- [type](internal_.Just.md#type)

### Methods

- [apply](internal_.Just.md#apply)
- [asyncApply](internal_.Just.md#asyncapply)
- [asyncChain](internal_.Just.md#asyncchain)
- [asyncMap](internal_.Just.md#asyncmap)
- [await](internal_.Just.md#await)
- [chain](internal_.Just.md#chain)
- [default](internal_.Just.md#default)
- [filter](internal_.Just.md#filter)
- [flatMap](internal_.Just.md#flatmap)
- [fold](internal_.Just.md#fold)
- [isJust](internal_.Just.md#isjust)
- [isNone](internal_.Just.md#isnone)
- [join](internal_.Just.md#join)
- [map](internal_.Just.md#map)
- [mapNullable](internal_.Just.md#mapnullable)
- [or](internal_.Just.md#or)
- [orAsync](internal_.Just.md#orasync)
- [orLazy](internal_.Just.md#orlazy)
- [tap](internal_.Just.md#tap)
- [toJSON](internal_.Just.md#tojson)
- [unwrap](internal_.Just.md#unwrap)
- [unwrapOr](internal_.Just.md#unwrapor)
- [unwrapOrElse](internal_.Just.md#unwraporelse)
- [zip](internal_.Just.md#zip)
- [create](internal_.Just.md#create)

## Constructors

### constructor

• `Private` **new Just**\<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Overrides

[MaybeConstructor](internal_.MaybeConstructor.md).[constructor](internal_.MaybeConstructor.md#constructor)

#### Defined in

dist/maybe.d.ts:49

## Properties

### value

• `Readonly` **value**: `T`

#### Implementation of

SerializedJust.value

#### Defined in

dist/maybe.d.ts:44

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): ``"Just"``

#### Returns

``"Just"``

#### Defined in

dist/maybe.d.ts:46

___

### name

• `get` **name**(): ``"Maybe"``

#### Returns

``"Maybe"``

#### Implementation of

SerializedJust.name

#### Defined in

dist/maybe.d.ts:47

___

### type

• `get` **type**(): [`Just`](../modules/internal_.md#just)

#### Returns

[`Just`](../modules/internal_.md#just)

#### Implementation of

SerializedJust.type

#### Defined in

dist/maybe.d.ts:48

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[apply](internal_.MaybeConstructor.md#apply)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[apply](internal_.MaybeConstructor.md#apply)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[asyncApply](internal_.MaybeConstructor.md#asyncapply)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[asyncApply](internal_.MaybeConstructor.md#asyncapply)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[asyncChain](internal_.MaybeConstructor.md#asyncchain)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[asyncMap](internal_.MaybeConstructor.md#asyncmap)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[await](internal_.MaybeConstructor.md#await)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[chain](internal_.MaybeConstructor.md#chain)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[default](internal_.MaybeConstructor.md#default)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[filter](internal_.MaybeConstructor.md#filter)

#### Defined in

dist/maybe.d.ts:20

▸ **filter**(`filter`): [`Maybe`](../modules/internal_.md#maybe)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`input`: `T`) => `boolean` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)\<`T`\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[filter](internal_.MaybeConstructor.md#filter)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[flatMap](internal_.MaybeConstructor.md#flatmap)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[fold](internal_.MaybeConstructor.md#fold)

#### Defined in

dist/maybe.d.ts:31

___

### isJust

▸ **isJust**(): this is Just\<T\>

#### Returns

this is Just\<T\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[isJust](internal_.MaybeConstructor.md#isjust)

#### Defined in

dist/maybe.d.ts:13

___

### isNone

▸ **isNone**(): this is None\<T\>

#### Returns

this is None\<T\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[isNone](internal_.MaybeConstructor.md#isnone)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[join](internal_.MaybeConstructor.md#join)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[map](internal_.MaybeConstructor.md#map)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[mapNullable](internal_.MaybeConstructor.md#mapnullable)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[or](internal_.MaybeConstructor.md#or)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[orAsync](internal_.MaybeConstructor.md#orasync)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[orLazy](internal_.MaybeConstructor.md#orlazy)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[tap](internal_.MaybeConstructor.md#tap)

#### Defined in

dist/maybe.d.ts:28

___

### toJSON

▸ **toJSON**(): `Readonly`\<\{ `name`: ``"Maybe"`` ; `type`: [`Just`](../modules/internal_.md#just) ; `value`: `T`  }\>

#### Returns

`Readonly`\<\{ `name`: ``"Maybe"`` ; `type`: [`Just`](../modules/internal_.md#just) ; `value`: `T`  }\>

#### Defined in

dist/maybe.d.ts:50

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

[MaybeConstructor](internal_.MaybeConstructor.md).[unwrap](internal_.MaybeConstructor.md#unwrap)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[unwrapOr](internal_.MaybeConstructor.md#unwrapor)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[unwrapOrElse](internal_.MaybeConstructor.md#unwraporelse)

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

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[zip](internal_.MaybeConstructor.md#zip)

#### Defined in

dist/maybe.d.ts:27

___

### create

▸ `Static` **create**\<`T`\>(`value`): [`Just`](internal_.Just.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Just`](internal_.Just.md)\<`T`\>

#### Defined in

dist/maybe.d.ts:45
