[Package](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Identity

# Class: Identity\<T\>

[\<internal\>](../modules/internal_.md).Identity

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`AsyncMonad`](../interfaces/AsyncMonad.md)\<`T`\>
- [`Container`](../interfaces/Container.md)\<`T`\>
- [`Pipe`](../interfaces/internal_.Pipe.md)

## Table of contents

### Constructors

- [constructor](internal_.Identity.md#constructor)

### Properties

- [value](internal_.Identity.md#value)

### Accessors

- [[toStringTag]](internal_.Identity.md#[tostringtag])
- [name](internal_.Identity.md#name)

### Methods

- [apply](internal_.Identity.md#apply)
- [asyncApply](internal_.Identity.md#asyncapply)
- [asyncChain](internal_.Identity.md#asyncchain)
- [asyncMap](internal_.Identity.md#asyncmap)
- [await](internal_.Identity.md#await)
- [chain](internal_.Identity.md#chain)
- [fold](internal_.Identity.md#fold)
- [join](internal_.Identity.md#join)
- [map](internal_.Identity.md#map)
- [pipe](internal_.Identity.md#pipe)
- [tap](internal_.Identity.md#tap)
- [unwrap](internal_.Identity.md#unwrap)
- [unwrapOr](internal_.Identity.md#unwrapor)
- [unwrapOrElse](internal_.Identity.md#unwraporelse)
- [zip](internal_.Identity.md#zip)
- [from](internal_.Identity.md#from)

## Constructors

### constructor

• `Private` **new Identity**\<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/identity.d.ts:8

## Properties

### value

• `Readonly` **value**: `T`

#### Defined in

dist/identity.d.ts:4

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): ``"Identity"``

#### Returns

``"Identity"``

#### Defined in

dist/identity.d.ts:6

___

### name

• `get` **name**(): ``"Identity"``

#### Returns

``"Identity"``

#### Defined in

dist/identity.d.ts:7

## Methods

### apply

▸ **apply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Identity`](internal_.Identity.md)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Identity`](internal_.Identity.md)\<[`Mapper`](../modules/internal_.md#mapper)\<`A`, `B`, `P`\>\> |
| `argument` | [`Identity`](internal_.Identity.md)\<`A`\> |
| `...parameters` | `P` |

#### Returns

[`Identity`](internal_.Identity.md)\<`B`\>

#### Implementation of

[AsyncMonad](../interfaces/AsyncMonad.md).[apply](../interfaces/AsyncMonad.md#apply)

#### Defined in

dist/identity.d.ts:15

▸ **apply**\<`A`, `B`, `P`\>(`this`, `map`, `...parameters`): [`Identity`](internal_.Identity.md)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Identity`](internal_.Identity.md)\<`A`\> |
| `map` | [`Identity`](internal_.Identity.md)\<[`Mapper`](../modules/internal_.md#mapper)\<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Identity`](internal_.Identity.md)\<`B`\>

#### Implementation of

[AsyncMonad](../interfaces/AsyncMonad.md).[apply](../interfaces/AsyncMonad.md#apply)

#### Defined in

dist/identity.d.ts:16

___

### asyncApply

▸ **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): `Promise`\<[`Identity`](internal_.Identity.md)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Identity`](internal_.Identity.md)\<[`Mapper`](../modules/internal_.md#mapper)\<`A`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `argument` | [`Identity`](internal_.Identity.md)\<`A`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Identity`](internal_.Identity.md)\<`B`\>\>

#### Defined in

dist/identity.d.ts:17

▸ **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, `...parameters`): `Promise`\<[`Identity`](internal_.Identity.md)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Identity`](internal_.Identity.md)\<`A`\> |
| `map` | [`Identity`](internal_.Identity.md)\<[`Mapper`](../modules/internal_.md#mapper)\<`A`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Identity`](internal_.Identity.md)\<`B`\>\>

#### Defined in

dist/identity.d.ts:18

___

### asyncChain

▸ **asyncChain**\<`B`, `P`\>(`map`, `...parameters`): `Promise`\<[`Identity`](internal_.Identity.md)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`T`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<[`Identity`](internal_.Identity.md)\<`B`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Identity`](internal_.Identity.md)\<`B`\>\>

#### Implementation of

[AsyncMonad](../interfaces/AsyncMonad.md).[asyncChain](../interfaces/AsyncMonad.md#asyncchain)

#### Defined in

dist/identity.d.ts:20

___

### asyncMap

▸ **asyncMap**\<`B`, `P`\>(`map`, `...parameters`): `Promise`\<[`Identity`](internal_.Identity.md)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`T`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<`B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Identity`](internal_.Identity.md)\<`B`\>\>

#### Defined in

dist/identity.d.ts:21

___

### await

▸ **await**\<`X`\>(`this`): `Promise`\<[`Identity`](internal_.Identity.md)\<`X`\>\>

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Identity`](internal_.Identity.md)\<[`MaybePromiseLike`](../modules.md#maybepromiselike)\<`X`\>\> |

#### Returns

`Promise`\<[`Identity`](internal_.Identity.md)\<`X`\>\>

#### Implementation of

[AsyncMonad](../interfaces/AsyncMonad.md).[await](../interfaces/AsyncMonad.md#await)

#### Defined in

dist/identity.d.ts:22

___

### chain

▸ **chain**\<`B`, `P`\>(`map`, `...parameters`): [`Identity`](internal_.Identity.md)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`T`, [`Identity`](internal_.Identity.md)\<`B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Identity`](internal_.Identity.md)\<`B`\>

#### Implementation of

[AsyncMonad](../interfaces/AsyncMonad.md).[chain](../interfaces/AsyncMonad.md#chain)

#### Defined in

dist/identity.d.ts:19

___

### fold

▸ **fold**\<`A`\>(`mapper`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Mapper`](../modules/internal_.md#mapper)\<`T`, `A`\> |

#### Returns

`A`

#### Defined in

dist/identity.d.ts:23

___

### join

▸ **join**\<`A`\>(`this`): [`Identity`](internal_.Identity.md)\<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Identity`](internal_.Identity.md)\<[`Identity`](internal_.Identity.md)\<`A`\>\> |

#### Returns

[`Identity`](internal_.Identity.md)\<`A`\>

#### Implementation of

[AsyncMonad](../interfaces/AsyncMonad.md).[join](../interfaces/AsyncMonad.md#join)

#### Defined in

dist/identity.d.ts:13

___

### map

▸ **map**\<`A`, `P`\>(`map`, `...parameters`): [`Identity`](internal_.Identity.md)\<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`T`, `A`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Identity`](internal_.Identity.md)\<`A`\>

#### Implementation of

[AsyncMonad](../interfaces/AsyncMonad.md).[map](../interfaces/AsyncMonad.md#map)

#### Defined in

dist/identity.d.ts:14

___

### pipe

▸ **pipe**\<`A`, `P`\>(`pipe`, `...parameters`): `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pipe` | [`Mapper`](../modules/internal_.md#mapper)\<[`Identity`](internal_.Identity.md)\<`T`\>, `A`, `P`\> |
| `...parameters` | `P` |

#### Returns

`A`

#### Implementation of

[Pipe](../interfaces/internal_.Pipe.md).[pipe](../interfaces/internal_.Pipe.md#pipe)

#### Defined in

dist/identity.d.ts:10

___

### tap

▸ **tap**\<`P`\>(`callback`, `...parameters`): [`Identity`](internal_.Identity.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Mapper`](../modules/internal_.md#mapper)\<`T`, `void`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Identity`](internal_.Identity.md)\<`T`\>

#### Defined in

dist/identity.d.ts:9

___

### unwrap

▸ **unwrap**(): `T`

#### Returns

`T`

#### Implementation of

[Container](../interfaces/Container.md).[unwrap](../interfaces/Container.md#unwrap)

#### Defined in

dist/identity.d.ts:25

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

dist/identity.d.ts:12

___

### unwrapOrElse

▸ **unwrapOrElse**\<`X`\>(`fallback`): `T` \| `X`

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | () => `X` |

#### Returns

`T` \| `X`

#### Defined in

dist/identity.d.ts:11

___

### zip

▸ **zip**\<`A`\>(`either`): [`Identity`](internal_.Identity.md)\<[`T`, `A`]\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Identity`](internal_.Identity.md)\<`A`\> |

#### Returns

[`Identity`](internal_.Identity.md)\<[`T`, `A`]\>

#### Defined in

dist/identity.d.ts:24

___

### from

▸ `Static` **from**\<`T`\>(`value`): [`Identity`](internal_.Identity.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Identity`](internal_.Identity.md)\<`T`\>

#### Defined in

dist/identity.d.ts:5
