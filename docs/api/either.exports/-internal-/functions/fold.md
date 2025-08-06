[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [either.exports](../../README.md) / [\<internal\>](../README.md) / fold

# Function: fold()

> **fold**\<`A`, `B`\>(`mapLeft`, `mapRight`): `A` \| `B`

Defined in: [either.ts:221](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L221)

## Type Parameters

### A

`A`

### B

`B` = `A`

## Parameters

### mapLeft

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`L`, `A`\>

### mapRight

[`Mapper`](../../../types/type-aliases/Mapper.md)\<`R`, `B`\>

## Returns

`A` \| `B`

## Throws

- [InvalidStateError](../../../index/classes/InvalidStateError.md) if Either state is neither Left neither Right, this probably should never happen
