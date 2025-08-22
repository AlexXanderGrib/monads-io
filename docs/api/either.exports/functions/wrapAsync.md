[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / wrapAsync

# Function: wrapAsync()

> **wrapAsync**\<`L`, `R`, `P`\>(`method`): (`this`, ...`parameters`) => `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

Defined in: [either.ts:726](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L726)

## Type Parameters

### L

`L`

### R

`R`

### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

## Parameters

### method

(...`parameters`) => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

## Returns

> (`this`, ...`parameters`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

### Parameters

#### this

`any`

#### parameters

...`P`

### Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>
