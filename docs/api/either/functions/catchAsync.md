[**Package**](../../README.md)

***

[Package](../../modules.md) / [either](../README.md) / catchAsync

# Function: catchAsync()

> **catchAsync**\<`L`, `R`\>(`method`, `mapCaught?`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

Defined in: dist/either.d.ts:1123

Executes an asynchronous function that returns a `MaybePromiseLike` of an `Either`, catching any exceptions and mapping them to a `Left` value.

## Type Parameters

### L

`L`

### R

`R`

## Parameters

### method

() => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

The asynchronous function to execute.

### mapCaught?

[`MapCaught`](../-internal-/type-aliases/MapCaught.md)\<`L`\>

An optional function to map a caught exception to a `Left` value. If not provided, the exception itself will be used as the `Left` value.

## Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `R`\>\>

A Promise that resolves to the result of the `method` execution, or a `Left` containing the mapped exception if one occurred.

## Example

```ts
async function asyncMightFail(): Promise<Either<string, number>> {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   if (Math.random() > 0.5) {
    resolve(right(100));
   } else {
    reject(new Error('Async operation failed!'));
   }
  }, 50);
 });
}

catchAsync(asyncMightFail).then(result =>
 console.log(result.isRight() ? result.value() : result.value())
);

catchAsync(asyncMightFail, (error) => `Async error caught: ${error.message}`).then(result =>
 console.log(result.isRight() ? result.value() : result.value())
);
```
