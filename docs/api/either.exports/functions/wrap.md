[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / wrap

# Function: wrap()

> **wrap**\<`L`, `R`, `P`\>(`method`, `mapCaught?`): (`this`, ...`parameters`) => [`Either`](../type-aliases/Either.md)\<`L`, `R`\>

Defined in: [either.ts:717](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L717)

## Type Parameters

### L

`L`

### R

`R`

### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

## Parameters

### method

(...`parameters`) => [`Either`](../type-aliases/Either.md)\<`L`, `R`\>

### mapCaught?

[`MapCaught`](../type-aliases/MapCaught.md)\<`L`\>

## Returns

> (`this`, ...`parameters`): [`Either`](../type-aliases/Either.md)\<`L`, `R`\>

### Parameters

#### this

`any`

#### parameters

...`P`

### Returns

[`Either`](../type-aliases/Either.md)\<`L`, `R`\>
