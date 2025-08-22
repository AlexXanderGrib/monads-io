[**Package**](../../README.md)

***

[Package](../../modules.md) / [identity.exports](../README.md) / Identity

# Interface: Identity\<T\>

Defined in: [identity.ts:14](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L14)

## Type Parameters

### T

`T`

## Implements

- [`AsyncMonad`](../../types/interfaces/AsyncMonad.md)\<`T`\>
- [`Container`](../../types/interfaces/Container.md)\<`T`\>
- [`Pipe`](../../types/interfaces/Pipe.md)

## Properties

### value

> `readonly` **value**: `T`

Defined in: [identity.ts:27](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L27)

## Accessors

### \[toStringTag\]

#### Get Signature

> **get** **\[toStringTag\]**(): `"Identity"`

Defined in: [identity.ts:19](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L19)

##### Returns

`"Identity"`

***

### name

#### Get Signature

> **get** **name**(): `"Identity"`

Defined in: [identity.ts:23](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L23)

##### Returns

`"Identity"`

## Methods

### apply()

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): `Identity`\<`B`\>

Defined in: [identity.ts:63](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L63)

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

`AsyncMonad.apply`

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): `Identity`\<`B`\>

Defined in: [identity.ts:68](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L68)

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

`AsyncMonad.apply`

***

### asyncApply()

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): `Promise`\<`Identity`\<`B`\>\>

Defined in: [identity.ts:93](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L93)

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

`Identity`\<`A`\>

###### parameters

...`P`

##### Returns

`Promise`\<`Identity`\<`B`\>\>

#### Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): `Promise`\<`Identity`\<`B`\>\>

Defined in: [identity.ts:98](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L98)

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

`Identity`\<[`Mapper`](../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

###### parameters

...`P`

##### Returns

`Promise`\<`Identity`\<`B`\>\>

***

### asyncChain()

> **asyncChain**\<`B`, `P`\>(`map`, ...`parameters`): `Promise`\<`Identity`\<`B`\>\>

Defined in: [identity.ts:132](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L132)

#### Type Parameters

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../types/type-aliases/Mapper.md)\<`T`, [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`Identity`\<`B`\>\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<`Identity`\<`B`\>\>

#### Implementation of

`AsyncMonad.asyncChain`

***

### asyncMap()

> **asyncMap**\<`B`, `P`\>(`map`, ...`parameters`): `Promise`\<`Identity`\<`B`\>\>

Defined in: [identity.ts:142](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L142)

#### Type Parameters

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../../types/type-aliases/Mapper.md)\<`T`, [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<`Identity`\<`B`\>\>

***

### await()

> **await**\<`X`\>(`this`): `Promise`\<`Identity`\<`X`\>\>

Defined in: [identity.ts:148](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L148)

#### Type Parameters

##### X

`X`

#### Parameters

##### this

`Identity`\<[`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<`X`\>\>

#### Returns

`Promise`\<`Identity`\<`X`\>\>

#### Implementation of

`AsyncMonad.await`

***

### chain()

> **chain**\<`B`, `P`\>(`map`, ...`parameters`): `Identity`\<`B`\>

Defined in: [identity.ts:125](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L125)

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

`AsyncMonad.chain`

***

### fold()

> **fold**\<`A`\>(`mapper`): `A`

Defined in: [identity.ts:154](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L154)

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

Defined in: [identity.ts:52](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L52)

#### Type Parameters

##### A

`A`

#### Parameters

##### this

`Identity`\<`Identity`\<`A`\>\>

#### Returns

`Identity`\<`A`\>

#### Implementation of

`AsyncMonad.join`

***

### map()

> **map**\<`A`, `P`\>(`map`, ...`parameters`): `Identity`\<`A`\>

Defined in: [identity.ts:56](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L56)

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

`AsyncMonad.map`

***

### pipe()

> **pipe**\<`A`, `P`\>(`pipe`, ...`parameters`): `A`

Defined in: [identity.ts:37](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L37)

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

`Pipe.pipe`

***

### tap()

> **tap**\<`P`\>(`callback`, ...`parameters`): `Identity`\<`T`\>

Defined in: [identity.ts:29](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L29)

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

Defined in: [identity.ts:162](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L162)

#### Returns

`T`

#### Implementation of

`Container.unwrap`

***

### unwrapOr()

> **unwrapOr**\<`X`\>(`value`): `T` \| `X`

Defined in: [identity.ts:48](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L48)

#### Type Parameters

##### X

`X`

#### Parameters

##### value

`X`

#### Returns

`T` \| `X`

#### Implementation of

`Container.unwrapOr`

***

### unwrapOrElse()

> **unwrapOrElse**\<`X`\>(`fallback`): `T` \| `X`

Defined in: [identity.ts:44](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L44)

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

Defined in: [identity.ts:158](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L158)

#### Type Parameters

##### A

`A`

#### Parameters

##### either

`Identity`\<`A`\>

#### Returns

`Identity`\<\[`T`, `A`\]\>
