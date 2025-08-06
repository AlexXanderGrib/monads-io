[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / wrap

# Function: wrap()

> **wrap**\<`L`, `R`, `P`\>(`method`, `mapCaught?`): (`this`, ...`parameters`) => [`Either`](../type-aliases/Either.md)\<`L`, `R`\>

Defined in: [either.ts:696](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L696)

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

[`MapCaught`](../-internal-/type-aliases/MapCaught.md)\<`L`\>

## Returns

> (`this`, ...`parameters`): [`Either`](../type-aliases/Either.md)\<`L`, `R`\>

### Parameters

#### this

`any`

#### parameters

...`P`

### Returns

[`Either`](../type-aliases/Either.md)\<`L`, `R`\>
