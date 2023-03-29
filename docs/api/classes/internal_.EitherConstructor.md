[Package](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EitherConstructor

# Class: EitherConstructor<L, R, T\>

[<internal>](../modules/internal_.md).EitherConstructor

Represents a union of values with `type` field to differentiate between them.

**`Export`**

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `L` | `L` | All valid variants of type. Example: [Just<T>, None] |
| `R` | `R` | - |
| `T` | extends [`EitherType`](../enums/internal_.EitherType.md) = [`EitherType`](../enums/internal_.EitherType.md) | - |

## Hierarchy

- [`Union`](Union.md)<[`State`](../modules/internal_.md#state)<`L`, `R`\>, `T`\>

  ↳ **`EitherConstructor`**

## Implements

- [`AsyncMonad`](../interfaces/internal_.AsyncMonad.md)<`R`\>
- [`Alternative`](../interfaces/internal_.Alternative.md)<`R`\>
- [`Container`](../interfaces/internal_.Container.md)<`R`\>

## Table of contents

### Constructors

- [constructor](internal_.EitherConstructor.md#constructor)

### Accessors

- [[toStringTag]](internal_.EitherConstructor.md#[tostringtag])

### Methods

- [apply](internal_.EitherConstructor.md#apply)
- [asyncChain](internal_.EitherConstructor.md#asyncchain)
- [await](internal_.EitherConstructor.md#await)
- [biMap](internal_.EitherConstructor.md#bimap)
- [biMatch](internal_.EitherConstructor.md#bimatch)
- [chain](internal_.EitherConstructor.md#chain)
- [default](internal_.EitherConstructor.md#default)
- [getLeft](internal_.EitherConstructor.md#getleft)
- [getRight](internal_.EitherConstructor.md#getright)
- [is](internal_.EitherConstructor.md#is)
- [isLeft](internal_.EitherConstructor.md#isleft)
- [isRight](internal_.EitherConstructor.md#isright)
- [join](internal_.EitherConstructor.md#join)
- [map](internal_.EitherConstructor.md#map)
- [mapLeft](internal_.EitherConstructor.md#mapleft)
- [match](internal_.EitherConstructor.md#match)
- [or](internal_.EitherConstructor.md#or)
- [promise](internal_.EitherConstructor.md#promise)
- [swap](internal_.EitherConstructor.md#swap)
- [tap](internal_.EitherConstructor.md#tap)
- [throw](internal_.EitherConstructor.md#throw)
- [toJSON](internal_.EitherConstructor.md#tojson)
- [unwrap](internal_.EitherConstructor.md#unwrap)
- [unwrapOr](internal_.EitherConstructor.md#unwrapor)
- [zip](internal_.EitherConstructor.md#zip)
- [left](internal_.EitherConstructor.md#left)
- [right](internal_.EitherConstructor.md#right)

## Constructors

### constructor

• **new EitherConstructor**<`L`, `R`, `T`\>(`value`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `L` |
| `R` | `R` |
| `T` | extends [`EitherType`](../enums/internal_.EitherType.md) = [`EitherType`](../enums/internal_.EitherType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`MapFlat`](../modules/internal_.md#mapflat)<[`State`](../modules/internal_.md#state)<`L`, `R`\>\>[`T`] | Any valid variant of type |

#### Inherited from

[Union](Union.md).[constructor](Union.md#constructor)

#### Defined in

dist/union.d.ts:38

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Defined in

dist/either.d.ts:29

## Methods

### apply

▸ **apply**<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Either`](../modules/internal_.md#either)<`L`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/internal_.md#either)<`L`, [`Pm`](../modules/internal_.md#pm)<`A`, `B`, `P`\>\> |
| `argument` | [`Either`](../modules/internal_.md#either)<`L`, `A`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)<`L`, `B`\>

#### Implementation of

[AsyncMonad](../interfaces/internal_.AsyncMonad.md).[apply](../interfaces/internal_.AsyncMonad.md#apply)

#### Defined in

dist/either.d.ts:36

▸ **apply**<`A`, `B`, `P`\>(`this`, `map`, `...parameters`): [`Either`](../modules/internal_.md#either)<`L`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/internal_.md#either)<`L`, `A`\> |
| `map` | [`Either`](../modules/internal_.md#either)<`L`, [`Pm`](../modules/internal_.md#pm)<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)<`L`, `B`\>

#### Implementation of

[AsyncMonad](../interfaces/internal_.AsyncMonad.md).[apply](../interfaces/internal_.AsyncMonad.md#apply)

#### Defined in

dist/either.d.ts:37

___

### asyncChain

▸ **asyncChain**<`A`, `B`, `P`\>(`map`, `...parameters`): `Promise`<[`Either`](../modules/internal_.md#either)<`L` \| `A`, `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`R`, [`MaybePromiseLike`](../modules.md#maybepromiselike)<[`Either`](../modules/internal_.md#either)<`A`, `B`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`<[`Either`](../modules/internal_.md#either)<`L` \| `A`, `B`\>\>

#### Implementation of

[AsyncMonad](../interfaces/internal_.AsyncMonad.md).[asyncChain](../interfaces/internal_.AsyncMonad.md#asyncchain)

#### Defined in

dist/either.d.ts:41

___

### await

▸ **await**<`T`\>(`this`): `Promise`<[`Either`](../modules/internal_.md#either)<`L`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`EitherConstructor`](internal_.EitherConstructor.md)<`L`, [`MaybePromiseLike`](../modules.md#maybepromiselike)<`T`\>, [`EitherType`](../enums/internal_.EitherType.md)\> |

#### Returns

`Promise`<[`Either`](../modules/internal_.md#either)<`L`, `T`\>\>

#### Implementation of

[AsyncMonad](../interfaces/internal_.AsyncMonad.md).[await](../interfaces/internal_.AsyncMonad.md#await)

#### Defined in

dist/either.d.ts:42

___

### biMap

▸ **biMap**<`A`, `B`\>(`mapLeft`, `mapRight`): [`Either`](../modules/internal_.md#either)<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapLeft` | [`Pm`](../modules/internal_.md#pm)<`L`, `A`\> |
| `mapRight` | [`Pm`](../modules/internal_.md#pm)<`R`, `B`\> |

#### Returns

[`Either`](../modules/internal_.md#either)<`A`, `B`\>

#### Defined in

dist/either.d.ts:40

___

### biMatch

▸ **biMatch**<`A`, `B`\>(`mapLeft`, `mapRight`): `A` \| `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapLeft` | [`Pm`](../modules/internal_.md#pm)<`L`, `A`\> |
| `mapRight` | [`Pm`](../modules/internal_.md#pm)<`R`, `B`\> |

#### Returns

`A` \| `B`

#### Defined in

dist/either.d.ts:43

___

### chain

▸ **chain**<`A`, `B`, `P`\>(`map`, `...parameters`): [`Either`](../modules/internal_.md#either)<`L` \| `A`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`R`, [`Either`](../modules/internal_.md#either)<`A`, `B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)<`L` \| `A`, `B`\>

#### Implementation of

[AsyncMonad](../interfaces/internal_.AsyncMonad.md).[chain](../interfaces/internal_.AsyncMonad.md#chain)

#### Defined in

dist/either.d.ts:39

___

### default

▸ **default**(`value`): [`Either`](../modules/internal_.md#either)<`L`, `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `R` |

#### Returns

[`Either`](../modules/internal_.md#either)<`L`, `R`\>

#### Implementation of

[Alternative](../interfaces/internal_.Alternative.md).[default](../interfaces/internal_.Alternative.md#default)

#### Defined in

dist/either.d.ts:44

___

### getLeft

▸ **getLeft**(): `undefined` \| `L`

#### Returns

`undefined` \| `L`

#### Defined in

dist/either.d.ts:27

___

### getRight

▸ **getRight**(): `undefined` \| `R`

#### Returns

`undefined` \| `R`

#### Defined in

dist/either.d.ts:26

___

### is

▸ **is**<`K`\>(`type`): this is Union<State<L, R\>, K\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `EitherType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |

#### Returns

this is Union<State<L, R\>, K\>

{this is FlatUnion<V, K>} - Type of this object matches provided

#### Inherited from

[Union](Union.md).[is](Union.md#is)

#### Defined in

dist/union.d.ts:44

___

### isLeft

▸ **isLeft**(): this is EitherConstructor<L, R, Left\>

#### Returns

this is EitherConstructor<L, R, Left\>

#### Defined in

dist/either.d.ts:30

___

### isRight

▸ **isRight**(): this is EitherConstructor<L, R, Right\>

#### Returns

this is EitherConstructor<L, R, Right\>

#### Defined in

dist/either.d.ts:31

___

### join

▸ **join**<`L1`, `L2`, `R`\>(`this`): [`Either`](../modules/internal_.md#either)<`L1` \| `L2`, `R`\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `L2` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/internal_.md#either)<`L1`, [`Either`](../modules/internal_.md#either)<`L2`, `R`\>\> |

#### Returns

[`Either`](../modules/internal_.md#either)<`L1` \| `L2`, `R`\>

#### Implementation of

[AsyncMonad](../interfaces/internal_.AsyncMonad.md).[join](../interfaces/internal_.AsyncMonad.md#join)

#### Defined in

dist/either.d.ts:33

___

### map

▸ **map**<`T`, `P`\>(`map`, `...parameters`): [`Either`](../modules/internal_.md#either)<`L`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`R`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)<`L`, `T`\>

#### Implementation of

[AsyncMonad](../interfaces/internal_.AsyncMonad.md).[map](../interfaces/internal_.AsyncMonad.md#map)

#### Defined in

dist/either.d.ts:35

___

### mapLeft

▸ **mapLeft**<`T`, `P`\>(`map`, `...parameters`): [`Either`](../modules/internal_.md#either)<`T`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`L`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)<`T`, `R`\>

#### Defined in

dist/either.d.ts:34

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
| `matchers` | [`AnyMatchers`](../modules/internal_.md#anymatchers)<[`MapFlat`](../modules/internal_.md#mapflat)<[`State`](../modules/internal_.md#state)<`L`, `R`\>\>, `R`\> |

#### Returns

`R`

#### Inherited from

[Union](Union.md).[match](Union.md#match)

#### Defined in

dist/union.d.ts:51

___

### or

▸ **or**(`x`): [`Either`](../modules/internal_.md#either)<`L`, `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Either`](../modules/internal_.md#either)<`L`, `R`\> |

#### Returns

[`Either`](../modules/internal_.md#either)<`L`, `R`\>

#### Implementation of

[Alternative](../interfaces/internal_.Alternative.md).[or](../interfaces/internal_.Alternative.md#or)

#### Defined in

dist/either.d.ts:45

___

### promise

▸ **promise**(): `Promise`<`R`\>

#### Returns

`Promise`<`R`\>

#### Defined in

dist/either.d.ts:48

___

### swap

▸ **swap**(): [`Either`](../modules/internal_.md#either)<`R`, `L`\>

#### Returns

[`Either`](../modules/internal_.md#either)<`R`, `L`\>

#### Defined in

dist/either.d.ts:38

___

### tap

▸ **tap**<`P`\>(`callback`, `...parameters`): [`Either`](../modules/internal_.md#either)<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Pm`](../modules/internal_.md#pm)<`R`, `void`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/internal_.md#either)<`L`, `R`\>

#### Defined in

dist/either.d.ts:28

___

### throw

▸ **throw**(): `R`

#### Returns

`R`

#### Defined in

dist/either.d.ts:49

___

### toJSON

▸ **toJSON**(): [`Left`](internal_.Left.md)<`L`\> \| [`Right`](internal_.Right.md)<`R`\>

#### Returns

[`Left`](internal_.Left.md)<`L`\> \| [`Right`](internal_.Right.md)<`R`\>

#### Inherited from

[Union](Union.md).[toJSON](Union.md#tojson)

#### Defined in

dist/union.d.ts:52

___

### unwrap

▸ **unwrap**(`message?`): `R`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`R`

#### Implementation of

[Container](../interfaces/internal_.Container.md).[unwrap](../interfaces/internal_.Container.md#unwrap)

#### Defined in

dist/either.d.ts:47

___

### unwrapOr

▸ **unwrapOr**<`X`\>(`value`): `R` \| `X`

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `X` |

#### Returns

`R` \| `X`

#### Implementation of

[Container](../interfaces/internal_.Container.md).[unwrapOr](../interfaces/internal_.Container.md#unwrapor)

#### Defined in

dist/either.d.ts:32

___

### zip

▸ **zip**<`A`, `B`\>(`either`): [`Either`](../modules/internal_.md#either)<`L` \| `A`, [`Pair`](../modules.md#pair)<`R`, `B`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Either`](../modules/internal_.md#either)<`A`, `B`\> |

#### Returns

[`Either`](../modules/internal_.md#either)<`L` \| `A`, [`Pair`](../modules.md#pair)<`R`, `B`\>\>

#### Defined in

dist/either.d.ts:46

___

### left

▸ `Static` **left**<`T`, `R`\>(`value`): [`Either`](../modules/internal_.md#either)<`T`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |
| `R` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Either`](../modules/internal_.md#either)<`T`, `R`\>

#### Defined in

dist/either.d.ts:25

___

### right

▸ `Static` **right**<`L`, `T`\>(`right`): [`Either`](../modules/internal_.md#either)<`L`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `never` |
| `T` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | `T` |

#### Returns

[`Either`](../modules/internal_.md#either)<`L`, `T`\>

#### Defined in

dist/either.d.ts:24
