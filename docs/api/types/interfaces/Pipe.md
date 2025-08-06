[**Package**](../../README.md)

***

[Package](../../modules.md) / [types](../README.md) / Pipe

# Interface: Pipe

Defined in: [types.ts:73](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L73)

## Methods

### pipe()

> **pipe**\<`T`, `P`\>(`callback`, ...`parameters`): `T`

Defined in: [types.ts:74](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L74)

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
