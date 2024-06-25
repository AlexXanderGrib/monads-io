[Package](../README.md) / [Modules](../modules.md) / [maybe](maybe.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Classes

- [Just](../classes/maybe._internal_.Just.md)
- [MaybeConstructor](../classes/maybe._internal_.MaybeConstructor.md)
- [None](../classes/maybe._internal_.None.md)

### Type Aliases

- [SerializedJust](maybe._internal_.md#serializedjust)
- [SerializedNone](maybe._internal_.md#serializednone)

### Variables

- [name](maybe._internal_.md#name)

## Type Aliases

### SerializedJust

Ƭ **SerializedJust**\<`T`\>: `Readonly`\<\{ `name`: typeof [`name`](maybe._internal_.md#name) ; `type`: [`Just`](../enums/maybe.MaybeState.md#just) ; `value`: `T`  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/maybe.d.ts:42

___

### SerializedNone

Ƭ **SerializedNone**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | typeof [`name`](maybe._internal_.md#name) |
| `type` | [`None`](../enums/maybe.MaybeState.md#none) |

#### Defined in

dist/maybe.d.ts:56

## Variables

### name

• `Const` **name**: ``"Maybe"``

#### Defined in

dist/maybe.d.ts:6
