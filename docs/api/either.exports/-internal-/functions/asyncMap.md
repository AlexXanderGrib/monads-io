[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [either.exports](../../README.md) / [\<internal\>](../README.md) / asyncMap

# Function: asyncMap()

> **asyncMap**\<`A`, `B`, `P`\>(`map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>\>

Defined in: [either.ts:201](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L201)

## Type Parameters

### A

`A`

### B

`B`

### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

## Parameters

### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>

### parameters

...`P`

## Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L` \| `A`, `B`\>\>
