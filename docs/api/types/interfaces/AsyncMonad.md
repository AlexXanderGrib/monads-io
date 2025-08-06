[**Package**](../../README.md)

***

[Package](../../modules.md) / [types](../README.md) / AsyncMonad

# Interface: AsyncMonad\<A\>

Defined in: [types.ts:59](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L59)

## Extends

- [`Monad`](Monad.md)\<`A`\>

## Type Parameters

### A

`A`

## Methods

### apply()

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): [`Applicative`](Applicative.md)\<`B`\>

Defined in: [types.ts:35](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L35)

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../type-aliases/AnyParameters.md)

##### Parameters

###### this

[`Applicative`](Applicative.md)\<[`Mapper`](../type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

###### argument

[`Applicative`](Applicative.md)\<`A`\>

###### parameters

...`P`

##### Returns

[`Applicative`](Applicative.md)\<`B`\>

##### Inherited from

[`<internal>`](../../either.exports/-internal-/README.md).[`apply`](../../either.exports/-internal-/functions/apply-1.md)

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): [`Applicative`](Applicative.md)\<`B`\>

Defined in: [types.ts:40](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L40)

##### Type Parameters

###### A

`A`

###### B

`B`

###### P

`P` *extends* [`AnyParameters`](../type-aliases/AnyParameters.md)

##### Parameters

###### this

[`Applicative`](Applicative.md)\<`A`\>

###### argument

[`Applicative`](Applicative.md)\<[`Mapper`](../type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

###### parameters

...`P`

##### Returns

[`Applicative`](Applicative.md)\<`B`\>

##### Inherited from

[`<internal>`](../../either.exports/-internal-/README.md).[`apply`](../../either.exports/-internal-/functions/apply-1.md)

***

### asyncChain()

> **asyncChain**\<`B`, `P`\>(`map`, ...`parameters`): `Promise`\<`AsyncMonad`\<`B`\>\>

Defined in: [types.ts:60](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L60)

#### Type Parameters

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../type-aliases/MaybePromiseLike.md)\<`AsyncMonad`\<`B`\>\>, `P`\>

##### parameters

...`P`

#### Returns

`Promise`\<`AsyncMonad`\<`B`\>\>

***

### await()

> **await**\<`A`\>(`this`): `Promise`\<`AsyncMonad`\<`A`\>\>

Defined in: [types.ts:65](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L65)

#### Type Parameters

##### A

`A`

#### Parameters

##### this

`AsyncMonad`\<[`MaybePromiseLike`](../type-aliases/MaybePromiseLike.md)\<`A`\>\>

#### Returns

`Promise`\<`AsyncMonad`\<`A`\>\>

***

### chain()

> **chain**\<`B`, `P`\>(`map`, ...`parameters`): [`Monad`](Monad.md)\<`B`\>

Defined in: [types.ts:51](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L51)

#### Type Parameters

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../type-aliases/Mapper.md)\<`A`, [`Monad`](Monad.md)\<`B`\>, `P`\>

##### parameters

...`P`

#### Returns

[`Monad`](Monad.md)\<`B`\>

#### Inherited from

[`<internal>`](../../either.exports/-internal-/README.md).[`chain`](../../either.exports/-internal-/functions/chain-1.md)

***

### join()

> **join**\<`A`\>(`this`): [`Monad`](Monad.md)\<`A`\>

Defined in: [types.ts:56](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L56)

#### Type Parameters

##### A

`A`

#### Parameters

##### this

[`Monad`](Monad.md)\<[`Monad`](Monad.md)\<`A`\>\>

#### Returns

[`Monad`](Monad.md)\<`A`\>

#### Inherited from

[`<internal>`](../../either.exports/-internal-/README.md).[`join`](../../either.exports/-internal-/functions/join-1.md)

***

### map()

> **map**\<`B`, `P`\>(`map`, ...`parameters`): [`Functor`](Functor.md)\<`B`\>

Defined in: [types.ts:25](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L25)

#### Type Parameters

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../type-aliases/Mapper.md)\<`A`, `B`, `P`\>

##### parameters

...`P`

#### Returns

[`Functor`](Functor.md)\<`B`\>

#### Inherited from

[`<internal>`](../../either.exports/-internal-/README.md).[`map`](../../either.exports/-internal-/functions/map-1.md)
