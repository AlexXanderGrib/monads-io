[Package](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / Pipe

# Interface: Pipe

[types](../modules/types.md).Pipe

## Implemented by

- [`EitherConstructor`](../classes/either._internal_.EitherConstructor.md)
- [`Identity`](../classes/identity.Identity.md)
- [`MaybeConstructor`](../classes/maybe._internal_.MaybeConstructor.md)

## Table of contents

### Methods

- [pipe](types.Pipe.md#pipe)

## Methods

### pipe

▸ **pipe**\<`T`, `P`\>(`callback`, `...parameters`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Mapper`](../modules/types.md#mapper)\<[`Pipe`](types.Pipe.md), `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

`T`

#### Defined in

dist/types.d.ts:35
