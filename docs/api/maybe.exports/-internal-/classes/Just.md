[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [maybe.exports](../../README.md) / [\<internal\>](../README.md) / Just

# Class: Just\<T\>

Defined in: [maybe.ts:256](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L256)

## Extends

- [`MaybeConstructor`](MaybeConstructor.md)\<`T`\>

## Type Parameters

### T

`T`

## Implements

- [`SerializedJust`](../type-aliases/SerializedJust.md)\<`T`\>

## Constructors

### Constructor

> `private` **new Just**\<`T`\>(`value`): `Just`\<`T`\>

Defined in: [maybe.ts:273](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L273)

#### Parameters

##### value

`T`

#### Returns

`Just`\<`T`\>

#### Overrides

[`MaybeConstructor`](MaybeConstructor.md).[`constructor`](MaybeConstructor.md#constructor)

## Properties

### value

> `readonly` **value**: `T`

Defined in: [maybe.ts:273](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L273)

#### Implementation of

`__type`.`value`

## Accessors

### \[toStringTag\]

#### Get Signature

> **get** **\[toStringTag\]**(): [`Just`](../../enumerations/MaybeState.md#just)

Defined in: [maybe.ts:261](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L261)

##### Returns

[`Just`](../../enumerations/MaybeState.md#just)

***

### name

#### Get Signature

> **get** **name**(): `"Maybe"`

Defined in: [maybe.ts:265](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L265)

##### Returns

`"Maybe"`

#### Implementation of

`__type`.`name`

***

### type

#### Get Signature

> **get** **type**(): [`Just`](../../enumerations/MaybeState.md#just)

Defined in: [maybe.ts:269](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L269)

##### Returns

[`Just`](../../enumerations/MaybeState.md#just)

#### Implementation of

`__type`.`type`

## Methods

### apply()

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`B`\>

Defined in: [maybe.ts:96](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L96)

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

Defined in: [maybe.ts:101](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L101)

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

### asyncApply()

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>\>

Defined in: [maybe.ts:214](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L214)

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

[`MaybeConstructor`](MaybeConstructor.md).[`asyncApply`](MaybeConstructor.md#asyncapply)

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>\>

Defined in: [maybe.ts:219](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L219)

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

[`MaybeConstructor`](MaybeConstructor.md).[`asyncApply`](MaybeConstructor.md#asyncapply)

***

### asyncChain()

> **asyncChain**\<`T`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

Defined in: [maybe.ts:193](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L193)

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

[`MaybeConstructor`](MaybeConstructor.md).[`asyncChain`](MaybeConstructor.md#asyncchain)

***

### asyncMap()

> **asyncMap**\<`T`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

Defined in: [maybe.ts:201](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L201)

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

[`MaybeConstructor`](MaybeConstructor.md).[`asyncMap`](MaybeConstructor.md#asyncmap)

***

### await()

> **await**\<`T`\>(`this`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

Defined in: [maybe.ts:208](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L208)

#### Type Parameters

##### T

`T`

#### Parameters

##### this

[`Maybe`](../../type-aliases/Maybe.md)\<[`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`T`\>\>

#### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`await`](MaybeConstructor.md#await)

***

### chain()

> **chain**\<`V`, `P`\>(`map`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

Defined in: [maybe.ts:132](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L132)

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

Defined in: [maybe.ts:139](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L139)

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

> **filter**\<`T`\>(`filter`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: [maybe.ts:126](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L126)

##### Type Parameters

###### T

`T`

##### Parameters

###### filter

(`input`) => `input is T`

##### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

##### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`filter`](MaybeConstructor.md#filter)

#### Call Signature

> **filter**(`filter`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: [maybe.ts:127](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L127)

##### Parameters

###### filter

(`input`) => `boolean`

##### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

##### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`filter`](MaybeConstructor.md#filter)

***

### flatMap()

> **flatMap**\<`T`, `P`\>(`map`, ...`parameters`): `undefined` \| `T`

Defined in: [maybe.ts:169](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L169)

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

[`MaybeConstructor`](MaybeConstructor.md).[`flatMap`](MaybeConstructor.md#flatmap)

***

### fold()

> **fold**\<`A`, `B`\>(`mapNone`, `mapJust`): `A` \| `B`

Defined in: [maybe.ts:180](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L180)

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

#### Call Signature

> **isJust**\<`T`\>(`predicate`): `this is Just<T>`

Defined in: [maybe.ts:61](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L61)

##### Type Parameters

###### T

`T`

##### Parameters

###### predicate

(`value`) => `value is T`

##### Returns

`this is Just<T>`

##### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`isJust`](MaybeConstructor.md#isjust)

#### Call Signature

> **isJust**(`predicate?`): `this is Just<T>`

Defined in: [maybe.ts:62](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L62)

##### Parameters

###### predicate?

(`value`) => `boolean`

##### Returns

`this is Just<T>`

##### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`isJust`](MaybeConstructor.md#isjust)

***

### isNone()

> **isNone**(): `this is None<T>`

Defined in: [maybe.ts:67](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L67)

#### Returns

`this is None<T>`

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`isNone`](MaybeConstructor.md#isnone)

***

### join()

> **join**\<`V`\>(`this`): [`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

Defined in: [maybe.ts:71](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L71)

#### Type Parameters

##### V

`V`

#### Parameters

##### this

[`Maybe`](../../type-aliases/Maybe.md)\<[`Maybe`](../../type-aliases/Maybe.md)\<`V`\>\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`join`](MaybeConstructor.md#join)

***

### map()

> **map**\<`V`, `P`\>(`map`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`V`\>

Defined in: [maybe.ts:82](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L82)

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

Defined in: [maybe.ts:89](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L89)

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

Defined in: [maybe.ts:143](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L143)

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

Defined in: [maybe.ts:151](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L151)

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

Defined in: [maybe.ts:147](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L147)

#### Parameters

##### factory

() => [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`orLazy`](MaybeConstructor.md#orlazy)

***

### pipe()

> **pipe**\<`V`, `P`\>(`pipe`, ...`parameters`): `V`

Defined in: [maybe.ts:75](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L75)

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

[`MaybeConstructor`](MaybeConstructor.md).[`pipe`](MaybeConstructor.md#pipe)

***

### tap()

> **tap**\<`P`\>(`callback`, ...`parameters`): [`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

Defined in: [maybe.ts:161](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L161)

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

> **toJSON**(): [`SerializedJust`](../type-aliases/SerializedJust.md)\<`T`\>

Defined in: [maybe.ts:278](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L278)

#### Returns

[`SerializedJust`](../type-aliases/SerializedJust.md)\<`T`\>

***

### unwrap()

> **unwrap**(`message`): `T`

Defined in: [maybe.ts:176](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L176)

#### Parameters

##### message

`string` = `UnwrapCustomError.Messages.MAYBE_IS_NONE`

#### Returns

`T`

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`unwrap`](MaybeConstructor.md#unwrap)

***

### unwrapOr()

> **unwrapOr**\<`T`\>(`value`): `T` \| `T`

Defined in: [maybe.ts:53](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L53)

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

#### Returns

`T` \| `T`

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`unwrapOr`](MaybeConstructor.md#unwrapor)

***

### unwrapOrElse()

> **unwrapOrElse**\<`T`\>(`value`): `T` \| `T`

Defined in: [maybe.ts:57](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L57)

#### Type Parameters

##### T

`T`

#### Parameters

##### value

() => `T`

#### Returns

`T` \| `T`

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`unwrapOrElse`](MaybeConstructor.md#unwraporelse)

***

### zip()

> **zip**\<`T`\>(`maybe`): [`Maybe`](../../type-aliases/Maybe.md)\<[`Pair`](../../../types/type-aliases/Pair.md)\<`T`, `T`\>\>

Defined in: [maybe.ts:157](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L157)

#### Type Parameters

##### T

`T`

#### Parameters

##### maybe

[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>

#### Returns

[`Maybe`](../../type-aliases/Maybe.md)\<[`Pair`](../../../types/type-aliases/Pair.md)\<`T`, `T`\>\>

#### Inherited from

[`MaybeConstructor`](MaybeConstructor.md).[`zip`](MaybeConstructor.md#zip)

***

### create()

> `static` **create**\<`T`\>(`value`): `Just`\<`T`\>

Defined in: [maybe.ts:257](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L257)

#### Type Parameters

##### T

`T` = `never`

#### Parameters

##### value

`T`

#### Returns

`Just`\<`T`\>
