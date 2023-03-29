[Package](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Alternative

# Interface: Alternative<T\>

[<internal>](../modules/internal_.md).Alternative

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`EitherConstructor`](../classes/internal_.EitherConstructor.md)
- [`MaybeConstructor`](../classes/internal_.MaybeConstructor.md)

## Table of contents

### Methods

- [default](internal_.Alternative.md#default)
- [or](internal_.Alternative.md#or)

## Methods

### default

▸ **default**(`value`): [`Alternative`](internal_.Alternative.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Alternative`](internal_.Alternative.md)<`T`\>

#### Defined in

dist/types.d.ts:13

___

### or

▸ **or**(`alternative`): [`Alternative`](internal_.Alternative.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `alternative` | [`Alternative`](internal_.Alternative.md)<`T`\> |

#### Returns

[`Alternative`](internal_.Alternative.md)<`T`\>

#### Defined in

dist/types.d.ts:12
