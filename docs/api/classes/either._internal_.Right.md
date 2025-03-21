[Package](../README.md) / [Modules](../modules.md) / [either](../modules/either.md) / [\<internal\>](../modules/either._internal_.md) / Right

# Class: Right\<L, R\>

[either](../modules/either.md).[\<internal\>](../modules/either._internal_.md).Right

## Type parameters

| Name |
| :------ |
| `L` |
| `R` |

## Hierarchy

- [`EitherConstructor`](either._internal_.EitherConstructor.md)\<`L`, `R`\>

  ↳ **`Right`**

## Implements

- [`SerializedRight`](../modules/either._internal_.md#serializedright)\<`R`\>

## Table of contents

### Constructors

- [constructor](either._internal_.Right.md#constructor)

### Properties

- [right](either._internal_.Right.md#right)

### Accessors

- [[toStringTag]](either._internal_.Right.md#[tostringtag])
- [name](either._internal_.Right.md#name)
- [type](either._internal_.Right.md#type)

### Methods

- [any](either._internal_.Right.md#any)
- [apply](either._internal_.Right.md#apply)
- [asyncApply](either._internal_.Right.md#asyncapply)
- [asyncChain](either._internal_.Right.md#asyncchain)
- [asyncMap](either._internal_.Right.md#asyncmap)
- [await](either._internal_.Right.md#await)
- [biMap](either._internal_.Right.md#bimap)
- [chain](either._internal_.Right.md#chain)
- [chainLeft](either._internal_.Right.md#chainleft)
- [default](either._internal_.Right.md#default)
- [fold](either._internal_.Right.md#fold)
- [getLeft](either._internal_.Right.md#getleft)
- [getRight](either._internal_.Right.md#getright)
- [isLeft](either._internal_.Right.md#isleft)
- [isRight](either._internal_.Right.md#isright)
- [join](either._internal_.Right.md#join)
- [map](either._internal_.Right.md#map)
- [mapLeft](either._internal_.Right.md#mapleft)
- [mapRight](either._internal_.Right.md#mapright)
- [move](either._internal_.Right.md#move)
- [or](either._internal_.Right.md#or)
- [orAsync](either._internal_.Right.md#orasync)
- [orLazy](either._internal_.Right.md#orlazy)
- [pipe](either._internal_.Right.md#pipe)
- [promise](either._internal_.Right.md#promise)
- [swap](either._internal_.Right.md#swap)
- [tap](either._internal_.Right.md#tap)
- [throw](either._internal_.Right.md#throw)
- [toJSON](either._internal_.Right.md#tojson)
- [unwrap](either._internal_.Right.md#unwrap)
- [unwrapOr](either._internal_.Right.md#unwrapor)
- [unwrapOrElse](either._internal_.Right.md#unwraporelse)
- [value](either._internal_.Right.md#value)
- [zip](either._internal_.Right.md#zip)
- [create](either._internal_.Right.md#create)

## Constructors

### constructor

• `Private` **new Right**\<`L`, `R`\>()

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Overrides

[EitherConstructor](either._internal_.EitherConstructor.md).[constructor](either._internal_.EitherConstructor.md#constructor)

#### Defined in

dist/either.d.ts:143

## Properties

### right

• `Readonly` **right**: `R`

**`Deprecated`**

Should not be used directly, public only for serialization & type check use [getRight](either._internal_.Right.md#getright)

**`See`**

[getRight](either._internal_.Right.md#getright)

**`Memberof`**

Right

#### Implementation of

SerializedRight.right

#### Defined in

dist/either.d.ts:122

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): [`Right`](../enums/either.EitherType.md#right)

#### Returns

[`Right`](../enums/either.EitherType.md#right)

#### Defined in

dist/either.d.ts:123

___

### name

• `get` **name**(): ``"Either"``

#### Returns

``"Either"``

#### Implementation of

SerializedRight.name

#### Defined in

dist/either.d.ts:124

___

### type

• `get` **type**(): [`Right`](../enums/either.EitherType.md#right)

#### Returns

[`Right`](../enums/either.EitherType.md#right)

#### Implementation of

SerializedRight.type

#### Defined in

dist/either.d.ts:125

## Methods

### any

▸ **any**\<`T`\>(`this`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/either.md#either)\<`T`, `T`\> |

#### Returns

`T`

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[any](either._internal_.EitherConstructor.md#any)

#### Defined in

dist/either.d.ts:68

___

### apply

▸ **apply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): [`Either`](../modules/either.md#either)\<`L`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/either.md#either)\<`L`, [`Mapper`](../modules/types.md#mapper)\<`A`, `B`, `P`\>\> |
| `argument` | [`Either`](../modules/either.md#either)\<`L`, `A`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `B`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[apply](either._internal_.EitherConstructor.md#apply)

#### Defined in

dist/either.d.ts:20

▸ **apply**\<`A`, `B`, `P`\>(`this`, `map`, `...parameters`): [`Either`](../modules/either.md#either)\<`L`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/either.md#either)\<`L`, `A`\> |
| `map` | [`Either`](../modules/either.md#either)\<`L`, [`Mapper`](../modules/types.md#mapper)\<`A`, `B`, `P`\>\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `B`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[apply](either._internal_.EitherConstructor.md#apply)

#### Defined in

dist/either.d.ts:21

___

### asyncApply

▸ **asyncApply**\<`A`, `B`, `P`\>(`this`, `argument`, `...parameters`): `Promise`\<[`Either`](../modules/either.md#either)\<`L`, `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/either.md#either)\<`L`, [`Mapper`](../modules/types.md#mapper)\<`A`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `argument` | [`Either`](../modules/either.md#either)\<`L`, `A`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/either.md#either)\<`L`, `B`\>\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[asyncApply](either._internal_.EitherConstructor.md#asyncapply)

#### Defined in

dist/either.d.ts:22

▸ **asyncApply**\<`A`, `B`, `P`\>(`this`, `map`, `...parameters`): `Promise`\<[`Either`](../modules/either.md#either)\<`L`, `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/either.md#either)\<`L`, `A`\> |
| `map` | [`Either`](../modules/either.md#either)\<`L`, [`Mapper`](../modules/types.md#mapper)\<`A`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`B`\>, `P`\>\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/either.md#either)\<`L`, `B`\>\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[asyncApply](either._internal_.EitherConstructor.md#asyncapply)

#### Defined in

dist/either.d.ts:23

___

### asyncChain

▸ **asyncChain**\<`A`, `B`, `P`\>(`map`, `...parameters`): `Promise`\<[`Either`](../modules/either.md#either)\<`L` \| `A`, `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`R`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<[`Either`](../modules/either.md#either)\<`A`, `B`\>\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/either.md#either)\<`L` \| `A`, `B`\>\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[asyncChain](either._internal_.EitherConstructor.md#asyncchain)

#### Defined in

dist/either.d.ts:28

___

### asyncMap

▸ **asyncMap**\<`A`, `B`, `P`\>(`map`, `...parameters`): `Promise`\<[`Either`](../modules/either.md#either)\<`L` \| `A`, `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`R`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

`Promise`\<[`Either`](../modules/either.md#either)\<`L` \| `A`, `B`\>\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[asyncMap](either._internal_.EitherConstructor.md#asyncmap)

#### Defined in

dist/either.d.ts:29

___

### await

▸ **await**\<`T`\>(`this`): `Promise`\<[`Either`](../modules/either.md#either)\<`L`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/either.md#either)\<`L`, [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<`T`\>\> |

#### Returns

`Promise`\<[`Either`](../modules/either.md#either)\<`L`, `T`\>\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[await](either._internal_.EitherConstructor.md#await)

#### Defined in

dist/either.d.ts:30

___

### biMap

▸ **biMap**\<`A`, `B`\>(`mapLeft`, `mapRight`): [`Either`](../modules/either.md#either)\<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapLeft` | [`Mapper`](../modules/types.md#mapper)\<`L`, `A`\> |
| `mapRight` | [`Mapper`](../modules/types.md#mapper)\<`R`, `B`\> |

#### Returns

[`Either`](../modules/either.md#either)\<`A`, `B`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[biMap](either._internal_.EitherConstructor.md#bimap)

#### Defined in

dist/either.d.ts:27

___

### chain

▸ **chain**\<`A`, `B`, `P`\>(`map`, `...parameters`): [`Either`](../modules/either.md#either)\<`L` \| `A`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`R`, [`Either`](../modules/either.md#either)\<`A`, `B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`L` \| `A`, `B`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[chain](either._internal_.EitherConstructor.md#chain)

#### Defined in

dist/either.d.ts:25

___

### chainLeft

▸ **chainLeft**\<`A`, `B`, `P`\>(`map`, `...parameters`): [`Either`](../modules/either.md#either)\<`A`, `R` \| `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`L`, [`Either`](../modules/either.md#either)\<`A`, `B`\>, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`A`, `R` \| `B`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[chainLeft](either._internal_.EitherConstructor.md#chainleft)

#### Defined in

dist/either.d.ts:26

___

### default

▸ **default**(`value`): [`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `R` |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[default](either._internal_.EitherConstructor.md#default)

#### Defined in

dist/either.d.ts:39

___

### fold

▸ **fold**\<`A`, `B`\>(`mapLeft`, `mapRight`): `A` \| `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapLeft` | [`Mapper`](../modules/types.md#mapper)\<`L`, `A`\> |
| `mapRight` | [`Mapper`](../modules/types.md#mapper)\<`R`, `B`\> |

#### Returns

`A` \| `B`

**`Throws`**

- InvalidStateError if Either state is neither Left neither Right, this probably should never happen

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[fold](either._internal_.EitherConstructor.md#fold)

#### Defined in

dist/either.d.ts:38

___

### getLeft

▸ **getLeft**(): `undefined`

#### Returns

`undefined`

#### Defined in

dist/either.d.ts:127

___

### getRight

▸ **getRight**(): `R`

#### Returns

`R`

#### Defined in

dist/either.d.ts:126

___

### isLeft

▸ **isLeft**(): this is Left\<L, R\>

#### Returns

this is Left\<L, R\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[isLeft](either._internal_.EitherConstructor.md#isleft)

#### Defined in

dist/either.d.ts:12

___

### isRight

▸ **isRight**(): this is Right\<L, R\>

#### Returns

this is Right\<L, R\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[isRight](either._internal_.EitherConstructor.md#isright)

#### Defined in

dist/either.d.ts:13

___

### join

▸ **join**\<`L1`, `L2`, `R`\>(`this`): [`Either`](../modules/either.md#either)\<`L1` \| `L2`, `R`\>

#### Type parameters

| Name |
| :------ |
| `L1` |
| `L2` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Either`](../modules/either.md#either)\<`L1`, [`Either`](../modules/either.md#either)\<`L2`, `R`\>\> |

#### Returns

[`Either`](../modules/either.md#either)\<`L1` \| `L2`, `R`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[join](either._internal_.EitherConstructor.md#join)

#### Defined in

dist/either.d.ts:16

___

### map

▸ **map**\<`T`, `P`\>(`map`, `...parameters`): [`Either`](../modules/either.md#either)\<`L`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`R`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `T`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[map](either._internal_.EitherConstructor.md#map)

#### Defined in

dist/either.d.ts:18

___

### mapLeft

▸ **mapLeft**\<`T`, `P`\>(`map`, `...parameters`): [`Either`](../modules/either.md#either)\<`T`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`L`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`T`, `R`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[mapLeft](either._internal_.EitherConstructor.md#mapleft)

#### Defined in

dist/either.d.ts:17

___

### mapRight

▸ **mapRight**\<`T`, `P`\>(`map`, `...parameters`): [`Either`](../modules/either.md#either)\<`L`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Mapper`](../modules/types.md#mapper)\<`R`, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `T`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[mapRight](either._internal_.EitherConstructor.md#mapright)

#### Defined in

dist/either.d.ts:19

___

### move

▸ **move**\<`T`\>(): [`Right`](either._internal_.Right.md)\<`T`, `R`\>

Should be used instead of
```js
return right(result.getRight())
```

Makes types correct without copying

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Returns

[`Right`](either._internal_.Right.md)\<`T`, `R`\>

**`Example`**

```ts
return result.move()
```

#### Defined in

dist/either.d.ts:142

___

### or

▸ **or**(`x`): [`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Either`](../modules/either.md#either)\<`L`, `R`\> |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[or](either._internal_.EitherConstructor.md#or)

#### Defined in

dist/either.d.ts:40

___

### orAsync

▸ **orAsync**(`factory`): `Promise`\<[`Either`](../modules/either.md#either)\<`L`, `R`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`MaybePromiseLike`](../modules/index.md#maybepromiselike)\<[`Either`](../modules/either.md#either)\<`L`, `R`\>\> |

#### Returns

`Promise`\<[`Either`](../modules/either.md#either)\<`L`, `R`\>\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[orAsync](either._internal_.EitherConstructor.md#orasync)

#### Defined in

dist/either.d.ts:42

___

### orLazy

▸ **orLazy**(`factory`): [`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`Either`](../modules/either.md#either)\<`L`, `R`\> |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[orLazy](either._internal_.EitherConstructor.md#orlazy)

#### Defined in

dist/either.d.ts:41

___

### pipe

▸ **pipe**\<`T`, `P`\>(`pipe`, `...parameters`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pipe` | [`Mapper`](../modules/types.md#mapper)\<[`Either`](../modules/either.md#either)\<`L`, `R`\>, `T`, `P`\> |
| `...parameters` | `P` |

#### Returns

`T`

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[pipe](either._internal_.EitherConstructor.md#pipe)

#### Defined in

dist/either.d.ts:11

___

### promise

▸ **promise**(): `Promise`\<`R`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[promise](either._internal_.EitherConstructor.md#promise)

#### Defined in

dist/either.d.ts:53

___

### swap

▸ **swap**(): [`Either`](../modules/either.md#either)\<`R`, `L`\>

#### Returns

[`Either`](../modules/either.md#either)\<`R`, `L`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[swap](either._internal_.EitherConstructor.md#swap)

#### Defined in

dist/either.d.ts:24

___

### tap

▸ **tap**\<`P`\>(`callback`, `...parameters`): [`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`AnyParameters`](../modules/index.md#anyparameters) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Mapper`](../modules/types.md#mapper)\<`R`, `void`, `P`\> |
| `...parameters` | `P` |

#### Returns

[`Either`](../modules/either.md#either)\<`L`, `R`\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[tap](either._internal_.EitherConstructor.md#tap)

#### Defined in

dist/either.d.ts:10

___

### throw

▸ **throw**(): `R`

#### Returns

`R`

- Right value if current state is Right,

**`Throws`**

- L if current state is Left

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[throw](either._internal_.EitherConstructor.md#throw)

#### Defined in

dist/either.d.ts:59

___

### toJSON

▸ **toJSON**(): `Readonly`\<\{ `name`: ``"Either"`` ; `right`: `R` ; `type`: [`Right`](../enums/either.EitherType.md#right)  }\>

#### Returns

`Readonly`\<\{ `name`: ``"Either"`` ; `right`: `R` ; `type`: [`Right`](../enums/either.EitherType.md#right)  }\>

#### Defined in

dist/either.d.ts:144

___

### unwrap

▸ **unwrap**(`message?`): `R`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message?` | `string` | Error message, if either is left. By default "Either state is Left" |

#### Returns

`R`

- Right value of Either, if right

**`Deprecated`**

- **If Left value is Error use [throw](either._internal_.Right.md#throw) instead**

**`Throws`**

- UnwrapCustomError is Left with provided message

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[unwrap](either._internal_.EitherConstructor.md#unwrap)

#### Defined in

dist/either.d.ts:52

___

### unwrapOr

▸ **unwrapOr**\<`T`\>(`value`): `R` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`R` \| `T`

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[unwrapOr](either._internal_.EitherConstructor.md#unwrapor)

#### Defined in

dist/either.d.ts:15

___

### unwrapOrElse

▸ **unwrapOrElse**\<`T`\>(`fallback`): `R` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | (`value`: `L`) => `T` |

#### Returns

`R` \| `T`

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[unwrapOrElse](either._internal_.EitherConstructor.md#unwraporelse)

#### Defined in

dist/either.d.ts:14

___

### value

▸ **value**(): `L` \| `R`

Return value of Either independent if it is Right or Left

#### Returns

`L` \| `R`

**`Deprecated`**

- probably should not be used, please refactor code or use [fold](either._internal_.Right.md#fold)

**`See`**

[fold](either._internal_.Right.md#fold)

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[value](either._internal_.EitherConstructor.md#value)

#### Defined in

dist/either.d.ts:67

___

### zip

▸ **zip**\<`A`, `B`\>(`either`): [`Either`](../modules/either.md#either)\<`L` \| `A`, [`Pair`](../modules/index.md#pair)\<`R`, `B`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Either`](../modules/either.md#either)\<`A`, `B`\> |

#### Returns

[`Either`](../modules/either.md#either)\<`L` \| `A`, [`Pair`](../modules/index.md#pair)\<`R`, `B`\>\>

#### Inherited from

[EitherConstructor](either._internal_.EitherConstructor.md).[zip](either._internal_.EitherConstructor.md#zip)

#### Defined in

dist/either.d.ts:43

___

### create

▸ `Static` **create**\<`R`, `L`\>(`right`): [`Right`](either._internal_.Right.md)\<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `L` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | `R` |

#### Returns

[`Right`](either._internal_.Right.md)\<`L`, `R`\>

#### Defined in

dist/either.d.ts:114
