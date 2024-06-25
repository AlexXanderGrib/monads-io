[Package](../README.md) / [Modules](../modules.md) / [identity](../modules/identity.md) / Identity

# Class: Identity\<T\>

[identity](../modules/identity.md).Identity

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`AsyncMonad`](../interfaces/index.AsyncMonad.md)\<`T`\>
- [`Container`](../interfaces/index.Container.md)\<`T`\>
- [`Pipe`](../interfaces/types.Pipe.md)

## Table of contents

### Constructors

- [constructor](identity.Identity.md#constructor)

### Properties

- [value](identity.Identity.md#value)

### Accessors

- [[toStringTag]](identity.Identity.md#[tostringtag])
- [name](identity.Identity.md#name)

### Methods

- [apply](identity.Identity.md#apply)
- [asyncApply](identity.Identity.md#asyncapply)
- [asyncChain](identity.Identity.md#asyncchain)
- [asyncMap](identity.Identity.md#asyncmap)
- [await](identity.Identity.md#await)
- [chain](identity.Identity.md#chain)
- [fold](identity.Identity.md#fold)
- [join](identity.Identity.md#join)
- [map](identity.Identity.md#map)
- [pipe](identity.Identity.md#pipe)
- [tap](identity.Identity.md#tap)
- [unwrap](identity.Identity.md#unwrap)
- [unwrapOr](identity.Identity.md#unwrapor)
- [unwrapOrElse](identity.Identity.md#unwraporelse)
- [zip](identity.Identity.md#zip)
- [from](identity.Identity.md#from)

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

▸ **apply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Identity`](identity.Identity.md)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Identity`](identity.Identity.md)\<[`Mapper`](../modules/types.md#mapper)\<`A`, `B`, `P`\>\> |
| `argument` | [`Identity`](identity.Identity.md)\<`A`\> |
| `...parameters` | `P` |

#### Returns

[`Identity`](identity.Identity.md)\<`B`\>

#### Implementation of

[AsyncMonad](../interfaces/index.AsyncMonad.md).[apply](../interfaces/index.AsyncMonad.md#apply)

#### Defined in

dist/identity.d.ts:15

▸ **apply**\<`A`, `B`, `P`\>(`this`, `map`, `...parameters`): [`Identity`](identity.Identity.md)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Identity`](identity.Identity.md)\<`A`\> |
| `map` | [`Identity`](identity.Identity.md)\<[`Mapper`](../modules/types.md#mapper)\<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Identity`](identity.Identity.md)\<`B`\>

#### Implementation of

[AsyncMonad](../interfaces/index.AsyncMonad.md).[apply](../interfaces/index.AsyncMonad.md#apply)

#### Defined in

dist/identity.d.ts:16

___

### asyncApply

▸ **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): `Promise`\<[`Identity`](identity.Identity.md)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Identity`](identity.Identity.md)\<[`Mapper`](../modules/types.md#mapper)\<`A`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `argument` | [`Identity`](identity.Identity.md)\<`A`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Identity`](identity.Identity.md)\<`B`\>\>

#### Defined in

dist/identity.d.ts:17

▸ **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, `...parameters`): `Promise`\<[`Identity`](identity.Identity.md)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Identity`](identity.Identity.md)\<`A`\> |
| `map` | [`Identity`](identity.Identity.md)\<[`Mapper`](../modules/types.md#mapper)\<`A`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Identity`](identity.Identity.md)\<`B`\>\>

#### Defined in

dist/identity.d.ts:18

___

### asyncChain

▸ **asyncChain**\<`B`, `P`\>(`map`, `...parameters`): `Promise`\<[`Identity`](identity.Identity.md)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`T`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<[`Identity`](identity.Identity.md)\<`B`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Identity`](identity.Identity.md)\<`B`\>\>

#### Implementation of

[AsyncMonad](../interfaces/index.AsyncMonad.md).[asyncChain](../interfaces/index.AsyncMonad.md#asyncchain)

#### Defined in

dist/identity.d.ts:20

___

### asyncMap

▸ **asyncMap**\<`B`, `P`\>(`map`, `...parameters`): `Promise`\<[`Identity`](identity.Identity.md)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`T`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Identity`](identity.Identity.md)\<`B`\>\>

#### Defined in

dist/identity.d.ts:21

___

### await

▸ **await**\<`X`\>(`this`): `Promise`\<[`Identity`](identity.Identity.md)\<`X`\>\>

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Identity`](identity.Identity.md)\<[`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`X`\>\> |

#### Returns

`Promise`\<[`Identity`](identity.Identity.md)\<`X`\>\>

#### Implementation of

[AsyncMonad](../interfaces/index.AsyncMonad.md).[await](../interfaces/index.AsyncMonad.md#await)

#### Defined in

dist/identity.d.ts:22

___

### chain

▸ **chain**\<`B`, `P`\>(`map`, `...parameters`): [`Identity`](identity.Identity.md)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`T`, [`Identity`](identity.Identity.md)\<`B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Identity`](identity.Identity.md)\<`B`\>

#### Implementation of

[AsyncMonad](../interfaces/index.AsyncMonad.md).[chain](../interfaces/index.AsyncMonad.md#chain)

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
| `mapper` | [`Mapper`](../modules/types.md#mapper)\<`T`, `A`\> |

#### Returns

`A`

#### Defined in

dist/identity.d.ts:23

___

### join

▸ **join**\<`A`\>(`this`): [`Identity`](identity.Identity.md)\<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Identity`](identity.Identity.md)\<[`Identity`](identity.Identity.md)\<`A`\>\> |

#### Returns

[`Identity`](identity.Identity.md)\<`A`\>

#### Implementation of

[AsyncMonad](../interfaces/index.AsyncMonad.md).[join](../interfaces/index.AsyncMonad.md#join)

#### Defined in

dist/identity.d.ts:13

___

### map

▸ **map**\<`A`, `P`\>(`map`, `...parameters`): [`Identity`](identity.Identity.md)\<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`T`, `A`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Identity`](identity.Identity.md)\<`A`\>

#### Implementation of

[AsyncMonad](../interfaces/index.AsyncMonad.md).[map](../interfaces/index.AsyncMonad.md#map)

#### Defined in

dist/identity.d.ts:14

___

### pipe

▸ **pipe**\<`A`, `P`\>(`pipe`, `...parameters`): `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pipe` | [`Mapper`](../modules/types.md#mapper)\<[`Identity`](identity.Identity.md)\<`T`\>, `A`, `P`\> |
| `...parameters` | `P` |

#### Returns

`A`

#### Implementation of

[Pipe](../interfaces/types.Pipe.md).[pipe](../interfaces/types.Pipe.md#pipe)

#### Defined in

dist/identity.d.ts:10

___

### tap

▸ **tap**\<`P`\>(`callback`, `...parameters`): [`Identity`](identity.Identity.md)\<`T`\>

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

[`Identity`](identity.Identity.md)\<`T`\>

#### Defined in

dist/identity.d.ts:9

___

### unwrap

▸ **unwrap**(): `T`

#### Returns

`T`

#### Implementation of

[Container](../interfaces/index.Container.md).[unwrap](../interfaces/index.Container.md#unwrap)

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

[Container](../interfaces/index.Container.md).[unwrapOr](../interfaces/index.Container.md#unwrapor)

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

▸ **zip**\<`A`\>(`either`): [`Identity`](identity.Identity.md)\<[`T`, `A`]\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Identity`](identity.Identity.md)\<`A`\> |

#### Returns

[`Identity`](identity.Identity.md)\<[`T`, `A`]\>

#### Defined in

dist/identity.d.ts:24

___

### from

▸ `Static` **from**\<`T`\>(`value`): [`Identity`](identity.Identity.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Identity`](identity.Identity.md)\<`T`\>

#### Defined in

dist/identity.d.ts:5
