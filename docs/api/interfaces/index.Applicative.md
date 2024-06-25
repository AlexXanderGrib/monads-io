[Package](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Applicative

# Interface: Applicative\<A\>

[index](../modules/index.md).Applicative

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Functor`](index.Functor.md)\<`A`\>

  ↳ **`Applicative`**

  ↳↳ [`Monad`](index.Monad.md)

## Table of contents

### Methods

- [apply](index.Applicative.md#apply)
- [map](index.Applicative.md#map)

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

#### Defined in

dist/types.d.ts:20

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

[Functor](index.Functor.md).[map](index.Functor.md#map)

#### Defined in

dist/types.d.ts:16
