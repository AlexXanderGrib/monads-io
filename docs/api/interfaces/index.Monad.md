[Package](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Monad

# Interface: Monad\<A\>

[index](../modules/index.md).Monad

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Applicative`](index.Applicative.md)\<`A`\>

  ↳ **`Monad`**

  ↳↳ [`AsyncMonad`](index.AsyncMonad.md)

## Implemented by

- [`MaybeConstructor`](../classes/maybe._internal_.MaybeConstructor.md)

## Table of contents

### Methods

- [apply](index.Monad.md#apply)
- [chain](index.Monad.md#chain)
- [join](index.Monad.md#join)
- [map](index.Monad.md#map)

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

[Applicative](index.Applicative.md).[apply](index.Applicative.md#apply)

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

[Applicative](index.Applicative.md).[apply](index.Applicative.md#apply)

#### Defined in

dist/types.d.ts:20

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

[Applicative](index.Applicative.md).[map](index.Applicative.md#map)

#### Defined in

dist/types.d.ts:16
