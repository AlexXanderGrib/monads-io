[Package](../README.md) / [Exports](../modules.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Enumerations

- [DecorationErrorMessages](../enums/internal_.DecorationErrorMessages.md)
- [DeserializationErrorMessages](../enums/internal_.DeserializationErrorMessages.md)
- [InvalidStateMessages](../enums/internal_.InvalidStateMessages.md)
- [UnwrapCustomErrorMessages](../enums/internal_.UnwrapCustomErrorMessages.md)

### Enumeration Members

- [EXPECTED\_DECORATING\_METHOD](internal_.md#expected_decorating_method)
- [Just](internal_.md#just)
- [Left](internal_.md#left)
- [None](internal_.md#none)
- [Right](internal_.md#right)

### Classes

- [EitherConstructor](../classes/internal_.EitherConstructor.md)
- [Identity](../classes/internal_.Identity.md)
- [Just](../classes/internal_.Just.md)
- [Left](../classes/internal_.Left.md)
- [MaybeConstructor](../classes/internal_.MaybeConstructor.md)
- [None](../classes/internal_.None.md)
- [Right](../classes/internal_.Right.md)

### Interfaces

- [Pipe](../interfaces/internal_.Pipe.md)

### Type Aliases

- [Either](internal_.md#either)
- [Mapper](internal_.md#mapper)
- [Maybe](internal_.md#maybe)
- [SerializedEither](internal_.md#serializedeither)
- [SerializedJust](internal_.md#serializedjust)
- [SerializedLeft](internal_.md#serializedleft)
- [SerializedMaybe](internal_.md#serializedmaybe)
- [SerializedNone](internal_.md#serializednone)
- [SerializedRight](internal_.md#serializedright)

### Variables

- [name](internal_.md#name)
- [name](internal_.md#name-1)

## Enumeration Members

### EXPECTED\_DECORATING\_METHOD

• **EXPECTED\_DECORATING\_METHOD**: ``"Expected decorating method"``

#### Defined in

dist/errors.d.ts:12

___

### Just

• **Just**: ``"Just"``

#### Defined in

dist/maybe.d.ts:4

___

### Left

• **Left**: ``"Left"``

#### Defined in

dist/either.d.ts:3

___

### None

• **None**: ``"None"``

#### Defined in

dist/maybe.d.ts:3

___

### Right

• **Right**: ``"Right"``

#### Defined in

dist/either.d.ts:4

## Type Aliases

### Either

Ƭ **Either**\<`L`, `R`\>: [`Right`](../classes/internal_.Right.md)\<`L`, `R`\> \| [`Left`](../classes/internal_.Left.md)\<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `unknown` |
| `R` | `unknown` |

#### Defined in

dist/either.d.ts:115

___

### Mapper

Ƭ **Mapper**\<`A`, `B`, `P`\>: (`value`: `A`, ...`parameters`: `P`) => `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules.md#anyparameters) = [] |

#### Type declaration

▸ (`value`, `...parameters`): `B`

Parameterized mapper
`(A, ...P) => B`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `A` |
| `...parameters` | `P` |

##### Returns

`B`

#### Defined in

dist/types.d.ts:10

___

### Maybe

Ƭ **Maybe**\<`T`\>: [`Just`](../classes/internal_.Just.md)\<`T`\> \| [`None`](../classes/internal_.None.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/maybe.d.ts:70

___

### SerializedEither

Ƭ **SerializedEither**\<`L`, `R`\>: [`SerializedRight`](internal_.md#serializedright)\<`R`\> \| [`SerializedLeft`](internal_.md#serializedleft)\<`L`\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Defined in

dist/either.d.ts:116

___

### SerializedJust

Ƭ **SerializedJust**\<`T`\>: `Readonly`\<\{ `name`: typeof [`name`](internal_.md#name-1) ; `type`: [`Just`](internal_.md#just) ; `value`: `T`  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/maybe.d.ts:42

___

### SerializedLeft

Ƭ **SerializedLeft**\<`L`\>: `Readonly`\<\{ `left`: `L` ; `name`: typeof [`name`](internal_.md#name) ; `type`: [`Left`](internal_.md#left)  }\>

#### Type parameters

| Name |
| :------ |
| `L` |

#### Defined in

dist/either.d.ts:69

___

### SerializedMaybe

Ƭ **SerializedMaybe**\<`T`\>: [`SerializedJust`](internal_.md#serializedjust)\<`T`\> \| [`SerializedNone`](internal_.md#serializednone)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/maybe.d.ts:71

___

### SerializedNone

Ƭ **SerializedNone**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | typeof [`name`](internal_.md#name-1) |
| `type` | [`None`](internal_.md#none) |

#### Defined in

dist/maybe.d.ts:56

___

### SerializedRight

Ƭ **SerializedRight**\<`R`\>: `Readonly`\<\{ `name`: typeof [`name`](internal_.md#name) ; `right`: `R` ; `type`: [`Right`](internal_.md#right)  }\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Defined in

dist/either.d.ts:92

## Variables

### name

• `Const` **name**: ``"Either"``

#### Defined in

dist/either.d.ts:6

___

### name

• `Const` **name**: ``"Maybe"``

#### Defined in

dist/maybe.d.ts:6
