[Package](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / AsyncMonad

# Interface: AsyncMonad\<A\>

[index](../modules/index.md).AsyncMonad

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Monad`](index.Monad.md)\<`A`\>

  ↳ **`AsyncMonad`**

## Implemented by

- [`EitherConstructor`](../classes/either._internal_.EitherConstructor.md)
- [`Identity`](../classes/identity.Identity.md)

## Table of contents

### Methods

- [apply](index.AsyncMonad.md#apply)
- [asyncChain](index.AsyncMonad.md#asyncchain)
- [await](index.AsyncMonad.md#await)
- [chain](index.AsyncMonad.md#chain)
- [join](index.AsyncMonad.md#join)
- [map](index.AsyncMonad.md#map)

## Methods

### apply

▸ **apply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Applicative`](index.Applicative.md)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Applicative`](index.Applicative.md)\<[`Mapper`](../modules/types.md#mapper)\<`A`, `B`, `P`\>\> |
| `argument` | [`Applicative`](index.Applicative.md)\<`A`\> |
| `...parameters` | `P` |

#### Returns

[`Applicative`](index.Applicative.md)\<`B`\>

#### Inherited from

[Monad](index.Monad.md).[apply](index.Monad.md#apply)

#### Defined in

dist/types.d.ts:19

▸ **apply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Applicative`](index.Applicative.md)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Applicative`](index.Applicative.md)\<`A`\> |
| `argument` | [`Applicative`](index.Applicative.md)\<[`Mapper`](../modules/types.md#mapper)\<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Applicative`](index.Applicative.md)\<`B`\>

#### Inherited from

[Monad](index.Monad.md).[apply](index.Monad.md#apply)

#### Defined in

dist/types.d.ts:20

___

### asyncChain

▸ **asyncChain**\<`B`, `P`\>(`map`, `...parameters`): `Promise`\<[`AsyncMonad`](index.AsyncMonad.md)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`A`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<[`AsyncMonad`](index.AsyncMonad.md)\<`B`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`AsyncMonad`](index.AsyncMonad.md)\<`B`\>\>

#### Defined in

dist/types.d.ts:27

___

### await

▸ **await**\<`A`\>(`this`): `Promise`\<[`AsyncMonad`](index.AsyncMonad.md)\<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AsyncMonad`](index.AsyncMonad.md)\<[`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`A`\>\> |

#### Returns

`Promise`\<[`AsyncMonad`](index.AsyncMonad.md)\<`A`\>\>

#### Defined in

dist/types.d.ts:28

___

### chain

▸ **chain**\<`B`, `P`\>(`map`, `...parameters`): [`Monad`](index.Monad.md)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`A`, [`Monad`](index.Monad.md)\<`B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Monad`](index.Monad.md)\<`B`\>

#### Inherited from

[Monad](index.Monad.md).[chain](index.Monad.md#chain)

#### Defined in

dist/types.d.ts:23

___

### join

▸ **join**\<`A`\>(`this`): [`Monad`](index.Monad.md)\<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Monad`](index.Monad.md)\<[`Monad`](index.Monad.md)\<`A`\>\> |

#### Returns

[`Monad`](index.Monad.md)\<`A`\>

#### Inherited from

[Monad](index.Monad.md).[join](index.Monad.md#join)

#### Defined in

dist/types.d.ts:24

___

### map

▸ **map**\<`B`, `P`\>(`map`, `...parameters`): [`Functor`](index.Functor.md)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`A`, `B`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Functor`](index.Functor.md)\<`B`\>

#### Inherited from

[Monad](index.Monad.md).[map](index.Monad.md#map)

#### Defined in

dist/types.d.ts:16
