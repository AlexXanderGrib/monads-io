[**Package**](../../README.md)

***

[Package](../../modules.md) / [types](../README.md) / Applicative

# Interface: Applicative\<A\>

Defined in: dist/types.d.ts:18

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

Defined in: dist/types.d.ts:19

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

Defined in: dist/types.d.ts:20

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

Defined in: dist/types.d.ts:16

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

[`Functor`](Functor.md).[`map`](Functor.md#map)
