[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / wrapAsync

# Function: wrapAsync()

> **wrapAsync**\<`L`, `R`, `P`\>(`method`): (`this`, ...`parameters`) => `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

Defined in: [either.ts:705](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L705)

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
