[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / aggregateError

# Function: aggregateError()

> **aggregateError**\<`T`\>(`values`, `message`): `undefined` \| `AggregateError`

Defined in: [either.ts:610](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L610)

## Type Parameters

### T

`T` = `unknown`

## Parameters

### values

[`Either`](../type-aliases/Either.md)\<`T`, `unknown`\>[]

### message

`undefined` | `string` | (`lefts`) => `undefined` \| `string`

## Returns

`undefined` \| `AggregateError`
