[Package](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Applicative

# Interface: Applicative<A\>

[<internal>](../modules/internal_.md).Applicative

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Functor`](internal_.Functor.md)<`A`\>

  ↳ **`Applicative`**

  ↳↳ [`Monad`](internal_.Monad.md)

## Table of contents

### Methods

- [apply](internal_.Applicative.md#apply)
- [map](internal_.Applicative.md#map)

## Methods

### apply

▸ **apply**<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Applicative`](internal_.Applicative.md)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Applicative`](internal_.Applicative.md)<[`Pm`](../modules/internal_.md#pm)<`A`, `B`, `P`\>\> |
| `argument` | [`Applicative`](internal_.Applicative.md)<`A`\> |
| `...parameters` | `P` |

#### Returns

[`Applicative`](internal_.Applicative.md)<`B`\>

#### Defined in

dist/types.d.ts:19

▸ **apply**<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Applicative`](internal_.Applicative.md)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Applicative`](internal_.Applicative.md)<`A`\> |
| `argument` | [`Applicative`](internal_.Applicative.md)<[`Pm`](../modules/internal_.md#pm)<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Applicative`](internal_.Applicative.md)<`B`\>

#### Defined in

dist/types.d.ts:20

___

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

#### Inherited from

[Functor](internal_.Functor.md).[map](internal_.Functor.md#map)

#### Defined in

dist/types.d.ts:16
