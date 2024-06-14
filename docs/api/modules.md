[Package](README.md) / Exports

# Package

## Table of contents

### Modules

- [\<internal\>](modules/internal_.md)

### Classes

- [DecorationError](classes/DecorationError.md)
- [DeserializationError](classes/DeserializationError.md)
- [InvalidStateError](classes/InvalidStateError.md)
- [UnwrapCustomError](classes/UnwrapCustomError.md)

### Interfaces

- [Alternative](interfaces/Alternative.md)
- [Applicative](interfaces/Applicative.md)
- [AsyncMonad](interfaces/AsyncMonad.md)
- [Container](interfaces/Container.md)
- [Functor](interfaces/Functor.md)
- [Monad](interfaces/Monad.md)

### Type Aliases

- [AnyParameters](modules.md#anyparameters)
- [Either](modules.md#either)
- [Maybe](modules.md#maybe)
- [MaybePromise](modules.md#maybepromise)
- [MaybePromiseLike](modules.md#maybepromiselike)
- [Nullable](modules.md#nullable)
- [Pair](modules.md#pair)
- [SerializedEither](modules.md#serializedeither)
- [SerializedMaybe](modules.md#serializedmaybe)

### Variables

- [Either](modules.md#either-1)
- [Maybe](modules.md#maybe-1)

### Functions

- [bind](modules.md#bind)
- [combine](modules.md#combine)
- [identity](modules.md#identity)
- [noop](modules.md#noop)
- [throwValue](modules.md#throwvalue)
- [unwrap](modules.md#unwrap)

## Type Aliases

### AnyParameters

Ƭ **AnyParameters**: readonly `unknown`[]

#### Defined in

dist/types.d.ts:5

___

### Either

Ƭ **Either**\<`L`, `R`\>: [`Either`](modules/internal_.md#either)\<`L`, `R`\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Defined in

dist/index.d.ts:2

dist/index.d.ts:7

___

### Maybe

Ƭ **Maybe**\<`T`\>: [`Maybe`](modules/internal_.md#maybe)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/index.d.ts:28

dist/index.d.ts:33

___

### MaybePromise

Ƭ **MaybePromise**\<`T`\>: `T` \| `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/types.d.ts:1

___

### MaybePromiseLike

Ƭ **MaybePromiseLike**\<`T`\>: `T` \| `PromiseLike`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/types.d.ts:2

___

### Nullable

Ƭ **Nullable**\<`T`\>: `T` \| ``null`` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/types.d.ts:3

___

### Pair

Ƭ **Pair**\<`A`, `B`\>: [first: A, second: B]

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Defined in

dist/types.d.ts:4

___

### SerializedEither

Ƭ **SerializedEither**\<`L`, `R`\>: [`SerializedEither`](modules/internal_.md#serializedeither)\<`L`, `R`\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Defined in

dist/index.d.ts:3

___

### SerializedMaybe

Ƭ **SerializedMaybe**\<`T`\>: [`SerializedMaybe`](modules/internal_.md#serializedmaybe)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/index.d.ts:29

## Variables

### Either

• **Either**: `Readonly`\<\{ `aggregateError`: \<T\>(`values`: [`Either`](modules/internal_.md#either)\<`T`, `unknown`\>[], `message`: `undefined` \| `string` \| (`lefts`: `T`[]) => `undefined` \| `string`) => `AggregateError` \| `undefined` ; `catch`: \<L, R\>(`method`: () => [`Either`](modules/internal_.md#either)\<`L`, `R`\>) => [`Either`](modules/internal_.md#either)\<`L`, `R`\> ; `catchAsync`: \<L, R\>(`method`: () => [`MaybePromiseLike`](modules.md#maybepromiselike)\<[`Either`](modules/internal_.md#either)\<`L`, `R`\>\>) => `Promise`\<[`Either`](modules/internal_.md#either)\<`L`, `R`\>\> ; `chain`: \<L, R, NR, P\>(`map`: (`value`: `R`, ...`parameters`: `P`) => [`MaybePromiseLike`](modules.md#maybepromiselike)\<[`Either`](modules/internal_.md#either)\<`never`, `NR`\>\>, ...`parameters`: `P`) => (`either`: [`Either`](modules/internal_.md#either)\<`L`, `R`\>, ...`parameters`: `P`) => `Promise`\<[`Either`](modules/internal_.md#either)\<`L`, `NR`\>\>\<L, R, NL, P\>(`map`: (`value`: `R`, ...`parameters`: `P`) => [`MaybePromiseLike`](modules.md#maybepromiselike)\<[`Either`](modules/internal_.md#either)\<`NL`, `never`\>\>, ...`parameters`: `P`) => (`either`: [`Either`](modules/internal_.md#either)\<`L`, `R`\>, ...`parameters`: `P`) => `Promise`\<[`Either`](modules/internal_.md#either)\<`NL` \| `L`, `R`\>\>\<L, R, NL, NR, P\>(`map`: (`value`: `R`, ...`parameters`: `P`) => [`MaybePromiseLike`](modules.md#maybepromiselike)\<[`Either`](modules/internal_.md#either)\<`NL`, `NR`\>\>, ...`parameters`: `P`) => (`either`: [`Either`](modules/internal_.md#either)\<`L`, `R`\>, ...`parameters`: `P`) => `Promise`\<[`Either`](modules/internal_.md#either)\<`NL` \| `L`, `NR`\>\> ; `fromJSON`: \<L, R\>(`serialized`: [`SerializedEither`](modules/internal_.md#serializedeither)\<`L`, `R`\>) => [`Either`](modules/internal_.md#either)\<`L`, `R`\> ; `fromMaybe`: \<L, R\>(`maybe`: [`Maybe`](modules/internal_.md#maybe)\<`R`\>, `leftValue`: `L`) => [`Either`](modules/internal_.md#either)\<`L`, `R`\> ; `fromPromise`: \<L, T\>(`promise`: [`MaybePromiseLike`](modules.md#maybepromiselike)\<`T`\>) => `Promise`\<[`Either`](modules/internal_.md#either)\<`L`, `T`\>\> ; `fromPromiseSettledResult`: \<L, T\>(`result`: `PromiseSettledResult`\<`T`\>) => [`Either`](modules/internal_.md#either)\<`L`, `T`\> ; `fromTry`: \<L, T\>(`callback`: () => `T`) => [`Either`](modules/internal_.md#either)\<`L`, `T`\> ; `fromTryAsync`: \<L, T\>(`callback`: () => [`MaybePromiseLike`](modules.md#maybepromiselike)\<`T`\>) => `Promise`\<[`Either`](modules/internal_.md#either)\<`L`, `T`\>\> ; `isEither`: \<L, R\>(`value`: `unknown`) => value is Either\<L, R\> ; `left`: \<T, R\>(`value`: `T`) => [`Either`](modules/internal_.md#either)\<`T`, `R`\> ; `merge`: \<L1, R1\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>]) => [`Either`](modules/internal_.md#either)\<`L1`, [`R1`]\>\<L1, R1, L2, R2\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>]) => [`Either`](modules/internal_.md#either)\<`L1` \| `L2`, [`R1`, `R2`]\>\<L1, R1, L2, R2, L3, R3\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>, [`Either`](modules/internal_.md#either)\<`L3`, `R3`\>]) => [`Either`](modules/internal_.md#either)\<`L1` \| `L2` \| `L3`, [`R1`, `R2`, `R3`]\>\<L1, R1, L2, R2, L3, R3, L4, R4\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>, [`Either`](modules/internal_.md#either)\<`L3`, `R3`\>, [`Either`](modules/internal_.md#either)\<`L4`, `R4`\>]) => [`Either`](modules/internal_.md#either)\<`L1` \| `L2` \| `L3` \| `L4`, [`R1`, `R2`, `R3`, `R4`]\>\<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>, [`Either`](modules/internal_.md#either)\<`L3`, `R3`\>, [`Either`](modules/internal_.md#either)\<`L4`, `R4`\>, [`Either`](modules/internal_.md#either)\<`L5`, `R5`\>]) => [`Either`](modules/internal_.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5`, [`R1`, `R2`, `R3`, `R4`, `R5`]\>\<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5, L6, R6\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>, [`Either`](modules/internal_.md#either)\<`L3`, `R3`\>, [`Either`](modules/internal_.md#either)\<`L4`, `R4`\>, [`Either`](modules/internal_.md#either)\<`L5`, `R5`\>, [`Either`](modules/internal_.md#either)\<`L6`, `R6`\>]) => [`Either`](modules/internal_.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`, [`R1`, `R2`, `R3`, `R4`, `R5`, `R6`]\>\<L, R\>(`values`: [`Either`](modules/internal_.md#either)\<`L`, `R`\>[]) => [`Either`](modules/internal_.md#either)\<`L`, `R`[]\> ; `mergeInMany`: \<L1, R1\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>]) => [`Either`](modules/internal_.md#either)\<`L1`[], [`R1`]\>\<L1, R1, L2, R2\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>]) => [`Either`](modules/internal_.md#either)\<(`L1` \| `L2`)[], [`R1`, `R2`]\>\<L1, R1, L2, R2, L3, R3\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>, [`Either`](modules/internal_.md#either)\<`L3`, `R3`\>]) => [`Either`](modules/internal_.md#either)\<(`L1` \| `L2` \| `L3`)[], [`R1`, `R2`, `R3`]\>\<L1, R1, L2, R2, L3, R3, L4, R4\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>, [`Either`](modules/internal_.md#either)\<`L3`, `R3`\>, [`Either`](modules/internal_.md#either)\<`L4`, `R4`\>]) => [`Either`](modules/internal_.md#either)\<(`L1` \| `L2` \| `L3` \| `L4`)[], [`R1`, `R2`, `R3`, `R4`]\>\<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>, [`Either`](modules/internal_.md#either)\<`L3`, `R3`\>, [`Either`](modules/internal_.md#either)\<`L4`, `R4`\>, [`Either`](modules/internal_.md#either)\<`L5`, `R5`\>]) => [`Either`](modules/internal_.md#either)\<(`L1` \| `L2` \| `L3` \| `L4` \| `L5`)[], [`R1`, `R2`, `R3`, `R4`, `R5`]\>\<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5, L6, R6\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>, [`Either`](modules/internal_.md#either)\<`L3`, `R3`\>, [`Either`](modules/internal_.md#either)\<`L4`, `R4`\>, [`Either`](modules/internal_.md#either)\<`L5`, `R5`\>, [`Either`](modules/internal_.md#either)\<`L6`, `R6`\>]) => [`Either`](modules/internal_.md#either)\<(`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`)[], [`R1`, `R2`, `R3`, `R4`, `R5`, `R6`]\>\<L, R\>(`values`: [`Either`](modules/internal_.md#either)\<`L`, `R`\>[]) => [`Either`](modules/internal_.md#either)\<`L`[], `R`[]\> ; `mergeInOne`: \<L1, R1\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>]) => [`Either`](modules/internal_.md#either)\<`L1`, [`R1`]\>\<L1, R1, L2, R2\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>]) => [`Either`](modules/internal_.md#either)\<`L1` \| `L2`, [`R1`, `R2`]\>\<L1, R1, L2, R2, L3, R3\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>, [`Either`](modules/internal_.md#either)\<`L3`, `R3`\>]) => [`Either`](modules/internal_.md#either)\<`L1` \| `L2` \| `L3`, [`R1`, `R2`, `R3`]\>\<L1, R1, L2, R2, L3, R3, L4, R4\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>, [`Either`](modules/internal_.md#either)\<`L3`, `R3`\>, [`Either`](modules/internal_.md#either)\<`L4`, `R4`\>]) => [`Either`](modules/internal_.md#either)\<`L1` \| `L2` \| `L3` \| `L4`, [`R1`, `R2`, `R3`, `R4`]\>\<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>, [`Either`](modules/internal_.md#either)\<`L3`, `R3`\>, [`Either`](modules/internal_.md#either)\<`L4`, `R4`\>, [`Either`](modules/internal_.md#either)\<`L5`, `R5`\>]) => [`Either`](modules/internal_.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5`, [`R1`, `R2`, `R3`, `R4`, `R5`]\>\<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5, L6, R6\>(`values`: [[`Either`](modules/internal_.md#either)\<`L1`, `R1`\>, [`Either`](modules/internal_.md#either)\<`L2`, `R2`\>, [`Either`](modules/internal_.md#either)\<`L3`, `R3`\>, [`Either`](modules/internal_.md#either)\<`L4`, `R4`\>, [`Either`](modules/internal_.md#either)\<`L5`, `R5`\>, [`Either`](modules/internal_.md#either)\<`L6`, `R6`\>]) => [`Either`](modules/internal_.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`, [`R1`, `R2`, `R3`, `R4`, `R5`, `R6`]\>\<L, R\>(`values`: [`Either`](modules/internal_.md#either)\<`L`, `R`\>[]) => [`Either`](modules/internal_.md#either)\<`L`, `R`[]\> ; `right`: \<L, T\>(`right`: `T`) => [`Either`](modules/internal_.md#either)\<`L`, `T`\> ; `wrap`: \<L, R, P\>(`method`: (...`parameters`: `P`) => [`Either`](modules/internal_.md#either)\<`L`, `R`\>) => (`this`: `any`, ...`parameters`: `P`) => [`Either`](modules/internal_.md#either)\<`L`, `R`\> ; `wrapAsync`: \<L, R, P\>(`method`: (...`parameters`: `P`) => [`MaybePromiseLike`](modules.md#maybepromiselike)\<[`Either`](modules/internal_.md#either)\<`L`, `R`\>\>) => (`this`: `any`, ...`parameters`: `P`) => `Promise`\<[`Either`](modules/internal_.md#either)\<`L`, `R`\>\>  }\>

**`Deprecated`**

This is created only for compatibility with old nodejs. This is not tree-shakable. Prefer importing from `monads-io/either`

#### Defined in

dist/index.d.ts:2

dist/index.d.ts:7

___

### Maybe

• **Maybe**: `Readonly`\<\{ `asyncIterator`: \<T\>(`callback`: () => [`MaybePromiseLike`](modules.md#maybepromiselike)\<[`Maybe`](modules/internal_.md#maybe)\<[`MaybePromiseLike`](modules.md#maybepromiselike)\<`T`\>\>\>) => `AsyncGenerator`\<`T`, `void`, `void`\> ; `chain`: \<A, B, P\>(`map`: (`v`: `A`, ...`parameters`: `P`) => [`MaybePromiseLike`](modules.md#maybepromiselike)\<[`Maybe`](modules/internal_.md#maybe)\<`B`\>\>, ...`parameters`: `P`) => (`maybe`: [`Maybe`](modules/internal_.md#maybe)\<`A`\>) => `Promise`\<[`Maybe`](modules/internal_.md#maybe)\<`B`\>\> ; `filterMap`: \<T, X\>(`iterable`: `Iterable`\<`T`\>, `filterMap`: (`value`: `T`, `index`: `number`) => [`Maybe`](modules/internal_.md#maybe)\<`X`\>) => `Generator`\<`X`, `void`, `void`\> ; `fromEitherLeft`: \<L\>(`either`: [`Either`](modules/internal_.md#either)\<`L`, `unknown`\>) => [`Maybe`](modules/internal_.md#maybe)\<`L`\> ; `fromEitherRight`: \<R\>(`either`: [`Either`](modules/internal_.md#either)\<`unknown`, `R`\>) => [`Maybe`](modules/internal_.md#maybe)\<`R`\> ; `fromJSON`: \<T\>(`serialized`: [`SerializedMaybe`](modules/internal_.md#serializedmaybe)\<`T`\>) => [`Maybe`](modules/internal_.md#maybe)\<`T`\> ; `fromNullable`: \<T\>(`value`: [`Nullable`](modules.md#nullable)\<`T`\>) => [`Maybe`](modules/internal_.md#maybe)\<`T`\> ; `isMaybe`: \<T\>(`value`: `unknown`) => value is Maybe\<T\> ; `iterator`: \<T\>(`callback`: () => [`Maybe`](modules/internal_.md#maybe)\<`T`\>) => `Generator`\<`T`, `void`, `void`\> ; `just`: \<T\>(`value`: `T`) => [`Maybe`](modules/internal_.md#maybe)\<`T`\> ; `merge`: \<V1\>(`values`: [[`Maybe`](modules/internal_.md#maybe)\<`V1`\>]) => [`Maybe`](modules/internal_.md#maybe)\<[`V1`]\>\<V1, V2\>(`values`: [[`Maybe`](modules/internal_.md#maybe)\<`V1`\>, [`Maybe`](modules/internal_.md#maybe)\<`V2`\>]) => [`Maybe`](modules/internal_.md#maybe)\<[`V1`, `V2`]\>\<V1, V2, V3\>(`values`: [[`Maybe`](modules/internal_.md#maybe)\<`V1`\>, [`Maybe`](modules/internal_.md#maybe)\<`V2`\>, [`Maybe`](modules/internal_.md#maybe)\<`V3`\>]) => [`Maybe`](modules/internal_.md#maybe)\<[`V1`, `V2`, `V3`]\>\<V1, V2, V3, V4\>(`values`: [[`Maybe`](modules/internal_.md#maybe)\<`V1`\>, [`Maybe`](modules/internal_.md#maybe)\<`V2`\>, [`Maybe`](modules/internal_.md#maybe)\<`V3`\>, [`Maybe`](modules/internal_.md#maybe)\<`V4`\>]) => [`Maybe`](modules/internal_.md#maybe)\<[`V1`, `V2`, `V3`, `V4`]\>\<V1, V2, V3, V4, V5\>(`values`: [[`Maybe`](modules/internal_.md#maybe)\<`V1`\>, [`Maybe`](modules/internal_.md#maybe)\<`V2`\>, [`Maybe`](modules/internal_.md#maybe)\<`V3`\>, [`Maybe`](modules/internal_.md#maybe)\<`V4`\>, [`Maybe`](modules/internal_.md#maybe)\<`V5`\>]) => [`Maybe`](modules/internal_.md#maybe)\<[`V1`, `V2`, `V3`, `V4`, `V5`]\>\<V1, V2, V3, V4, V5, V6\>(`values`: [[`Maybe`](modules/internal_.md#maybe)\<`V1`\>, [`Maybe`](modules/internal_.md#maybe)\<`V2`\>, [`Maybe`](modules/internal_.md#maybe)\<`V3`\>, [`Maybe`](modules/internal_.md#maybe)\<`V4`\>, [`Maybe`](modules/internal_.md#maybe)\<`V5`\>, [`Maybe`](modules/internal_.md#maybe)\<`V6`\>]) => [`Maybe`](modules/internal_.md#maybe)\<[`V1`, `V2`, `V3`, `V4`, `V5`, `V6`]\>\<T\>(`values`: [`Maybe`](modules/internal_.md#maybe)\<`T`\>[]) => [`Maybe`](modules/internal_.md#maybe)\<`T`[]\> ; `none`: \<T\>() => [`Maybe`](modules/internal_.md#maybe)\<`T`\>  }\>

**`Deprecated`**

This is created only for compatibility with old nodejs. This is not tree-shakable. Prefer importing from `monads-io/maybe`

#### Defined in

dist/index.d.ts:28

dist/index.d.ts:33

## Functions

### bind

▸ **bind**\<`A`, `B`, `P`\>(`map`, `parameters`): (`input`: `A`) => `B`

Binds parameters to mapper function

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](modules.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | (`value`: `A`, ...`parameters`: `P`) => `B` |
| `parameters` | `P` |

#### Returns

`fn`

▸ (`input`): `B`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `A` |

##### Returns

`B`

**`Export`**

#### Defined in

dist/runtime.d.ts:33

___

### combine

▸ **combine**\<`A`, `B`, `C`\>(`map1`, `map2`): (`value`: `A`) => `C`

returns `map2(map1(value))`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map1` | (`value`: `A`) => `B` |
| `map2` | (`value`: `B`) => `C` |

#### Returns

`fn`

▸ (`value`): `C`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `A` |

##### Returns

`C`

**`Export`**

#### Defined in

dist/runtime.d.ts:46

___

### identity

▸ **identity**\<`T`\>(`value`): `T`

Returns input

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`T`

**`Export`**

#### Defined in

dist/runtime.d.ts:15

___

### noop

▸ **noop**(): `undefined`

Do nothing, return `undefined`

#### Returns

`undefined`

**`Export`**

#### Defined in

dist/runtime.d.ts:7

___

### throwValue

▸ **throwValue**(`value`): `never`

Throws input

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`never`

**`Export`**

#### Defined in

dist/runtime.d.ts:21

___

### unwrap

▸ **unwrap**\<`T`\>(`container`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`Container`](interfaces/Container.md)\<`T`\> |

#### Returns

`T`

#### Defined in

dist/runtime.d.ts:47
