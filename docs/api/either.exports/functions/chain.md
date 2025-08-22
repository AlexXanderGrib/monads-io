[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / chain

# Function: chain()

## Call Signature

> **chain**\<`L`, `R`, `NR`, `P`\>(`map`, ...`parameters`): (`either`, ...`parameters`) => `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `NR`\>\>

Defined in: [either.ts:483](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L483)

### Type Parameters

#### L

`L`

#### R

`R`

#### NR

`NR`

#### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

### Parameters

#### map

(`value`, ...`parameters`) => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../type-aliases/Either.md)\<`never`, `NR`\>\>

#### parameters

...`P`

### Returns

> (`either`, ...`parameters`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `NR`\>\>

#### Parameters

##### either

[`Either`](../type-aliases/Either.md)\<`L`, `R`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `NR`\>\>

## Call Signature

> **chain**\<`L`, `R`, `NL`, `P`\>(`map`, ...`parameters`): (`either`, ...`parameters`) => `Promise`\<[`Either`](../type-aliases/Either.md)\<`L` \| `NL`, `R`\>\>

Defined in: [either.ts:487](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L487)

### Type Parameters

#### L

`L`

#### R

`R`

#### NL

`NL`

#### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

### Parameters

#### map

(`value`, ...`parameters`) => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../type-aliases/Either.md)\<`NL`, `never`\>\>

#### parameters

...`P`

### Returns

> (`either`, ...`parameters`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L` \| `NL`, `R`\>\>

#### Parameters

##### either

[`Either`](../type-aliases/Either.md)\<`L`, `R`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L` \| `NL`, `R`\>\>

## Call Signature

> **chain**\<`L`, `R`, `NL`, `NR`, `P`\>(`map`, ...`parameters`): (`either`, ...`parameters`) => `Promise`\<[`Either`](../type-aliases/Either.md)\<`L` \| `NL`, `NR`\>\>

Defined in: [either.ts:491](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L491)

### Type Parameters

#### L

`L`

#### R

`R`

#### NL

`NL`

#### NR

`NR`

#### P

`P` *extends* [`AnyParameters`](../../types/type-aliases/AnyParameters.md)

### Parameters

#### map

(`value`, ...`parameters`) => [`MaybePromiseLike`](../../types/type-aliases/MaybePromiseLike.md)\<[`Either`](../type-aliases/Either.md)\<`NL`, `NR`\>\>

#### parameters

...`P`

### Returns

> (`either`, ...`parameters`): `Promise`\<[`Either`](../type-aliases/Either.md)\<`L` \| `NL`, `NR`\>\>

#### Parameters

##### either

[`Either`](../type-aliases/Either.md)\<`L`, `R`\>

##### parameters

...`P`

#### Returns

`Promise`\<[`Either`](../type-aliases/Either.md)\<`L` \| `NL`, `NR`\>\>
