[Package](../README.md) / [Modules](../modules.md) / maybe

# Module: maybe

## Table of contents

### References

- [from](maybe.md#from)
- [fromEitherLeft](maybe.md#fromeitherleft)
- [fromEitherRight](maybe.md#fromeitherright)

### Modules

- [\<internal\>](maybe._internal_.md)

### Enumerations

- [MaybeState](../enums/maybe.MaybeState.md)

### Interfaces

- [MaybeOperation](../interfaces/maybe.MaybeOperation.md)

### Type Aliases

- [Maybe](maybe.md#maybe)
- [SerializedMaybe](maybe.md#serializedmaybe)

### Functions

- [asyncIterator](maybe.md#asynciterator)
- [chain](maybe.md#chain)
- [filterMap](maybe.md#filtermap)
- [fromJSON](maybe.md#fromjson)
- [fromNullable](maybe.md#fromnullable)
- [isJust](maybe.md#isjust)
- [isMaybe](maybe.md#ismaybe)
- [isNone](maybe.md#isnone)
- [iterator](maybe.md#iterator)
- [just](maybe.md#just)
- [merge](maybe.md#merge)
- [none](maybe.md#none)

## References

### from

Renames and re-exports [__type](undefined)

___

### fromEitherLeft

Renames and re-exports [__type](undefined)

___

### fromEitherRight

Renames and re-exports [__type](undefined)

## Type Aliases

### Maybe

Ƭ **Maybe**\<`T`\>: [`Just`](../classes/maybe._internal_.Just.md)\<`T`\> \| [`None`](../classes/maybe._internal_.None.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/maybe.d.ts:70

___

### SerializedMaybe

Ƭ **SerializedMaybe**\<`T`\>: [`SerializedJust`](maybe._internal_.md#serializedjust)\<`T`\> \| [`SerializedNone`](maybe._internal_.md#serializednone)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/maybe.d.ts:71

## Functions

### asyncIterator

▸ **asyncIterator**\<`T`\>(`callback`): `AsyncGenerator`\<`T`, `void`, `void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Maybe`](maybe.md#maybe)\<[`MaybePromiseLike`](index.md#maybepromiselike)\<`T`\>\>\> |

#### Returns

`AsyncGenerator`\<`T`, `void`, `void`\>

#### Defined in

dist/maybe.d.ts:92

___

### chain

▸ **chain**\<`A`, `B`, `P`\>(`map`, `...parameters`): (`maybe`: [`Maybe`](maybe.md#maybe)\<`A`\>) => `Promise`\<[`Maybe`](maybe.md#maybe)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `never` |
| `B` | `never` |
| `P` | extends [`AnyParameters`](index.md#anyparameters) = [] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | (`v`: `A`, ...`parameters`: `P`) => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Maybe`](maybe.md#maybe)\<`B`\>\> |
| `...parameters` | `P` |

#### Returns

`fn`

▸ (`maybe`): `Promise`\<[`Maybe`](maybe.md#maybe)\<`B`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `maybe` | [`Maybe`](maybe.md#maybe)\<`A`\> |

##### Returns

`Promise`\<[`Maybe`](maybe.md#maybe)\<`B`\>\>

#### Defined in

dist/maybe.d.ts:75

___

### filterMap

▸ **filterMap**\<`A`, `B`\>(`iterable`, `filterMap`): `Generator`\<`B`, `void`, `void`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`\<`A`\> |
| `filterMap` | (`value`: `A`, `index`: `number`) => [`Maybe`](maybe.md#maybe)\<`B`\> |

#### Returns

`Generator`\<`B`, `void`, `void`\>

#### Defined in

dist/maybe.d.ts:93

___

### fromJSON

▸ **fromJSON**\<`T`\>(`serialized`): [`Maybe`](maybe.md#maybe)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`SerializedMaybe`](maybe.md#serializedmaybe)\<`T`\> |

#### Returns

[`Maybe`](maybe.md#maybe)\<`T`\>

**`Throws`**

- DeserializationError

#### Defined in

dist/maybe.d.ts:82

___

### fromNullable

▸ **fromNullable**\<`T`\>(`value`): [`Maybe`](maybe.md#maybe)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Nullable`](index.md#nullable)\<`T`\> |

#### Returns

[`Maybe`](maybe.md#maybe)\<`T`\>

#### Defined in

dist/maybe.d.ts:90

___

### isJust

▸ **isJust**\<`T`\>(`value`): value is Just\<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Just\<T\>

#### Defined in

dist/maybe.d.ts:72

___

### isMaybe

▸ **isMaybe**\<`T`\>(`value`): value is Maybe\<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Maybe\<T\>

#### Defined in

dist/maybe.d.ts:74

___

### isNone

▸ **isNone**\<`T`\>(`value`): value is None\<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is None\<T\>

#### Defined in

dist/maybe.d.ts:73

___

### iterator

▸ **iterator**\<`T`\>(`callback`): `Generator`\<`T`, `void`, `void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => [`Maybe`](maybe.md#maybe)\<`T`\> |

#### Returns

`Generator`\<`T`, `void`, `void`\>

#### Defined in

dist/maybe.d.ts:91

___

### just

▸ **just**\<`T`\>(`value`): [`Maybe`](maybe.md#maybe)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Maybe`](maybe.md#maybe)\<`T`\>

#### Defined in

dist/maybe.d.ts:8

___

### merge

▸ **merge**\<`V1`\>(`values`): [`Maybe`](maybe.md#maybe)\<[`V1`]\>

#### Type parameters

| Name |
| :------ |
| `V1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Maybe`](maybe.md#maybe)\<`V1`\>] |

#### Returns

[`Maybe`](maybe.md#maybe)\<[`V1`]\>

#### Defined in

dist/maybe.d.ts:83

▸ **merge**\<`V1`, `V2`\>(`values`): [`Maybe`](maybe.md#maybe)\<[`V1`, `V2`]\>

#### Type parameters

| Name |
| :------ |
| `V1` |
| `V2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Maybe`](maybe.md#maybe)\<`V1`\>, [`Maybe`](maybe.md#maybe)\<`V2`\>] |

#### Returns

[`Maybe`](maybe.md#maybe)\<[`V1`, `V2`]\>

#### Defined in

dist/maybe.d.ts:84

▸ **merge**\<`V1`, `V2`, `V3`\>(`values`): [`Maybe`](maybe.md#maybe)\<[`V1`, `V2`, `V3`]\>

#### Type parameters

| Name |
| :------ |
| `V1` |
| `V2` |
| `V3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Maybe`](maybe.md#maybe)\<`V1`\>, [`Maybe`](maybe.md#maybe)\<`V2`\>, [`Maybe`](maybe.md#maybe)\<`V3`\>] |

#### Returns

[`Maybe`](maybe.md#maybe)\<[`V1`, `V2`, `V3`]\>

#### Defined in

dist/maybe.d.ts:85

▸ **merge**\<`V1`, `V2`, `V3`, `V4`\>(`values`): [`Maybe`](maybe.md#maybe)\<[`V1`, `V2`, `V3`, `V4`]\>

#### Type parameters

| Name |
| :------ |
| `V1` |
| `V2` |
| `V3` |
| `V4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Maybe`](maybe.md#maybe)\<`V1`\>, [`Maybe`](maybe.md#maybe)\<`V2`\>, [`Maybe`](maybe.md#maybe)\<`V3`\>, [`Maybe`](maybe.md#maybe)\<`V4`\>] |

#### Returns

[`Maybe`](maybe.md#maybe)\<[`V1`, `V2`, `V3`, `V4`]\>

#### Defined in

dist/maybe.d.ts:86

▸ **merge**\<`V1`, `V2`, `V3`, `V4`, `V5`\>(`values`): [`Maybe`](maybe.md#maybe)\<[`V1`, `V2`, `V3`, `V4`, `V5`]\>

#### Type parameters

| Name |
| :------ |
| `V1` |
| `V2` |
| `V3` |
| `V4` |
| `V5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Maybe`](maybe.md#maybe)\<`V1`\>, [`Maybe`](maybe.md#maybe)\<`V2`\>, [`Maybe`](maybe.md#maybe)\<`V3`\>, [`Maybe`](maybe.md#maybe)\<`V4`\>, [`Maybe`](maybe.md#maybe)\<`V5`\>] |

#### Returns

[`Maybe`](maybe.md#maybe)\<[`V1`, `V2`, `V3`, `V4`, `V5`]\>

#### Defined in

dist/maybe.d.ts:87

▸ **merge**\<`V1`, `V2`, `V3`, `V4`, `V5`, `V6`\>(`values`): [`Maybe`](maybe.md#maybe)\<[`V1`, `V2`, `V3`, `V4`, `V5`, `V6`]\>

#### Type parameters

| Name |
| :------ |
| `V1` |
| `V2` |
| `V3` |
| `V4` |
| `V5` |
| `V6` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Maybe`](maybe.md#maybe)\<`V1`\>, [`Maybe`](maybe.md#maybe)\<`V2`\>, [`Maybe`](maybe.md#maybe)\<`V3`\>, [`Maybe`](maybe.md#maybe)\<`V4`\>, [`Maybe`](maybe.md#maybe)\<`V5`\>, [`Maybe`](maybe.md#maybe)\<`V6`\>] |

#### Returns

[`Maybe`](maybe.md#maybe)\<[`V1`, `V2`, `V3`, `V4`, `V5`, `V6`]\>

#### Defined in

dist/maybe.d.ts:88

▸ **merge**\<`T`\>(`values`): [`Maybe`](maybe.md#maybe)\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`Maybe`](maybe.md#maybe)\<`T`\>[] |

#### Returns

[`Maybe`](maybe.md#maybe)\<`T`[]\>

#### Defined in

dist/maybe.d.ts:89

___

### none

▸ **none**\<`T`\>(): [`Maybe`](maybe.md#maybe)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Returns

[`Maybe`](maybe.md#maybe)\<`T`\>

#### Defined in

dist/maybe.d.ts:7
