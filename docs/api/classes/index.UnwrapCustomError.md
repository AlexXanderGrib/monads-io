[Package](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / UnwrapCustomError

# Class: UnwrapCustomError

[index](../modules/index.md).UnwrapCustomError

## Hierarchy

- `Error`

  ↳ **`UnwrapCustomError`**

## Table of contents

### Constructors

- [constructor](index.UnwrapCustomError.md#constructor)

### Properties

- [name](index.UnwrapCustomError.md#name)
- [Messages](index.UnwrapCustomError.md#messages)

### Methods

- [inlineThrow](index.UnwrapCustomError.md#inlinethrow)

## Constructors

### constructor

• **new UnwrapCustomError**(`message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

dist/errors.d.ts:36

## Properties

### name

• **name**: `string`

#### Overrides

Error.name

#### Defined in

dist/errors.d.ts:34

___

### Messages

▪ `Static` `Readonly` **Messages**: typeof [`UnwrapCustomErrorMessages`](../enums/index._internal_.UnwrapCustomErrorMessages.md)

#### Defined in

dist/errors.d.ts:33

## Methods

### inlineThrow

▸ `Static` **inlineThrow**(`message`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`never`

#### Defined in

dist/errors.d.ts:35
