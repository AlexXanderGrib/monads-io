[Package](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Monad

# Interface: Monad<A\>

[<internal>](../modules/internal_.md).Monad

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Applicative`](internal_.Applicative.md)<`A`\>

  ↳ **`Monad`**

  ↳↳ [`AsyncMonad`](internal_.AsyncMonad.md)

## Implemented by

- [`MaybeConstructor`](../classes/internal_.MaybeConstructor.md)

## Table of contents

### Methods

- [apply](internal_.Monad.md#apply)
- [chain](internal_.Monad.md#chain)
- [join](internal_.Monad.md#join)
- [map](internal_.Monad.md#map)

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

#### Inherited from

[Applicative](internal_.Applicative.md).[apply](internal_.Applicative.md#apply)

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

#### Inherited from

[Applicative](internal_.Applicative.md).[apply](internal_.Applicative.md#apply)

#### Defined in

dist/types.d.ts:20

___

### chain

▸ **chain**<`B`, `P`\>(`map`, `...parameters`): [`Monad`](internal_.Monad.md)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`A`, [`Monad`](internal_.Monad.md)<`B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Monad`](internal_.Monad.md)<`B`\>

#### Defined in

dist/types.d.ts:23

___

### join

▸ **join**<`A`\>(`this`): [`Monad`](internal_.Monad.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Monad`](internal_.Monad.md)<[`Monad`](internal_.Monad.md)<`A`\>\> |

#### Returns

[`Monad`](internal_.Monad.md)<`A`\>

#### Defined in

dist/types.d.ts:24

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

[Applicative](internal_.Applicative.md).[map](internal_.Applicative.md#map)

#### Defined in

dist/types.d.ts:16
