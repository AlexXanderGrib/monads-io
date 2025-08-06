[**Package**](../../README.md)

***

[Package](../../modules.md) / [index](../README.md) / InvalidStateError

# Class: InvalidStateError

Defined in: [errors.ts:42](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/errors.ts#L42)

## Extends

- `Error`

## Constructors

### Constructor

> **new InvalidStateError**(`message`): `InvalidStateError`

Defined in: [errors.ts:46](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/errors.ts#L46)

#### Parameters

##### message

[`InvalidStateMessages`](../-internal-/enumerations/InvalidStateMessages.md) = `InvalidStateMessages.INVALID_STATE`

#### Returns

`InvalidStateError`

#### Overrides

`Error.constructor`

## Properties

### name

> **name**: `string` = `"InvalidStateError"`

Defined in: [errors.ts:44](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/errors.ts#L44)

#### Overrides

`Error.name`

***

### Messages

> `readonly` `static` **Messages**: *typeof* [`InvalidStateMessages`](../-internal-/enumerations/InvalidStateMessages.md) = `InvalidStateMessages`

Defined in: [errors.ts:43](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/errors.ts#L43)
