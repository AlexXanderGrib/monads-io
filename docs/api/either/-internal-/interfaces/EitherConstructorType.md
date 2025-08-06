[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [either](../../README.md) / [\<internal\>](../README.md) / EitherConstructorType

# Interface: EitherConstructorType\<L, R\>

Defined in: dist/either.d.ts:11

## Type Parameters

### L

`L`

### R

`R`

## Methods

### andTee()

> **andTee**\<`P`\>(`callback`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: dist/either.d.ts:47

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

### andThen()

> **andThen**\<`A`, `B`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>

Defined in: dist/either.d.ts:24

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

***

### any()

> **any**\<`T`\>(`this`): `T`

Defined in: dist/either.d.ts:12

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

Defined in: dist/either.d.ts:13

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

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `B`\>

Defined in: dist/either.d.ts:14

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

***

### asyncAndThen()

> **asyncAndThen**\<`A`, `B`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>\>

Defined in: dist/either.d.ts:18

#### Type Parameters

##### A

`A`

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Awaited`\<`R`\>, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../../type-aliases/Either.md)\<`A`, `B`\>\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>\>

***

### asyncApply()

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

Defined in: dist/either.d.ts:15

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

[`Either`](../../type-aliases/Either.md)\<`L`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`A`\>\>

###### parameters

...`P`

##### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

Defined in: dist/either.d.ts:16

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

##### Parameters

###### this

[`Either`](../../type-aliases/Either.md)\<`L`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`A`\>\>

###### map

[`Either`](../../type-aliases/Either.md)\<`L`, [`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

###### parameters

...`P`

##### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

***

### asyncChain()

> **asyncChain**\<`A`, `B`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>\>

Defined in: dist/either.d.ts:17

#### Type Parameters

##### A

`A`

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Awaited`\<`R`\>, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../../type-aliases/Either.md)\<`A`, `B`\>\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>\>

***

### asyncMap()

> **asyncMap**\<`B`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

Defined in: dist/either.d.ts:19

#### Type Parameters

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Awaited`\<`R`\>, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

***

### asyncMapLeft()

> **asyncMapLeft**\<`A`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`A`, `R`\>\>

Defined in: dist/either.d.ts:20

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

***

### await()

> **await**\<`T`\>(`this`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `T`\>\>

Defined in: dist/either.d.ts:21

#### Type Parameters

##### T

`T`

#### Parameters

##### this

[`Either`](../../type-aliases/Either.md)\<`L`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`T`\>\>

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `T`\>\>

***

### biMap()

> **biMap**\<`A`, `B`\>(`mapLeft`, `mapRight`): [`Either`](../../type-aliases/Either.md)\<`A`, `B`\>

Defined in: dist/either.d.ts:22

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

Defined in: dist/either.d.ts:23

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

***

### chainErr()

> **chainErr**\<`A`, `B`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`A`, `R` \| `B`\>

Defined in: dist/either.d.ts:26

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

### chainLeft()

> **chainLeft**\<`A`, `B`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`A`, `R` \| `B`\>

Defined in: dist/either.d.ts:25

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

Defined in: dist/either.d.ts:27

#### Parameters

##### value

`R`

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

***

### flatten()

> **flatten**\<`L1`, `L2`, `R`\>(`this`): [`Either`](../../type-aliases/Either.md)\<`L1` \| `L2`, `R`\>

Defined in: dist/either.d.ts:34

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

***

### fold()

> **fold**\<`A`, `B`\>(`mapLeft`, `mapRight`): `A` \| `B`

Defined in: dist/either.d.ts:28

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

***

### isErr()

> **isErr**(): `this is Left<L, R>`

Defined in: dist/either.d.ts:29

#### Returns

`this is Left<L, R>`

***

### isLeft()

> **isLeft**(): `this is Left<L, R>`

Defined in: dist/either.d.ts:30

#### Returns

`this is Left<L, R>`

***

### isOk()

> **isOk**(): `this is Right<L, R>`

Defined in: dist/either.d.ts:31

#### Returns

`this is Right<L, R>`

***

### isRight()

> **isRight**(): `this is Right<L, R>`

Defined in: dist/either.d.ts:32

#### Returns

`this is Right<L, R>`

***

### join()

> **join**\<`L1`, `L2`, `R`\>(`this`): [`Either`](../../type-aliases/Either.md)\<`L1` \| `L2`, `R`\>

Defined in: dist/either.d.ts:33

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

***

### map()

> **map**\<`T`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `T`\>

Defined in: dist/either.d.ts:35

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

### mapErr()

> **mapErr**\<`T`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`T`, `R`\>

Defined in: dist/either.d.ts:37

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

### mapLeft()

> **mapLeft**\<`T`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`T`, `R`\>

Defined in: dist/either.d.ts:36

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

### mapOk()

> **mapOk**\<`T`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `T`\>

Defined in: dist/either.d.ts:39

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

### mapRight()

> **mapRight**\<`T`, `P`\>(`map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `T`\>

Defined in: dist/either.d.ts:38

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

Defined in: dist/either.d.ts:40

#### Parameters

##### x

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

***

### orAsync()

> **orAsync**(`factory`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>\>

Defined in: dist/either.d.ts:41

#### Parameters

##### factory

() => [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>\>

#### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>\>

***

### orLazy()

> **orLazy**(`factory`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: dist/either.d.ts:42

#### Parameters

##### factory

() => [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

#### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

***

### pipe()

> **pipe**\<`T`, `P`\>(`pipe`, ...`parameters`): `T`

Defined in: dist/either.d.ts:43

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

***

### promise()

> **promise**(): `Promise`\<`R`\>

Defined in: dist/either.d.ts:44

#### Returns

`Promise`\<`R`\>

***

### swap()

> **swap**(): [`Either`](../../type-aliases/Either.md)\<`R`, `L`\>

Defined in: dist/either.d.ts:45

#### Returns

[`Either`](../../type-aliases/Either.md)\<`R`, `L`\>

***

### tap()

> **tap**\<`P`\>(`callback`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: dist/either.d.ts:46

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

### tapErr()

> **tapErr**\<`P`\>(`callback`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: dist/either.d.ts:49

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

### tapLeft()

> **tapLeft**\<`P`\>(`callback`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `R`\>

Defined in: dist/either.d.ts:48

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

Defined in: dist/either.d.ts:50

#### Returns

`R`

***

### union()

> **union**(): `L` \| `R`

Defined in: dist/either.d.ts:51

#### Returns

`L` \| `R`

***

### unwrap()

> **unwrap**(`message?`): `R`

Defined in: dist/either.d.ts:52

#### Parameters

##### message?

`string`

#### Returns

`R`

***

### unwrapOr()

> **unwrapOr**\<`T`\>(`value`): `R` \| `T`

Defined in: dist/either.d.ts:53

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

#### Returns

`R` \| `T`

***

### unwrapOrElse()

> **unwrapOrElse**\<`T`\>(`fallback`): `R` \| `T`

Defined in: dist/either.d.ts:54

#### Type Parameters

##### T

`T`

#### Parameters

##### fallback

(`value`) => `T`

#### Returns

`R` \| `T`

***

### value()

> **value**(): `L` \| `R`

Defined in: dist/either.d.ts:55

#### Returns

`L` \| `R`

***

### zip()

> **zip**\<`A`, `B`\>(`either`): [`Either`](../../type-aliases/Either.md)\<`L` \| `A`, [`Pair`](../../../types/type-aliases/Pair.md)\<`R`, `B`\>\>

Defined in: dist/either.d.ts:56

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
