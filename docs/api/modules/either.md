[Package](../README.md) / [Modules](../modules.md) / either

# Module: either

## Table of contents

### References

- [fromMaybe](either.md#frommaybe)

### Modules

- [\<internal\>](either._internal_.md)

### Enumerations

- [EitherType](../enums/either.EitherType.md)

### Type Aliases

- [Either](either.md#either)
- [SerializedEither](either.md#serializedeither)

### Functions

- [Decorate](either.md#decorate)
- [DecorateAsync](either.md#decorateasync)
- [DecorateAsyncLegacy](either.md#decorateasynclegacy)
- [DecorateLegacy](either.md#decoratelegacy)
- [aggregateError](either.md#aggregateerror)
- [catchAsync](either.md#catchasync)
- [catchSync](either.md#catchsync)
- [chain](either.md#chain)
- [from](either.md#from)
- [fromJSON](either.md#fromjson)
- [fromPromise](either.md#frompromise)
- [fromPromiseSettledResult](either.md#frompromisesettledresult)
- [fromTry](either.md#fromtry)
- [fromTryAsync](either.md#fromtryasync)
- [isEither](either.md#iseither)
- [isLeft](either.md#isleft)
- [isRight](either.md#isright)
- [left](either.md#left)
- [merge](either.md#merge)
- [mergeInMany](either.md#mergeinmany)
- [mergeInOne](either.md#mergeinone)
- [right](either.md#right)
- [wrap](either.md#wrap)
- [wrapAsync](either.md#wrapasync)

## References

### fromMaybe

Renames and re-exports [__type](undefined)

## Type Aliases

### Either

Ƭ **Either**\<`L`, `R`\>: [`Right`](../classes/either._internal_.Right.md)\<`L`, `R`\> \| [`Left`](../classes/either._internal_.Left.md)\<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `unknown` |
| `R` | `unknown` |

#### Defined in

dist/either.d.ts:115

___

### SerializedEither

Ƭ **SerializedEither**\<`L`, `R`\>: [`SerializedRight`](either._internal_.md#serializedright)\<`R`\> \| [`SerializedLeft`](either._internal_.md#serializedleft)\<`L`\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Defined in

dist/either.d.ts:116

## Functions

### Decorate

▸ **Decorate**(): [`ModernMethodDecorator`](either._internal_.md#modernmethoddecorator)\<[`Either`](either.md#either)\>

#### Returns

[`ModernMethodDecorator`](either._internal_.md#modernmethoddecorator)\<[`Either`](either.md#either)\>

#### Defined in

dist/either.d.ts:172

___

### DecorateAsync

▸ **DecorateAsync**(): [`ModernMethodDecorator`](either._internal_.md#modernmethoddecorator)\<`Promise`\<[`Either`](either.md#either)\>\>

#### Returns

[`ModernMethodDecorator`](either._internal_.md#modernmethoddecorator)\<`Promise`\<[`Either`](either.md#either)\>\>

#### Defined in

dist/either.d.ts:173

___

### DecorateAsyncLegacy

▸ **DecorateAsyncLegacy**(): [`LegacyMethodDecorator`](either._internal_.md#legacymethoddecorator)

#### Returns

[`LegacyMethodDecorator`](either._internal_.md#legacymethoddecorator)

#### Defined in

dist/either.d.ts:171

___

### DecorateLegacy

▸ **DecorateLegacy**(): [`LegacyMethodDecorator`](either._internal_.md#legacymethoddecorator)

#### Returns

[`LegacyMethodDecorator`](either._internal_.md#legacymethoddecorator)

#### Defined in

dist/either.d.ts:170

___

### aggregateError

▸ **aggregateError**\<`T`\>(`values`, `message`): `AggregateError` \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`Either`](either.md#either)\<`T`, `unknown`\>[] |
| `message` | `undefined` \| `string` \| (`lefts`: `T`[]) => `undefined` \| `string` |

#### Returns

`AggregateError` \| `undefined`

#### Defined in

dist/either.d.ts:166

___

### catchAsync

▸ **catchAsync**\<`L`, `R`\>(`method`, `mapCaught?`): `Promise`\<[`Either`](either.md#either)\<`L`, `R`\>\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | () => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Either`](either.md#either)\<`L`, `R`\>\> |
| `mapCaught?` | [`MapCaught`](either._internal_.md#mapcaught)\<`L`\> |

#### Returns

`Promise`\<[`Either`](either.md#either)\<`L`, `R`\>\>

#### Defined in

dist/either.d.ts:177

___

### catchSync

▸ **catchSync**\<`L`, `R`\>(`method`, `mapCaught?`): [`Either`](either.md#either)\<`L`, `R`\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | () => [`Either`](either.md#either)\<`L`, `R`\> |
| `mapCaught?` | [`MapCaught`](either._internal_.md#mapcaught)\<`L`\> |

#### Returns

[`Either`](either.md#either)\<`L`, `R`\>

#### Defined in

dist/either.d.ts:176

___

### chain

▸ **chain**\<`L`, `R`, `NR`, `P`\>(`map`, `...parameters`): (`either`: [`Either`](either.md#either)\<`L`, `R`\>, ...`parameters`: `P`) => `Promise`\<[`Either`](either.md#either)\<`L`, `NR`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `L` |
| `R` | `R` |
| `NR` | `NR` |
| `P` | extends [`AnyParameters`](index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | (`value`: `R`, ...`parameters`: `P`) => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Either`](either.md#either)\<`never`, `NR`\>\> |
| `...parameters` | `P` |

#### Returns

`fn`

▸ (`either`, `...parameters`): `Promise`\<[`Either`](either.md#either)\<`L`, `NR`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Either`](either.md#either)\<`L`, `R`\> |
| `...parameters` | `P` |

##### Returns

`Promise`\<[`Either`](either.md#either)\<`L`, `NR`\>\>

#### Defined in

dist/either.d.ts:120

▸ **chain**\<`L`, `R`, `NL`, `P`\>(`map`, `...parameters`): (`either`: [`Either`](either.md#either)\<`L`, `R`\>, ...`parameters`: `P`) => `Promise`\<[`Either`](either.md#either)\<`NL` \| `L`, `R`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `L` |
| `R` | `R` |
| `NL` | `NL` |
| `P` | extends [`AnyParameters`](index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | (`value`: `R`, ...`parameters`: `P`) => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Either`](either.md#either)\<`NL`, `never`\>\> |
| `...parameters` | `P` |

#### Returns

`fn`

▸ (`either`, `...parameters`): `Promise`\<[`Either`](either.md#either)\<`NL` \| `L`, `R`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Either`](either.md#either)\<`L`, `R`\> |
| `...parameters` | `P` |

##### Returns

`Promise`\<[`Either`](either.md#either)\<`NL` \| `L`, `R`\>\>

#### Defined in

dist/either.d.ts:121

▸ **chain**\<`L`, `R`, `NL`, `NR`, `P`\>(`map`, `...parameters`): (`either`: [`Either`](either.md#either)\<`L`, `R`\>, ...`parameters`: `P`) => `Promise`\<[`Either`](either.md#either)\<`NL` \| `L`, `NR`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `L` |
| `R` | `R` |
| `NL` | `NL` |
| `NR` | `NR` |
| `P` | extends [`AnyParameters`](index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | (`value`: `R`, ...`parameters`: `P`) => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Either`](either.md#either)\<`NL`, `NR`\>\> |
| `...parameters` | `P` |

#### Returns

`fn`

▸ (`either`, `...parameters`): `Promise`\<[`Either`](either.md#either)\<`NL` \| `L`, `NR`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Either`](either.md#either)\<`L`, `R`\> |
| `...parameters` | `P` |

##### Returns

`Promise`\<[`Either`](either.md#either)\<`NL` \| `L`, `NR`\>\>

#### Defined in

dist/either.d.ts:122

___

### from

▸ **from**\<`L`, `R`\>(`right`): [`Either`](either.md#either)\<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `never` |
| `R` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | `R` |

#### Returns

[`Either`](either.md#either)\<`L`, `R`\>

#### Defined in

dist/either.d.ts:7

___

### fromJSON

▸ **fromJSON**\<`L`, `R`\>(`serialized`): [`Either`](either.md#either)\<`L`, `R`\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`SerializedEither`](either.md#serializedeither)\<`L`, `R`\> |

#### Returns

[`Either`](either.md#either)\<`L`, `R`\>

#### Defined in

dist/either.d.ts:123

___

### fromPromise

▸ **fromPromise**\<`L`, `T`\>(`promise`, `mapCaught?`): `Promise`\<[`Either`](either.md#either)\<`L`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | [`MaybePromiseLike`](index.md#maybepromiselike)\<`T`\> |
| `mapCaught?` | [`MapCaught`](either._internal_.md#mapcaught)\<`L`\> |

#### Returns

`Promise`\<[`Either`](either.md#either)\<`L`, `T`\>\>

#### Defined in

dist/either.d.ts:178

___

### fromPromiseSettledResult

▸ **fromPromiseSettledResult**\<`L`, `T`\>(`result`): [`Either`](either.md#either)\<`L`, `T`\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `PromiseSettledResult`\<`T`\> |

#### Returns

[`Either`](either.md#either)\<`L`, `T`\>

#### Defined in

dist/either.d.ts:181

___

### fromTry

▸ **fromTry**\<`L`, `T`\>(`callback`, `mapCaught?`): [`Either`](either.md#either)\<`L`, `T`\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `T` |
| `mapCaught?` | [`MapCaught`](either._internal_.md#mapcaught)\<`L`\> |

#### Returns

[`Either`](either.md#either)\<`L`, `T`\>

#### Defined in

dist/either.d.ts:179

___

### fromTryAsync

▸ **fromTryAsync**\<`L`, `R`\>(`callback`, `mapCaught?`): `Promise`\<[`Either`](either.md#either)\<`L`, `R`\>\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => [`MaybePromiseLike`](index.md#maybepromiselike)\<`R`\> |
| `mapCaught?` | [`MapCaught`](either._internal_.md#mapcaught)\<`L`\> |

#### Returns

`Promise`\<[`Either`](either.md#either)\<`L`, `R`\>\>

#### Defined in

dist/either.d.ts:180

___

### isEither

▸ **isEither**\<`L`, `R`\>(`value`): value is Either\<L, R\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Either\<L, R\>

#### Defined in

dist/either.d.ts:119

___

### isLeft

▸ **isLeft**\<`L`, `R`\>(`value`): value is Left\<L, R\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Left\<L, R\>

#### Defined in

dist/either.d.ts:117

___

### isRight

▸ **isRight**\<`L`, `R`\>(`value`): value is Right\<L, R\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Right\<L, R\>

#### Defined in

dist/either.d.ts:118

___

### left

▸ **left**\<`L`, `R`\>(`value`): [`Either`](either.md#either)\<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `never` |
| `R` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `L` |

#### Returns

[`Either`](either.md#either)\<`L`, `R`\>

#### Defined in

dist/either.d.ts:8

___

### merge

▸ **merge**\<`L1`, `R1`\>(`values`): [`Either`](either.md#either)\<`L1`, [`R1`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>] |

#### Returns

[`Either`](either.md#either)\<`L1`, [`R1`]\>

#### Defined in

dist/either.d.ts:124

▸ **merge**\<`L1`, `R1`, `L2`, `R2`\>(`values`): [`Either`](either.md#either)\<`L1` \| `L2`, [`R1`, `R2`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>] |

#### Returns

[`Either`](either.md#either)\<`L1` \| `L2`, [`R1`, `R2`]\>

#### Defined in

dist/either.d.ts:125

▸ **merge**\<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`\>(`values`): [`Either`](either.md#either)\<`L1` \| `L2` \| `L3`, [`R1`, `R2`, `R3`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |
| `L3` |
| `R3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>] |

#### Returns

[`Either`](either.md#either)\<`L1` \| `L2` \| `L3`, [`R1`, `R2`, `R3`]\>

#### Defined in

dist/either.d.ts:126

▸ **merge**\<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`\>(`values`): [`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4`, [`R1`, `R2`, `R3`, `R4`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |
| `L3` |
| `R3` |
| `L4` |
| `R4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>] |

#### Returns

[`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4`, [`R1`, `R2`, `R3`, `R4`]\>

#### Defined in

dist/either.d.ts:127

▸ **merge**\<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`, `L5`, `R5`\>(`values`): [`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5`, [`R1`, `R2`, `R3`, `R4`, `R5`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |
| `L3` |
| `R3` |
| `L4` |
| `R4` |
| `L5` |
| `R5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>, [`Either`](either.md#either)\<`L5`, `R5`\>] |

#### Returns

[`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5`, [`R1`, `R2`, `R3`, `R4`, `R5`]\>

#### Defined in

dist/either.d.ts:128

▸ **merge**\<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`, `L5`, `R5`, `L6`, `R6`\>(`values`): [`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`, [`R1`, `R2`, `R3`, `R4`, `R5`, `R6`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |
| `L3` |
| `R3` |
| `L4` |
| `R4` |
| `L5` |
| `R5` |
| `L6` |
| `R6` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>, [`Either`](either.md#either)\<`L5`, `R5`\>, [`Either`](either.md#either)\<`L6`, `R6`\>] |

#### Returns

[`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`, [`R1`, `R2`, `R3`, `R4`, `R5`, `R6`]\>

#### Defined in

dist/either.d.ts:135

▸ **merge**\<`L`, `R`\>(`values`): [`Either`](either.md#either)\<`L`, `R`[]\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`Either`](either.md#either)\<`L`, `R`\>[] |

#### Returns

[`Either`](either.md#either)\<`L`, `R`[]\>

#### Defined in

dist/either.d.ts:143

___

### mergeInMany

▸ **mergeInMany**\<`L1`, `R1`\>(`values`): [`Either`](either.md#either)\<`L1`[], [`R1`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>] |

#### Returns

[`Either`](either.md#either)\<`L1`[], [`R1`]\>

#### Defined in

dist/either.d.ts:146

▸ **mergeInMany**\<`L1`, `R1`, `L2`, `R2`\>(`values`): [`Either`](either.md#either)\<(`L1` \| `L2`)[], [`R1`, `R2`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>] |

#### Returns

[`Either`](either.md#either)\<(`L1` \| `L2`)[], [`R1`, `R2`]\>

#### Defined in

dist/either.d.ts:147

▸ **mergeInMany**\<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`\>(`values`): [`Either`](either.md#either)\<(`L1` \| `L2` \| `L3`)[], [`R1`, `R2`, `R3`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |
| `L3` |
| `R3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>] |

#### Returns

[`Either`](either.md#either)\<(`L1` \| `L2` \| `L3`)[], [`R1`, `R2`, `R3`]\>

#### Defined in

dist/either.d.ts:148

▸ **mergeInMany**\<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`\>(`values`): [`Either`](either.md#either)\<(`L1` \| `L2` \| `L3` \| `L4`)[], [`R1`, `R2`, `R3`, `R4`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |
| `L3` |
| `R3` |
| `L4` |
| `R4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>] |

#### Returns

[`Either`](either.md#either)\<(`L1` \| `L2` \| `L3` \| `L4`)[], [`R1`, `R2`, `R3`, `R4`]\>

#### Defined in

dist/either.d.ts:149

▸ **mergeInMany**\<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`, `L5`, `R5`\>(`values`): [`Either`](either.md#either)\<(`L1` \| `L2` \| `L3` \| `L4` \| `L5`)[], [`R1`, `R2`, `R3`, `R4`, `R5`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |
| `L3` |
| `R3` |
| `L4` |
| `R4` |
| `L5` |
| `R5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>, [`Either`](either.md#either)\<`L5`, `R5`\>] |

#### Returns

[`Either`](either.md#either)\<(`L1` \| `L2` \| `L3` \| `L4` \| `L5`)[], [`R1`, `R2`, `R3`, `R4`, `R5`]\>

#### Defined in

dist/either.d.ts:150

▸ **mergeInMany**\<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`, `L5`, `R5`, `L6`, `R6`\>(`values`): [`Either`](either.md#either)\<(`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`)[], [`R1`, `R2`, `R3`, `R4`, `R5`, `R6`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |
| `L3` |
| `R3` |
| `L4` |
| `R4` |
| `L5` |
| `R5` |
| `L6` |
| `R6` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>, [`Either`](either.md#either)\<`L5`, `R5`\>, [`Either`](either.md#either)\<`L6`, `R6`\>] |

#### Returns

[`Either`](either.md#either)\<(`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`)[], [`R1`, `R2`, `R3`, `R4`, `R5`, `R6`]\>

#### Defined in

dist/either.d.ts:157

▸ **mergeInMany**\<`L`, `R`\>(`values`): [`Either`](either.md#either)\<`L`[], `R`[]\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`Either`](either.md#either)\<`L`, `R`\>[] |

#### Returns

[`Either`](either.md#either)\<`L`[], `R`[]\>

#### Defined in

dist/either.d.ts:165

___

### mergeInOne

▸ **mergeInOne**\<`L1`, `R1`\>(`values`): [`Either`](either.md#either)\<`L1`, [`R1`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>] |

#### Returns

[`Either`](either.md#either)\<`L1`, [`R1`]\>

#### Defined in

dist/either.d.ts:124

▸ **mergeInOne**\<`L1`, `R1`, `L2`, `R2`\>(`values`): [`Either`](either.md#either)\<`L1` \| `L2`, [`R1`, `R2`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>] |

#### Returns

[`Either`](either.md#either)\<`L1` \| `L2`, [`R1`, `R2`]\>

#### Defined in

dist/either.d.ts:125

▸ **mergeInOne**\<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`\>(`values`): [`Either`](either.md#either)\<`L1` \| `L2` \| `L3`, [`R1`, `R2`, `R3`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |
| `L3` |
| `R3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>] |

#### Returns

[`Either`](either.md#either)\<`L1` \| `L2` \| `L3`, [`R1`, `R2`, `R3`]\>

#### Defined in

dist/either.d.ts:126

▸ **mergeInOne**\<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`\>(`values`): [`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4`, [`R1`, `R2`, `R3`, `R4`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |
| `L3` |
| `R3` |
| `L4` |
| `R4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>] |

#### Returns

[`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4`, [`R1`, `R2`, `R3`, `R4`]\>

#### Defined in

dist/either.d.ts:127

▸ **mergeInOne**\<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`, `L5`, `R5`\>(`values`): [`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5`, [`R1`, `R2`, `R3`, `R4`, `R5`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |
| `L3` |
| `R3` |
| `L4` |
| `R4` |
| `L5` |
| `R5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>, [`Either`](either.md#either)\<`L5`, `R5`\>] |

#### Returns

[`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5`, [`R1`, `R2`, `R3`, `R4`, `R5`]\>

#### Defined in

dist/either.d.ts:128

▸ **mergeInOne**\<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`, `L5`, `R5`, `L6`, `R6`\>(`values`): [`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`, [`R1`, `R2`, `R3`, `R4`, `R5`, `R6`]\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `R1` |
| `L2` |
| `R2` |
| `L3` |
| `R3` |
| `L4` |
| `R4` |
| `L5` |
| `R5` |
| `L6` |
| `R6` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>, [`Either`](either.md#either)\<`L5`, `R5`\>, [`Either`](either.md#either)\<`L6`, `R6`\>] |

#### Returns

[`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`, [`R1`, `R2`, `R3`, `R4`, `R5`, `R6`]\>

#### Defined in

dist/either.d.ts:135

▸ **mergeInOne**\<`L`, `R`\>(`values`): [`Either`](either.md#either)\<`L`, `R`[]\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`Either`](either.md#either)\<`L`, `R`\>[] |

#### Returns

[`Either`](either.md#either)\<`L`, `R`[]\>

#### Defined in

dist/either.d.ts:143

___

### right

▸ **right**\<`L`, `R`\>(`right`): [`Either`](either.md#either)\<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `never` |
| `R` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | `R` |

#### Returns

[`Either`](either.md#either)\<`L`, `R`\>

#### Defined in

dist/either.d.ts:7

___

### wrap

▸ **wrap**\<`L`, `R`, `P`\>(`method`, `mapCaught?`): (`this`: `any`, ...`parameters`: `P`) => [`Either`](either.md#either)\<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `L` |
| `R` | `R` |
| `P` | extends [`AnyParameters`](index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | (...`parameters`: `P`) => [`Either`](either.md#either)\<`L`, `R`\> |
| `mapCaught?` | [`MapCaught`](either._internal_.md#mapcaught)\<`L`\> |

#### Returns

`fn`

▸ (`this`, `...parameters`): [`Either`](either.md#either)\<`L`, `R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `...parameters` | `P` |

##### Returns

[`Either`](either.md#either)\<`L`, `R`\>

#### Defined in

dist/either.d.ts:174

___

### wrapAsync

▸ **wrapAsync**\<`L`, `R`, `P`\>(`method`): (`this`: `any`, ...`parameters`: `P`) => `Promise`\<[`Either`](either.md#either)\<`L`, `R`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `L` |
| `R` | `R` |
| `P` | extends [`AnyParameters`](index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | (...`parameters`: `P`) => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Either`](either.md#either)\<`L`, `R`\>\> |

#### Returns

`fn`

▸ (`this`, `...parameters`): `Promise`\<[`Either`](either.md#either)\<`L`, `R`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `...parameters` | `P` |

##### Returns

`Promise`\<[`Either`](either.md#either)\<`L`, `R`\>\>

#### Defined in

dist/either.d.ts:175
