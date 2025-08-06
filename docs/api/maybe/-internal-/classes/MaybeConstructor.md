[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [maybe](../../README.md) / [\<internal\>](../README.md) / MaybeConstructor

# Class: MaybeConstructor\<T\>

Defined in: dist/maybe.d.ts:13

## Extended by

- [`Just`](Just.md)
- [`None`](None.md)

## Type Parameters

### T

`T`

## Implements

- [`Monad`](../../../types/interfaces/Monad.md)\<`T`\>
- [`Alternative`](../../../types/interfaces/Alternative.md)\<`T`\>
- [`Container`](../../../types/interfaces/Container.md)\<`T`\>
- [`Pipe`](../../../types/interfaces/Pipe.md)

## Constructors

### Constructor

> **new MaybeConstructor**\<`T`\>(): `MaybeConstructor`\<`T`\>

#### Returns

`MaybeConstructor`\<`T`\>

## Methods

### andTee()

> **andTee**\<`P`\>(`callback`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: dist/maybe.d.ts:16

#### Type Parameters

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### callback

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`T`, `void`, `P`\>

##### parameters

...`P`

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

***

### andThen()

> **andThen**\<`A`, `P`\>(`map`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`A`\>

Defined in: dist/maybe.d.ts:15

#### Type Parameters

##### A

`A`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`T`, [`Maybe`](../../type-aliases/Maybe.md)\<`A`\>, `P`\>

##### parameters

...`P`

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>

***

### apply()

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`B`\>

Defined in: dist/maybe.d.ts:25

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

##### Parameters

###### this

[`Maybe`](../../type-aliases/Maybe.md)\<[`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

###### argument

[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>

###### parameters

...`P`

##### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>

##### Implementation of

[`Monad`](../../../types/interfaces/Monad.md).[`apply`](../../../types/interfaces/Monad.md#apply)

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`B`\>

Defined in: dist/maybe.d.ts:26

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

##### Parameters

###### this

[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>

###### argument

[`Maybe`](../../type-aliases/Maybe.md)\<[`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

###### parameters

...`P`

##### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>

##### Implementation of

[`Monad`](../../../types/interfaces/Monad.md).[`apply`](../../../types/interfaces/Monad.md#apply)

***

### asyncAndThen()

> **asyncAndThen**\<`A`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>\>

Defined in: dist/maybe.d.ts:14

#### Type Parameters

##### A

`A`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Awaited`\<`T`\>, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>\>

***

### asyncApply()

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>\>

Defined in: dist/maybe.d.ts:42

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

##### Parameters

###### this

[`Maybe`](../../type-aliases/Maybe.md)\<[`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

###### argument

[`Maybe`](../../type-aliases/Maybe.md)\<[`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`A`\>\>

###### parameters

...`P`

##### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>\>

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>\>

Defined in: dist/maybe.d.ts:43

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

##### Parameters

###### this

[`Maybe`](../../type-aliases/Maybe.md)\<[`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`A`\>\>

###### map

[`Maybe`](../../type-aliases/Maybe.md)\<[`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

###### parameters

...`P`

##### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>\>

***

### asyncChain()

> **asyncChain**\<`A`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>\>

Defined in: dist/maybe.d.ts:39

#### Type Parameters

##### A

`A`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Awaited`\<`T`\>, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>\>

***

### asyncMap()

> **asyncMap**\<`A`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>\>

Defined in: dist/maybe.d.ts:40

#### Type Parameters

##### A

`A`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Awaited`\<`T`\>, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`A`\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>\>

***

### await()

> **await**\<`A`\>(`this`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>\>

Defined in: dist/maybe.d.ts:41

#### Type Parameters

##### A

`A`

#### Parameters

##### this

[`Maybe`](../../type-aliases/Maybe.md)\<[`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`A`\>\>

#### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>\>

***

### chain()

> **chain**\<`V`, `P`\>(`map`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

Defined in: dist/maybe.d.ts:29

#### Type Parameters

##### V

`V`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`T`, [`Maybe`](../../type-aliases/Maybe.md)\<`V`\>, `P`\>

##### parameters

...`P`

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

#### Implementation of

[`Monad`](../../../types/interfaces/Monad.md).[`chain`](../../../types/interfaces/Monad.md#chain)

***

### default()

> **default**(`value`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: dist/maybe.d.ts:30

#### Parameters

##### value

`T`

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Implementation of

[`Alternative`](../../../types/interfaces/Alternative.md).[`default`](../../../types/interfaces/Alternative.md#default)

***

### filter()

#### Call Signature

> **filter**\<`A`\>(`filter`): [`Maybe`](../../type-aliases/Maybe.md)\<`A`\>

Defined in: dist/maybe.d.ts:27

##### Type Parameters

###### A

`A`

##### Parameters

###### filter

(`input`) => `input is A`

##### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>

#### Call Signature

> **filter**(`filter`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: dist/maybe.d.ts:28

##### Parameters

###### filter

(`input`) => `boolean`

##### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

***

### flatMap()

> **flatMap**\<`A`, `P`\>(`map`, ...`parameters`): `undefined` \| `A`

Defined in: dist/maybe.d.ts:36

#### Type Parameters

##### A

`A`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`T`, `A`, `P`\>

##### parameters

...`P`

#### Returns

`undefined` \| `A`

***

### fold()

> **fold**\<`A`, `B`\>(`mapNone`, `mapJust`): `A` \| `B`

Defined in: dist/maybe.d.ts:38

#### Type Parameters

##### A

`A`

##### B

`B` = `A`

#### Parameters

##### mapNone

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`void`, `B`\>

##### mapJust

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`T`, `A`\>

#### Returns

`A` \| `B`

***

### isJust()

> **isJust**(): `this is Just<T>`

Defined in: dist/maybe.d.ts:19

#### Returns

`this is Just<T>`

***

### isNone()

> **isNone**(): `this is None<T>`

Defined in: dist/maybe.d.ts:20

#### Returns

`this is None<T>`

***

### join()

> **join**\<`A`\>(`this`): [`Maybe`](../../type-aliases/Maybe.md)\<`A`\>

Defined in: dist/maybe.d.ts:21

#### Type Parameters

##### A

`A`

#### Parameters

##### this

[`Maybe`](../../type-aliases/Maybe.md)\<[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>

#### Implementation of

[`Monad`](../../../types/interfaces/Monad.md).[`join`](../../../types/interfaces/Monad.md#join)

***

### map()

> **map**\<`V`, `P`\>(`map`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

Defined in: dist/maybe.d.ts:23

#### Type Parameters

##### V

`V`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`T`, `V`, `P`\>

##### parameters

...`P`

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

#### Implementation of

[`Monad`](../../../types/interfaces/Monad.md).[`map`](../../../types/interfaces/Monad.md#map)

***

### mapNullable()

> **mapNullable**\<`V`, `P`\>(`map`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

Defined in: dist/maybe.d.ts:24

#### Type Parameters

##### V

`V`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`T`, `undefined` \| `null` \| `V`, `P`\>

##### parameters

...`P`

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

***

### or()

> **or**(`x`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: dist/maybe.d.ts:31

#### Parameters

##### x

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Implementation of

[`Alternative`](../../../types/interfaces/Alternative.md).[`or`](../../../types/interfaces/Alternative.md#or)

***

### orAsync()

> **orAsync**(`factory`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

Defined in: dist/maybe.d.ts:33

#### Parameters

##### factory

() => [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

#### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

***

### orLazy()

> **orLazy**(`factory`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: dist/maybe.d.ts:32

#### Parameters

##### factory

() => [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

***

### pipe()

> **pipe**\<`A`, `P`\>(`pipe`, ...`parameters`): `A`

Defined in: dist/maybe.d.ts:22

#### Type Parameters

##### A

`A`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### pipe

[`Mapper`](../../../types/type-aliases/Mapper.md)\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>, `A`, `P`\>

##### parameters

...`P`

#### Returns

`A`

#### Implementation of

[`Pipe`](../../../types/interfaces/Pipe.md).[`pipe`](../../../types/interfaces/Pipe.md#pipe)

***

### tap()

> **tap**\<`P`\>(`callback`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: dist/maybe.d.ts:35

#### Type Parameters

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### callback

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`T`, `void`, `P`\>

##### parameters

...`P`

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

***

### unwrap()

> **unwrap**(`message?`): `T`

Defined in: dist/maybe.d.ts:37

#### Parameters

##### message?

`string`

#### Returns

`T`

#### Implementation of

[`Container`](../../../types/interfaces/Container.md).[`unwrap`](../../../types/interfaces/Container.md#unwrap)

***

### unwrapOr()

> **unwrapOr**\<`A`\>(`value`): `T` \| `A`

Defined in: dist/maybe.d.ts:17

#### Type Parameters

##### A

`A`

#### Parameters

##### value

`A`

#### Returns

`T` \| `A`

#### Implementation of

[`Container`](../../../types/interfaces/Container.md).[`unwrapOr`](../../../types/interfaces/Container.md#unwrapor)

***

### unwrapOrElse()

> **unwrapOrElse**\<`A`\>(`value`): `T` \| `A`

Defined in: dist/maybe.d.ts:18

#### Type Parameters

##### A

`A`

#### Parameters

##### value

() => `A`

#### Returns

`T` \| `A`

***

### zip()

> **zip**\<`A`\>(`maybe`): [`Maybe`](../../type-aliases/Maybe.md)\<[`Pair`](../../../types/type-aliases/Pair.md)\<`T`, `A`\>\>

Defined in: dist/maybe.d.ts:34

#### Type Parameters

##### A

`A`

#### Parameters

##### maybe

[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<[`Pair`](../../../types/type-aliases/Pair.md)\<`T`, `A`\>\>
