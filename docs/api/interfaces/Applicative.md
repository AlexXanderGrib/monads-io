[Package](../README.md) / [Exports](../modules.md) / Applicative

# Interface: Applicative\<A\>

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Functor`](Functor.md)\<`A`\>

  ↳ **`Applicative`**

  ↳↳ [`Monad`](Monad.md)

## Table of contents

### Methods

- [apply](Applicative.md#apply)
- [map](Applicative.md#map)

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

#### Defined in

dist/types.d.ts:20

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

[Functor](Functor.md).[map](Functor.md#map)

#### Defined in

dist/types.d.ts:16
