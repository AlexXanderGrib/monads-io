[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / catchAsync

# Function: catchAsync()

> **catchAsync**\<`L`, `R`\>(`method`, `mapCaught?`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

Defined in: [either.ts:723](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L723)

## Type Parameters

### L

`L`

### R

`R`

## Parameters

### method

() => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

### mapCaught?

[`MapCaught`](../-internal-/type-aliases/MapCaught.md)\<`L`\>

## Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>
