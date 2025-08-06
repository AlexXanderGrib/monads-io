[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [either.exports](../../README.md) / [\<internal\>](../README.md) / Right

# Class: Right\<L, R\>

Defined in: [either.ts:378](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L378)

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

> `private` **new Right**\<`L`, `R`\>(`right`): `Right`\<`L`, `R`\>

Defined in: [either.ts:433](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L433)

#### Parameters

##### right

`R`

#### Returns

`Right`\<`L`, `R`\>

#### Overrides

[`EitherConstructor`](EitherConstructor.md).[`constructor`](EitherConstructor.md#constructor)

## Properties

### ~~right~~

> `readonly` **right**: `R`

Defined in: [either.ts:393](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L393)

#### Deprecated

Should not be used directly, public only for serialization & type check use [getRight](#getright)

#### See

[getRight](#getright)

#### Memberof

Right

#### Implementation of

`__type`.`right`

## Accessors

### \[toStringTag\]

#### Get Signature

> **get** **\[toStringTag\]**(): [`Right`](../../enumerations/EitherType.md#right)

Defined in: [either.ts:395](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L395)

##### Returns

[`Right`](../../enumerations/EitherType.md#right)

***

### name

#### Get Signature

> **get** **name**(): `"Either"`

Defined in: [either.ts:399](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L399)

##### Returns

`"Either"`

#### Implementation of

`__type`.`name`

***

### type

#### Get Signature

> **get** **type**(): [`Right`](../../enumerations/EitherType.md#right)

Defined in: [either.ts:403](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L403)

##### Returns

[`Right`](../../enumerations/EitherType.md#right)

#### Implementation of

`__type`.`type`

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

#### Inherited from

[`<internal>`](../README.md).[`any`](../functions/any.md)

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

##### Inherited from

[`<internal>`](../README.md).[`apply`](../functions/apply.md)

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

##### Inherited from

[`<internal>`](../README.md).[`apply`](../functions/apply.md)

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

##### Inherited from

[`<internal>`](../README.md).[`asyncApply`](../functions/asyncApply.md)

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

##### Inherited from

[`<internal>`](../README.md).[`asyncApply`](../functions/asyncApply.md)

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

#### Inherited from

[`<internal>`](../README.md).[`asyncChain`](../functions/asyncChain.md)

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

#### Inherited from

[`<internal>`](../README.md).[`asyncMap`](../functions/asyncMap.md)

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

#### Inherited from

[`<internal>`](../README.md).[`await`](../functions/await.md)

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

#### Inherited from

[`<internal>`](../README.md).[`biMap`](../functions/biMap.md)

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

#### Inherited from

[`<internal>`](../README.md).[`chain`](../functions/chain.md)

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

#### Inherited from

[`<internal>`](../README.md).[`chainLeft`](../functions/chainLeft.md)

***

### default()

> **default**(`value`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: [either.ts:234](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L234)

#### Parameters

##### value

`R`

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

#### Inherited from

[`<internal>`](../README.md).[`default`](../functions/default.md)

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

#### Inherited from

[`<internal>`](../README.md).[`fold`](../functions/fold.md)

***

### getLeft()

> **getLeft**(): `undefined`

Defined in: [either.ts:411](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L411)

#### Returns

`undefined`

***

### getRight()

> **getRight**(): `R`

Defined in: [either.ts:407](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L407)

#### Returns

`R`

***

### isLeft()

> **isLeft**(): `this is Left<L, R>`

Defined in: [either.ts:68](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L68)

#### Returns

`this is Left<L, R>`

#### Inherited from

[`<internal>`](../README.md).[`isLeft`](../functions/isLeft.md)

***

### isRight()

> **isRight**(): `this is Right<L, R>`

Defined in: [either.ts:72](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L72)

#### Returns

`this is Right<L, R>`

#### Inherited from

[`<internal>`](../README.md).[`isRight`](../functions/isRight.md)

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

#### Inherited from

[`<internal>`](../README.md).[`join`](../functions/join.md)

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

#### Inherited from

[`<internal>`](../README.md).[`map`](../functions/map.md)

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

#### Inherited from

[`<internal>`](../README.md).[`mapLeft`](../functions/mapLeft.md)

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

#### Inherited from

[`<internal>`](../README.md).[`mapRight`](../functions/mapRight.md)

***

### move()

> **move**\<`T`\>(): `Right`\<`T`, `R`\>

Defined in: [either.ts:429](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L429)

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

Defined in: [either.ts:238](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L238)

#### Parameters

##### x

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

#### Inherited from

[`<internal>`](../README.md).[`or`](../functions/or.md)

***

### orAsync()

> **orAsync**(`factory`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>\>

Defined in: [either.ts:246](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L246)

#### Parameters

##### factory

() => [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>\>

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>\>

#### Inherited from

[`<internal>`](../README.md).[`orAsync`](../functions/orAsync.md)

***

### orLazy()

> **orLazy**(`factory`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: [either.ts:242](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L242)

#### Parameters

##### factory

() => [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

#### Inherited from

[`<internal>`](../README.md).[`orLazy`](../functions/orLazy.md)

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

#### Inherited from

[`<internal>`](../README.md).[`pipe`](../functions/pipe.md)

***

### promise()

> **promise**(): `Promise`\<`R`\>

Defined in: [either.ts:268](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L268)

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`<internal>`](../README.md).[`promise`](../functions/promise.md)

***

### swap()

> **swap**(): [`Either`](../../type-aliases/Either.md)\<`R`, `L`\>

Defined in: [either.ts:171](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L171)

#### Returns

[`Either`](../../type-aliases/Either.md)\<`R`, `L`\>

#### Inherited from

[`<internal>`](../README.md).[`swap`](../functions/swap.md)

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

#### Inherited from

[`<internal>`](../README.md).[`tap`](../functions/tap.md)

***

### throw()

> **throw**(): `R`

Defined in: [either.ts:277](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L277)

#### Returns

`R`

- Right value if current state is Right,

#### Throws

- [L](EitherConstructor.md#constructoreitherconstructorl) if current state is Left

#### Inherited from

[`<internal>`](../README.md).[`throw`](../functions/throw.md)

***

### toJSON()

> **toJSON**(): [`SerializedRight`](../type-aliases/SerializedRight.md)\<`R`\>

Defined in: [either.ts:439](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L439)

#### Returns

[`SerializedRight`](../type-aliases/SerializedRight.md)\<`R`\>

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

- [UnwrapCustomError](../../../index/classes/UnwrapCustomError.md) is Left with provided [message](#unwrap-1)

#### Inherited from

[`<internal>`](../README.md).[`unwrap`](../functions/unwrap.md)

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

#### Inherited from

[`<internal>`](../README.md).[`unwrapOr`](../functions/unwrapOr.md)

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

#### Inherited from

[`<internal>`](../README.md).[`unwrapOrElse`](../functions/unwrapOrElse.md)

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

#### Inherited from

[`<internal>`](../README.md).[`value`](../functions/value.md)

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

#### Inherited from

[`<internal>`](../README.md).[`zip`](../functions/zip.md)

***

### create()

> `static` **create**\<`R`, `L`\>(`right`): `Right`\<`L`, `R`\>

Defined in: [either.ts:382](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L382)

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
