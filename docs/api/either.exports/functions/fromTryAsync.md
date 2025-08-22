[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / fromTryAsync

# Function: fromTryAsync()

> **fromTryAsync**\<`L`, `R`\>(`callback`, `mapCaught`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

Defined in: [either.ts:770](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L770)

## Type Parameters

### L

`L` = `never`

### R

`R` = `never`

## Parameters

### callback

`Promise`\<`R`\> | () => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`R`\>

### mapCaught

[`MapCaught`](../type-aliases/MapCaught.md)\<`L`\> = `eraseType`

## Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>
