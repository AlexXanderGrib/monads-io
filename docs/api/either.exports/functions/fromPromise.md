[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / fromPromise

# Function: fromPromise()

> **fromPromise**\<`L`, `T`\>(`promise`, `mapCaught?`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `T`\>\>

Defined in: [either.ts:731](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L731)

## Type Parameters

### L

`L` = `never`

### T

`T` = `never`

## Parameters

### promise

[`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`T`\>

### mapCaught?

[`MapCaught`](../-internal-/type-aliases/MapCaught.md)\<`L`\>

## Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `T`\>\>
