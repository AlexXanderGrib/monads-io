[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [maybe](../../README.md) / [\<internal\>](../README.md) / None

# Class: None\<T\>

Defined in: dist/maybe.d.ts:63

## Extends

- [`MaybeConstructor`](MaybeConstructor.md)\<`T`\>

## Type Parameters

### T

`T` = `unknown`

## Implements

- [`SerializedNone`](../type-aliases/SerializedNone.md)

## Constructors

### Constructor

> `private` **new None**\<`T`\>(): `None`\<`T`\>

Defined in: dist/maybe.d.ts:70

#### Returns

`None`\<`T`\>

#### Overrides

[`MaybeConstructor`](MaybeConstructor.md).[`constructor`](MaybeConstructor.md#constructor)

## Properties

### instance

> `readonly` `static` **instance**: `None`\<`never`\>

Defined in: dist/maybe.d.ts:64

## Accessors

### \[toStringTag\]

#### Get Signature

> **get** **\[toStringTag\]**(): [`None`](../../enumerations/MaybeState.md#none)

Defined in: dist/maybe.d.ts:67

##### Returns

[`None`](../../enumerations/MaybeState.md#none)

***

### name

#### Get Signature

> **get** **name**(): `"Maybe"`

Defined in: dist/maybe.d.ts:68

##### Returns

`"Maybe"`

#### Implementation of

`SerializedNone.name`

***

### type

#### Get Signature

> **get** **type**(): [`None`](../../enumerations/MaybeState.md#none)

Defined in: dist/maybe.d.ts:69

##### Returns

[`None`](../../enumerations/MaybeState.md#none)

#### Implementation of

`SerializedNone.type`

***

### value

#### Get Signature

> **get** **value**(): `undefined`

Defined in: dist/maybe.d.ts:66

##### Returns

`undefined`

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`andTee`](MaybeConstructor.md#andtee)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`andThen`](MaybeConstructor.md#andthen)

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

##### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`apply`](MaybeConstructor.md#apply)

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

##### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`apply`](MaybeConstructor.md#apply)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`asyncAndThen`](MaybeConstructor.md#asyncandthen)

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

##### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`asyncApply`](MaybeConstructor.md#asyncapply)

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

##### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`asyncApply`](MaybeConstructor.md#asyncapply)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`asyncChain`](MaybeConstructor.md#asyncchain)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`asyncMap`](MaybeConstructor.md#asyncmap)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`await`](MaybeConstructor.md#await)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`chain`](MaybeConstructor.md#chain)

***

### default()

> **default**(`value`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: dist/maybe.d.ts:30

#### Parameters

##### value

`T`

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`default`](MaybeConstructor.md#default)

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

##### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`filter`](MaybeConstructor.md#filter)

#### Call Signature

> **filter**(`filter`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: dist/maybe.d.ts:28

##### Parameters

###### filter

(`input`) => `boolean`

##### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

##### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`filter`](MaybeConstructor.md#filter)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`flatMap`](MaybeConstructor.md#flatmap)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`fold`](MaybeConstructor.md#fold)

***

### isJust()

> **isJust**(): `this is Just<T>`

Defined in: dist/maybe.d.ts:19

#### Returns

`this is Just<T>`

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`isJust`](MaybeConstructor.md#isjust)

***

### isNone()

> **isNone**(): `this is None<T>`

Defined in: dist/maybe.d.ts:20

#### Returns

`this is None<T>`

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`isNone`](MaybeConstructor.md#isnone)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`join`](MaybeConstructor.md#join)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`map`](MaybeConstructor.md#map)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`mapNullable`](MaybeConstructor.md#mapnullable)

***

### or()

> **or**(`x`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: dist/maybe.d.ts:31

#### Parameters

##### x

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`or`](MaybeConstructor.md#or)

***

### orAsync()

> **orAsync**(`factory`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

Defined in: dist/maybe.d.ts:33

#### Parameters

##### factory

() => [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

#### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`orAsync`](MaybeConstructor.md#orasync)

***

### orLazy()

> **orLazy**(`factory`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: dist/maybe.d.ts:32

#### Parameters

##### factory

() => [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`orLazy`](MaybeConstructor.md#orlazy)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`pipe`](MaybeConstructor.md#pipe)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`tap`](MaybeConstructor.md#tap)

***

### toJSON()

> **toJSON**(): [`SerializedNone`](../type-aliases/SerializedNone.md)

Defined in: dist/maybe.d.ts:71

#### Returns

[`SerializedNone`](../type-aliases/SerializedNone.md)

***

### unwrap()

> **unwrap**(`message?`): `T`

Defined in: dist/maybe.d.ts:37

#### Parameters

##### message?

`string`

#### Returns

`T`

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`unwrap`](MaybeConstructor.md#unwrap)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`unwrapOr`](MaybeConstructor.md#unwrapor)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`unwrapOrElse`](MaybeConstructor.md#unwraporelse)

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

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`zip`](MaybeConstructor.md#zip)

***

### create()

> `static` **create**\<`T`\>(): `None`\<`T`\>

Defined in: dist/maybe.d.ts:65

#### Type Parameters

##### T

`T` = `never`

#### Returns

`None`\<`T`\>
