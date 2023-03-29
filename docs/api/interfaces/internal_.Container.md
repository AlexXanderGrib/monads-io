[Package](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Container

# Interface: Container<T\>

[<internal>](../modules/internal_.md).Container

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`EitherConstructor`](../classes/internal_.EitherConstructor.md)
- [`MaybeConstructor`](../classes/internal_.MaybeConstructor.md)

## Table of contents

### Methods

- [unwrap](internal_.Container.md#unwrap)
- [unwrapOr](internal_.Container.md#unwrapor)

## Methods

### unwrap

▸ **unwrap**(): `T`

#### Returns

`T`

#### Defined in

dist/types.d.ts:31

___

### unwrapOr

▸ **unwrapOr**<`X`\>(`value`): `T` \| `X`

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `X` |

#### Returns

`T` \| `X`

#### Defined in

dist/types.d.ts:32
