[Package](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Right

# Class: Right<R\>

[<internal>](../modules/internal_.md).Right

## Type parameters

| Name |
| :------ |
| `R` |

## Table of contents

### Constructors

- [constructor](internal_.Right.md#constructor)

### Properties

- [name](internal_.Right.md#name)
- [right](internal_.Right.md#right)
- [type](internal_.Right.md#type)

### Methods

- [create](internal_.Right.md#create)

## Constructors

### constructor

• `Private` **new Right**<`R`\>()

#### Type parameters

| Name |
| :------ |
| `R` |

#### Defined in

dist/either.d.ts:19

## Properties

### name

• `Readonly` **name**: ``"Either"``

#### Defined in

dist/either.d.ts:17

___

### right

• `Readonly` **right**: `R`

#### Defined in

dist/either.d.ts:15

___

### type

• `Readonly` **type**: [`Right`](../modules/internal_.md#right) = `EitherType.Right`

#### Defined in

dist/either.d.ts:18

## Methods

### create

▸ `Static` **create**<`R`\>(`right`): [`Right`](internal_.Right.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | `R` |

#### Returns

[`Right`](internal_.Right.md)<`R`\>

#### Defined in

dist/either.d.ts:16
