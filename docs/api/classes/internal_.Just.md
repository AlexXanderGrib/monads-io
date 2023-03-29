[Package](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Just

# Class: Just<T\>

[<internal>](../modules/internal_.md).Just

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](internal_.Just.md#constructor)

### Properties

- [name](internal_.Just.md#name)
- [type](internal_.Just.md#type)
- [value](internal_.Just.md#value)

### Methods

- [create](internal_.Just.md#create)

## Constructors

### constructor

• `Private` **new Just**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/maybe.d.ts:12

## Properties

### name

• `Readonly` **name**: ``"Maybe"``

#### Defined in

dist/maybe.d.ts:10

___

### type

• `Readonly` **type**: [`Just`](../modules/internal_.md#just) = `MaybeState.Just`

#### Defined in

dist/maybe.d.ts:11

___

### value

• `Readonly` **value**: `T`

#### Defined in

dist/maybe.d.ts:8

## Methods

### create

▸ `Static` **create**<`T`\>(`value`): [`Just`](internal_.Just.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Just`](internal_.Just.md)<`T`\>

#### Defined in

dist/maybe.d.ts:9
