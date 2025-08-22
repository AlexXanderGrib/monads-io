[**Package**](../../README.md)

***

[Package](../../modules.md) / [index](../README.md) / UnwrapCustomError

# Class: UnwrapCustomError

Defined in: [errors.ts:58](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/errors.ts#L58)

## Extends

- `Error`

## Constructors

### Constructor

> **new UnwrapCustomError**(`message`): `UnwrapCustomError`

Defined in: [errors.ts:67](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/errors.ts#L67)

#### Parameters

##### message

`string`

#### Returns

`UnwrapCustomError`

#### Overrides

`Error.constructor`

## Properties

### name

> **name**: `string` = `"UnwrapCustomError"`

Defined in: [errors.ts:60](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/errors.ts#L60)

#### Overrides

`Error.name`

***

### Messages

> `readonly` `static` **Messages**: *typeof* [`UnwrapCustomErrorMessages`](../-internal-/enumerations/UnwrapCustomErrorMessages.md) = `UnwrapCustomErrorMessages`

Defined in: [errors.ts:59](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/errors.ts#L59)

## Methods

### inlineThrow()

> `static` **inlineThrow**(`message`): `never`

Defined in: [errors.ts:62](https://github.com/AlexXanderGrib/monads-io/blob/d65e47796764202dffd7314b61c2ea9cedbb26e8/src/errors.ts#L62)

#### Parameters

##### message

`string`

#### Returns

`never`
