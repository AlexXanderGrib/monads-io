[Package](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Functor

# Interface: Functor<A\>

[<internal>](../modules/internal_.md).Functor

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- **`Functor`**

  ↳ [`Applicative`](internal_.Applicative.md)

## Table of contents

### Methods

- [map](internal_.Functor.md#map)

## Methods

### map

▸ **map**<`B`, `P`\>(`map`, `...parameters`): [`Functor`](internal_.Functor.md)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`A`, `B`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Functor`](internal_.Functor.md)<`B`\>

#### Defined in

dist/types.d.ts:16
