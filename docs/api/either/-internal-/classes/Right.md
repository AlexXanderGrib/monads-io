[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [either](../../README.md) / [\<internal\>](../README.md) / Right

# Class: Right\<L, R\>

Defined in: dist/either.d.ts:803

## Extends

- [`EitherConstructor`](EitherConstructor.md)\<`L`, `R`\>

## Type Parameters

### L

`L`

### R

`R`

## Implements

- [`SerializedRight`](../type-aliases/SerializedRight.md)\<`R`\>

## Constructors

### Constructor

> `private` **new Right**\<`L`, `R`\>(): `Right`\<`L`, `R`\>

Defined in: dist/either.d.ts:835

#### Returns

`Right`\<`L`, `R`\>

#### Overrides

[`EitherConstructor`](EitherConstructor.md).[`constructor`](EitherConstructor.md#constructor)

## Properties

### ~~right~~

> `readonly` **right**: `R`

Defined in: dist/either.d.ts:812

#### Deprecated

Should not be used directly, public only for serialization & type check use [getRight](#getright)

#### See

[getRight](#getright)

#### Memberof

Right

#### Implementation of

`SerializedRight.right`

## Accessors

### \[toStringTag\]

#### Get Signature

> **get** **\[toStringTag\]**(): [`Right`](../../enumerations/EitherType.md#right)

Defined in: dist/either.d.ts:813

##### Returns

[`Right`](../../enumerations/EitherType.md#right)

***

### name

#### Get Signature

> **get** **name**(): `"Either"`

Defined in: dist/either.d.ts:814

##### Returns

`"Either"`

#### Implementation of

`SerializedRight.name`

***

### type

#### Get Signature

> **get** **type**(): [`Right`](../../enumerations/EitherType.md#right)

Defined in: dist/either.d.ts:815

##### Returns

[`Right`](../../enumerations/EitherType.md#right)

#### Implementation of

`SerializedRight.type`

## Methods

### andTee()

> **andTee**\<`P`\>(`callback`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: dist/either.d.ts:104

Applies a function to the Right value and returns the original `Either` for chaining. This is similar to `tap` but named `andTee` for consistency with other libraries.

#### Type Parameters

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

A tuple of parameters for the callback function.

#### Parameters

##### callback

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, `void`, `P`\>

The function to apply to the right value. It receives the right value and any additional parameters.

##### parameters

...`P`

Additional parameters to pass to the callback function.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

The original `Either` instance for chaining.

#### Alias

tap

#### See

[tap](#tap)

#### Example

```ts
const rightEither: Either<string, number> = right(5);
let andTeeValue: number | undefined;
const resultRight = rightEither.andTee((value) => { andTeeValue = value * 2; });
console.log(andTeeValue); // Output: 10
console.log(resultRight === rightEither); // Output: true

const leftEither: Either<string, number> = left('error');
andTeeValue = undefined;
const resultLeft = leftEither.andTee((value) => { andTeeValue = value * 2; });
console.log(andTeeValue); // Output: undefined
console.log(resultLeft === leftEither); // Output: true
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`andTee`](EitherConstructor.md#andtee)

***

### andThen()

> **andThen**\<`A`, `B`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>

Defined in: dist/either.d.ts:122

Chains a function that returns an Either on the Right value. This is similar to `chain` and is often used for sequential computations.

#### Type Parameters

##### A

`A`

The Left type of the resulting Either.

##### B

`B`

The Right type of the resulting Either.

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Additional parameters passed to the mapping function.

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, [`Either`](../../type-aliases/Either.md)\<`A`, `B`\>, `P`\>

Function to map the Right value to a new Either.

##### parameters

...`P`

Optional parameters to pass to the mapping function.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>

The resulting Either after applying the function.

#### Alias

chain

#### See

[chain](../../functions/chain.md)

#### Example

```ts
const result = right(5).andThen((x) => right(x * 2));
console.log(result); // right(10)
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`andThen`](EitherConstructor.md#andthen)

***

### any()

> **any**\<`T`\>(`this`): `T`

Defined in: dist/either.d.ts:133

Extracts the value from an Either where both sides have the same type.

#### Type Parameters

##### T

`T`

The type of the value contained in the Either.

#### Parameters

##### this

[`Either`](../../type-aliases/Either.md)\<`T`, `T`\>

The Either instance containing the value.

#### Returns

`T`

The contained value.

#### Example

```ts
const value = right(42).any(); // 42
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`any`](EitherConstructor.md#any)

***

### apply()

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `B`\>

Defined in: dist/either.d.ts:150

Applies a function wrapped in an Either to an argument wrapped in an Either.
Works both ways depending on the order of arguments.

##### Type Parameters

###### A

`A`

Type of the argument.

###### B

`B`

Type of the result.

###### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Parameters for the function.

##### Parameters

###### this

[`Either`](../../type-aliases/Either.md)\<`L`, [`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

###### argument

[`Either`](../../type-aliases/Either.md)\<`L`, `A`\>

Either the function or the value.

###### parameters

...`P`

Additional parameters to pass to the function.

##### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>

Result of applying the function to the value.

##### Example

```ts
const fn = right((x: number) => x * 2);
const val = right(5);
const result = fn.apply(val); // right(10)
```

##### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`apply`](EitherConstructor.md#apply)

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `B`\>

Defined in: dist/either.d.ts:151

Applies a function wrapped in an Either to an argument wrapped in an Either.
Works both ways depending on the order of arguments.

##### Type Parameters

###### A

`A`

Type of the argument.

###### B

`B`

Type of the result.

###### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Parameters for the function.

##### Parameters

###### this

[`Either`](../../type-aliases/Either.md)\<`L`, `A`\>

###### map

[`Either`](../../type-aliases/Either.md)\<`L`, [`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

###### parameters

...`P`

Additional parameters to pass to the function.

##### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>

Result of applying the function to the value.

##### Example

```ts
const fn = right((x: number) => x * 2);
const val = right(5);
const result = fn.apply(val); // right(10)
```

##### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`apply`](EitherConstructor.md#apply)

***

### asyncAndThen()

> **asyncAndThen**\<`A`, `B`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>\>

Defined in: dist/either.d.ts:79

Asynchronously chains an operation that returns an Either. This is similar to `chain` but operates on the awaited Right value.

#### Type Parameters

##### A

`A`

Left type of the resulting Either.

##### B

`B`

Right type of the resulting Either.

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Parameters for the mapping function.

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Awaited`\<`R`\>, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../../type-aliases/Either.md)\<`A`, `B`\>\>, `P`\>

Function returning a Promise of Either, taking the awaited Right value as input.

##### parameters

...`P`

Additional parameters for the function.

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>\>

Promise resolving to the chained Either.

#### Alias

asyncChain

#### See

[asyncChain](#asyncchain)

#### Example

```ts
const asyncValue = right(Promise.resolve(10));
const result = await asyncValue.asyncAndThen(async (n) => right(n + 1));
// result: right(11)
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`asyncAndThen`](EitherConstructor.md#asyncandthen)

***

### asyncApply()

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

Defined in: dist/either.d.ts:167

Asynchronously applies a function wrapped in an Either to a value wrapped in an Either.

##### Type Parameters

###### A

`A`

Type of the argument.

###### B

`B`

Type of the result.

###### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Parameters for the function.

##### Parameters

###### this

[`Either`](../../type-aliases/Either.md)\<`L`, [`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

###### argument

[`Either`](../../type-aliases/Either.md)\<`L`, `A`\>

Either the function or the value.

###### parameters

...`P`

Additional parameters to pass to the function.

##### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

Promise resolving to the result.

##### Example

```ts
const asyncFn = right(async (x: number) => x * 3);
const val = right(4);
const result = await asyncFn.asyncApply(val); // right(12)
```

##### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`asyncApply`](EitherConstructor.md#asyncapply)

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

Defined in: dist/either.d.ts:168

Asynchronously applies a function wrapped in an Either to a value wrapped in an Either.

##### Type Parameters

###### A

`A`

Type of the argument.

###### B

`B`

Type of the result.

###### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Parameters for the function.

##### Parameters

###### this

[`Either`](../../type-aliases/Either.md)\<`L`, `A`\>

###### map

[`Either`](../../type-aliases/Either.md)\<`L`, [`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

###### parameters

...`P`

Additional parameters to pass to the function.

##### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

Promise resolving to the result.

##### Example

```ts
const asyncFn = right(async (x: number) => x * 3);
const val = right(4);
const result = await asyncFn.asyncApply(val); // right(12)
```

##### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`asyncApply`](EitherConstructor.md#asyncapply)

***

### asyncChain()

> **asyncChain**\<`A`, `B`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>\>

Defined in: dist/either.d.ts:187

Chains an asynchronous operation that returns an Either.

#### Type Parameters

##### A

`A`

Left type of the resulting Either.

##### B

`B`

Right type of the resulting Either.

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Parameters for the mapping function.

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Awaited`\<`R`\>, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../../type-aliases/Either.md)\<`A`, `B`\>\>, `P`\>

Function returning a Promise of Either.

##### parameters

...`P`

Additional parameters for the function.

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>\>

Promise resolving to the chained Either.

#### Alias

asyncAndThen

#### See

[asyncAndThen](#asyncandthen)

#### Example

```ts
const value = right(10);
const result = await value.asyncChain(async (n) => right(n + 1));
// result: right(11)
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`asyncChain`](EitherConstructor.md#asyncchain)

***

### asyncMap()

> **asyncMap**\<`B`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

Defined in: dist/either.d.ts:203

Asynchronously maps the contained value to a new value.

#### Type Parameters

##### B

`B`

Right type after mapping.

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Parameters for the mapping function.

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Awaited`\<`R`\>, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>

Function returning a Promise of the new value.

##### parameters

...`P`

Additional parameters for the function.

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

Promise resolving to the mapped Either.

#### Example

```ts
const value = right(7);
const result = await value.asyncMap(async (n) => n * 2);
// result: right(14)
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`asyncMap`](EitherConstructor.md#asyncmap)

***

### asyncMapErr()

> **asyncMapErr**\<`A`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`A`, `R`\>\>

Defined in: dist/either.d.ts:60

#### Type Parameters

##### A

`A`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Awaited`\<`L`\>, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`A`\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`A`, `R`\>\>

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`asyncMapErr`](EitherConstructor.md#asyncmaperr)

***

### asyncMapLeft()

> **asyncMapLeft**\<`A`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`A`, `R`\>\>

Defined in: dist/either.d.ts:59

#### Type Parameters

##### A

`A`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Awaited`\<`L`\>, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`A`\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`A`, `R`\>\>

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`asyncMapLeft`](EitherConstructor.md#asyncmapleft)

***

### await()

> **await**\<`T`\>(`this`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `T`\>\>

Defined in: dist/either.d.ts:217

Awaits a Promise inside the Right value of the Either, if present.
Converts Either<L, Promise<R>> into Promise<Either<L, R>>.

#### Type Parameters

##### T

`T`

The type of the resolved Right value.

#### Parameters

##### this

[`Either`](../../type-aliases/Either.md)\<`L`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`T`\>\>

The Either containing a MaybePromise.

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `T`\>\>

A Promise resolving to an Either with an awaited Right value.

#### Example

```ts
const e = right(Promise.resolve(5));
const awaited = await e.await();
console.log(awaited); // right(5)
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`await`](EitherConstructor.md#await)

***

### awaitLeft()

> **awaitLeft**\<`T`\>(`this`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`T`, `R`\>\>

Defined in: dist/either.d.ts:218

#### Type Parameters

##### T

`T`

#### Parameters

##### this

[`Either`](../../type-aliases/Either.md)\<[`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`T`\>, `R`\>

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`T`, `R`\>\>

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`awaitLeft`](EitherConstructor.md#awaitleft)

***

### biMap()

> **biMap**\<`A`, `B`\>(`mapLeft`, `mapRight`): [`Either`](../../type-aliases/Either.md)\<`A`, `B`\>

Defined in: dist/either.d.ts:235

Applies different mapping functions to Left and Right values, depending on which is present.

#### Type Parameters

##### A

`A`

The new type for the Left value after mapping.

##### B

`B`

The new type for the Right value after mapping.

#### Parameters

##### mapLeft

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`L`, `A`\>

Function to map the Left value.

##### mapRight

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, `B`\>

Function to map the Right value.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`A`, `B`\>

A new Either with mapped values.

#### Example

```ts
const result = right(10).biMap(
(l) => `Error: ${l}`,
(r) => r * 2
);
console.log(result); // right(20)
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`biMap`](EitherConstructor.md#bimap)

***

### chain()

> **chain**\<`A`, `B`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>

Defined in: dist/either.d.ts:254

Chains a function that returns an Either on the Right value.
Used for sequential computations that can fail.

#### Type Parameters

##### A

`A`

The Left type of the resulting Either.

##### B

`B`

The Right type of the resulting Either.

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Additional parameters passed to the mapping function.

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, [`Either`](../../type-aliases/Either.md)\<`A`, `B`\>, `P`\>

Function to map the Right value to a new Either.

##### parameters

...`P`

Optional parameters to pass to the mapping function.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>

The resulting Either after applying the function.

#### Alias

andThen

#### See

[andThen](#andthen)

#### Example

```ts
const result = right(5).chain((x) => right(x * 2));
console.log(result); // right(10)
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`chain`](EitherConstructor.md#chain)

***

### chainErr()

> **chainErr**\<`A`, `B`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`A`, `R` \| `B`\>

Defined in: dist/either.d.ts:294

Chains a function that returns an Either on the Left value.
Useful for handling and recovering from errors.

#### Type Parameters

##### A

`A`

The Left type of the resulting Either.

##### B

`B`

The Right type of the resulting Either.

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Additional parameters passed to the mapping function.

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`L`, [`Either`](../../type-aliases/Either.md)\<`A`, `B`\>, `P`\>

Function to map the Left value to a new Either.

##### parameters

...`P`

Optional parameters to pass to the mapping function.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`A`, `R` \| `B`\>

The resulting Either after applying the function.

#### Alias

chainLeft

#### See

[chainLeft](#chainleft)

#### Example

```ts
const result = left('error').chainErr((err) => right(`Recovered from ${err}`));
console.log(result); // right('Recovered from error')
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`chainErr`](EitherConstructor.md#chainerr)

***

### chainLeft()

> **chainLeft**\<`A`, `B`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`A`, `R` \| `B`\>

Defined in: dist/either.d.ts:274

Chains a function that returns an Either on the Left value.
Useful for handling and recovering from errors.

#### Type Parameters

##### A

`A`

The Left type of the resulting Either.

##### B

`B`

The Right type of the resulting Either.

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Additional parameters passed to the mapping function.

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`L`, [`Either`](../../type-aliases/Either.md)\<`A`, `B`\>, `P`\>

Function to map the Left value to a new Either.

##### parameters

...`P`

Optional parameters to pass to the mapping function.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`A`, `R` \| `B`\>

The resulting Either after applying the function.

#### Alias

chainErr

#### See

[chainErr](#chainerr)

#### Example

```ts
const result = left('error').chainLeft((err) => right(`Recovered from ${err}`));
console.log(result); // right('Recovered from error')
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`chainLeft`](EitherConstructor.md#chainleft)

***

### default()

> **default**(`value`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: dist/either.d.ts:305

Returns the current Either if it is Right, otherwise replaces Left with a provided Right value.

#### Parameters

##### value

`R`

Fallback value to use if the Either is Left.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

The current Either if Right, otherwise a new Right with the provided value.

#### Example

```ts
const result = left('error').default(10);
console.log(result); // right(10)
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`default`](EitherConstructor.md#default)

***

### flatten()

> **flatten**\<`L1`, `L2`, `R`\>(`this`): [`Either`](../../type-aliases/Either.md)\<`L1` \| `L2`, `R`\>

Defined in: dist/either.d.ts:406

Flattens a nested Either structure by joining two Eithers into a single Either.
Only works if the Right side contains another Either.

#### Type Parameters

##### L1

`L1`

Outer Left type.

##### L2

`L2`

Inner Left type inside Right.

##### R

`R`

Inner Right type inside Right.

#### Parameters

##### this

[`Either`](../../type-aliases/Either.md)\<`L1`, [`Either`](../../type-aliases/Either.md)\<`L2`, `R`\>\>

Current Either with nested Either inside Right.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L1` \| `L2`, `R`\>

Flattened Either.

#### Alias

join

#### See

[join](#join)

#### Example

```ts
const nested = right(right(5));
const result = nested.flatten();
console.log(result); // right(5)
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`flatten`](EitherConstructor.md#flatten)

***

### fold()

> **fold**\<`A`, `B`\>(`mapLeft`, `mapRight`): `A` \| `B`

Defined in: dist/either.d.ts:324

Applies a function to the Left or Right value, depending on which is present, and returns the result.

#### Type Parameters

##### A

`A`

The result type when folding over Left.

##### B

`B` = `A`

The result type when folding over Right (defaults to A if not provided).

#### Parameters

##### mapLeft

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`L`, `A`\>

Function to handle the Left value.

##### mapRight

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, `B`\>

Function to handle the Right value.

#### Returns

`A` \| `B`

The result of applying the corresponding mapper.

#### Throws

If the Either is in an invalid state (should never happen).

#### Example

```ts
const result = right(5).fold(
  (l) => `Error: ${l}`,
  (r) => `Value: ${r}`
);
console.log(result); // "Value: 5"
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`fold`](EitherConstructor.md#fold)

***

### getErr()

> **getErr**(): `undefined`

Defined in: dist/either.d.ts:819

#### Returns

`undefined`

***

### getLeft()

> **getLeft**(): `undefined`

Defined in: dist/either.d.ts:817

#### Returns

`undefined`

***

### getOk()

> **getOk**(): `R`

Defined in: dist/either.d.ts:818

#### Returns

`R`

***

### getRight()

> **getRight**(): `R`

Defined in: dist/either.d.ts:816

#### Returns

`R`

***

### isErr()

> **isErr**(): `this is Left<L, R>`

Defined in: dist/either.d.ts:337

Checks if the Either is a Left (Error).

#### Returns

`this is Left<L, R>`

True if the Either is Left.

#### Alias

isLeft

#### See

[isLeft](../../variables/isLeft.md)

#### Example

```ts
console.log(left('error').isErr()); // true
console.log(right(5).isErr()); // false
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`isErr`](EitherConstructor.md#iserr)

***

### isLeft()

> **isLeft**(): `this is Left<L, R>`

Defined in: dist/either.d.ts:346

Checks if the Either is a Left.

#### Returns

`this is Left<L, R>`

True if the Either is Left.

#### Example

```ts
console.log(left('failure').isLeft()); // true
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`isLeft`](EitherConstructor.md#isleft)

***

### isOk()

> **isOk**(): `this is Right<L, R>`

Defined in: dist/either.d.ts:359

Checks if the Either is a Right.

#### Returns

`this is Right<L, R>`

True if the Either is Right.

#### Alias

isRight

#### See

[isRight](../../variables/isRight.md)

#### Example

```ts
console.log(right(42).isOk()); // true
console.log(left('error').isOk()); // false
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`isOk`](EitherConstructor.md#isok)

***

### isRight()

> **isRight**(): `this is Right<L, R>`

Defined in: dist/either.d.ts:368

Checks if the Either is a Right.

#### Returns

`this is Right<L, R>`

True if the Either is Right.

#### Example

```ts
console.log(right('success').isRight()); // true
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`isRight`](EitherConstructor.md#isright)

***

### join()

> **join**\<`L1`, `L2`, `R`\>(`this`): [`Either`](../../type-aliases/Either.md)\<`L1` \| `L2`, `R`\>

Defined in: dist/either.d.ts:387

Flattens a nested Either structure by joining two Eithers into a single Either.
Only works if the Right side contains another Either.

#### Type Parameters

##### L1

`L1`

Outer Left type.

##### L2

`L2`

Inner Left type inside Right.

##### R

`R`

Inner Right type inside Right.

#### Parameters

##### this

[`Either`](../../type-aliases/Either.md)\<`L1`, [`Either`](../../type-aliases/Either.md)\<`L2`, `R`\>\>

Current Either with nested Either inside Right.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L1` \| `L2`, `R`\>

Flattened Either.

#### Alias

flatten

#### See

[flatten](#flatten)

#### Example

```ts
const nested = right(right(5));
const result = nested.join();
console.log(result); // right(5)
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`join`](EitherConstructor.md#join)

***

### map()

> **map**\<`T`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `T`\>

Defined in: dist/either.d.ts:426

Applies a function to transform the Right value while leaving Left unchanged.

#### Type Parameters

##### T

`T`

The type of the transformed Right value.

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Additional parameters passed to the mapping function.

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, `T`, `P`\>

Function to transform the Right value.

##### parameters

...`P`

Additional parameters for the map function.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `T`\>

A new Either with the mapped Right value.

#### Alias

mapRight

#### See

 - [mapRight](#mapright)
 - [mapOk](#mapok)

#### Alias

mapOk

#### Example

```ts
const result = right(10).map((x) => x * 2);
console.log(result); // right(20)
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`map`](EitherConstructor.md#map)

***

### mapErr()

> **mapErr**\<`T`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`T`, `R`\>

Defined in: dist/either.d.ts:456

Maps the Left (error) value to a new value if present.

#### Type Parameters

##### T

`T`

New type of Left value

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Extra parameters for the mapper

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`L`, `T`, `P`\>

Function to map Left value

##### parameters

...`P`

Additional parameters to pass to the mapper

#### Returns

[`Either`](../../type-aliases/Either.md)\<`T`, `R`\>

- New Either with mapped Left or original Right

#### Alias

mapLeft

#### See

[mapLeft](#mapleft)

#### Example

```ts
either.mapErr(err => `Error: ${err}`);
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`mapErr`](EitherConstructor.md#maperr)

***

### mapLeft()

> **mapLeft**\<`T`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`T`, `R`\>

Defined in: dist/either.d.ts:441

Maps the Left (error) value to a new value if present.

#### Type Parameters

##### T

`T`

New type of Left value

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Extra parameters for the mapper

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`L`, `T`, `P`\>

Function to map Left value

##### parameters

...`P`

Additional parameters to pass to the mapper

#### Returns

[`Either`](../../type-aliases/Either.md)\<`T`, `R`\>

- New Either with mapped Left or original Right

#### Alias

mapErr

#### See

[mapErr](#maperr)

#### Example

```ts
either.mapLeft(err => `Error: ${err}`);
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`mapLeft`](EitherConstructor.md#mapleft)

***

### mapOk()

> **mapOk**\<`T`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `T`\>

Defined in: dist/either.d.ts:492

Maps the Right (success) value to a new value if present.

#### Type Parameters

##### T

`T`

New type of Right value

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Extra parameters for the mapper

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, `T`, `P`\>

Function to map Right value

##### parameters

...`P`

Additional parameters to pass to the mapper

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `T`\>

- New Either with mapped Right or original Left

#### Alias

mapRight

#### See

 - [mapRight](#mapright)
 - [map](EitherConstructor.md#mapok-1)

#### Alias

map

#### Example

```ts
either.mapOk(value => value + 1);
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`mapOk`](EitherConstructor.md#mapok)

***

### mapRight()

> **mapRight**\<`T`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `T`\>

Defined in: dist/either.d.ts:474

Maps the Right (success) value to a new value if present.

#### Type Parameters

##### T

`T`

New type of Right value

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Extra parameters for the mapper

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, `T`, `P`\>

Function to map Right value

##### parameters

...`P`

Additional parameters to pass to the mapper

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `T`\>

- New Either with mapped Right or original Left

#### Alias

mapOk

#### See

 - [mapOk](#mapok)
 - [map](EitherConstructor.md#mapright-1)

#### Alias

map

#### Example

```ts
either.mapRight(value => value + 1);
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`mapRight`](EitherConstructor.md#mapright)

***

### match()

> **match**\<`A`, `B`\>(`match`): `A` \| `B`

Defined in: dist/either.d.ts:750

#### Type Parameters

##### A

`A`

##### B

`B`

#### Parameters

##### match

\{ `left`: (`left`) => `A`; `right`: (`right`) => `B`; \} | \{ `err`: (`left`) => `A`; `ok`: (`right`) => `B`; \}

#### Returns

`A` \| `B`

#### Throws

MatchError

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`match`](EitherConstructor.md#match)

***

### move()

> **move**\<`T`\>(): `Right`\<`T`, `R`\>

Defined in: dist/either.d.ts:834

Should be used instead of
```js
return right(result.getRight())
```

Makes types correct without copying

#### Type Parameters

##### T

`T` = `never`

#### Returns

`Right`\<`T`, `R`\>

#### Example

```ts
return result.move()
```

***

### or()

> **or**(`x`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: dist/either.d.ts:501

Returns this Either if it is Right, otherwise returns the provided alternative Either.

#### Parameters

##### x

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Alternative Either to use if current is Left

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

- Current Either if Right, otherwise the alternative

#### Example

```ts
either.or(right(10));
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`or`](EitherConstructor.md#or)

***

### orAsync()

> **orAsync**(`factory`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>\>

Defined in: dist/either.d.ts:510

Returns this Either if it is Right, otherwise invokes a factory to produce an alternative asynchronously.

#### Parameters

##### factory

() => [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>\>

Function producing alternative Either

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>\>

- Current Either or asynchronously produced alternative

#### Example

```ts
await either.orAsync(() => Promise.resolve(right(10)));
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`orAsync`](EitherConstructor.md#orasync)

***

### orLazy()

> **orLazy**(`factory`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: dist/either.d.ts:519

Returns this Either if it is Right, otherwise invokes a factory to produce an alternative.

#### Parameters

##### factory

() => [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Function producing alternative Either

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

- Current Either if Right, otherwise alternative

#### Example

```ts
either.orLazy(() => right(10));
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`orLazy`](EitherConstructor.md#orlazy)

***

### pipe()

> **pipe**\<`T`, `P`\>(`pipe`, ...`parameters`): `T`

Defined in: dist/either.d.ts:531

Applies a function to this Either and returns the result.

#### Type Parameters

##### T

`T`

Result type

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

Extra parameters for the pipe

#### Parameters

##### pipe

[`Mapper`](../../../types/type-aliases/Mapper.md)\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>, `T`, `P`\>

Function to apply

##### parameters

...`P`

Additional parameters to pass to the pipe

#### Returns

`T`

- Result of applying the pipe

#### Example

```ts
either.pipe(e => e.isRight());
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`pipe`](EitherConstructor.md#pipe)

***

### promise()

> **promise**(): `Promise`\<`R`\>

Defined in: dist/either.d.ts:539

Converts Either to a Promise. If Left, throws; if Right, resolves the value.

#### Returns

`Promise`\<`R`\>

- Promise resolving to Right value or throwing Left

#### Example

```ts
const value = await either.promise();
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`promise`](EitherConstructor.md#promise)

***

### swap()

> **swap**(): [`Either`](../../type-aliases/Either.md)\<`R`, `L`\>

Defined in: dist/either.d.ts:547

Swaps the Left and Right values.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`R`, `L`\>

- Either with Left and Right swapped

#### Example

```ts
either.swap();
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`swap`](EitherConstructor.md#swap)

***

### tap()

> **tap**\<`P`\>(`callback`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: dist/either.d.ts:569

Applies a callback function to the contained right value if it exists.

#### Type Parameters

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

A tuple of parameters for the callback function.

#### Parameters

##### callback

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, `void`, `P`\>

The function to apply to the right value. It receives the right value and any additional parameters.

##### parameters

...`P`

Additional parameters to pass to the callback function.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

The original `Either` instance for chaining.

#### Example

```ts
const rightEither: Either<string, number> = right(5);
let tappedValue: number | undefined;
const resultRight = rightEither.tap((value) => { tappedValue = value * 2; });
console.log(tappedValue); // Output: 10
console.log(resultRight === rightEither); // Output: true

const leftEither: Either<string, number> = left('error');
tappedValue = undefined;
const resultLeft = leftEither.tap((value) => { tappedValue = value * 2; });
console.log(tappedValue); // Output: undefined
console.log(resultLeft === leftEither); // Output: true
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`tap`](EitherConstructor.md#tap)

***

### tapErr()

> **tapErr**\<`P`\>(`callback`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: dist/either.d.ts:615

Applies a callback function to the contained left value if it exists.

#### Type Parameters

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

A tuple of parameters for the callback function.

#### Parameters

##### callback

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`L`, `void`, `P`\>

The function to apply to the left value. It receives the left value and any additional parameters.

##### parameters

...`P`

Additional parameters to pass to the callback function.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

The original `Either` instance for chaining.

#### Alias

tapLeft

#### See

[tapLeft](#tapleft)

#### Example

```ts
const leftEither: Either<string, number> = left('warning');
let tappedWarning: string | undefined;
const resultLeft = leftEither.tapErr((warning) => { tappedWarning = `LOG: ${warning}`; });
console.log(tappedWarning); // Output: LOG: warning
console.log(resultLeft === leftEither); // Output: true

const rightEither: Either<string, number> = right(10);
tappedWarning = undefined;
const resultRight = rightEither.tapErr((warning) => { tappedWarning = `LOG: ${warning}`; });
console.log(tappedWarning); // Output: undefined
console.log(resultRight === rightEither); // Output: true
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`tapErr`](EitherConstructor.md#taperr)

***

### tapLeft()

> **tapLeft**\<`P`\>(`callback`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: dist/either.d.ts:591

Applies a callback function to the contained left value if it exists.

#### Type Parameters

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

A tuple of parameters for the callback function.

#### Parameters

##### callback

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`L`, `void`, `P`\>

The function to apply to the left value. It receives the left value and any additional parameters.

##### parameters

...`P`

Additional parameters to pass to the callback function.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

The original `Either` instance for chaining.

#### Example

```ts
const leftEither: Either<string, number> = left('error');
let tappedError: string | undefined;
const resultLeft = leftEither.tapLeft((error) => { tappedError = error.toUpperCase(); });
console.log(tappedError); // Output: ERROR
console.log(resultLeft === leftEither); // Output: true

const rightEither: Either<string, number> = right(5);
tappedError = undefined;
const resultRight = rightEither.tapLeft((error) => { tappedError = error.toUpperCase(); });
console.log(tappedError); // Output: undefined
console.log(resultRight === rightEither); // Output: true
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`tapLeft`](EitherConstructor.md#tapleft)

***

### throw()

> **throw**(): `R`

Defined in: dist/either.d.ts:634

Extracts the right value if it exists, otherwise throws an error.

#### Returns

`R`

The right value of the `Either`.

#### Throws

If the `Either` contains a left value.

#### Example

```ts
const rightEither: Either<string, number> = right(20);
const value = rightEither.throw();
console.log(value); // Output: 20

const leftEither: Either<string, number> = left('fatal error');
try {
leftEither.throw();
} catch (e) {
console.error(e); // Output: Error: No value
}
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`throw`](EitherConstructor.md#throw)

***

### toJSON()

> **toJSON**(): `Readonly`\<\{ `name`: `"Either"`; `right`: `R`; `type`: [`Right`](../../enumerations/EitherType.md#right); \}\>

Defined in: dist/either.d.ts:836

#### Returns

`Readonly`\<\{ `name`: `"Either"`; `right`: `R`; `type`: [`Right`](../../enumerations/EitherType.md#right); \}\>

***

### union()

> **union**(): `L` \| `R`

Defined in: dist/either.d.ts:647

Returns the contained value, whether it's the left or the right value.

#### Returns

`L` \| `R`

The left or right value of the `Either`.

#### Example

```ts
const rightEither: Either<string, number> = right(30);
console.log(rightEither.union()); // Output: 30

const leftEither: Either<string, number> = left('info');
console.log(leftEither.union()); // Output: info
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`union`](EitherConstructor.md#union)

***

### unwrap()

> **unwrap**(`message?`): `R`

Defined in: dist/either.d.ts:668

Extracts the right value if it exists, otherwise throws a custom error with the provided message.

#### Parameters

##### message?

`string`

The error message to use if the `Either` contains a left value.

#### Returns

`R`

The right value of the `Either`.

#### Throws

If the `Either` contains a left value.

#### Example

```ts
import { UnwrapCustomError } from './errors'; // Assuming UnwrapCustomError is defined elsewhere
const rightEither: Either<string, number> = right(40);
console.log(rightEither.unwrap()); // Output: 40

const leftEither: Either<string, number> = left('validation failed');
try {
  leftEither.unwrap('Something went wrong!');
} catch (e) {
  console.error(e.message); // Output: Something went wrong!
  console.error(e instanceof UnwrapCustomError); // Output: true
}
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`unwrap`](EitherConstructor.md#unwrap)

***

### unwrapOr()

> **unwrapOr**\<`T`\>(`value`): `R` \| `T`

Defined in: dist/either.d.ts:683

Extracts the right value if it exists, otherwise returns the provided default value.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

The default value to return if the `Either` contains a left value.

#### Returns

`R` \| `T`

The right value or the default value.

#### Example

```ts
const rightEither: Either<string, number> = right(50);
console.log(rightEither.unwrapOr(0)); // Output: 50

const leftEither: Either<string, number> = left('not found');
console.log(leftEither.unwrapOr(0)); // Output: 0
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`unwrapOr`](EitherConstructor.md#unwrapor)

***

### unwrapOrElse()

> **unwrapOrElse**\<`T`\>(`fallback`): `R` \| `T`

Defined in: dist/either.d.ts:698

Extracts the right value if it exists, otherwise returns the result of calling the provided fallback function with the left value.

#### Type Parameters

##### T

`T`

#### Parameters

##### fallback

(`value`) => `T`

The function to call with the left value to produce a fallback value.

#### Returns

`R` \| `T`

The right value or the result of the fallback function.

#### Example

```ts
const rightEither: Either<string, number> = right(60);
console.log(rightEither.unwrapOrElse((err) => err.length)); // Output: 60

const leftEither: Either<string, number> = left('database error');
console.log(leftEither.unwrapOrElse((err) => err.length)); // Output: 14
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`unwrapOrElse`](EitherConstructor.md#unwraporelse)

***

### value()

> **value**(): `L` \| `R`

Defined in: dist/either.d.ts:713

Returns the contained value, whether it's the left or the right value.

#### Returns

`L` \| `R`

The left or right value of the `Either`.

#### Alias

union

#### See

[union](#union)

#### Example

```ts
const rightEither: Either<string, number> = right(70);
console.log(rightEither.value()); // Output: 70

const leftEither: Either<string, number> = left('network issue');
console.log(leftEither.value()); // Output: network issue
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`value`](EitherConstructor.md#value)

***

### zip()

> **zip**\<`A`, `B`\>(`either`): [`Either`](../../type-aliases/Either.md)\<`L` \| `A`, [`Pair`](../../../types/type-aliases/Pair.md)\<`R`, `B`\>\>

Defined in: dist/either.d.ts:740

Combines this `Either` with another `Either`. If both are right, it returns a new `Either` with a pair of their right values. If either is left, it returns the left `Either`.

#### Type Parameters

##### A

`A`

##### B

`B`

#### Parameters

##### either

[`Either`](../../type-aliases/Either.md)\<`A`, `B`\>

The other `Either` to combine with.

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, [`Pair`](../../../types/type-aliases/Pair.md)\<`R`, `B`\>\>

A new `Either` containing a pair of the right values or the first encountered left value.

#### Example

```ts
import { right, left } from './either'; // Assuming right and left are defined elsewhere
type Pair<T, U> = [T, U];

const eitherA: Either<string, number> = right(80);
const eitherB: Either<boolean, string> = right('success');
const zippedRight: Either<string | boolean, Pair<number, string>> = eitherA.zip(eitherB);
console.log(zippedRight.value()); // Output: [ 80, 'success' ]

const eitherC: Either<string, number> = left('error in A');
const zippedLeftA: Either<string | boolean, Pair<number, string>> = eitherC.zip(eitherB);
console.log(zippedLeftA.value()); // Output: error in A

const eitherD: Either<string, number> = right(90);
const eitherE: Either<boolean, string> = left(true);
const zippedLeftB: Either<string | boolean, Pair<number, string>> = eitherD.zip(eitherE);
console.log(zippedLeftB.value()); // Output: true
```

#### Inherited from

[`EitherConstructor`](EitherConstructor.md).[`zip`](EitherConstructor.md#zip)

***

### create()

> `static` **create**\<`R`, `L`\>(`right`): `Right`\<`L`, `R`\>

Defined in: dist/either.d.ts:804

#### Type Parameters

##### R

`R`

##### L

`L` = `unknown`

#### Parameters

##### right

`R`

#### Returns

`Right`\<`L`, `R`\>
