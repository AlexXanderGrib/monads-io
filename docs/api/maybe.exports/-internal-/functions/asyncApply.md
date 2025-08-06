[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [maybe.exports](../../README.md) / [\<internal\>](../README.md) / asyncApply

# Function: asyncApply()

## Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>\>

Defined in: [maybe.ts:212](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L212)

### Type Parameters

#### A

`A`

#### B

`B`

#### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

### Parameters

#### this

[`Maybe`](../../type-aliases/Maybe.md)\<[`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

#### argument

[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>

#### parameters

...`P`

### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>\>

## Call Signature

> **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): `Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>\>

Defined in: [maybe.ts:217](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/maybe.ts#L217)

### Type Parameters

#### A

`A`

#### B

`B`

#### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

### Parameters

#### this

[`Maybe`](../../type-aliases/Maybe.md)\<`A`\>

#### map

[`Maybe`](../../type-aliases/Maybe.md)\<[`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, [`MaybePromiseLike`](../../../types/type-aliases/MaybePromiseLike.md)\<`B`\>, `P`\>\>

#### parameters

...`P`

### Returns

`Promise`\<[`Maybe`](../../type-aliases/Maybe.md)\<`B`\>\>
