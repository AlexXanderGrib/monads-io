[**Package**](../../../README.md)

***

[Package](../../../modules.md) / [either.exports](../../README.md) / [\<internal\>](../README.md) / unwrap

# ~~Function: unwrap()~~

> **unwrap**(`message?`): `R`

Defined in: [either.ts:264](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/either.ts#L264)

## Parameters

### message?

`string` = `UnwrapCustomError.Messages.EITHER_IS_LEFT`

Error message, if either is left. By default "Either state is Left"

## Returns

`R`

- Right value of Either, if right

## Deprecated

- **If Left value is Error use [throw](throw.md) instead**

## Throws

- [UnwrapCustomError](../../../index/classes/UnwrapCustomError.md) is Left with provided [message](../classes/Right.md#unwrap-1)
