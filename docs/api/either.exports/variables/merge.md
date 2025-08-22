[**Package**](../../README.md)

***

[Package](../../modules.md) / [either.exports](../README.md) / merge

# Variable: merge()

> `const` **merge**: \{\<`L1`, `R1`\>(`values`): [`Either`](../type-aliases/Either.md)\<`L1`, \[`R1`\]\>; \<`L1`, `R1`, `L2`, `R2`\>(`values`): [`Either`](../type-aliases/Either.md)\<`L1` \| `L2`, \[`R1`, `R2`\]\>; \<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`\>(`values`): [`Either`](../type-aliases/Either.md)\<`L1` \| `L2` \| `L3`, \[`R1`, `R2`, `R3`\]\>; \<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`\>(`values`): [`Either`](../type-aliases/Either.md)\<`L1` \| `L2` \| `L3` \| `L4`, \[`R1`, `R2`, `R3`, `R4`\]\>; \<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`, `L5`, `R5`\>(`values`): [`Either`](../type-aliases/Either.md)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5`, \[`R1`, `R2`, `R3`, `R4`, `R5`\]\>; \<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`, `L5`, `R5`, `L6`, `R6`\>(`values`): [`Either`](../type-aliases/Either.md)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`, \[`R1`, `R2`, `R3`, `R4`, `R5`, `R6`\]\>; \<`L`, `R`\>(`values`): [`Either`](../type-aliases/Either.md)\<`L`, `R`[]\>; \} = `mergeInOne`

Defined in: [either.ts:574](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/either.ts#L574)

## Call Signature

> \<`L1`, `R1`\>(`values`): [`Either`](../type-aliases/Either.md)\<`L1`, \[`R1`\]\>

### Type Parameters

#### L1

`L1`

#### R1

`R1`

### Parameters

#### values

\[[`Either`](../type-aliases/Either.md)\<`L1`, `R1`\>\]

### Returns

[`Either`](../type-aliases/Either.md)\<`L1`, \[`R1`\]\>

## Call Signature

> \<`L1`, `R1`, `L2`, `R2`\>(`values`): [`Either`](../type-aliases/Either.md)\<`L1` \| `L2`, \[`R1`, `R2`\]\>

### Type Parameters

#### L1

`L1`

#### R1

`R1`

#### L2

`L2`

#### R2

`R2`

### Parameters

#### values

\[[`Either`](../type-aliases/Either.md)\<`L1`, `R1`\>, [`Either`](../type-aliases/Either.md)\<`L2`, `R2`\>\]

### Returns

[`Either`](../type-aliases/Either.md)\<`L1` \| `L2`, \[`R1`, `R2`\]\>

## Call Signature

> \<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`\>(`values`): [`Either`](../type-aliases/Either.md)\<`L1` \| `L2` \| `L3`, \[`R1`, `R2`, `R3`\]\>

### Type Parameters

#### L1

`L1`

#### R1

`R1`

#### L2

`L2`

#### R2

`R2`

#### L3

`L3`

#### R3

`R3`

### Parameters

#### values

\[[`Either`](../type-aliases/Either.md)\<`L1`, `R1`\>, [`Either`](../type-aliases/Either.md)\<`L2`, `R2`\>, [`Either`](../type-aliases/Either.md)\<`L3`, `R3`\>\]

### Returns

[`Either`](../type-aliases/Either.md)\<`L1` \| `L2` \| `L3`, \[`R1`, `R2`, `R3`\]\>

## Call Signature

> \<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`\>(`values`): [`Either`](../type-aliases/Either.md)\<`L1` \| `L2` \| `L3` \| `L4`, \[`R1`, `R2`, `R3`, `R4`\]\>

### Type Parameters

#### L1

`L1`

#### R1

`R1`

#### L2

`L2`

#### R2

`R2`

#### L3

`L3`

#### R3

`R3`

#### L4

`L4`

#### R4

`R4`

### Parameters

#### values

\[[`Either`](../type-aliases/Either.md)\<`L1`, `R1`\>, [`Either`](../type-aliases/Either.md)\<`L2`, `R2`\>, [`Either`](../type-aliases/Either.md)\<`L3`, `R3`\>, [`Either`](../type-aliases/Either.md)\<`L4`, `R4`\>\]

### Returns

[`Either`](../type-aliases/Either.md)\<`L1` \| `L2` \| `L3` \| `L4`, \[`R1`, `R2`, `R3`, `R4`\]\>

## Call Signature

> \<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`, `L5`, `R5`\>(`values`): [`Either`](../type-aliases/Either.md)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5`, \[`R1`, `R2`, `R3`, `R4`, `R5`\]\>

### Type Parameters

#### L1

`L1`

#### R1

`R1`

#### L2

`L2`

#### R2

`R2`

#### L3

`L3`

#### R3

`R3`

#### L4

`L4`

#### R4

`R4`

#### L5

`L5`

#### R5

`R5`

### Parameters

#### values

\[[`Either`](../type-aliases/Either.md)\<`L1`, `R1`\>, [`Either`](../type-aliases/Either.md)\<`L2`, `R2`\>, [`Either`](../type-aliases/Either.md)\<`L3`, `R3`\>, [`Either`](../type-aliases/Either.md)\<`L4`, `R4`\>, [`Either`](../type-aliases/Either.md)\<`L5`, `R5`\>\]

### Returns

[`Either`](../type-aliases/Either.md)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5`, \[`R1`, `R2`, `R3`, `R4`, `R5`\]\>

## Call Signature

> \<`L1`, `R1`, `L2`, `R2`, `L3`, `R3`, `L4`, `R4`, `L5`, `R5`, `L6`, `R6`\>(`values`): [`Either`](../type-aliases/Either.md)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`, \[`R1`, `R2`, `R3`, `R4`, `R5`, `R6`\]\>

### Type Parameters

#### L1

`L1`

#### R1

`R1`

#### L2

`L2`

#### R2

`R2`

#### L3

`L3`

#### R3

`R3`

#### L4

`L4`

#### R4

`R4`

#### L5

`L5`

#### R5

`R5`

#### L6

`L6`

#### R6

`R6`

### Parameters

#### values

\[[`Either`](../type-aliases/Either.md)\<`L1`, `R1`\>, [`Either`](../type-aliases/Either.md)\<`L2`, `R2`\>, [`Either`](../type-aliases/Either.md)\<`L3`, `R3`\>, [`Either`](../type-aliases/Either.md)\<`L4`, `R4`\>, [`Either`](../type-aliases/Either.md)\<`L5`, `R5`\>, [`Either`](../type-aliases/Either.md)\<`L6`, `R6`\>\]

### Returns

[`Either`](../type-aliases/Either.md)\<`L1` \| `L2` \| `L3` \| `L4` \| `L5` \| `L6`, \[`R1`, `R2`, `R3`, `R4`, `R5`, `R6`\]\>

## Call Signature

> \<`L`, `R`\>(`values`): [`Either`](../type-aliases/Either.md)\<`L`, `R`[]\>

### Type Parameters

#### L

`L`

#### R

`R`

### Parameters

#### values

[`Either`](../type-aliases/Either.md)\<`L`, `R`\>[]

### Returns

[`Either`](../type-aliases/Either.md)\<`L`, `R`[]\>
