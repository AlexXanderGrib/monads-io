[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [either.exports](../../README.md) / [\<internal\>](../README.md) / asyncApply

# Function: asyncApply()

## Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

Defined in: [either.ts:139](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L139)

### Type Parameters

#### A

`A`

#### B

`B`

#### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

### Parameters

#### this

[`Either`](../../type-aliases/Either.md)\<`L`, [`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

#### argument

[`Either`](../../type-aliases/Either.md)\<`L`, `A`\>

#### parameters

...`P`

### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

## Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): `Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>

Defined in: [either.ts:144](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L144)

### Type Parameters

#### A

`A`

#### B

`B`

#### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

### Parameters

#### this

[`Either`](../../type-aliases/Either.md)\<`L`, `A`\>

#### map

[`Either`](../../type-aliases/Either.md)\<`L`, [`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

#### parameters

...`P`

### Returns

`Promise`\<[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>\>
