[Package](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / None

# Class: None<T\>

[<internal>](../modules/internal_.md).None

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`MaybeConstructor`](internal_.MaybeConstructor.md)<`T`\>

  ↳ **`None`**

## Implements

- [`SerializedNone`](../modules/internal_.md#serializednone)

## Table of contents

### Constructors

- [constructor](internal_.None.md#constructor)

### Properties

- [instance](internal_.None.md#instance)

### Accessors

- [[toStringTag]](internal_.None.md#[tostringtag])
- [name](internal_.None.md#name)
- [type](internal_.None.md#type)

### Methods

- [apply](internal_.None.md#apply)
- [asyncChain](internal_.None.md#asyncchain)
- [await](internal_.None.md#await)
- [biMatch](internal_.None.md#bimatch)
- [chain](internal_.None.md#chain)
- [default](internal_.None.md#default)
- [filter](internal_.None.md#filter)
- [flatMap](internal_.None.md#flatmap)
- [isJust](internal_.None.md#isjust)
- [isNone](internal_.None.md#isnone)
- [join](internal_.None.md#join)
- [map](internal_.None.md#map)
- [or](internal_.None.md#or)
- [tap](internal_.None.md#tap)
- [toJSON](internal_.None.md#tojson)
- [unwrap](internal_.None.md#unwrap)
- [unwrapOr](internal_.None.md#unwrapor)
- [zip](internal_.None.md#zip)
- [create](internal_.None.md#create)
- [just](internal_.None.md#just)
- [none](internal_.None.md#none)

## Constructors

### constructor

• `Private` **new None**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Overrides

[MaybeConstructor](internal_.MaybeConstructor.md).[constructor](internal_.MaybeConstructor.md#constructor)

#### Defined in

dist/maybe.d.ts:55

## Properties

### instance

▪ `Static` `Readonly` **instance**: [`None`](internal_.None.md)<`any`\>

#### Defined in

dist/maybe.d.ts:50

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Overrides

MaybeConstructor.\_\_@toStringTag@216

#### Defined in

dist/maybe.d.ts:52

___

### name

• `get` **name**(): ``"Maybe"``

#### Returns

``"Maybe"``

#### Implementation of

SerializedNone.name

#### Defined in

dist/maybe.d.ts:53

___

### type

• `get` **type**(): [`None`](../modules/internal_.md#none)

#### Returns

[`None`](../modules/internal_.md#none)

#### Implementation of

SerializedNone.type

#### Defined in

dist/maybe.d.ts:54

## Methods

### apply

▸ **apply**<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/internal_.md#maybe)<[`Pm`](../modules/internal_.md#pm)<`A`, `B`, `P`\>\> |
| `argument` | [`Maybe`](../modules/internal_.md#maybe)<`A`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`B`\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[apply](internal_.MaybeConstructor.md#apply)

#### Defined in

dist/maybe.d.ts:15

▸ **apply**<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/internal_.md#maybe)<`A`\> |
| `argument` | [`Maybe`](../modules/internal_.md#maybe)<[`Pm`](../modules/internal_.md#pm)<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`B`\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[apply](internal_.MaybeConstructor.md#apply)

#### Defined in

dist/maybe.d.ts:16

___

### asyncChain

▸ **asyncChain**<`V`, `P`\>(`map`, `...parameters`): `Promise`<[`Maybe`](../modules/internal_.md#maybe)<`V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`T`, [`MaybePromiseLike`](../modules.md#maybepromiselike)<[`Maybe`](../modules/internal_.md#maybe)<`V`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`<[`Maybe`](../modules/internal_.md#maybe)<`V`\>\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[asyncChain](internal_.MaybeConstructor.md#asyncchain)

#### Defined in

dist/maybe.d.ts:28

___

### await

▸ **await**<`X`\>(`this`): `Promise`<[`Maybe`](../modules/internal_.md#maybe)<`X`\>\>

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`MaybeConstructor`](internal_.MaybeConstructor.md)<[`MaybePromiseLike`](../modules.md#maybepromiselike)<`X`\>\> |

#### Returns

`Promise`<[`Maybe`](../modules/internal_.md#maybe)<`X`\>\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[await](internal_.MaybeConstructor.md#await)

#### Defined in

dist/maybe.d.ts:29

___

### biMatch

▸ **biMatch**<`A`, `B`\>(`mapJust`, `mapNone`): `A` \| `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapJust` | [`Pm`](../modules/internal_.md#pm)<`T`, `A`, []\> |
| `mapNone` | [`Pm`](../modules/internal_.md#pm)<`void`, `B`, []\> |

#### Returns

`A` \| `B`

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[biMatch](internal_.MaybeConstructor.md#bimatch)

#### Defined in

dist/maybe.d.ts:27

___

### chain

▸ **chain**<`V`, `A`\>(`map`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`T`, [`Maybe`](../modules/internal_.md#maybe)<`V`\>, `A`\> |
| `...parameters` | `A` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`V`\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[chain](internal_.MaybeConstructor.md#chain)

#### Defined in

dist/maybe.d.ts:20

___

### default

▸ **default**(`value`): [`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[default](internal_.MaybeConstructor.md#default)

#### Defined in

dist/maybe.d.ts:21

___

### filter

▸ **filter**<`X`\>(`filter`): [`Maybe`](../modules/internal_.md#maybe)<`X`\>

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`input`: `T`) => input is X |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`X`\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[filter](internal_.MaybeConstructor.md#filter)

#### Defined in

dist/maybe.d.ts:18

▸ **filter**(`filter`): [`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`input`: `T`) => `boolean` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[filter](internal_.MaybeConstructor.md#filter)

#### Defined in

dist/maybe.d.ts:19

___

### flatMap

▸ **flatMap**<`V`, `P`\>(`map`, `...parameters`): `undefined` \| `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`T`, `V`, `P`\> |
| `...parameters` | `P` |

#### Returns

`undefined` \| `V`

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[flatMap](internal_.MaybeConstructor.md#flatmap)

#### Defined in

dist/maybe.d.ts:25

___

### isJust

▸ **isJust**(): this is Just<T\>

#### Returns

this is Just<T\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[isJust](internal_.MaybeConstructor.md#isjust)

#### Defined in

dist/maybe.d.ts:11

___

### isNone

▸ **isNone**(): this is None<T\>

#### Returns

this is None<T\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[isNone](internal_.MaybeConstructor.md#isnone)

#### Defined in

dist/maybe.d.ts:12

___

### join

▸ **join**<`V`\>(`this`): [`Maybe`](../modules/internal_.md#maybe)<`V`\>

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/internal_.md#maybe)<[`Maybe`](../modules/internal_.md#maybe)<`V`\>\> |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`V`\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[join](internal_.MaybeConstructor.md#join)

#### Defined in

dist/maybe.d.ts:13

___

### map

▸ **map**<`V`, `A`\>(`map`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`T`, `V`, `A`\> |
| `...parameters` | `A` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`V`\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[map](internal_.MaybeConstructor.md#map)

#### Defined in

dist/maybe.d.ts:14

___

### or

▸ **or**(`x`): [`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../modules/internal_.md#maybe)<`T`\> |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[or](internal_.MaybeConstructor.md#or)

#### Defined in

dist/maybe.d.ts:22

___

### tap

▸ **tap**<`P`\>(`callback`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Pm`](../modules/internal_.md#pm)<`T`, `void`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[tap](internal_.MaybeConstructor.md#tap)

#### Defined in

dist/maybe.d.ts:24

___

### toJSON

▸ **toJSON**(): [`SerializedNone`](../modules/internal_.md#serializednone)

#### Returns

[`SerializedNone`](../modules/internal_.md#serializednone)

#### Defined in

dist/maybe.d.ts:56

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

dist/maybe.d.ts:26

___

### unwrapOr

▸ **unwrapOr**<`X`\>(`value`): `T` \| `X`

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

dist/maybe.d.ts:10

___

### zip

▸ **zip**<`A`\>(`maybe`): [`Maybe`](../modules/internal_.md#maybe)<[`Pair`](../modules.md#pair)<`T`, `A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybe` | [`Maybe`](../modules/internal_.md#maybe)<`A`\> |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<[`Pair`](../modules.md#pair)<`T`, `A`\>\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[zip](internal_.MaybeConstructor.md#zip)

#### Defined in

dist/maybe.d.ts:23

___

### create

▸ `Static` **create**<`T`\>(): [`None`](internal_.None.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`None`](internal_.None.md)<`T`\>

#### Defined in

dist/maybe.d.ts:51

___

### just

▸ `Static` **just**<`T`\>(`value`): [`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[just](internal_.MaybeConstructor.md#just)

#### Defined in

dist/maybe.d.ts:9

___

### none

▸ `Static` **none**<`T`\>(): [`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Inherited from

[MaybeConstructor](internal_.MaybeConstructor.md).[none](internal_.MaybeConstructor.md#none)

#### Defined in

dist/maybe.d.ts:8
