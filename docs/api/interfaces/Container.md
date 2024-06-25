[Package](../README.md) / [Exports](../modules.md) / Container

# Interface: Container\<A\>

## Type parameters

| Name |
| :------ |
| `A` |

## Implemented by

- [`EitherConstructor`](../classes/internal_.EitherConstructor.md)
- [`Identity`](../classes/internal_.Identity.md)
- [`MaybeConstructor`](../classes/internal_.MaybeConstructor.md)

## Table of contents

### Methods

- [unwrap](Container.md#unwrap)
- [unwrapOr](Container.md#unwrapor)

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
