[**Package**](../../README.md)

***

[Package](../../modules.md) / [types](../README.md) / Functor

# Interface: Functor\<A\>

Defined in: [types.ts:22](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L22)

## Extended by

- [`Applicative`](Applicative.md)

## Type Parameters

### A

`A`

## Methods

### map()

> **map**\<`B`, `P`\>(`map`, ...`parameters`): `Functor`\<`B`\>

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

`Functor`\<`B`\>
