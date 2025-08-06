[**Package**](../../README.md)

***

[Package](../../modules.md) / [types](../README.md) / Functor

# Interface: Functor\<A\>

Defined in: dist/types.d.ts:15

## Extended by

- [`Applicative`](Applicative.md)

## Type Parameters

### A

`A`

## Methods

### map()

> **map**\<`B`, `P`\>(`map`, ...`parameters`): `Functor`\<`B`\>

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

`Functor`\<`B`\>
