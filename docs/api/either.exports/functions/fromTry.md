[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / fromTry

# Function: fromTry()

> **fromTry**\<`L`, `T`\>(`callback`, `mapCaught`): [`Either`](../type-aliases/Either.md)\<`L`, `T`\>

Defined in: [either.ts:738](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L738)

## Type Parameters

### L

`L` = `never`

### T

`T` = `never`

## Parameters

### callback

() => `T`

### mapCaught

[`MapCaught`](../-internal-/type-aliases/MapCaught.md)\<`L`\> = `anify`

## Returns

[`Either`](../type-aliases/Either.md)\<`L`, `T`\>
