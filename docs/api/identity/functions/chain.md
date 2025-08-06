[**Package**](../../README.md)

***

[Package](../../modules.md) / [identity](../README.md) / chain

# Function: chain()

> **chain**\<`A`, `B`, `P`\>(`map`, ...`parameters`): (`either`) => `Promise`\<[`Identity`](../classes/Identity.md)\<`B`\>\>

Defined in: dist/identity.d.ts:34

## Type Parameters

### A

`A` = `never`

### B

`B` = `never`

### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md) = \[\]

## Parameters

### map

(`value`, ...`parameters`) => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<[`Identity`](../classes/Identity.md)\<`B`\>\>

### parameters

...`P`

## Returns

> (`either`): `Promise`\<[`Identity`](../classes/Identity.md)\<`B`\>\>

### Parameters

#### either

[`Identity`](../classes/Identity.md)\<`A`\>

### Returns

`Promise`\<[`Identity`](../classes/Identity.md)\<`B`\>\>
