[Package](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Left

# Class: Left<L\>

[<internal>](../modules/internal_.md).Left

## Type parameters

| Name |
| :------ |
| `L` |

## Table of contents

### Constructors

- [constructor](internal_.Left.md#constructor)

### Properties

- [left](internal_.Left.md#left)
- [name](internal_.Left.md#name)
- [type](internal_.Left.md#type)

### Methods

- [create](internal_.Left.md#create)

## Constructors

### constructor

• `Private` **new Left**<`L`\>()

#### Type parameters

| Name |
| :------ |
| `L` |

#### Defined in

dist/either.d.ts:12

## Properties

### left

• `Readonly` **left**: `L`

#### Defined in

dist/either.d.ts:8

___

### name

• `Readonly` **name**: ``"Either"``

#### Defined in

dist/either.d.ts:10

___

### type

• `Readonly` **type**: [`Left`](../modules/internal_.md#left) = `EitherType.Left`

#### Defined in

dist/either.d.ts:11

## Methods

### create

▸ `Static` **create**<`L`\>(`left`): [`Left`](internal_.Left.md)<`L`\>

#### Type parameters

| Name |
| :------ |
| `L` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `L` |

#### Returns

[`Left`](internal_.Left.md)<`L`\>

#### Defined in

dist/either.d.ts:9
