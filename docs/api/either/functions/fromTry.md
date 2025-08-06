[**Package**](../../README.md)

***

[Package](../../modules.md) / [either](../README.md) / fromTry

# Function: fromTry()

> **fromTry**\<`L`, `T`\>(`callback`, `mapCaught?`): [`Either`](../type-aliases/Either.md)\<`L`, `T`\>

Defined in: dist/either.d.ts:1170

Executes a synchronous callback and returns an `Either`. A successful execution returns a `Right` with the result, and any thrown exception is caught and mapped to a `Left`.

## Type Parameters

### L

`L` = `never`

### T

`T` = `never`

## Parameters

### callback

() => `T`

The synchronous function to execute.

### mapCaught?

[`MapCaught`](../-internal-/type-aliases/MapCaught.md)\<`L`\>

A function to map a caught exception to a `Left` value. Defaults to the identity function (using the exception as is).

## Returns

[`Either`](../type-aliases/Either.md)\<`L`, `T`\>

An `Either` representing the result of the callback execution.

## Example

```ts
function getValue(): number {
 return 123;
}

function throwError(): number {
 throw new Error('Calculation error');
}

const successResult = fromTry(getValue);
console.log(successResult.value()); // Output: 123

const errorResult = fromTry(throwError, (error) => `Sync error: ${error.message}`);
console.log(errorResult.value()); // Output: Sync error: Calculation error
```
