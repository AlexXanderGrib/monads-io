[Package](../README.md) / [Modules](../modules.md) / index

# Module: index

## Table of contents

### Modules

- [\<internal\>](index._internal_.md)

### Classes

- [DecorationError](../classes/index.DecorationError.md)
- [DeserializationError](../classes/index.DeserializationError.md)
- [InvalidStateError](../classes/index.InvalidStateError.md)
- [UnwrapCustomError](../classes/index.UnwrapCustomError.md)

### Interfaces

- [Alternative](../interfaces/index.Alternative.md)
- [Applicative](../interfaces/index.Applicative.md)
- [AsyncMonad](../interfaces/index.AsyncMonad.md)
- [Container](../interfaces/index.Container.md)
- [Functor](../interfaces/index.Functor.md)
- [Monad](../interfaces/index.Monad.md)

### Type Aliases

- [AnyParameters](index.md#anyparameters)
- [Either](index.md#either)
- [Identity](index.md#identity)
- [Maybe](index.md#maybe)
- [MaybePromise](index.md#maybepromise)
- [MaybePromiseLike](index.md#maybepromiselike)
- [Nullable](index.md#nullable)
- [Pair](index.md#pair)
- [SerializedEither](index.md#serializedeither)
- [SerializedMaybe](index.md#serializedmaybe)

### Variables

- [Either](index.md#either-1)
- [Identity](index.md#identity-1)
- [Maybe](index.md#maybe-1)

### Functions

- [bind](index.md#bind)
- [combine](index.md#combine)
- [identity](index.md#identity-2)
- [noop](index.md#noop)
- [throwValue](index.md#throwvalue)
- [unwrap](index.md#unwrap)

## Type Aliases

### AnyParameters

Ƭ **AnyParameters**: readonly `unknown`[]

#### Defined in

dist/types.d.ts:5

___

### Either

Ƭ **Either**\<`L`, `R`\>: [`Either`](either.md#either)\<`L`, `R`\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Defined in

dist/index.d.ts:2

dist/index.d.ts:7

___

### Identity

Ƭ **Identity**\<`T`\>: [`Identity`](../classes/identity.Identity.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/index.d.ts:372

dist/index.d.ts:373

___

### Maybe

Ƭ **Maybe**\<`T`\>: [`Maybe`](maybe.md#maybe)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/index.d.ts:203

dist/index.d.ts:208

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

Ƭ **SerializedEither**\<`L`, `R`\>: [`SerializedEither`](either.md#serializedeither)\<`L`, `R`\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Defined in

dist/index.d.ts:3

___

### SerializedMaybe

Ƭ **SerializedMaybe**\<`T`\>: [`SerializedMaybe`](maybe.md#serializedmaybe)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/index.d.ts:204

## Variables

### Either

• **Either**: `Readonly`\<\{ `aggregateError`: \<T\>(`values`: [`Either`](either.md#either)\<`T`, `unknown`\>[], `message`: `undefined` \| `string` \| (`lefts`: `T`[]) => `undefined` \| `string`) => `AggregateError` \| `undefined` ; `catch`: \<L, R\>(`method`: () => [`Either`](either.md#either)\<`L`, `R`\>, `mapCaught?`: [`MapCaught`](either._internal_.md#mapcaught)\<`L`\>) => [`Either`](either.md#either)\<`L`, `R`\> ; `catchAsync`: \<L, R\>(`method`: () => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Either`](either.md#either)\<`L`, `R`\>\>, `mapCaught?`: [`MapCaught`](either._internal_.md#mapcaught)\<`L`\>) => `Promise`\<[`Either`](either.md#either)\<`L`, `R`\>\> ; `chain`: \<L, R, NR, P\>(`map`: (`value`: `R`, ...`parameters`: `P`) => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Either`](either.md#either)\<`never`, `NR`\>\>, ...`parameters`: `P`) => (`either`: [`Either`](either.md#either)\<`L`, `R`\>, ...`parameters`: `P`) => `Promise`\<[`Either`](either.md#either)\<`L`, `NR`\>\>\<L, R, NL, P\>(`map`: (`value`: `R`, ...`parameters`: `P`) => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Either`](either.md#either)\<`NL`, `never`\>\>, ...`parameters`: `P`) => (`either`: [`Either`](either.md#either)\<`L`, `R`\>, ...`parameters`: `P`) => `Promise`\<[`Either`](either.md#either)\<`NL` \| `L`, `R`\>\>\<L, R, NL, NR, P\>(`map`: (`value`: `R`, ...`parameters`: `P`) => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Either`](either.md#either)\<`NL`, `NR`\>\>, ...`parameters`: `P`) => (`either`: [`Either`](either.md#either)\<`L`, `R`\>, ...`parameters`: `P`) => `Promise`\<[`Either`](either.md#either)\<`NL` \| `L`, `NR`\>\> ; `from`: \<L, R\>(`right`: `R`) => [`Either`](either.md#either)\<`L`, `R`\> ; `fromJSON`: \<L, R\>(`serialized`: [`SerializedEither`](either.md#serializedeither)\<`L`, `R`\>) => [`Either`](either.md#either)\<`L`, `R`\> ; `fromMaybe`: \<L, R\>(`maybe`: [`Maybe`](maybe.md#maybe)\<`R`\>, `leftValue`: `L`) => [`Either`](either.md#either)\<`L`, `R`\> ; `fromPromise`: \<L, T\>(`promise`: [`MaybePromiseLike`](index.md#maybepromiselike)\<`T`\>, `mapCaught?`: [`MapCaught`](either._internal_.md#mapcaught)\<`L`\>) => `Promise`\<[`Either`](either.md#either)\<`L`, `T`\>\> ; `fromPromiseSettledResult`: \<L, T\>(`result`: `PromiseSettledResult`\<`T`\>) => [`Either`](either.md#either)\<`L`, `T`\> ; `fromTry`: \<L, T\>(`callback`: () => `T`, `mapCaught?`: [`MapCaught`](either._internal_.md#mapcaught)\<`L`\>) => [`Either`](either.md#either)\<`L`, `T`\> ; `fromTryAsync`: \<L, R\>(`callback`: () => [`MaybePromiseLike`](index.md#maybepromiselike)\<`R`\>, `mapCaught?`: [`MapCaught`](either._internal_.md#mapcaught)\<`L`\>) => `Promise`\<[`Either`](either.md#either)\<`L`, `R`\>\> ; `isEither`: \<L, R\>(`value`: `unknown`) => value is Either\<L, R\> ; `isLeft`: \<L_2, R_3\>(`value`: `unknown`) => value is Object ; `isRight`: \<L_1, R_1\>(`value`: `unknown`) => value is Object ; `left`: \<L, R\>(`value`: `L`) => [`Either`](either.md#either)\<`L`, `R`\> ; `merge`: \<L1, R1\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>]) => [`Either`](either.md#either)\<`L1`, [`R1`]\>\<L1, R1, L2, R2\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>]) => [`Either`](either.md#either)\<`L1` \| `L2`, [`R1`, `R2`]\>\<L1, R1, L2, R2, L3, R3\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>]) => [`Either`](either.md#either)\<`L1` \| `L2` \| `L3`, [`R1`, `R2`, `R3`]\>\<L1, R1, L2, R2, L3, R3, L4, R4\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>]) => [`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4`, [`R1`, `R2`, `R3`, `R4`]\>\<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>, [`Either`](either.md#either)\<`L5`, `R5`\>]) => [`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5`, [`R1`, `R2`, `R3`, `R4`, `R5`]\>\<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5, L6, R6\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>, [`Either`](either.md#either)\<`L5`, `R5`\>, [`Either`](either.md#either)\<`L6`, `R6`\>]) => [`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`, [`R1`, `R2`, `R3`, `R4`, `R5`, `R6`]\>\<L, R\>(`values`: [`Either`](either.md#either)\<`L`, `R`\>[]) => [`Either`](either.md#either)\<`L`, `R`[]\> ; `mergeInMany`: \<L1, R1\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>]) => [`Either`](either.md#either)\<`L1`[], [`R1`]\>\<L1, R1, L2, R2\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>]) => [`Either`](either.md#either)\<(`L1` \| `L2`)[], [`R1`, `R2`]\>\<L1, R1, L2, R2, L3, R3\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>]) => [`Either`](either.md#either)\<(`L1` \| `L2` \| `L3`)[], [`R1`, `R2`, `R3`]\>\<L1, R1, L2, R2, L3, R3, L4, R4\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>]) => [`Either`](either.md#either)\<(`L1` \| `L2` \| `L3` \| `L4`)[], [`R1`, `R2`, `R3`, `R4`]\>\<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>, [`Either`](either.md#either)\<`L5`, `R5`\>]) => [`Either`](either.md#either)\<(`L1` \| `L2` \| `L3` \| `L4` \| `L5`)[], [`R1`, `R2`, `R3`, `R4`, `R5`]\>\<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5, L6, R6\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>, [`Either`](either.md#either)\<`L5`, `R5`\>, [`Either`](either.md#either)\<`L6`, `R6`\>]) => [`Either`](either.md#either)\<(`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`)[], [`R1`, `R2`, `R3`, `R4`, `R5`, `R6`]\>\<L, R\>(`values`: [`Either`](either.md#either)\<`L`, `R`\>[]) => [`Either`](either.md#either)\<`L`[], `R`[]\> ; `mergeInOne`: \<L1, R1\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>]) => [`Either`](either.md#either)\<`L1`, [`R1`]\>\<L1, R1, L2, R2\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>]) => [`Either`](either.md#either)\<`L1` \| `L2`, [`R1`, `R2`]\>\<L1, R1, L2, R2, L3, R3\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>]) => [`Either`](either.md#either)\<`L1` \| `L2` \| `L3`, [`R1`, `R2`, `R3`]\>\<L1, R1, L2, R2, L3, R3, L4, R4\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>]) => [`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4`, [`R1`, `R2`, `R3`, `R4`]\>\<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>, [`Either`](either.md#either)\<`L5`, `R5`\>]) => [`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5`, [`R1`, `R2`, `R3`, `R4`, `R5`]\>\<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5, L6, R6\>(`values`: [[`Either`](either.md#either)\<`L1`, `R1`\>, [`Either`](either.md#either)\<`L2`, `R2`\>, [`Either`](either.md#either)\<`L3`, `R3`\>, [`Either`](either.md#either)\<`L4`, `R4`\>, [`Either`](either.md#either)\<`L5`, `R5`\>, [`Either`](either.md#either)\<`L6`, `R6`\>]) => [`Either`](either.md#either)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`, [`R1`, `R2`, `R3`, `R4`, `R5`, `R6`]\>\<L, R\>(`values`: [`Either`](either.md#either)\<`L`, `R`\>[]) => [`Either`](either.md#either)\<`L`, `R`[]\> ; `right`: \<L, R\>(`right`: `R`) => [`Either`](either.md#either)\<`L`, `R`\> ; `wrap`: \<L, R, P\>(`method`: (...`parameters`: `P`) => [`Either`](either.md#either)\<`L`, `R`\>, `mapCaught?`: [`MapCaught`](either._internal_.md#mapcaught)\<`L`\>) => (`this`: `any`, ...`parameters`: `P`) => [`Either`](either.md#either)\<`L`, `R`\> ; `wrapAsync`: \<L, R, P\>(`method`: (...`parameters`: `P`) => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Either`](either.md#either)\<`L`, `R`\>\>) => (`this`: `any`, ...`parameters`: `P`) => `Promise`\<[`Either`](either.md#either)\<`L`, `R`\>\>  }\>

**`Deprecated`**

This is created only for compatibility with old nodejs. This is not tree-shakable. Prefer importing from `monads-io/either`

#### Defined in

dist/index.d.ts:2

dist/index.d.ts:7

___

### Identity

• **Identity**: `Readonly`\<\{ `chain`: \<A, B, P\>(`map`: (`value`: `A`, ...`parameters`: `P`) => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Identity`](../classes/identity.Identity.md)\<`B`\>\>, ...`parameters`: `P`) => (`either`: [`Identity`](../classes/identity.Identity.md)\<`A`\>) => `Promise`\<[`Identity`](../classes/identity.Identity.md)\<`B`\>\> ; `from`: \<T\>(`value`: `T`) => [`Identity`](../classes/identity.Identity.md)\<`T`\> ; `isIdentity`: \<T\>(`value`: `unknown`) => value is Identity\<T\> ; `merge`: \<V1\>(`values`: [[`Identity`](../classes/identity.Identity.md)\<`V1`\>]) => [`Identity`](../classes/identity.Identity.md)\<[`V1`]\>\<V1, V2\>(`values`: [[`Identity`](../classes/identity.Identity.md)\<`V1`\>, [`Identity`](../classes/identity.Identity.md)\<`V2`\>]) => [`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`]\>\<V1, V2, V3\>(`values`: [[`Identity`](../classes/identity.Identity.md)\<`V1`\>, [`Identity`](../classes/identity.Identity.md)\<`V2`\>, [`Identity`](../classes/identity.Identity.md)\<`V3`\>]) => [`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`, `V3`]\>\<V1, V2, V3, V4\>(`values`: [[`Identity`](../classes/identity.Identity.md)\<`V1`\>, [`Identity`](../classes/identity.Identity.md)\<`V2`\>, [`Identity`](../classes/identity.Identity.md)\<`V3`\>, [`Identity`](../classes/identity.Identity.md)\<`V4`\>]) => [`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`, `V3`, `V4`]\>\<V1, V2, V3, V4, V5\>(`values`: [[`Identity`](../classes/identity.Identity.md)\<`V1`\>, [`Identity`](../classes/identity.Identity.md)\<`V2`\>, [`Identity`](../classes/identity.Identity.md)\<`V3`\>, [`Identity`](../classes/identity.Identity.md)\<`V4`\>, [`Identity`](../classes/identity.Identity.md)\<`V5`\>]) => [`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`, `V3`, `V4`, `V5`]\>\<V1, V2, V3, V4, V5, V6\>(`values`: [[`Identity`](../classes/identity.Identity.md)\<`V1`\>, [`Identity`](../classes/identity.Identity.md)\<`V2`\>, [`Identity`](../classes/identity.Identity.md)\<`V3`\>, [`Identity`](../classes/identity.Identity.md)\<`V4`\>, [`Identity`](../classes/identity.Identity.md)\<`V5`\>, [`Identity`](../classes/identity.Identity.md)\<`V6`\>]) => [`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`, `V3`, `V4`, `V5`, `V6`]\>\<T\>(`values`: [`Identity`](../classes/identity.Identity.md)\<`T`\>[]) => [`Identity`](../classes/identity.Identity.md)\<`T`[]\>  }\>

#### Defined in

dist/index.d.ts:372

dist/index.d.ts:373

___

### Maybe

• **Maybe**: `Readonly`\<\{ `asyncIterator`: \<T\>(`callback`: () => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Maybe`](maybe.md#maybe)\<[`MaybePromiseLike`](index.md#maybepromiselike)\<`T`\>\>\>) => `AsyncGenerator`\<`T`, `void`, `void`\> ; `chain`: \<A, B, P\>(`map`: (`v`: `A`, ...`parameters`: `P`) => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Maybe`](maybe.md#maybe)\<`B`\>\>, ...`parameters`: `P`) => (`maybe`: [`Maybe`](maybe.md#maybe)\<`A`\>) => `Promise`\<[`Maybe`](maybe.md#maybe)\<`B`\>\> ; `filterMap`: \<A, B\>(`iterable`: `Iterable`\<`A`\>, `filterMap`: (`value`: `A`, `index`: `number`) => [`Maybe`](maybe.md#maybe)\<`B`\>) => `Generator`\<`B`, `void`, `void`\> ; `from`: \<T\>(`value`: `T`) => [`Maybe`](maybe.md#maybe)\<`T`\> ; `fromEitherLeft`: \<L\>(`either`: [`Either`](either.md#either)\<`L`, `unknown`\>) => [`Maybe`](maybe.md#maybe)\<`L`\> ; `fromEitherRight`: \<R\>(`either`: [`Either`](either.md#either)\<`unknown`, `R`\>) => [`Maybe`](maybe.md#maybe)\<`R`\> ; `fromJSON`: \<T\>(`serialized`: [`SerializedMaybe`](maybe.md#serializedmaybe)\<`T`\>) => [`Maybe`](maybe.md#maybe)\<`T`\> ; `fromNullable`: \<T\>(`value`: [`Nullable`](index.md#nullable)\<`T`\>) => [`Maybe`](maybe.md#maybe)\<`T`\> ; `isJust`: \<T_1\>(`value`: `unknown`) => value is Object ; `isMaybe`: \<T\>(`value`: `unknown`) => value is Maybe\<T\> ; `isNone`: \<T_10\>(`value`: `unknown`) => value is Object ; `iterator`: \<T\>(`callback`: () => [`Maybe`](maybe.md#maybe)\<`T`\>) => `Generator`\<`T`, `void`, `void`\> ; `just`: \<T\>(`value`: `T`) => [`Maybe`](maybe.md#maybe)\<`T`\> ; `merge`: \<V1\>(`values`: [[`Maybe`](maybe.md#maybe)\<`V1`\>]) => [`Maybe`](maybe.md#maybe)\<[`V1`]\>\<V1, V2\>(`values`: [[`Maybe`](maybe.md#maybe)\<`V1`\>, [`Maybe`](maybe.md#maybe)\<`V2`\>]) => [`Maybe`](maybe.md#maybe)\<[`V1`, `V2`]\>\<V1, V2, V3\>(`values`: [[`Maybe`](maybe.md#maybe)\<`V1`\>, [`Maybe`](maybe.md#maybe)\<`V2`\>, [`Maybe`](maybe.md#maybe)\<`V3`\>]) => [`Maybe`](maybe.md#maybe)\<[`V1`, `V2`, `V3`]\>\<V1, V2, V3, V4\>(`values`: [[`Maybe`](maybe.md#maybe)\<`V1`\>, [`Maybe`](maybe.md#maybe)\<`V2`\>, [`Maybe`](maybe.md#maybe)\<`V3`\>, [`Maybe`](maybe.md#maybe)\<`V4`\>]) => [`Maybe`](maybe.md#maybe)\<[`V1`, `V2`, `V3`, `V4`]\>\<V1, V2, V3, V4, V5\>(`values`: [[`Maybe`](maybe.md#maybe)\<`V1`\>, [`Maybe`](maybe.md#maybe)\<`V2`\>, [`Maybe`](maybe.md#maybe)\<`V3`\>, [`Maybe`](maybe.md#maybe)\<`V4`\>, [`Maybe`](maybe.md#maybe)\<`V5`\>]) => [`Maybe`](maybe.md#maybe)\<[`V1`, `V2`, `V3`, `V4`, `V5`]\>\<V1, V2, V3, V4, V5, V6\>(`values`: [[`Maybe`](maybe.md#maybe)\<`V1`\>, [`Maybe`](maybe.md#maybe)\<`V2`\>, [`Maybe`](maybe.md#maybe)\<`V3`\>, [`Maybe`](maybe.md#maybe)\<`V4`\>, [`Maybe`](maybe.md#maybe)\<`V5`\>, [`Maybe`](maybe.md#maybe)\<`V6`\>]) => [`Maybe`](maybe.md#maybe)\<[`V1`, `V2`, `V3`, `V4`, `V5`, `V6`]\>\<T\>(`values`: [`Maybe`](maybe.md#maybe)\<`T`\>[]) => [`Maybe`](maybe.md#maybe)\<`T`[]\> ; `none`: \<T\>() => [`Maybe`](maybe.md#maybe)\<`T`\>  }\>

**`Deprecated`**

This is created only for compatibility with old nodejs. This is not tree-shakable. Prefer importing from `monads-io/maybe`

#### Defined in

dist/index.d.ts:203

dist/index.d.ts:208

## Functions

### bind

▸ **bind**\<`A`, `B`, `P`\>(`map`, `parameters`): (`input`: `A`) => `B`

Binds parameters to mapper function

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](index.md#anyparameters) |

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
| `container` | [`Container`](../interfaces/index.Container.md)\<`T`\> |

#### Returns

`T`

#### Defined in

dist/runtime.d.ts:47
