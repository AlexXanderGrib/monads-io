[**Package**](../../README.md)

***

[Package](../../modules.md) / [either](../README.md) / wrapAsync

# Function: wrapAsync()

> **wrapAsync**\<`L`, `R`, `P`\>(`method`): (`this`, ...`parameters`) => `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

Defined in: dist/either.d.ts:1067

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
