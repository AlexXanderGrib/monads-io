[Package](../README.md) / [Exports](../modules.md) / AsyncMonad

# Interface: AsyncMonad\<A\>

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Monad`](Monad.md)\<`A`\>

  ↳ **`AsyncMonad`**

## Implemented by

- [`EitherConstructor`](../classes/internal_.EitherConstructor.md)

## Table of contents

### Methods

- [apply](AsyncMonad.md#apply)
- [asyncChain](AsyncMonad.md#asyncchain)
- [await](AsyncMonad.md#await)
- [chain](AsyncMonad.md#chain)
- [join](AsyncMonad.md#join)
- [map](AsyncMonad.md#map)

## Methods

### apply

▸ **apply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Applicative`](Applicative.md)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Applicative`](Applicative.md)\<[`Pm`](../modules/internal_.md#pm)\<`A`, `B`, `P`\>\> |
| `argument` | [`Applicative`](Applicative.md)\<`A`\> |
| `...parameters` | `P` |

#### Returns

[`Applicative`](Applicative.md)\<`B`\>

#### Inherited from

[Monad](Monad.md).[apply](Monad.md#apply)

#### Defined in

dist/types.d.ts:19

▸ **apply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Applicative`](Applicative.md)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Applicative`](Applicative.md)\<`A`\> |
| `argument` | [`Applicative`](Applicative.md)\<[`Pm`](../modules/internal_.md#pm)\<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Applicative`](Applicative.md)\<`B`\>

#### Inherited from

[Monad](Monad.md).[apply](Monad.md#apply)

#### Defined in

dist/types.d.ts:20

___

### asyncChain

▸ **asyncChain**\<`B`, `P`\>(`map`, `...parameters`): `Promise`\<[`AsyncMonad`](AsyncMonad.md)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`A`, [`MaybePromiseLike`](../modules.md#maybepromiselike)\<[`AsyncMonad`](AsyncMonad.md)\<`B`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`AsyncMonad`](AsyncMonad.md)\<`B`\>\>

#### Defined in

dist/types.d.ts:27

___

### await

▸ **await**\<`A`\>(`this`): `Promise`\<[`AsyncMonad`](AsyncMonad.md)\<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AsyncMonad`](AsyncMonad.md)\<[`MaybePromiseLike`](../modules.md#maybepromiselike)\<`A`\>\> |

#### Returns

`Promise`\<[`AsyncMonad`](AsyncMonad.md)\<`A`\>\>

#### Defined in

dist/types.d.ts:28

___

### chain

▸ **chain**\<`B`, `P`\>(`map`, `...parameters`): [`Monad`](Monad.md)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`A`, [`Monad`](Monad.md)\<`B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Monad`](Monad.md)\<`B`\>

#### Inherited from

[Monad](Monad.md).[chain](Monad.md#chain)

#### Defined in

dist/types.d.ts:23

___

### join

▸ **join**\<`A`\>(`this`): [`Monad`](Monad.md)\<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Monad`](Monad.md)\<[`Monad`](Monad.md)\<`A`\>\> |

#### Returns

[`Monad`](Monad.md)\<`A`\>

#### Inherited from

[Monad](Monad.md).[join](Monad.md#join)

#### Defined in

dist/types.d.ts:24

___

### map

▸ **map**\<`B`, `P`\>(`map`, `...parameters`): [`Functor`](Functor.md)\<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)\<`A`, `B`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Functor`](Functor.md)\<`B`\>

#### Inherited from

[Monad](Monad.md).[map](Monad.md#map)

#### Defined in

dist/types.d.ts:16
