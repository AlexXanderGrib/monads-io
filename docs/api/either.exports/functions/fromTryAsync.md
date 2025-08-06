[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / fromTryAsync

# Function: fromTryAsync()

> **fromTryAsync**\<`L`, `R`\>(`callback`, `mapCaught`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

Defined in: [either.ts:749](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L749)

## Type Parameters

### L

`L` = `never`

### R

`R` = `never`

## Parameters

### callback

() => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`R`\>

### mapCaught

[`MapCaught`](../-internal-/type-aliases/MapCaught.md)\<`L`\> = `anify`

## Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>
