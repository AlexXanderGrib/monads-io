[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / fromPromise

# Function: fromPromise()

> **fromPromise**\<`L`, `T`\>(`promise`, `mapCaught?`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `T`\>\>

Defined in: [either.ts:752](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L752)

## Type Parameters

### L

`L` = `never`

### T

`T` = `never`

## Parameters

### promise

[`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`T`\>

### mapCaught?

[`MapCaught`](../type-aliases/MapCaught.md)\<`L`\>

## Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `T`\>\>
