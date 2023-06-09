[Package](../README.md) / [Exports](../modules.md) / <internal\>

# Module: <internal\>

## Table of contents

### Enumeration Members

- [Just](internal_.md#just)
- [Left](internal_.md#left)
- [None](internal_.md#none)
- [Right](internal_.md#right)

### Classes

- [EitherConstructor](../classes/internal_.EitherConstructor.md)
- [Just](../classes/internal_.Just.md)
- [Left](../classes/internal_.Left.md)
- [MaybeConstructor](../classes/internal_.MaybeConstructor.md)
- [None](../classes/internal_.None.md)
- [Right](../classes/internal_.Right.md)

### Interfaces

- [Alternative](../interfaces/internal_.Alternative.md)
- [Applicative](../interfaces/internal_.Applicative.md)
- [AsyncMonad](../interfaces/internal_.AsyncMonad.md)
- [Container](../interfaces/internal_.Container.md)
- [Functor](../interfaces/internal_.Functor.md)
- [Monad](../interfaces/internal_.Monad.md)

### Type Aliases

- [Either](internal_.md#either)
- [Maybe](internal_.md#maybe)
- [Pm](internal_.md#pm)
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

### Just

• **Just**: ``1``

#### Defined in

dist/maybe.d.ts:4

___

### Left

• **Left**: ``0``

#### Defined in

dist/either.d.ts:3

___

### None

• **None**: ``0``

#### Defined in

dist/maybe.d.ts:3

___

### Right

• **Right**: ``1``

#### Defined in

dist/either.d.ts:4

## Type Aliases

### Either

Ƭ **Either**<`L`, `R`\>: [`Right`](../classes/internal_.Right.md)<`L`, `R`\> \| [`Left`](../classes/internal_.Left.md)<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `unknown` |
| `R` | `unknown` |

#### Defined in

dist/either.d.ts:66

___

### Maybe

Ƭ **Maybe**<`T`\>: [`Just`](../classes/internal_.Just.md)<`T`\> \| [`None`](../classes/internal_.None.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/maybe.d.ts:58

___

### Pm

Ƭ **Pm**<`A`, `B`, `P`\>: (`value`: `A`, ...`parameters`: `P`) => `B`

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

### SerializedEither

Ƭ **SerializedEither**<`L`, `R`\>: [`SerializedRight`](internal_.md#serializedright)<`R`\> \| [`SerializedLeft`](internal_.md#serializedleft)<`L`\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Defined in

dist/either.d.ts:67

___

### SerializedJust

Ƭ **SerializedJust**<`T`\>: `Readonly`<{ `name`: typeof [`name`](internal_.md#name-1) ; `type`: [`Just`](internal_.md#just) ; `value`: `T`  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/maybe.d.ts:31

___

### SerializedLeft

Ƭ **SerializedLeft**<`L`\>: `Readonly`<{ `left`: `L` ; `name`: typeof [`name`](internal_.md#name) ; `type`: [`Left`](internal_.md#left)  }\>

#### Type parameters

| Name |
| :------ |
| `L` |

#### Defined in

dist/either.d.ts:34

___

### SerializedMaybe

Ƭ **SerializedMaybe**<`T`\>: [`SerializedJust`](internal_.md#serializedjust)<`T`\> \| [`SerializedNone`](internal_.md#serializednone)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/maybe.d.ts:59

___

### SerializedNone

Ƭ **SerializedNone**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | typeof [`name`](internal_.md#name-1) |
| `type` | [`None`](internal_.md#none) |

#### Defined in

dist/maybe.d.ts:45

___

### SerializedRight

Ƭ **SerializedRight**<`R`\>: `Readonly`<{ `name`: typeof [`name`](internal_.md#name) ; `right`: `R` ; `type`: [`Right`](internal_.md#right)  }\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Defined in

dist/either.d.ts:50

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
