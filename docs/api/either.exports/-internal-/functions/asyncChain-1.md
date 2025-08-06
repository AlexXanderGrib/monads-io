[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [either.exports](../../README.md) / [\<internal\>](../README.md) / asyncChain

# Function: asyncChain()

> **asyncChain**\<`B`, `P`\>(`map`, ...`parameters`): `Promise`\<[`AsyncMonad`](../../../types/interfaces/AsyncMonad.md)\<`B`\>\>

Defined in: [types.ts:60](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/types.ts#L60)

## Type Parameters

### B

`B`

### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

## Parameters

### map

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<[`AsyncMonad`](../../../types/interfaces/AsyncMonad.md)\<`B`\>\>, `P`\>

### parameters

...`P`

## Returns

`Promise`\<[`AsyncMonad`](../../../types/interfaces/AsyncMonad.md)\<`B`\>\>
