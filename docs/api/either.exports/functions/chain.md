[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / chain

# Function: chain()

## Call Signature

> **chain**\<`L`, `R`, `NR`, `P`\>(`map`, ...`parameters`): (`either`, ...`parameters`) => `Promise`\<[`Either`](../type-aliases/Either.md)\<`L`, `NR`\>\>

Defined in: [either.ts:462](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L462)

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

Defined in: [either.ts:466](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L466)

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

Defined in: [either.ts:470](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L470)

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
