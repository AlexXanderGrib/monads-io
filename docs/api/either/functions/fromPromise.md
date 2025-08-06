[**Package**](../../README.md)

***

[Package](../../modules.md) / [either](../README.md) / fromPromise

# Function: fromPromise()

> **fromPromise**\<`L`, `T`\>(`promise`, `mapCaught?`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `T`\>\>

Defined in: dist/either.d.ts:1145

Creates an `Either` from a `MaybePromiseLike`. A resolved Promise will result in a `Right` containing the resolved value, and a rejected Promise will result in a `Left` containing the mapped rejection reason.

## Type Parameters

### L

`L` = `never`

### T

`T` = `never`

## Parameters

### promise

[`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`T`\>

The Promise or value to convert to an `Either`.

### mapCaught?

[`MapCaught`](../-internal-/type-aliases/MapCaught.md)\<`L`\>

An optional function to map the Promise rejection reason to a `Left` value. If not provided, the rejection reason itself will be used as the `Left` value.

## Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `T`\>\>

A Promise that resolves to the resulting `Either`.

## Example

```ts
const successfulPromise = Promise.resolve('Data loaded!');
const failedPromise = Promise.reject('Network error');

fromPromise(successfulPromise).then(result => console.log(result.value())); // Output: Data loaded!

fromPromise(failedPromise).then(result => console.log(result.value())); // Output: Network error

fromPromise(failedPromise, (reason) => `Promise failed: ${reason}`).then(result =>
 console.log(result.value())
); // Output: Promise failed: Network error
```
