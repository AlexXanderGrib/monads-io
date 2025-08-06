[**Package**](../../README.md)

***

[Package](../../modules.md) / [either](../README.md) / fromPromiseSettledResult

# Function: fromPromiseSettledResult()

> **fromPromiseSettledResult**\<`L`, `T`\>(`result`): [`Either`](../type-aliases/Either.md)\<`L`, `T`\>

Defined in: dist/either.d.ts:1214

Creates an `Either` from a `PromiseSettledResult`. If the result is fulfilled, it returns a `Right` with the value. If the result is rejected, it returns a `Left` with the reason.

## Type Parameters

### L

`L` = `never`

### T

`T` = `never`

## Parameters

### result

`PromiseSettledResult`\<`T`\>

The `PromiseSettledResult` to convert to an `Either`.

## Returns

[`Either`](../type-aliases/Either.md)\<`L`, `T`\>

An `Either` representing the outcome of the settled Promise.

## Example

```ts
const fulfilledResult: PromiseSettledResult<number> = { status: 'fulfilled', value: 200 };
const rejectedResult: PromiseSettledResult<string> = { status: 'rejected', reason: 'Request timed out' };

const fulfilledEither = fromPromiseSettledResult(fulfilledResult);
console.log(fulfilledEither.value()); // Output: 200

const rejectedEither = fromPromiseSettledResult(rejectedResult);
console.log(rejectedEither.value()); // Output: Request timed out
```
