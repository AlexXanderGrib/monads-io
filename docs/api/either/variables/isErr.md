[**Package**](../../README.md)

***

[Package](../../modules.md) / [either](../README.md) / isErr

# Variable: isErr()

> `const` **isErr**: \<`L`, `R`\>(`value`) => `value is Left<L, R>`

Defined in: dist/either.d.ts:877

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

isLeft

## See

[isLeft](isLeft.md)

## Example

```ts
import { left } from './either';
const errValue = left('failed');
console.log(isErr(errValue)); // Output: true
```
