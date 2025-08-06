[**Package**](../../README.md)

***

[Package](../../modules.md) / [types](../README.md) / Applicative

# Interface: Applicative\<A\>

Defined in: [types.ts:31](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L31)

## Extends

- [`Functor`](Functor.md)\<`A`\>

## Extended by

- [`Monad`](Monad.md)

## Type Parameters

### A

`A`

## Methods

### apply()

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): `Applicative`\<`B`\>

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

`Applicative`\<[`Mapper`](../type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

###### argument

`Applicative`\<`A`\>

###### parameters

...`P`

##### Returns

`Applicative`\<`B`\>

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): `Applicative`\<`B`\>

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

`Applicative`\<`A`\>

###### argument

`Applicative`\<[`Mapper`](../type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

###### parameters

...`P`

##### Returns

`Applicative`\<`B`\>

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
