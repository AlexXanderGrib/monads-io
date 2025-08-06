[**Package**](../../README.md)

***

[Package](../../modules.md) / [types](../README.md) / Monad

# Interface: Monad\<A\>

Defined in: [types.ts:47](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L47)

## Extends

- [`Applicative`](Applicative.md)\<`A`\>

## Extended by

- [`AsyncMonad`](AsyncMonad.md)

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

### chain()

> **chain**\<`B`, `P`\>(`map`, ...`parameters`): `Monad`\<`B`\>

Defined in: [types.ts:51](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L51)

#### Type Parameters

##### B

`B`

##### P

`P` *extends* [`AnyParameters`](../type-aliases/AnyParameters.md)

#### Parameters

##### map

[`Mapper`](../type-aliases/Mapper.md)\<`A`, `Monad`\<`B`\>, `P`\>

##### parameters

...`P`

#### Returns

`Monad`\<`B`\>

***

### join()

> **join**\<`A`\>(`this`): `Monad`\<`A`\>

Defined in: [types.ts:56](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L56)

#### Type Parameters

##### A

`A`

#### Parameters

##### this

`Monad`\<`Monad`\<`A`\>\>

#### Returns

`Monad`\<`A`\>

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
