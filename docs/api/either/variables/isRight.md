[**Package**](../../README.md)

***

[Package](../../modules.md) / [either](../README.md) / isRight

# Variable: isRight()

> `const` **isRight**: \<`L`, `R`\>(`value`) => `value is Right<L, R>`

Defined in: dist/either.d.ts:897

Checks if a value is an instance of `Right`.

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

`value is Right<L, R>`

`true` if the value is a `Right`, `false` otherwise.

## Alias

isOk

## See

[isOk](isOk.md)

## Example

```ts
import { right } from './either';
const rightValue = right(20);
const leftValue = left('oops');
console.log(isRight(rightValue)); // Output: true
console.log(isRight(leftValue)); // Output: false
console.log(isRight(null)); // Output: false
```
