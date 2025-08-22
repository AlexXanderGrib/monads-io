[**Package**](../../README.md)

***

[Package](../../modules.md) / [types](../README.md) / Functor

# Interface: Functor\<A\>

Defined in: [types.ts:22](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/types.ts#L22)

## Extended by

- [`Applicative`](Applicative.md)

## Type Parameters

### A

`A`

## Methods

### map()

> **map**\<`B`, `P`\>(`map`, ...`parameters`): `Functor`\<`B`\>

Defined in: [types.ts:25](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/types.ts#L25)

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
