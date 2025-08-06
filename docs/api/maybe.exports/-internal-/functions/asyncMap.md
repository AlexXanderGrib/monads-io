[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [maybe.exports](../../README.md) / [\<internal\>](../README.md) / asyncMap

# Function: asyncMap()

> **asyncMap**\<`T`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>

Defined in: [maybe.ts:199](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L199)

## Type Parameters

### T

`T`

### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

## Parameters

### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`Va`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`T`\>, `P`\>

### parameters

...`P`

## Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`T`\>\>
