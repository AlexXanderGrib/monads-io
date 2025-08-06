[**Package**](../../README.md)

***

[Package](../../modules.md) / [either](../README.md) / isLeft

# Variable: isLeft()

> `const` **isLeft**: \<`L`, `R`\>(`value`) => `value is Left<L, R>`

Defined in: dist/either.d.ts:860

Checks if a value is an instance of `Left`.

## Type Parameters

### L

`L`

### R

`R`

## Parameters

### value

The value to check.

`unknown` | [`Either`](../type-aliases/Either.md)\<`L`, `R`\>

## Returns

`value is Left<L, R>`

`true` if the value is a `Left`, `false` otherwise.

## Alias

isErr

## See

[isErr](isErr.md)

## Example

```ts
import { left } from './either';
const leftValue = left('error');
const rightValue = right(10);
console.log(isLeft(leftValue)); // Output: true
console.log(isLeft(rightValue)); // Output: false
console.log(isLeft('not an Either')); // Output: false
```
