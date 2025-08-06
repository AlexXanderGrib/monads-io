[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [maybe.exports](../../README.md) / [\<internal\>](../README.md) / MaybeConstructor

# Class: MaybeConstructor\<Va\>

Defined in: [maybe.ts:50](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L50)

## Extended by

- [`Just`](Just.md)
- [`None`](None.md)

## Type Parameters

### Va

`Va`

## Implements

- [`Monad`](../../../types/interfaces/Monad.md)\<`Va`\>
- [`Alternative`](../../../types/interfaces/Alternative.md)\<`Va`\>
- [`Container`](../../../types/interfaces/Container.md)\<`Va`\>
- [`Pipe`](../../../types/interfaces/Pipe.md)

## Constructors

### Constructor

> **new MaybeConstructor**\<`Va`\>(): `MaybeConstructor`\<`Va`\>

#### Returns

`MaybeConstructor`\<`Va`\>

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

##### Implementation of

[`Monad`](../../../types/interfaces/Monad.md).[`apply`](../../../types/interfaces/Monad.md#apply)

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

##### Implementation of

[`Monad`](../../../types/interfaces/Monad.md).[`apply`](../../../types/interfaces/Monad.md#apply)

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

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Va`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

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

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Va`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`T`\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

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

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Va`, [`Maybe`](../../type-aliases/Maybe.md)\<`V`\>, `P`\>

##### parameters

...`P`

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

#### Implementation of

[`Monad`](../../../types/interfaces/Monad.md).[`chain`](../../../types/interfaces/Monad.md#chain)

***

### default()

> **default**(`value`): [`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>

Defined in: [maybe.ts:137](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L137)

#### Parameters

##### value

`Va`

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>

#### Implementation of

[`Alternative`](../../../types/interfaces/Alternative.md).[`default`](../../../types/interfaces/Alternative.md#default)

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

#### Call Signature

> **filter**(`filter`): [`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>

Defined in: [maybe.ts:125](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L125)

##### Parameters

###### filter

(`input`) => `boolean`

##### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>

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

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Va`, `T`, `P`\>

##### parameters

...`P`

#### Returns

`undefined` \| `T`

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

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Va`, `A`\>

#### Returns

`A` \| `B`

***

### isJust()

> **isJust**(): `this is Just<Va>`

Defined in: [maybe.ts:61](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L61)

#### Returns

`this is Just<Va>`

***

### isNone()

> **isNone**(): `this is None<Va>`

Defined in: [maybe.ts:65](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L65)

#### Returns

`this is None<Va>`

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

#### Implementation of

[`Monad`](../../../types/interfaces/Monad.md).[`join`](../../../types/interfaces/Monad.md#join)

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

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Va`, `V`, `P`\>

##### parameters

...`P`

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

#### Implementation of

[`Monad`](../../../types/interfaces/Monad.md).[`map`](../../../types/interfaces/Monad.md#map)

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

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Va`, `undefined` \| `null` \| `V`, `P`\>

##### parameters

...`P`

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

***

### or()

> **or**(`x`): [`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>

Defined in: [maybe.ts:141](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L141)

#### Parameters

##### x

[`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>

#### Implementation of

[`Alternative`](../../../types/interfaces/Alternative.md).[`or`](../../../types/interfaces/Alternative.md#or)

***

### orAsync()

> **orAsync**(`factory`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>\>

Defined in: [maybe.ts:149](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L149)

#### Parameters

##### factory

() => [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>\>

#### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>\>

***

### orLazy()

> **orLazy**(`factory`): [`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>

Defined in: [maybe.ts:145](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L145)

#### Parameters

##### factory

() => [`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>

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

[`Mapper`](../../../types/type-aliases/Mapper.md)\<[`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>, `V`, `P`\>

##### parameters

...`P`

#### Returns

`V`

#### Implementation of

[`Pipe`](../../../types/interfaces/Pipe.md).[`pipe`](../../../types/interfaces/Pipe.md#pipe)

***

### tap()

> **tap**\<`P`\>(`callback`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>

Defined in: [maybe.ts:159](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L159)

#### Type Parameters

##### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

#### Parameters

##### callback

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Va`, `void`, `P`\>

##### parameters

...`P`

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`Va`\>

***

### unwrap()

> **unwrap**(`message`): `Va`

Defined in: [maybe.ts:174](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L174)

#### Parameters

##### message

`string` = `UnwrapCustomError.Messages.MAYBE_IS_NONE`

#### Returns

`Va`

#### Implementation of

[`Container`](../../../types/interfaces/Container.md).[`unwrap`](../../../types/interfaces/Container.md#unwrap)

***

### unwrapOr()

> **unwrapOr**\<`T`\>(`value`): `Va` \| `T`

Defined in: [maybe.ts:53](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L53)

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

#### Returns

`Va` \| `T`

#### Implementation of

[`Container`](../../../types/interfaces/Container.md).[`unwrapOr`](../../../types/interfaces/Container.md#unwrapor)

***

### unwrapOrElse()

> **unwrapOrElse**\<`T`\>(`value`): `Va` \| `T`

Defined in: [maybe.ts:57](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L57)

#### Type Parameters

##### T

`T`

#### Parameters

##### value

() => `T`

#### Returns

`Va` \| `T`

***

### zip()

> **zip**\<`T`\>(`maybe`): [`Maybe`](../../type-aliases/Maybe.md)\<[`Pair`](../../../types/type-aliases/Pair.md)\<`Va`, `T`\>\>

Defined in: [maybe.ts:155](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L155)

#### Type Parameters

##### T

`T`

#### Parameters

##### maybe

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<[`Pair`](../../../types/type-aliases/Pair.md)\<`Va`, `T`\>\>
