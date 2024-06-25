[Package](../README.md) / [Exports](../modules.md) / Functor

# Interface: Functor\<A\>

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- **`Functor`**

  ↳ [`Applicative`](Applicative.md)

## Table of contents

### Methods

- [map](Functor.md#map)

## Methods

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
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`A`, `B`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Functor`](Functor.md)\<`B`\>

#### Defined in

dist/types.d.ts:16
