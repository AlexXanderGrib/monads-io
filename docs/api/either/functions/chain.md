[**Package**](../../README.md)

***

[Package](../../modules.md) / [either](../README.md) / chain

# Function: chain()

## Call Signature

> **chain**\<`L`, `R`, `NR`, `P`\>(`map`, ...`parameters`): (`either`, ...`parameters`) => `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `NR`\>\>

Defined in: dist/either.d.ts:960

Chains a function that returns a new `Either` over the right value of an `Either`.
If the original `Either` is a `Left`, it is returned unchanged (but wrapped in a Promise).

### Type Parameters

#### L

`L`

#### R

`R`

#### NR

`NR`

#### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

A tuple of parameters for the `map` function.

### Parameters

#### map

(`value`, ...`parameters`) => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../type-aliases/Either.md)\<`never`, `NR`\>\>

The function to apply to the right value. It should return a `MaybePromiseLike` of a `Either` with a potentially new right type and `never` as the left type.

#### parameters

...`P`

Additional parameters to pass to the `map` function.

### Returns

A function that takes an `Either` and returns a Promise of a new `Either`.

> (`either`, ...`parameters`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `NR`\>\>

#### Parameters

##### either

[`Either`](../type-aliases/Either.md)\<`L`, `R`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `NR`\>\>

### Example

```ts
import { right, left } from './either';
const asyncDouble = (num: number): Promise<Either<never, number>> => Promise.resolve(right(num * 2));
const asyncError = (num: number): Promise<Either<string, never>> => Promise.resolve(left('failed: ' + num));

const chainDouble = chain(asyncDouble);
const chainError = chain(asyncError);

chainDouble(right(5)).then(result => console.log(result.value())); // Output: 10
chainDouble(left('oops')).then(result => console.log(result.value())); // Output: oops

chainError(right(10)).then(result => console.log(result.value())); // Output: failed: 10
```

## Call Signature

> **chain**\<`L`, `R`, `NL`, `P`\>(`map`, ...`parameters`): (`either`, ...`parameters`) => `Promise`\<[`Either`](../type-aliases/Either.md)\<`L` \| `NL`, `R`\>\>

Defined in: dist/either.d.ts:982

Chains a function that returns a new `Either` over the right value of an `Either`.
If the original `Either` is a `Left`, it is returned unchanged (but wrapped in a Promise).
This overload allows the mapping function to return an `Either` with a new left type and `never` as the right type.

### Type Parameters

#### L

`L`

#### R

`R`

#### NL

`NL`

#### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

A tuple of parameters for the `map` function.

### Parameters

#### map

(`value`, ...`parameters`) => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../type-aliases/Either.md)\<`NL`, `never`\>\>

The function to apply to the right value. It should return a `MaybePromiseLike` of a `Either` with a potentially new left type and `never` as the right type.

#### parameters

...`P`

Additional parameters to pass to the `map` function.

### Returns

A function that takes an `Either` and returns a Promise of a new `Either`.

> (`either`, ...`parameters`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L` \| `NL`, `R`\>\>

#### Parameters

##### either

[`Either`](../type-aliases/Either.md)\<`L`, `R`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L` \| `NL`, `R`\>\>

### Example

```ts
import { right, left } from './either';
const asyncErrorWithMessage = (str: string): Promise<Either<string, never>> => Promise.resolve(left(`Async error: ${str}`));
const chainErrorWithMessage = chain(asyncErrorWithMessage);

chainErrorWithMessage(right('input')).then(result => console.log(result.value())); // Output: Async error: input
chainErrorWithMessage(left('initial error')).then(result => console.log(result.value())); // Output: initial error
```

## Call Signature

> **chain**\<`L`, `R`, `NL`, `NR`, `P`\>(`map`, ...`parameters`): (`either`, ...`parameters`) => `Promise`\<[`Either`](../type-aliases/Either.md)\<`L` \| `NL`, `NR`\>\>

Defined in: dist/either.d.ts:1005

Chains a function that returns a new `Either` over the right value of an `Either`.
If the original `Either` is a `Left`, it is returned unchanged (but wrapped in a Promise).
This is the most general overload, allowing the mapping function to return an `Either` with potentially new left and right types.

### Type Parameters

#### L

`L`

#### R

`R`

#### NL

`NL`

#### NR

`NR`

#### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

A tuple of parameters for the `map` function.

### Parameters

#### map

(`value`, ...`parameters`) => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../type-aliases/Either.md)\<`NL`, `NR`\>\>

The function to apply to the right value. It should return a `MaybePromiseLike` of a `Either` with potentially new left and right types.

#### parameters

...`P`

Additional parameters to pass to the `map` function.

### Returns

A function that takes an `Either` and returns a Promise of a new `Either`.

> (`either`, ...`parameters`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L` \| `NL`, `NR`\>\>

#### Parameters

##### either

[`Either`](../type-aliases/Either.md)\<`L`, `R`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L` \| `NL`, `NR`\>\>

### Example

```ts
import { right, left } from './either';
const asyncTransform = (num: number): Promise<Either<string, string>> => Promise.resolve(right(`Result: ${num * 3}`));
const chainTransform = chain(asyncTransform);

chainTransform(right(7)).then(result => console.log(result.value())); // Output: Result: 21
chainTransform(left('original problem')).then(result => console.log(result.value())); // Output: original problem
```
