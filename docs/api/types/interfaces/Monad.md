[**Package**](../../README.md)

***

[Package](../../modules.md) / [types](../README.md) / Monad

# Interface: Monad\<A\>

Defined in: dist/types.d.ts:22

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

[`Applicative`](Applicative.md)\<[`Mapper`](../type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

###### argument

[`Applicative`](Applicative.md)\<`A`\>

###### parameters

...`P`

##### Returns

[`Applicative`](Applicative.md)\<`B`\>

##### Inherited from

[`Applicative`](Applicative.md).[`apply`](Applicative.md#apply)

#### Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): [`Applicative`](Applicative.md)\<`B`\>

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

[`Applicative`](Applicative.md)\<`A`\>

###### argument

[`Applicative`](Applicative.md)\<[`Mapper`](../type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

###### parameters

...`P`

##### Returns

[`Applicative`](Applicative.md)\<`B`\>

##### Inherited from

[`Applicative`](Applicative.md).[`apply`](Applicative.md#apply)

***

### chain()

> **chain**\<`B`, `P`\>(`map`, ...`parameters`): `Monad`\<`B`\>

Defined in: dist/types.d.ts:23

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

Defined in: dist/types.d.ts:24

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

[`Applicative`](Applicative.md).[`map`](Applicative.md#map)
