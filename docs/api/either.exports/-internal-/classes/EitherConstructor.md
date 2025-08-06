[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [either.exports](../../README.md) / [\<internal\>](../README.md) / EitherConstructor

# Class: EitherConstructor\<L, R\>

Defined in: [either.ts:50](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L50)

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

Defined in: [either.ts:292](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L292)

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

Defined in: [either.ts:109](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L109)

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

Defined in: [either.ts:114](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L114)

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

Defined in: [either.ts:139](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L139)

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

Defined in: [either.ts:144](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L144)

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

Defined in: [either.ts:193](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L193)

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

Defined in: [either.ts:201](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L201)

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

Defined in: [either.ts:207](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L207)

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

Defined in: [either.ts:189](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L189)

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

Defined in: [either.ts:175](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L175)

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

Defined in: [either.ts:182](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L182)

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

Defined in: [either.ts:234](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L234)

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

Defined in: [either.ts:221](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L221)

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

> **isLeft**(): `this is Left<L, R>`

Defined in: [either.ts:68](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L68)

#### Returns

`this is Left<L, R>`

***

### isRight()

> **isRight**(): `this is Right<L, R>`

Defined in: [either.ts:72](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L72)

#### Returns

`this is Right<L, R>`

***

### join()

> **join**\<`L1`, `L2`, `R`\>(`this`): [`Either`](../../type-aliases/Either.md)\<`L1` \| `L2`, `R`\>

Defined in: [either.ts:84](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L84)

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

Defined in: [either.ts:95](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L95)

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

Defined in: [either.ts:88](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L88)

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

Defined in: [either.ts:102](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L102)

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

Defined in: [either.ts:238](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L238)

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

Defined in: [either.ts:246](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L246)

#### Parameters

##### factory

() => [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>\>

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>\>

***

### orLazy()

> **orLazy**(`factory`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: [either.ts:242](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L242)

#### Parameters

##### factory

() => [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

***

### pipe()

> **pipe**\<`T`, `P`\>(`pipe`, ...`parameters`): `T`

Defined in: [either.ts:61](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L61)

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

Defined in: [either.ts:268](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L268)

#### Returns

`Promise`\<`R`\>

***

### swap()

> **swap**(): [`Either`](../../type-aliases/Either.md)\<`R`, `L`\>

Defined in: [either.ts:171](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L171)

#### Returns

[`Either`](../../type-aliases/Either.md)\<`R`, `L`\>

***

### tap()

> **tap**\<`P`\>(`callback`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: [either.ts:53](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L53)

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

### throw()

> **throw**(): `R`

Defined in: [either.ts:277](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L277)

#### Returns

`R`

- Right value if current state is Right,

#### Throws

- [L](#constructoreitherconstructorl) if current state is Left

***

### ~~unwrap()~~

> **unwrap**(`message?`): `R`

Defined in: [either.ts:264](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L264)

#### Parameters

##### message?

`string` = `UnwrapCustomError.Messages.EITHER_IS_LEFT`

Error message, if either is left. By default "Either state is Left"

#### Returns

`R`

- Right value of Either, if right

#### Deprecated

- **If Left value is Error use [throw](../functions/throw.md) instead**

#### Throws

- [UnwrapCustomError](../../../index/classes/UnwrapCustomError.md) is Left with provided [message](Right.md#unwrap-1)

#### Implementation of

[`Container`](../../../types/interfaces/Container.md).[`unwrap`](../../../types/interfaces/Container.md#unwrap)

***

### unwrapOr()

> **unwrapOr**\<`T`\>(`value`): `R` \| `T`

Defined in: [either.ts:80](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L80)

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

Defined in: [either.ts:76](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L76)

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

Defined in: [either.ts:288](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L288)

Return value of Either independent if it is Right or Left

#### Returns

`L` \| `R`

#### Deprecated

- probably should not be used, please refactor code or use [fold](../functions/fold.md)

#### See

[fold](../functions/fold.md)

***

### zip()

> **zip**\<`A`, `B`\>(`either`): [`Either`](../../type-aliases/Either.md)\<`L` \| `A`, [`Pair`](../../../types/type-aliases/Pair.md)\<`R`, `B`\>\>

Defined in: [either.ts:252](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L252)

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
