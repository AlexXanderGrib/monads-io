[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / fromTry

# Function: fromTry()

> **fromTry**\<`L`, `T`\>(`callback`, `mapCaught`): [`Either`](../type-aliases/Either.md)\<`L`, `T`\>

Defined in: [either.ts:759](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L759)

## Type Parameters

### L

`L` = `never`

### T

`T` = `never`

## Parameters

### callback

() => `T`

### mapCaught

[`MapCaught`](../type-aliases/MapCaught.md)\<`L`\> = `eraseType`

## Returns

[`Either`](../type-aliases/Either.md)\<`L`, `T`\>
