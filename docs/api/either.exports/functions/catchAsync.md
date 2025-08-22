[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / catchAsync

# Function: catchAsync()

> **catchAsync**\<`L`, `R`\>(`method`, `mapCaught?`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

Defined in: [either.ts:744](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L744)

## Type Parameters

### L

`L`

### R

`R`

## Parameters

### method

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\> | () => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

### mapCaught?

[`MapCaught`](../type-aliases/MapCaught.md)\<`L`\>

## Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>
