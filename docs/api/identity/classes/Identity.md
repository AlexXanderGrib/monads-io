[**Package**](../../README.md)

***

[Package](../../modules.md) / [identity](../README.md) / Identity

# Class: Identity\<T\>

Defined in: dist/identity.d.ts:3

## Type Parameters

### T

`T`

## Implements

- [`AsyncMonad`](../../types/interfaces/AsyncMonad.md)\<`T`\>
- [`Container`](../../types/interfaces/Container.md)\<`T`\>
- [`Pipe`](../../types/interfaces/Pipe.md)

## Constructors

### Constructor

> `private` **new Identity**\<`T`\>(): `Identity`\<`T`\>

Defined in: dist/identity.d.ts:8

#### Returns

`Identity`\<`T`\>

## Properties

### value

> `readonly` **value**: `T`

Defined in: dist/identity.d.ts:4

## Accessors

### \[toStringTag\]

#### Get Signature

> **get** **\[toStringTag\]**(): `"Identity"`

Defined in: dist/identity.d.ts:6

##### Returns

`"Identity"`

***

### name

#### Get Signature

> **get** **name**(): `"Identity"`

Defined in: dist/identity.d.ts:7

##### Returns

`"Identity"`

## Methods

### andTee()

> **andTee**\<`P`\>(`callback`, ...`parameters`): `Identity`\<`T`\>

Defined in: dist/identity.d.ts:11

#### Type Parameters

##### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

#### Parameters

##### callback

[`Mapper`](../../types/type-aliases/Mapper.md)\<`T`, `void`, `P`\>

##### parameters

...`P`

#### Returns

`Identity`\<`T`\>

***

### andThen()

> **andThen**\<`B`, `P`\>(`map`, ...`parameters`): `Identity`\<`B`\>

Defined in: dist/identity.d.ts:10

#### Type Parameters

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../types/type-aliases/Mapper.md)\<`T`, `Identity`\<`B`\>, `P`\>

##### parameters

...`P`

#### Returns

`Identity`\<`B`\>

***

### apply()

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): `Identity`\<`B`\>

Defined in: dist/identity.d.ts:19

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

##### Parameters

###### this

`Identity`\<[`Mapper`](../../types/type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

###### argument

`Identity`\<`A`\>

###### parameters

...`P`

##### Returns

`Identity`\<`B`\>

##### Implementation of

[`AsyncMonad`](../../types/interfaces/AsyncMonad.md).[`apply`](../../types/interfaces/AsyncMonad.md#apply)

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): `Identity`\<`B`\>

Defined in: dist/identity.d.ts:20

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

##### Parameters

###### this

`Identity`\<`A`\>

###### map

`Identity`\<[`Mapper`](../../types/type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

###### parameters

...`P`

##### Returns

`Identity`\<`B`\>

##### Implementation of

[`AsyncMonad`](../../types/interfaces/AsyncMonad.md).[`apply`](../../types/interfaces/AsyncMonad.md#apply)

***

### asyncAndThen()

> **asyncAndThen**\<`B`, `P`\>(`map`, ...`parameters`): `Promise`\<`Identity`\<`B`\>\>

Defined in: dist/identity.d.ts:9

#### Type Parameters

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../types/type-aliases/Mapper.md)\<`Awaited`\<`T`\>, [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`Identity`\<`B`\>\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<`Identity`\<`B`\>\>

***

### asyncApply()

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): `Promise`\<`Identity`\<`B`\>\>

Defined in: dist/identity.d.ts:21

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

##### Parameters

###### this

`Identity`\<[`Mapper`](../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

###### argument

`Identity`\<[`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`A`\>\>

###### parameters

...`P`

##### Returns

`Promise`\<`Identity`\<`B`\>\>

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): `Promise`\<`Identity`\<`B`\>\>

Defined in: dist/identity.d.ts:22

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

##### Parameters

###### this

`Identity`\<[`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`A`\>\>

###### map

`Identity`\<[`Mapper`](../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

###### parameters

...`P`

##### Returns

`Promise`\<`Identity`\<`B`\>\>

***

### asyncChain()

> **asyncChain**\<`B`, `P`\>(`map`, ...`parameters`): `Promise`\<`Identity`\<`B`\>\>

Defined in: dist/identity.d.ts:24

#### Type Parameters

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../types/type-aliases/Mapper.md)\<`Awaited`\<`T`\>, [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`Identity`\<`B`\>\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<`Identity`\<`B`\>\>

#### Implementation of

[`AsyncMonad`](../../types/interfaces/AsyncMonad.md).[`asyncChain`](../../types/interfaces/AsyncMonad.md#asyncchain)

***

### asyncMap()

> **asyncMap**\<`B`, `P`\>(`map`, ...`parameters`): `Promise`\<`Identity`\<`B`\>\>

Defined in: dist/identity.d.ts:25

#### Type Parameters

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../types/type-aliases/Mapper.md)\<`Awaited`\<`T`\>, [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<`Identity`\<`B`\>\>

***

### await()

> **await**\<`X`\>(`this`): `Promise`\<`Identity`\<`X`\>\>

Defined in: dist/identity.d.ts:26

#### Type Parameters

##### X

`X`

#### Parameters

##### this

`Identity`\<[`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`X`\>\>

#### Returns

`Promise`\<`Identity`\<`X`\>\>

#### Implementation of

[`AsyncMonad`](../../types/interfaces/AsyncMonad.md).[`await`](../../types/interfaces/AsyncMonad.md#await)

***

### chain()

> **chain**\<`B`, `P`\>(`map`, ...`parameters`): `Identity`\<`B`\>

Defined in: dist/identity.d.ts:23

#### Type Parameters

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../types/type-aliases/Mapper.md)\<`T`, `Identity`\<`B`\>, `P`\>

##### parameters

...`P`

#### Returns

`Identity`\<`B`\>

#### Implementation of

[`AsyncMonad`](../../types/interfaces/AsyncMonad.md).[`chain`](../../types/interfaces/AsyncMonad.md#chain)

***

### flatten()

> **flatten**\<`A`\>(`this`): `Identity`\<`A`\>

Defined in: dist/identity.d.ts:17

#### Type Parameters

##### A

`A`

#### Parameters

##### this

`Identity`\<`Identity`\<`A`\>\>

#### Returns

`Identity`\<`A`\>

***

### fold()

> **fold**\<`A`\>(`mapper`): `A`

Defined in: dist/identity.d.ts:27

#### Type Parameters

##### A

`A`

#### Parameters

##### mapper

[`Mapper`](../../types/type-aliases/Mapper.md)\<`T`, `A`\>

#### Returns

`A`

***

### join()

> **join**\<`A`\>(`this`): `Identity`\<`A`\>

Defined in: dist/identity.d.ts:16

#### Type Parameters

##### A

`A`

#### Parameters

##### this

`Identity`\<`Identity`\<`A`\>\>

#### Returns

`Identity`\<`A`\>

#### Implementation of

[`AsyncMonad`](../../types/interfaces/AsyncMonad.md).[`join`](../../types/interfaces/AsyncMonad.md#join)

***

### map()

> **map**\<`A`, `P`\>(`map`, ...`parameters`): `Identity`\<`A`\>

Defined in: dist/identity.d.ts:18

#### Type Parameters

##### A

`A`

##### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../types/type-aliases/Mapper.md)\<`T`, `A`, `P`\>

##### parameters

...`P`

#### Returns

`Identity`\<`A`\>

#### Implementation of

[`AsyncMonad`](../../types/interfaces/AsyncMonad.md).[`map`](../../types/interfaces/AsyncMonad.md#map)

***

### pipe()

> **pipe**\<`A`, `P`\>(`pipe`, ...`parameters`): `A`

Defined in: dist/identity.d.ts:13

#### Type Parameters

##### A

`A`

##### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

#### Parameters

##### pipe

[`Mapper`](../../types/type-aliases/Mapper.md)\<`Identity`\<`T`\>, `A`, `P`\>

##### parameters

...`P`

#### Returns

`A`

#### Implementation of

[`Pipe`](../../types/interfaces/Pipe.md).[`pipe`](../../types/interfaces/Pipe.md#pipe)

***

### tap()

> **tap**\<`P`\>(`callback`, ...`parameters`): `Identity`\<`T`\>

Defined in: dist/identity.d.ts:12

#### Type Parameters

##### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

#### Parameters

##### callback

[`Mapper`](../../types/type-aliases/Mapper.md)\<`T`, `void`, `P`\>

##### parameters

...`P`

#### Returns

`Identity`\<`T`\>

***

### unwrap()

> **unwrap**(): `T`

Defined in: dist/identity.d.ts:29

#### Returns

`T`

#### Implementation of

[`Container`](../../types/interfaces/Container.md).[`unwrap`](../../types/interfaces/Container.md#unwrap)

***

### unwrapOr()

> **unwrapOr**\<`X`\>(`value`): `T` \| `X`

Defined in: dist/identity.d.ts:15

#### Type Parameters

##### X

`X`

#### Parameters

##### value

`X`

#### Returns

`T` \| `X`

#### Implementation of

[`Container`](../../types/interfaces/Container.md).[`unwrapOr`](../../types/interfaces/Container.md#unwrapor)

***

### unwrapOrElse()

> **unwrapOrElse**\<`X`\>(`fallback`): `T` \| `X`

Defined in: dist/identity.d.ts:14

#### Type Parameters

##### X

`X`

#### Parameters

##### fallback

() => `X`

#### Returns

`T` \| `X`

***

### zip()

> **zip**\<`A`\>(`either`): `Identity`\<\[`T`, `A`\]\>

Defined in: dist/identity.d.ts:28

#### Type Parameters

##### A

`A`

#### Parameters

##### either

`Identity`\<`A`\>

#### Returns

`Identity`\<\[`T`, `A`\]\>

***

### from()

> `static` **from**\<`T`\>(`value`): `Identity`\<`T`\>

Defined in: dist/identity.d.ts:5

#### Type Parameters

##### T

`T` = `never`

#### Parameters

##### value

`T`

#### Returns

`Identity`\<`T`\>
