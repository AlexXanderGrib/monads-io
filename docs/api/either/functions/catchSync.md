[**Package**](../../README.md)

***

[Package](../../modules.md) / [either](../README.md) / catchSync

# Function: catchSync()

> **catchSync**\<`L`, `R`\>(`method`, `mapCaught?`): [`Either`](../type-aliases/Either.md)\<`L`, `R`\>

Defined in: dist/either.d.ts:1092

Executes a synchronous function that returns an `Either`, catching any exceptions and mapping them to a `Left` value.

## Type Parameters

### L

`L` = `never`

### R

`R` = `never`

## Parameters

### method

() => [`Either`](../type-aliases/Either.md)\<`L`, `R`\>

The synchronous function to execute.

### mapCaught?

[`MapCaught`](../-internal-/type-aliases/MapCaught.md)\<`L`\>

An optional function to map a caught exception to a `Left` value. If not provided, the exception itself will be used as the `Left` value.

## Returns

[`Either`](../type-aliases/Either.md)\<`L`, `R`\>

The result of the `method` execution, or a `Left` containing the mapped exception if one occurred.

## Example

```ts
function mightFail(): Either<string, number> {
if (Math.random() > 0.5) {
return right(42);
} else {
throw new Error('Something went wrong!');
}
}

const result1 = catchSync(mightFail);
console.log(result1.isRight() ? result1.value() : result1.value());

const result2 = catchSync(mightFail, (error) => `Caught error: ${error.message}`);
console.log(result2.isRight() ? result2.value() : result2.value());
```
