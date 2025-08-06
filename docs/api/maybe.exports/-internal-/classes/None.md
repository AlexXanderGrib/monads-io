[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [maybe.exports](../../README.md) / [\<internal\>](../README.md) / None

# Class: None\<T\>

Defined in: [maybe.ts:286](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L286)

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

Defined in: [maybe.ts:308](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L308)

#### Returns

`None`\<`T`\>

#### Overrides

[`MaybeConstructor`](MaybeConstructor.md).[`constructor`](MaybeConstructor.md#constructor)

## Properties

### instance

> `readonly` `static` **instance**: `None`\<`never`\>

Defined in: [maybe.ts:287](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L287)

## Accessors

### \[toStringTag\]

#### Get Signature

> **get** **\[toStringTag\]**(): [`None`](../../enumerations/MaybeState.md#none)

Defined in: [maybe.ts:296](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L296)

##### Returns

[`None`](../../enumerations/MaybeState.md#none)

***

### name

#### Get Signature

> **get** **name**(): `"Maybe"`

Defined in: [maybe.ts:300](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L300)

##### Returns

`"Maybe"`

#### Implementation of

`SerializedNone.name`

***

### type

#### Get Signature

> **get** **type**(): [`None`](../../enumerations/MaybeState.md#none)

Defined in: [maybe.ts:304](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L304)

##### Returns

[`None`](../../enumerations/MaybeState.md#none)

#### Implementation of

`SerializedNone.type`

***

### value

#### Get Signature

> **get** **value**(): `undefined`

Defined in: [maybe.ts:292](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L292)

##### Returns

`undefined`

## Methods

### apply()

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`B`\>

Defined in: [maybe.ts:94](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L94)

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

[`<internal>`](../README.md).[`apply`](../functions/apply.md)

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`B`\>

Defined in: [maybe.ts:99](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L99)

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

[`<internal>`](../README.md).[`apply`](../functions/apply.md)

***

### asyncApply()

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>\>

Defined in: [maybe.ts:212](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L212)

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

[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>

###### parameters

...`P`

##### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>\>

##### Inherited from

[`<internal>`](../README.md).[`asyncApply`](../functions/asyncApply.md)

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>\>

Defined in: [maybe.ts:217](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L217)

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

###### map

[`Maybe`](../../type-aliases/Maybe.md)\<[`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

###### parameters

...`P`

##### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>\>

##### Inherited from

[`<internal>`](../README.md).[`asyncApply`](../functions/asyncApply.md)

***

### asyncChain()

> **asyncChain**\<`T`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

Defined in: [maybe.ts:191](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L191)

#### Type Parameters

##### T

`T`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`T`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

#### Inherited from

[`<internal>`](../README.md).[`asyncChain`](../functions/asyncChain.md)

***

### asyncMap()

> **asyncMap**\<`T`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

Defined in: [maybe.ts:199](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L199)

#### Type Parameters

##### T

`T`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`T`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`T`\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

#### Inherited from

[`<internal>`](../README.md).[`asyncMap`](../functions/asyncMap.md)

***

### await()

> **await**\<`T`\>(`this`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

Defined in: [maybe.ts:206](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L206)

#### Type Parameters

##### T

`T`

#### Parameters

##### this

[`Maybe`](../../type-aliases/Maybe.md)\<[`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`T`\>\>

#### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

#### Inherited from

[`<internal>`](../README.md).[`await`](../functions/await.md)

***

### chain()

> **chain**\<`V`, `P`\>(`map`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

Defined in: [maybe.ts:130](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L130)

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

[`<internal>`](../README.md).[`chain`](../functions/chain.md)

***

### default()

> **default**(`value`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: [maybe.ts:137](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L137)

#### Parameters

##### value

`T`

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Inherited from

[`<internal>`](../README.md).[`default`](../functions/default.md)

***

### filter()

#### Call Signature

> **filter**\<`T`\>(`filter`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: [maybe.ts:124](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L124)

##### Type Parameters

###### T

`T`

##### Parameters

###### filter

(`input`) => `input is T`

##### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

##### Inherited from

[`<internal>`](../README.md).[`filter`](../functions/filter.md)

#### Call Signature

> **filter**(`filter`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: [maybe.ts:125](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L125)

##### Parameters

###### filter

(`input`) => `boolean`

##### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

##### Inherited from

[`<internal>`](../README.md).[`filter`](../functions/filter.md)

***

### flatMap()

> **flatMap**\<`T`, `P`\>(`map`, ...`parameters`): `undefined` \| `T`

Defined in: [maybe.ts:167](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L167)

#### Type Parameters

##### T

`T`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`T`, `T`, `P`\>

##### parameters

...`P`

#### Returns

`undefined` \| `T`

#### Inherited from

[`<internal>`](../README.md).[`flatMap`](../functions/flatMap.md)

***

### fold()

> **fold**\<`A`, `B`\>(`mapNone`, `mapJust`): `A` \| `B`

Defined in: [maybe.ts:178](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L178)

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

[`<internal>`](../README.md).[`fold`](../functions/fold.md)

***

### isJust()

> **isJust**(): `this is Just<T>`

Defined in: [maybe.ts:61](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L61)

#### Returns

`this is Just<T>`

#### Inherited from

[`<internal>`](../README.md).[`isJust`](../functions/isJust.md)

***

### isNone()

> **isNone**(): `this is None<T>`

Defined in: [maybe.ts:65](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L65)

#### Returns

`this is None<T>`

#### Inherited from

[`<internal>`](../README.md).[`isNone`](../functions/isNone.md)

***

### join()

> **join**\<`V`\>(`this`): [`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

Defined in: [maybe.ts:69](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L69)

#### Type Parameters

##### V

`V`

#### Parameters

##### this

[`Maybe`](../../type-aliases/Maybe.md)\<[`Maybe`](../../type-aliases/Maybe.md)\<`V`\>\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

#### Inherited from

[`<internal>`](../README.md).[`join`](../functions/join.md)

***

### map()

> **map**\<`V`, `P`\>(`map`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

Defined in: [maybe.ts:80](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L80)

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

[`<internal>`](../README.md).[`map`](../functions/map.md)

***

### mapNullable()

> **mapNullable**\<`V`, `P`\>(`map`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

Defined in: [maybe.ts:87](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L87)

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

[`<internal>`](../README.md).[`mapNullable`](../functions/mapNullable.md)

***

### or()

> **or**(`x`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: [maybe.ts:141](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L141)

#### Parameters

##### x

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Inherited from

[`<internal>`](../README.md).[`or`](../functions/or.md)

***

### orAsync()

> **orAsync**(`factory`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

Defined in: [maybe.ts:149](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L149)

#### Parameters

##### factory

() => [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

#### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

#### Inherited from

[`<internal>`](../README.md).[`orAsync`](../functions/orAsync.md)

***

### orLazy()

> **orLazy**(`factory`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: [maybe.ts:145](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L145)

#### Parameters

##### factory

() => [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Inherited from

[`<internal>`](../README.md).[`orLazy`](../functions/orLazy.md)

***

### pipe()

> **pipe**\<`V`, `P`\>(`pipe`, ...`parameters`): `V`

Defined in: [maybe.ts:73](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L73)

#### Type Parameters

##### V

`V`

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### pipe

[`Mapper`](../../../types/type-aliases/Mapper.md)\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>, `V`, `P`\>

##### parameters

...`P`

#### Returns

`V`

#### Inherited from

[`<internal>`](../README.md).[`pipe`](../functions/pipe.md)

***

### tap()

> **tap**\<`P`\>(`callback`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: [maybe.ts:159](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L159)

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

[`<internal>`](../README.md).[`tap`](../functions/tap.md)

***

### toJSON()

> **toJSON**(): [`SerializedNone`](../type-aliases/SerializedNone.md)

Defined in: [maybe.ts:313](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L313)

#### Returns

[`SerializedNone`](../type-aliases/SerializedNone.md)

***

### unwrap()

> **unwrap**(`message`): `T`

Defined in: [maybe.ts:174](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L174)

#### Parameters

##### message

`string` = `UnwrapCustomError.Messages.MAYBE_IS_NONE`

#### Returns

`T`

#### Inherited from

[`<internal>`](../README.md).[`unwrap`](../functions/unwrap.md)

***

### unwrapOr()

> **unwrapOr**\<`T`\>(`value`): `T` \| `T`

Defined in: [maybe.ts:53](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L53)

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

#### Returns

`T` \| `T`

#### Inherited from

[`<internal>`](../README.md).[`unwrapOr`](../functions/unwrapOr.md)

***

### unwrapOrElse()

> **unwrapOrElse**\<`T`\>(`value`): `T` \| `T`

Defined in: [maybe.ts:57](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L57)

#### Type Parameters

##### T

`T`

#### Parameters

##### value

() => `T`

#### Returns

`T` \| `T`

#### Inherited from

[`<internal>`](../README.md).[`unwrapOrElse`](../functions/unwrapOrElse.md)

***

### zip()

> **zip**\<`T`\>(`maybe`): [`Maybe`](../../type-aliases/Maybe.md)\<[`Pair`](../../../types/type-aliases/Pair.md)\<`T`, `T`\>\>

Defined in: [maybe.ts:155](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L155)

#### Type Parameters

##### T

`T`

#### Parameters

##### maybe

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<[`Pair`](../../../types/type-aliases/Pair.md)\<`T`, `T`\>\>

#### Inherited from

[`<internal>`](../README.md).[`zip`](../functions/zip.md)

***

### create()

> `static` **create**\<`T`\>(): `None`\<`T`\>

Defined in: [maybe.ts:288](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L288)

#### Type Parameters

##### T

`T` = `never`

#### Returns

`None`\<`T`\>
