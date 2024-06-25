[Package](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Pipe

# Interface: Pipe

[\<internal\>](../modules/internal_.md).Pipe

## Implemented by

- [`EitherConstructor`](../classes/internal_.EitherConstructor.md)
- [`Identity`](../classes/internal_.Identity.md)
- [`MaybeConstructor`](../classes/internal_.MaybeConstructor.md)

## Table of contents

### Methods

- [pipe](internal_.Pipe.md#pipe)

## Methods

### pipe

▸ **pipe**\<`T`, `P`\>(`callback`, `...parameters`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Mapper`](../modules/internal_.md#mapper)\<[`Pipe`](internal_.Pipe.md), `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

`T`

#### Defined in

dist/types.d.ts:35
