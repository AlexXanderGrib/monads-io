[Package](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Alternative

# Interface: Alternative\<T\>

[index](../modules/index.md).Alternative

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`EitherConstructor`](../classes/either._internal_.EitherConstructor.md)
- [`MaybeConstructor`](../classes/maybe._internal_.MaybeConstructor.md)

## Table of contents

### Methods

- [default](index.Alternative.md#default)
- [or](index.Alternative.md#or)

## Methods

### default

▸ **default**(`value`): [`Alternative`](index.Alternative.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Alternative`](index.Alternative.md)\<`T`\>

#### Defined in

dist/types.d.ts:13

___

### or

▸ **or**(`alternative`): [`Alternative`](index.Alternative.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `alternative` | [`Alternative`](index.Alternative.md)\<`T`\> |

#### Returns

[`Alternative`](index.Alternative.md)\<`T`\>

#### Defined in

dist/types.d.ts:12
