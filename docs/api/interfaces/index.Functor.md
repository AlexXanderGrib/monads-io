[Package](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Functor

# Interface: Functor\<A\>

[index](../modules/index.md).Functor

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- **`Functor`**

  ↳ [`Applicative`](index.Applicative.md)

## Table of contents

### Methods

- [map](index.Functor.md#map)

## Methods

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

#### Defined in

dist/types.d.ts:16
