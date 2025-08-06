[**Package**](../../README.md)

***

[Package](../../modules.md) / [either](../README.md) / isEither

# Variable: isEither()

> `const` **isEither**: \<`L`, `R`\>(`value`) => `value is Either<L, R>`

Defined in: dist/either.d.ts:934

Checks if a value is an instance of either `Left` or `Right`, and thus an `Either`.

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

`value is Either<L, R>`

`true` if the value is an `Either`, `false` otherwise.

## Example

```ts
import { left, right } from './either';
const eitherLeft = left('problem');
const eitherRight = right(30);
console.log(isEither(eitherLeft)); // Output: true
console.log(isEither(eitherRight)); // Output: true
console.log(isEither({})); // Output: false
```
