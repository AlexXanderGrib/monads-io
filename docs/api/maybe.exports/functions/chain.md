[**Package**](../../README.md)

***

[Package](../../modules.md) / [maybe.exports](../README.md) / chain

# Function: chain()

> **chain**\<`A`, `B`, `P`\>(`map`, ...`parameters`): (`maybe`) => `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<`B`\>\>

Defined in: [maybe.ts:334](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L334)

## Type Parameters

### A

`A` = `never`

### B

`B` = `never`

### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md) = \[\]

## Parameters

### map

(`v`, ...`parameters`) => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<[`Maybe`](../type-aliases/Maybe.md)\<`B`\>\>

### parameters

...`P`

## Returns

> (`maybe`): `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<`B`\>\>

### Parameters

#### maybe

[`Maybe`](../type-aliases/Maybe.md)\<`A`\>

### Returns

`Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<`B`\>\>
