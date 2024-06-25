[Package](../README.md) / [Modules](../modules.md) / [either](either.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Classes

- [EitherConstructor](../classes/either._internal_.EitherConstructor.md)
- [Left](../classes/either._internal_.Left.md)
- [Right](../classes/either._internal_.Right.md)

### Type Aliases

- [LegacyMethodDecorator](either._internal_.md#legacymethoddecorator)
- [MapCaught](either._internal_.md#mapcaught)
- [ModernMethodDecorator](either._internal_.md#modernmethoddecorator)
- [SerializedLeft](either._internal_.md#serializedleft)
- [SerializedRight](either._internal_.md#serializedright)

### Variables

- [name](either._internal_.md#name)

## Type Aliases

### LegacyMethodDecorator

Ƭ **LegacyMethodDecorator**: (`target`: `CallableFunction`, `property`: `any`, `descriptor`: `PropertyDescriptor`) => `void`

#### Type declaration

▸ (`target`, `property`, `descriptor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `CallableFunction` |
| `property` | `any` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`void`

#### Defined in

dist/either.d.ts:168

___

### MapCaught

Ƭ **MapCaught**\<`L`\>: [`Mapper`](types.md#mapper)\<`unknown`, `L`\>

#### Type parameters

| Name |
| :------ |
| `L` |

#### Defined in

dist/either.d.ts:167

___

### ModernMethodDecorator

Ƭ **ModernMethodDecorator**\<`R`\>: \<T\>(`method`: `T`, `context`: `any`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `unknown` |

#### Type declaration

▸ \<`T`\>(`method`, `context`): `T`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`parameters`: [`AnyParameters`](index.md#anyparameters)) => `R` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `T` |
| `context` | `any` |

##### Returns

`T`

#### Defined in

dist/either.d.ts:169

___

### SerializedLeft

Ƭ **SerializedLeft**\<`L`\>: `Readonly`\<\{ `left`: `L` ; `name`: typeof [`name`](either._internal_.md#name) ; `type`: [`Left`](../enums/either.EitherType.md#left)  }\>

#### Type parameters

| Name |
| :------ |
| `L` |

#### Defined in

dist/either.d.ts:69

___

### SerializedRight

Ƭ **SerializedRight**\<`R`\>: `Readonly`\<\{ `name`: typeof [`name`](either._internal_.md#name) ; `right`: `R` ; `type`: [`Right`](../enums/either.EitherType.md#right)  }\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Defined in

dist/either.d.ts:92

## Variables

### name

• `Const` **name**: ``"Either"``

#### Defined in

dist/either.d.ts:6
