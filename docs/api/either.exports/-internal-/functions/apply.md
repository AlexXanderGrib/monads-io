[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [either.exports](../../README.md) / [\<internal\>](../README.md) / apply

# Function: apply()

## Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `argument`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `B`\>

Defined in: [either.ts:109](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L109)

### Type Parameters

#### A

`A`

#### B

`B`

#### P

`P` *extends* [`AnyParameters`](../../../types/type-aliases/AnyParameters.md)

### Parameters

#### this

[`Either`](../../type-aliases/Either.md)\<`L`, [`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

#### argument

[`Either`](../../type-aliases/Either.md)\<`L`, `A`\>

#### parameters

...`P`

### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>

## Call Signature

> **apply**\<`A`, `B`, `P`\>(`this`, `map`, ...`parameters`): [`Either`](../../type-aliases/Either.md)\<`L`, `B`\>

Defined in: [either.ts:114](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L114)

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

[`Either`](../../type-aliases/Either.md)\<`L`, [`Mapper`](../../../types/type-aliases/Mapper.md)\<`A`, `B`, `P`\>\>

#### parameters

...`P`

### Returns

[`Either`](../../type-aliases/Either.md)\<`L`, `B`\>
