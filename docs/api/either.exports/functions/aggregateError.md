[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / aggregateError

# Function: aggregateError()

> **aggregateError**\<`T`\>(`values`, `message`): `undefined` \| `AggregateError`

Defined in: [either.ts:631](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L631)

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
