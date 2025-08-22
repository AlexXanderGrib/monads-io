[**Package**](../../README.md)

***

[Package](../../modules.md) / [maybe.exports](../README.md) / chain

# Function: chain()

> **chain**\<`A`, `B`, `P`\>(`map`, ...`parameters`): (`maybe`) => `Promise`\<[`Maybe`](../type-aliases/Maybe.md)\<`B`\>\>

Defined in: [maybe.ts:336](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/maybe.ts#L336)

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
