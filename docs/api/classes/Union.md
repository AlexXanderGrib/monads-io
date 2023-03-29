[Package](../README.md) / [Exports](../modules.md) / Union

# Class: Union<V, C\>

Represents a union of values with `type` field to differentiate between them.

**`Export`**

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | extends readonly { `type`: [`Primitive`](../modules/internal_.md#primitive)  }[] | All valid variants of type. Example: [Just<T>, None] |
| `C` | extends `V`[`number`][``"type"``] | - |

## Hierarchy

- **`Union`**

  ↳ [`EitherConstructor`](internal_.EitherConstructor.md)

  ↳ [`MaybeConstructor`](internal_.MaybeConstructor.md)

## Table of contents

### Constructors

- [constructor](Union.md#constructor)

### Properties

- [value](Union.md#value)

### Methods

- [is](Union.md#is)
- [match](Union.md#match)
- [toJSON](Union.md#tojson)

## Constructors

### constructor

• **new Union**<`V`, `C`\>(`value`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends readonly { `type`: [`Primitive`](../modules/internal_.md#primitive)  }[] |
| `C` | extends [`Primitive`](../modules/internal_.md#primitive) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`MapFlat`](../modules/internal_.md#mapflat)<`V`\>[`C`] | Any valid variant of type |

#### Defined in

dist/union.d.ts:38

## Properties

### value

• `Private` `Readonly` **value**: `any`

#### Defined in

dist/union.d.ts:32

## Methods

### is

▸ **is**<`K`\>(`type`): this is Union<V, K\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`Primitive`](../modules/internal_.md#primitive) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |

#### Returns

this is Union<V, K\>

{this is FlatUnion<V, K>} - Type of this object matches provided

#### Defined in

dist/union.d.ts:44

___

### match

▸ **match**<`R`\>(`matchers`): `R`

**`Throws`**

Undefined is not a function. If matcher is not found

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `matchers` | [`AnyMatchers`](../modules/internal_.md#anymatchers)<[`MapFlat`](../modules/internal_.md#mapflat)<`V`\>, `R`\> |

#### Returns

`R`

#### Defined in

dist/union.d.ts:51

___

### toJSON

▸ **toJSON**(): `V`[`number`]

#### Returns

`V`[`number`]

#### Defined in

dist/union.d.ts:52
