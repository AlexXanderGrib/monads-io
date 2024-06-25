[Package](../README.md) / [Exports](../modules.md) / Monad

# Interface: Monad\<A\>

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Applicative`](Applicative.md)\<`A`\>

  ↳ **`Monad`**

  ↳↳ [`AsyncMonad`](AsyncMonad.md)

## Implemented by

- [`MaybeConstructor`](../classes/internal_.MaybeConstructor.md)

## Table of contents

### Methods

- [apply](Monad.md#apply)
- [chain](Monad.md#chain)
- [join](Monad.md#join)
- [map](Monad.md#map)

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
| `this` | [`Applicative`](Applicative.md)\<[`Mapper`](../modules/internal_.md#mapper)\<`A`, `B`, `P`\>\> |
| `argument` | [`Applicative`](Applicative.md)\<`A`\> |
| `...parameters` | `P` |

#### Returns

[`Applicative`](Applicative.md)\<`B`\>

#### Inherited from

[Applicative](Applicative.md).[apply](Applicative.md#apply)

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
| `argument` | [`Applicative`](Applicative.md)\<[`Mapper`](../modules/internal_.md#mapper)\<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Applicative`](Applicative.md)\<`B`\>

#### Inherited from

[Applicative](Applicative.md).[apply](Applicative.md#apply)

#### Defined in

dist/types.d.ts:20

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
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`A`, [`Monad`](Monad.md)\<`B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Monad`](Monad.md)\<`B`\>

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
| `map` | [`Mapper`](../modules/internal_.md#mapper)\<`A`, `B`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Functor`](Functor.md)\<`B`\>

#### Inherited from

[Applicative](Applicative.md).[map](Applicative.md#map)

#### Defined in

dist/types.d.ts:16
