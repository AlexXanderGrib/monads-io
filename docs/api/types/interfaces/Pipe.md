[**Package**](../../README.md)

***

[Package](../../modules.md) / [types](../README.md) / Pipe

# Interface: Pipe

Defined in: [types.ts:73](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/types.ts#L73)

## Methods

### pipe()

> **pipe**\<`T`, `P`\>(`callback`, ...`parameters`): `T`

Defined in: [types.ts:74](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/types.ts#L74)

#### Type Parameters

##### T

`T`

##### P

`P` *extends* [`AnyParameters`](../type-aliases/AnyParameters.md)

#### Parameters

##### callback

[`Mapper`](../type-aliases/Mapper.md)\<`Pipe`, `T`, `P`\>

##### parameters

...`P`

#### Returns

`T`
