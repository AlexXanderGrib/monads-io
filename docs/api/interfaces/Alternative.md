[Package](../README.md) / [Exports](../modules.md) / Alternative

# Interface: Alternative\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`EitherConstructor`](../classes/internal_.EitherConstructor.md)
- [`MaybeConstructor`](../classes/internal_.MaybeConstructor.md)

## Table of contents

### Methods

- [default](Alternative.md#default)
- [or](Alternative.md#or)

## Methods

### default

▸ **default**(`value`): [`Alternative`](Alternative.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Alternative`](Alternative.md)\<`T`\>

#### Defined in

dist/types.d.ts:13

___

### or

▸ **or**(`alternative`): [`Alternative`](Alternative.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `alternative` | [`Alternative`](Alternative.md)\<`T`\> |

#### Returns

[`Alternative`](Alternative.md)\<`T`\>

#### Defined in

dist/types.d.ts:12
