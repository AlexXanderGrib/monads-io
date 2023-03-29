[Package](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AsyncMonad

# Interface: AsyncMonad<A\>

[<internal>](../modules/internal_.md).AsyncMonad

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Monad`](internal_.Monad.md)<`A`\>

  ↳ **`AsyncMonad`**

## Implemented by

- [`EitherConstructor`](../classes/internal_.EitherConstructor.md)

## Table of contents

### Methods

- [apply](internal_.AsyncMonad.md#apply)
- [asyncChain](internal_.AsyncMonad.md#asyncchain)
- [await](internal_.AsyncMonad.md#await)
- [chain](internal_.AsyncMonad.md#chain)
- [join](internal_.AsyncMonad.md#join)
- [map](internal_.AsyncMonad.md#map)

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

[Monad](internal_.Monad.md).[apply](internal_.Monad.md#apply)

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

[Monad](internal_.Monad.md).[apply](internal_.Monad.md#apply)

#### Defined in

dist/types.d.ts:20

___

### asyncChain

▸ **asyncChain**<`B`, `P`\>(`map`, `...parameters`): `Promise`<[`AsyncMonad`](internal_.AsyncMonad.md)<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`A`, [`MaybePromiseLike`](../modules.md#maybepromiselike)<[`AsyncMonad`](internal_.AsyncMonad.md)<`B`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`<[`AsyncMonad`](internal_.AsyncMonad.md)<`B`\>\>

#### Defined in

dist/types.d.ts:27

___

### await

▸ **await**<`A`\>(`this`): `Promise`<[`AsyncMonad`](internal_.AsyncMonad.md)<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AsyncMonad`](internal_.AsyncMonad.md)<[`MaybePromiseLike`](../modules.md#maybepromiselike)<`A`\>\> |

#### Returns

`Promise`<[`AsyncMonad`](internal_.AsyncMonad.md)<`A`\>\>

#### Defined in

dist/types.d.ts:28

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

#### Inherited from

[Monad](internal_.Monad.md).[chain](internal_.Monad.md#chain)

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

#### Inherited from

[Monad](internal_.Monad.md).[join](internal_.Monad.md#join)

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

[Monad](internal_.Monad.md).[map](internal_.Monad.md#map)

#### Defined in

dist/types.d.ts:16
