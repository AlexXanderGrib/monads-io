[Package](../README.md) / [Exports](../modules.md) / <internal\>

# Module: <internal\>

## Table of contents

### Enumerations

- [EitherType](../enums/internal_.EitherType.md)
- [MaybeState](../enums/internal_.MaybeState.md)

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

- [AnyMatchers](internal_.md#anymatchers)
- [Either](internal_.md#either)
- [MapFlat](internal_.md#mapflat)
- [Matchers](internal_.md#matchers)
- [MatchersDefault](internal_.md#matchersdefault)
- [Maybe](internal_.md#maybe)
- [Pm](internal_.md#pm)
- [Primitive](internal_.md#primitive)
- [SerializedEither](internal_.md#serializedeither)
- [SerializedMaybe](internal_.md#serializedmaybe)
- [State](internal_.md#state)
- [States](internal_.md#states)

## Enumeration Members

### Just

• **Just**: ``1``

#### Defined in

dist/maybe.d.ts:4

___

### Left

• **Left**: ``0``

#### Defined in

dist/either.d.ts:4

___

### None

• **None**: ``0``

#### Defined in

dist/maybe.d.ts:5

___

### Right

• **Right**: ``1``

#### Defined in

dist/either.d.ts:5

## Type Aliases

### AnyMatchers

Ƭ **AnyMatchers**<`V`, `R`\>: [`Matchers`](internal_.md#matchers)<`V`, `R`\> \| [`MatchersDefault`](internal_.md#matchersdefault)<`V`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `Record`<`string`, `unknown`\> |
| `R` | `R` |

#### Defined in

dist/union.d.ts:13

___

### Either

Ƭ **Either**<`L`, `R`\>: [`EitherConstructor`](../classes/internal_.EitherConstructor.md)<`L`, `R`, [`Right`](internal_.md#right)\> \| [`EitherConstructor`](../classes/internal_.EitherConstructor.md)<`L`, `R`, [`Left`](internal_.md#left)\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Defined in

dist/either.d.ts:51

___

### MapFlat

Ƭ **MapFlat**<`V`\>: { [key in V[number]["type"]]: Extract<V[number], Object\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends readonly { `type`: [`Primitive`](internal_.md#primitive)  }[] |

#### Defined in

dist/union.d.ts:15

___

### Matchers

Ƭ **Matchers**<`V`, `R`\>: { readonly [key in keyof V]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `Record`<`string`, `unknown`\> |
| `R` | `R` |

#### Defined in

dist/union.d.ts:5

___

### MatchersDefault

Ƭ **MatchersDefault**<`V`, `R`\>: { readonly [key in keyof V]?: Function } & { `[_]`: <K\>(`value`: `V`[`K`], `type`: `K`) => `R`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `Record`<`string`, `unknown`\> |
| `R` | `R` |

#### Defined in

dist/union.d.ts:8

___

### Maybe

Ƭ **Maybe**<`T`\>: [`MaybeConstructor`](../classes/internal_.MaybeConstructor.md)<`T`, [`Just`](internal_.md#just)\> \| [`MaybeConstructor`](../classes/internal_.MaybeConstructor.md)<`T`, [`None`](internal_.md#none)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/maybe.d.ts:47

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

### Primitive

Ƭ **Primitive**: `string` \| `number`

#### Defined in

dist/union.d.ts:14

___

### SerializedEither

Ƭ **SerializedEither**<`L`, `R`\>: [`State`](internal_.md#state)<`L`, `R`\>[`number`]

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Defined in

dist/either.d.ts:22

___

### SerializedMaybe

Ƭ **SerializedMaybe**<`T`\>: [`States`](internal_.md#states)<`T`\>[`number`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/maybe.d.ts:22

___

### State

Ƭ **State**<`L`, `R`\>: [`Pair`](../modules.md#pair)<[`Left`](../classes/internal_.Left.md)<`L`\>, [`Right`](../classes/internal_.Right.md)<`R`\>\>

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Defined in

dist/either.d.ts:21

___

### States

Ƭ **States**<`T`\>: [`Pair`](../modules.md#pair)<[`Just`](../classes/internal_.Just.md)<`T`\>, [`None`](../classes/internal_.None.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/maybe.d.ts:21
