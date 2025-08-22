[**Package**](../../README.md)

***

[Package](../../modules.md) / [identity.exports](../README.md) / chain

# Function: chain()

> **chain**\<`A`, `B`, `P`\>(`map`, ...`parameters`): (`either`) => `Promise`\<[`Identity`](../interfaces/Identity.md)\<`B`\>\>

Defined in: [identity.ts:178](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/identity.ts#L178)

## Type Parameters

### A

`A` = `never`

### B

`B` = `never`

### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md) = \[\]

## Parameters

### map

(`value`, ...`parameters`) => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<[`Identity`](../interfaces/Identity.md)\<`B`\>\>

### parameters

...`P`

## Returns

> (`either`): `Promise`\<[`Identity`](../interfaces/Identity.md)\<`B`\>\>

### Parameters

#### either

[`Identity`](../interfaces/Identity.md)\<`A`\>

### Returns

`Promise`\<[`Identity`](../interfaces/Identity.md)\<`B`\>\>
