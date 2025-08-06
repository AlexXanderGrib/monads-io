[**Package**](../../README.md)

***

[Package](../../modules.md) / [either](../README.md) / fromTryAsync

# Function: fromTryAsync()

> **fromTryAsync**\<`L`, `R`\>(`callback`, `mapCaught?`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

Defined in: dist/either.d.ts:1195

Executes an asynchronous callback and returns a Promise of an `Either`. A successful execution returns a `Right` with the resolved value, and any thrown exception is caught and mapped to a `Left`.

## Type Parameters

### L

`L` = `never`

### R

`R` = `never`

## Parameters

### callback

() => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`R`\>

The asynchronous function to execute.

### mapCaught?

[`MapCaught`](../-internal-/type-aliases/MapCaught.md)\<`L`\>

An optional function to map a caught exception to a `Left` value. Defaults to the identity function (using the exception as is).

## Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

A Promise that resolves to the resulting `Either`.

## Example

```ts
async function fetchUserData(): Promise<string> {
 return new Promise((resolve) => setTimeout(() => resolve('User data'), 30));
}

async function simulateAsyncError(): Promise<string> {
 return new Promise((_, reject) => setTimeout(() => reject(new Error('Fetch failed')), 30));
}

fromTryAsync(fetchUserData).then(result => console.log(result.value())); // Output: User data

fromTryAsync(simulateAsyncError, (error) => `Async try error: ${error.message}`).then(result =>
 console.log(result.value())
); // Output: Async try error: Fetch failed
```
