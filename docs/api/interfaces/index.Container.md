[Package](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Container

# Interface: Container\<A\>

[index](../modules/index.md).Container

## Type parameters

| Name |
| :------ |
| `A` |

## Implemented by

- [`EitherConstructor`](../classes/either._internal_.EitherConstructor.md)
- [`Identity`](../classes/identity.Identity.md)
- [`MaybeConstructor`](../classes/maybe._internal_.MaybeConstructor.md)

## Table of contents

### Methods

- [unwrap](index.Container.md#unwrap)
- [unwrapOr](index.Container.md#unwrapor)

## Methods

### unwrap

▸ **unwrap**(): `A`

#### Returns

`A`

#### Defined in

dist/types.d.ts:31

___

### unwrapOr

▸ **unwrapOr**\<`T`\>(`value`): `A` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`A` \| `T`

#### Defined in

dist/types.d.ts:32
