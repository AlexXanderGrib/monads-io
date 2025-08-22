[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [either.exports](../../README.md) / [\<internal\>](../README.md) / EitherConstructor

# Class: EitherConstructor\<L, R\>

Defined in: [either.ts:57](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L57)

## Extended by

- [`Right`](Right.md)
- [`Left`](Left.md)

## Type Parameters

### L

`L`

### R

`R`

## Implements

- [`AsyncMonad`](../../../types/interfaces/AsyncMonad.md)\<`R`\>
- [`Alternative`](../../../types/interfaces/Alternative.md)\<`R`\>
- [`Container`](../../../types/interfaces/Container.md)\<`R`\>
- [`Pipe`](../../../types/interfaces/Pipe.md)

## Constructors

### Constructor

> **new EitherConstructor**\<`L`, `R`\>(): `EitherConstructor`\<`L`, `R`\>

#### Returns

`EitherConstructor`\<`L`, `R`\>

## Methods

### any()

> **any**\<`T`\>(`this`): `T`

Defined in: [either.ts:313](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L313)

#### Type Parameters

##### T

`T`

#### Parameters

##### this

[`Either`](../../type-aliases/Either.md)\<`T`, `T`\>

#### Returns

`T`

***

### apply()

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `B`\>

Defined in: [either.ts:130](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L130)

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

##### Parameters

###### this

[`Either`](../../type-aliases/Either.md)\<`L`, [`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

###### argument

[`Either`](../../type-aliases/Either.md)\<`L`, `A`\>

###### parameters

...`P`

##### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>

##### Implementation of

[`AsyncMonad`](../../../types/interfaces/AsyncMonad.md).[`apply`](../../../types/interfaces/AsyncMonad.md#apply)

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `B`\>

Defined in: [either.ts:135](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L135)

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

##### Parameters

###### this

[`Either`](../../type-aliases/Either.md)\<`L`, `A`\>

###### map

[`Either`](../../type-aliases/Either.md)\<`L`, [`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

###### parameters

...`P`

##### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>

##### Implementation of

[`AsyncMonad`](../../../types/interfaces/AsyncMonad.md).[`apply`](../../../types/interfaces/AsyncMonad.md#apply)

***

### asyncApply()

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

Defined in: [either.ts:160](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L160)

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

##### Parameters

###### this

[`Either`](../../type-aliases/Either.md)\<`L`, [`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

###### argument

[`Either`](../../type-aliases/Either.md)\<`L`, `A`\>

###### parameters

...`P`

##### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

Defined in: [either.ts:165](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L165)

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

##### Parameters

###### this

[`Either`](../../type-aliases/Either.md)\<`L`, `A`\>

###### map

[`Either`](../../type-aliases/Either.md)\<`L`, [`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

###### parameters

...`P`

##### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

***

### asyncChain()

> **asyncChain**\<`A`, `B`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>\>

Defined in: [either.ts:214](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L214)

#### Type Parameters

##### A

`A`

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../../type-aliases/Either.md)\<`A`, `B`\>\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>\>

#### Implementation of

[`AsyncMonad`](../../../types/interfaces/AsyncMonad.md).[`asyncChain`](../../../types/interfaces/AsyncMonad.md#asyncchain)

***

### asyncMap()

> **asyncMap**\<`A`, `B`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>\>

Defined in: [either.ts:222](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L222)

#### Type Parameters

##### A

`A`

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>\>

***

### await()

> **await**\<`T`\>(`this`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `T`\>\>

Defined in: [either.ts:228](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L228)

#### Type Parameters

##### T

`T`

#### Parameters

##### this

[`Either`](../../type-aliases/Either.md)\<`L`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`T`\>\>

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `T`\>\>

#### Implementation of

[`AsyncMonad`](../../../types/interfaces/AsyncMonad.md).[`await`](../../../types/interfaces/AsyncMonad.md#await)

***

### biMap()

> **biMap**\<`A`, `B`\>(`mapLeft`, `mapRight`): [`Either`](../../type-aliases/Either.md)\<`A`, `B`\>

Defined in: [either.ts:210](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L210)

#### Type Parameters

##### A

`A`

##### B

`B`

#### Parameters

##### mapLeft

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`L`, `A`\>

##### mapRight

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, `B`\>

#### Returns

[`Either`](../../type-aliases/Either.md)\<`A`, `B`\>

***

### chain()

> **chain**\<`A`, `B`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>

Defined in: [either.ts:196](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L196)

#### Type Parameters

##### A

`A`

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, [`Either`](../../type-aliases/Either.md)\<`A`, `B`\>, `P`\>

##### parameters

...`P`

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>

#### Implementation of

[`AsyncMonad`](../../../types/interfaces/AsyncMonad.md).[`chain`](../../../types/interfaces/AsyncMonad.md#chain)

***

### chainLeft()

> **chainLeft**\<`A`, `B`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`A`, `R` \| `B`\>

Defined in: [either.ts:203](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L203)

#### Type Parameters

##### A

`A`

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`L`, [`Either`](../../type-aliases/Either.md)\<`A`, `B`\>, `P`\>

##### parameters

...`P`

#### Returns

[`Either`](../../type-aliases/Either.md)\<`A`, `R` \| `B`\>

***

### default()

> **default**(`value`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: [either.ts:255](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L255)

#### Parameters

##### value

`R`

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

#### Implementation of

[`Alternative`](../../../types/interfaces/Alternative.md).[`default`](../../../types/interfaces/Alternative.md#default)

***

### fold()

> **fold**\<`A`, `B`\>(`mapLeft`, `mapRight`): `A` \| `B`

Defined in: [either.ts:242](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L242)

#### Type Parameters

##### A

`A`

##### B

`B` = `A`

#### Parameters

##### mapLeft

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`L`, `A`\>

##### mapRight

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, `B`\>

#### Returns

`A` \| `B`

#### Throws

- [InvalidStateError](../../../index/classes/InvalidStateError.md) if Either state is neither Left neither Right, this probably should never happen

***

### isLeft()

#### Call Signature

> **isLeft**\<`T`\>(`predicate`): `this is Left<T, R>`

Defined in: [either.ts:83](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L83)

##### Type Parameters

###### T

`T`

##### Parameters

###### predicate

(`left`) => `left is T`

##### Returns

`this is Left<T, R>`

#### Call Signature

> **isLeft**(`predicate?`): `this is Left<L, R>`

Defined in: [either.ts:84](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L84)

##### Parameters

###### predicate?

(`left`) => `boolean`

##### Returns

`this is Left<L, R>`

***

### isRight()

#### Call Signature

> **isRight**\<`T`\>(`predicate?`): `this is Right<L, T>`

Defined in: [either.ts:89](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L89)

##### Type Parameters

###### T

`T`

##### Parameters

###### predicate?

(`right`) => `right is T`

##### Returns

`this is Right<L, T>`

#### Call Signature

> **isRight**(`predicate?`): `this is Right<L, R>`

Defined in: [either.ts:92](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L92)

##### Parameters

###### predicate?

(`right`) => `boolean`

##### Returns

`this is Right<L, R>`

***

### join()

> **join**\<`L1`, `L2`, `R`\>(`this`): [`Either`](../../type-aliases/Either.md)\<`L1` \| `L2`, `R`\>

Defined in: [either.ts:105](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L105)

#### Type Parameters

##### L1

`L1`

##### L2

`L2`

##### R

`R`

#### Parameters

##### this

[`Either`](../../type-aliases/Either.md)\<`L1`, [`Either`](../../type-aliases/Either.md)\<`L2`, `R`\>\>

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L1` \| `L2`, `R`\>

#### Implementation of

[`AsyncMonad`](../../../types/interfaces/AsyncMonad.md).[`join`](../../../types/interfaces/AsyncMonad.md#join)

***

### map()

> **map**\<`T`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `T`\>

Defined in: [either.ts:116](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L116)

#### Type Parameters

##### T

`T`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, `T`, `P`\>

##### parameters

...`P`

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `T`\>

#### Implementation of

[`AsyncMonad`](../../../types/interfaces/AsyncMonad.md).[`map`](../../../types/interfaces/AsyncMonad.md#map)

***

### mapLeft()

> **mapLeft**\<`T`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`T`, `R`\>

Defined in: [either.ts:109](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L109)

#### Type Parameters

##### T

`T`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`L`, `T`, `P`\>

##### parameters

...`P`

#### Returns

[`Either`](../../type-aliases/Either.md)\<`T`, `R`\>

***

### mapRight()

> **mapRight**\<`T`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `T`\>

Defined in: [either.ts:123](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L123)

#### Type Parameters

##### T

`T`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, `T`, `P`\>

##### parameters

...`P`

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `T`\>

***

### or()

> **or**(`x`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: [either.ts:259](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L259)

#### Parameters

##### x

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

#### Implementation of

[`Alternative`](../../../types/interfaces/Alternative.md).[`or`](../../../types/interfaces/Alternative.md#or)

***

### orAsync()

> **orAsync**(`factory`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>\>

Defined in: [either.ts:267](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L267)

#### Parameters

##### factory

() => [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>\>

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>\>

***

### orLazy()

> **orLazy**(`factory`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: [either.ts:263](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L263)

#### Parameters

##### factory

() => [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

***

### pipe()

> **pipe**\<`T`, `P`\>(`pipe`, ...`parameters`): `T`

Defined in: [either.ts:76](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L76)

#### Type Parameters

##### T

`T`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### pipe

[`Mapper`](../../../types/type-aliases/Mapper.md)\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>, `T`, `P`\>

##### parameters

...`P`

#### Returns

`T`

#### Implementation of

[`Pipe`](../../../types/interfaces/Pipe.md).[`pipe`](../../../types/interfaces/Pipe.md#pipe)

***

### promise()

> **promise**(): `Promise`\<`R`\>

Defined in: [either.ts:289](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L289)

#### Returns

`Promise`\<`R`\>

***

### swap()

> **swap**(): [`Either`](../../type-aliases/Either.md)\<`R`, `L`\>

Defined in: [either.ts:192](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L192)

#### Returns

[`Either`](../../type-aliases/Either.md)\<`R`, `L`\>

***

### tap()

> **tap**\<`P`\>(`callback`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: [either.ts:60](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L60)

#### Type Parameters

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### callback

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, `void`, `P`\>

##### parameters

...`P`

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

***

### tapLeft()

> **tapLeft**\<`P`\>(`callback`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: [either.ts:68](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L68)

#### Type Parameters

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### callback

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`L`, `void`, `P`\>

##### parameters

...`P`

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

***

### throw()

> **throw**(): `R`

Defined in: [either.ts:298](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L298)

#### Returns

`R`

- Right value if current state is Right,

#### Throws

- [L](#constructoreitherconstructorl) if current state is Left

***

### ~~unwrap()~~

> **unwrap**(`message?`): `R`

Defined in: [either.ts:285](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L285)

#### Parameters

##### message?

`string` = `UnwrapCustomError.Messages.EITHER_IS_LEFT`

Error message, if either is left. By default "Either state is Left"

#### Returns

`R`

- Right value of Either, if right

#### Deprecated

- **If Left value is Error use [throw](#throw) instead**

#### Throws

- [UnwrapCustomError](../../../index/classes/UnwrapCustomError.md) is Left with provided [message](Right.md#unwrap-1)

#### Implementation of

[`Container`](../../../types/interfaces/Container.md).[`unwrap`](../../../types/interfaces/Container.md#unwrap)

***

### unwrapOr()

> **unwrapOr**\<`T`\>(`value`): `R` \| `T`

Defined in: [either.ts:101](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L101)

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

#### Returns

`R` \| `T`

#### Implementation of

[`Container`](../../../types/interfaces/Container.md).[`unwrapOr`](../../../types/interfaces/Container.md#unwrapor)

***

### unwrapOrElse()

> **unwrapOrElse**\<`T`\>(`fallback`): `R` \| `T`

Defined in: [either.ts:97](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L97)

#### Type Parameters

##### T

`T`

#### Parameters

##### fallback

(`value`) => `T`

#### Returns

`R` \| `T`

***

### ~~value()~~

> **value**(): `L` \| `R`

Defined in: [either.ts:309](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L309)

Return value of Either independent if it is Right or Left

#### Returns

`L` \| `R`

#### Deprecated

- probably should not be used, please refactor code or use [fold](#fold)

#### See

[fold](#fold)

***

### zip()

> **zip**\<`A`, `B`\>(`either`): [`Either`](../../type-aliases/Either.md)\<`L` \| `A`, [`Pair`](../../../types/type-aliases/Pair.md)\<`R`, `B`\>\>

Defined in: [either.ts:273](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L273)

#### Type Parameters

##### A

`A`

##### B

`B`

#### Parameters

##### either

[`Either`](../../type-aliases/Either.md)\<`A`, `B`\>

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, [`Pair`](../../../types/type-aliases/Pair.md)\<`R`, `B`\>\>
