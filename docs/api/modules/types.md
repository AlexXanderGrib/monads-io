[Package](../README.md) / [Modules](../modules.md) / types

# Module: types

## Table of contents

### References

- [Alternative](types.md#alternative)
- [AnyParameters](types.md#anyparameters)
- [Applicative](types.md#applicative)
- [AsyncMonad](types.md#asyncmonad)
- [Container](types.md#container)
- [Functor](types.md#functor)
- [MaybePromise](types.md#maybepromise)
- [MaybePromiseLike](types.md#maybepromiselike)
- [Monad](types.md#monad)
- [Nullable](types.md#nullable)
- [Pair](types.md#pair)

### Interfaces

- [Pipe](../interfaces/types.Pipe.md)

### Type Aliases

- [Mapper](types.md#mapper)

## References

### Alternative

Re-exports [Alternative](../interfaces/index.Alternative.md)

___

### AnyParameters

Re-exports [AnyParameters](index.md#anyparameters)

___

### Applicative

Re-exports [Applicative](../interfaces/index.Applicative.md)

___

### AsyncMonad

Re-exports [AsyncMonad](../interfaces/index.AsyncMonad.md)

___

### Container

Re-exports [Container](../interfaces/index.Container.md)

___

### Functor

Re-exports [Functor](../interfaces/index.Functor.md)

___

### MaybePromise

Re-exports [MaybePromise](index.md#maybepromise)

___

### MaybePromiseLike

Re-exports [MaybePromiseLike](index.md#maybepromiselike)

___

### Monad

Re-exports [Monad](../interfaces/index.Monad.md)

___

### Nullable

Re-exports [Nullable](index.md#nullable)

___

### Pair

Re-exports [Pair](index.md#pair)

## Type Aliases

### Mapper

Ƭ **Mapper**\<`A`, `B`, `P`\>: (`value`: `A`, ...`parameters`: `P`) => `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](index.md#anyparameters) = [] |

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
