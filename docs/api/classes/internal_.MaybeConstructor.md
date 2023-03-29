[Package](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MaybeConstructor

# Class: MaybeConstructor<T, S\>

[<internal>](../modules/internal_.md).MaybeConstructor

Represents a union of values with `type` field to differentiate between them.

**`Export`**

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `T` | All valid variants of type. Example: [Just<T>, None] |
| `S` | extends [`MaybeState`](../enums/internal_.MaybeState.md) = [`MaybeState`](../enums/internal_.MaybeState.md) | - |

## Hierarchy

- [`Union`](Union.md)<[`States`](../modules/internal_.md#states)<`T`\>, `S`\>

  ↳ **`MaybeConstructor`**

## Implements

- [`Monad`](../interfaces/internal_.Monad.md)<`T`\>
- [`Alternative`](../interfaces/internal_.Alternative.md)<`T`\>
- [`Container`](../interfaces/internal_.Container.md)<`T`\>

## Table of contents

### Constructors

- [constructor](internal_.MaybeConstructor.md#constructor)

### Accessors

- [[toStringTag]](internal_.MaybeConstructor.md#[tostringtag])

### Methods

- [apply](internal_.MaybeConstructor.md#apply)
- [asyncChain](internal_.MaybeConstructor.md#asyncchain)
- [await](internal_.MaybeConstructor.md#await)
- [biMatch](internal_.MaybeConstructor.md#bimatch)
- [chain](internal_.MaybeConstructor.md#chain)
- [default](internal_.MaybeConstructor.md#default)
- [filter](internal_.MaybeConstructor.md#filter)
- [flatMap](internal_.MaybeConstructor.md#flatmap)
- [is](internal_.MaybeConstructor.md#is)
- [isJust](internal_.MaybeConstructor.md#isjust)
- [isNone](internal_.MaybeConstructor.md#isnone)
- [join](internal_.MaybeConstructor.md#join)
- [map](internal_.MaybeConstructor.md#map)
- [match](internal_.MaybeConstructor.md#match)
- [or](internal_.MaybeConstructor.md#or)
- [tap](internal_.MaybeConstructor.md#tap)
- [toJSON](internal_.MaybeConstructor.md#tojson)
- [unwrap](internal_.MaybeConstructor.md#unwrap)
- [unwrapOr](internal_.MaybeConstructor.md#unwrapor)
- [zip](internal_.MaybeConstructor.md#zip)
- [just](internal_.MaybeConstructor.md#just)
- [none](internal_.MaybeConstructor.md#none)

## Constructors

### constructor

• **new MaybeConstructor**<`T`, `S`\>(`value`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`MaybeState`](../enums/internal_.MaybeState.md) = [`MaybeState`](../enums/internal_.MaybeState.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`MapFlat`](../modules/internal_.md#mapflat)<[`States`](../modules/internal_.md#states)<`T`\>\>[`S`] | Any valid variant of type |

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

dist/maybe.d.ts:33

## Methods

### apply

▸ **apply**<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/internal_.md#maybe)<[`Pm`](../modules/internal_.md#pm)<`A`, `B`, `P`\>\> |
| `argument` | [`Maybe`](../modules/internal_.md#maybe)<`A`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`B`\>

#### Implementation of

[Monad](../interfaces/internal_.Monad.md).[apply](../interfaces/internal_.Monad.md#apply)

#### Defined in

dist/maybe.d.ts:31

▸ **apply**<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/internal_.md#maybe)<`A`\> |
| `argument` | [`Maybe`](../modules/internal_.md#maybe)<[`Pm`](../modules/internal_.md#pm)<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`B`\>

#### Implementation of

[Monad](../interfaces/internal_.Monad.md).[apply](../interfaces/internal_.Monad.md#apply)

#### Defined in

dist/maybe.d.ts:32

___

### asyncChain

▸ **asyncChain**<`V`, `P`\>(`map`, `...parameters`): `Promise`<[`Maybe`](../modules/internal_.md#maybe)<`V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`T`, [`MaybePromiseLike`](../modules.md#maybepromiselike)<[`Maybe`](../modules/internal_.md#maybe)<`V`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`<[`Maybe`](../modules/internal_.md#maybe)<`V`\>\>

#### Defined in

dist/maybe.d.ts:44

___

### await

▸ **await**<`X`\>(`this`): `Promise`<[`Maybe`](../modules/internal_.md#maybe)<`X`\>\>

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`MaybeConstructor`](internal_.MaybeConstructor.md)<[`MaybePromiseLike`](../modules.md#maybepromiselike)<`X`\>, [`MaybeState`](../enums/internal_.MaybeState.md)\> |

#### Returns

`Promise`<[`Maybe`](../modules/internal_.md#maybe)<`X`\>\>

#### Defined in

dist/maybe.d.ts:45

___

### biMatch

▸ **biMatch**<`A`, `B`\>(`mapJust`, `mapNone`): `A` \| `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapJust` | [`Pm`](../modules/internal_.md#pm)<`T`, `A`, []\> |
| `mapNone` | [`Pm`](../modules/internal_.md#pm)<`void`, `B`, []\> |

#### Returns

`A` \| `B`

#### Defined in

dist/maybe.d.ts:43

___

### chain

▸ **chain**<`V`, `A`\>(`map`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`T`, [`Maybe`](../modules/internal_.md#maybe)<`V`\>, `A`\> |
| `...parameters` | `A` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`V`\>

#### Implementation of

[Monad](../interfaces/internal_.Monad.md).[chain](../interfaces/internal_.Monad.md#chain)

#### Defined in

dist/maybe.d.ts:36

___

### default

▸ **default**(`value`): [`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Implementation of

[Alternative](../interfaces/internal_.Alternative.md).[default](../interfaces/internal_.Alternative.md#default)

#### Defined in

dist/maybe.d.ts:37

___

### filter

▸ **filter**<`X`\>(`filter`): [`Maybe`](../modules/internal_.md#maybe)<`X`\>

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`input`: `T`) => input is X |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`X`\>

#### Defined in

dist/maybe.d.ts:34

▸ **filter**(`filter`): [`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`input`: `T`) => `boolean` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Defined in

dist/maybe.d.ts:35

___

### flatMap

▸ **flatMap**<`V`, `P`\>(`map`, `...parameters`): `undefined` \| `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`T`, `V`, `P`\> |
| `...parameters` | `P` |

#### Returns

`undefined` \| `V`

#### Defined in

dist/maybe.d.ts:41

___

### is

▸ **is**<`K`\>(`type`): this is Union<States<T\>, K\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `MaybeState` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |

#### Returns

this is Union<States<T\>, K\>

{this is FlatUnion<V, K>} - Type of this object matches provided

#### Inherited from

[Union](Union.md).[is](Union.md#is)

#### Defined in

dist/union.d.ts:44

___

### isJust

▸ **isJust**(): this is MaybeConstructor<T, Just\>

#### Returns

this is MaybeConstructor<T, Just\>

#### Defined in

dist/maybe.d.ts:27

___

### isNone

▸ **isNone**(): this is MaybeConstructor<T, None\>

#### Returns

this is MaybeConstructor<T, None\>

#### Defined in

dist/maybe.d.ts:28

___

### join

▸ **join**<`V`\>(`this`): [`Maybe`](../modules/internal_.md#maybe)<`V`\>

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Maybe`](../modules/internal_.md#maybe)<[`Maybe`](../modules/internal_.md#maybe)<`V`\>\> |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`V`\>

#### Implementation of

[Monad](../interfaces/internal_.Monad.md).[join](../interfaces/internal_.Monad.md#join)

#### Defined in

dist/maybe.d.ts:29

___

### map

▸ **map**<`V`, `A`\>(`map`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Pm`](../modules/internal_.md#pm)<`T`, `V`, `A`\> |
| `...parameters` | `A` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`V`\>

#### Implementation of

[Monad](../interfaces/internal_.Monad.md).[map](../interfaces/internal_.Monad.md#map)

#### Defined in

dist/maybe.d.ts:30

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
| `matchers` | [`AnyMatchers`](../modules/internal_.md#anymatchers)<[`MapFlat`](../modules/internal_.md#mapflat)<[`States`](../modules/internal_.md#states)<`T`\>\>, `R`\> |

#### Returns

`R`

#### Inherited from

[Union](Union.md).[match](Union.md#match)

#### Defined in

dist/union.d.ts:51

___

### or

▸ **or**(`x`): [`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../modules/internal_.md#maybe)<`T`\> |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Implementation of

[Alternative](../interfaces/internal_.Alternative.md).[or](../interfaces/internal_.Alternative.md#or)

#### Defined in

dist/maybe.d.ts:38

___

### tap

▸ **tap**<`P`\>(`callback`, `...parameters`): [`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Pm`](../modules/internal_.md#pm)<`T`, `void`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Defined in

dist/maybe.d.ts:40

___

### toJSON

▸ **toJSON**(): [`None`](internal_.None.md) \| [`Just`](internal_.Just.md)<`T`\>

#### Returns

[`None`](internal_.None.md) \| [`Just`](internal_.Just.md)<`T`\>

#### Inherited from

[Union](Union.md).[toJSON](Union.md#tojson)

#### Defined in

dist/union.d.ts:52

___

### unwrap

▸ **unwrap**(`message?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`T`

#### Implementation of

[Container](../interfaces/internal_.Container.md).[unwrap](../interfaces/internal_.Container.md#unwrap)

#### Defined in

dist/maybe.d.ts:42

___

### unwrapOr

▸ **unwrapOr**<`X`\>(`value`): `T` \| `X`

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `X` |

#### Returns

`T` \| `X`

#### Implementation of

[Container](../interfaces/internal_.Container.md).[unwrapOr](../interfaces/internal_.Container.md#unwrapor)

#### Defined in

dist/maybe.d.ts:26

___

### zip

▸ **zip**<`A`\>(`maybe`): [`Maybe`](../modules/internal_.md#maybe)<[`Pair`](../modules.md#pair)<`T`, `A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybe` | [`Maybe`](../modules/internal_.md#maybe)<`A`\> |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<[`Pair`](../modules.md#pair)<`T`, `A`\>\>

#### Defined in

dist/maybe.d.ts:39

___

### just

▸ `Static` **just**<`T`\>(`value`): [`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Defined in

dist/maybe.d.ts:25

___

### none

▸ `Static` **none**<`T`\>(): [`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Returns

[`Maybe`](../modules/internal_.md#maybe)<`T`\>

#### Defined in

dist/maybe.d.ts:24
