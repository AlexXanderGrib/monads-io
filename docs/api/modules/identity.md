[Package](../README.md) / [Modules](../modules.md) / identity

# Module: identity

## Table of contents

### Classes

- [Identity](../classes/identity.Identity.md)

### Functions

- [chain](identity.md#chain)
- [from](identity.md#from)
- [isIdentity](identity.md#isidentity)
- [merge](identity.md#merge)

## Functions

### chain

▸ **chain**\<`A`, `B`, `P`\>(`map`, `...parameters`): (`either`: [`Identity`](../classes/identity.Identity.md)\<`A`\>) => `Promise`\<[`Identity`](../classes/identity.Identity.md)\<`B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `never` |
| `B` | `never` |
| `P` | extends [`AnyParameters`](index.md#anyparameters) = [] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | (`value`: `A`, ...`parameters`: `P`) => [`MaybePromiseLike`](index.md#maybepromiselike)\<[`Identity`](../classes/identity.Identity.md)\<`B`\>\> |
| `...parameters` | `P` |

#### Returns

`fn`

▸ (`either`): `Promise`\<[`Identity`](../classes/identity.Identity.md)\<`B`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Identity`](../classes/identity.Identity.md)\<`A`\> |

##### Returns

`Promise`\<[`Identity`](../classes/identity.Identity.md)\<`B`\>\>

#### Defined in

dist/identity.d.ts:30

___

### from

▸ **from**\<`T`\>(`value`): [`Identity`](../classes/identity.Identity.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Identity`](../classes/identity.Identity.md)\<`T`\>

#### Defined in

dist/identity.d.ts:5

___

### isIdentity

▸ **isIdentity**\<`T`\>(`value`): value is Identity\<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Identity\<T\>

#### Defined in

dist/identity.d.ts:29

___

### merge

▸ **merge**\<`V1`\>(`values`): [`Identity`](../classes/identity.Identity.md)\<[`V1`]\>

#### Type parameters

| Name |
| :------ |
| `V1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Identity`](../classes/identity.Identity.md)\<`V1`\>] |

#### Returns

[`Identity`](../classes/identity.Identity.md)\<[`V1`]\>

#### Defined in

dist/identity.d.ts:31

▸ **merge**\<`V1`, `V2`\>(`values`): [`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`]\>

#### Type parameters

| Name |
| :------ |
| `V1` |
| `V2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Identity`](../classes/identity.Identity.md)\<`V1`\>, [`Identity`](../classes/identity.Identity.md)\<`V2`\>] |

#### Returns

[`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`]\>

#### Defined in

dist/identity.d.ts:32

▸ **merge**\<`V1`, `V2`, `V3`\>(`values`): [`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`, `V3`]\>

#### Type parameters

| Name |
| :------ |
| `V1` |
| `V2` |
| `V3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Identity`](../classes/identity.Identity.md)\<`V1`\>, [`Identity`](../classes/identity.Identity.md)\<`V2`\>, [`Identity`](../classes/identity.Identity.md)\<`V3`\>] |

#### Returns

[`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`, `V3`]\>

#### Defined in

dist/identity.d.ts:33

▸ **merge**\<`V1`, `V2`, `V3`, `V4`\>(`values`): [`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`, `V3`, `V4`]\>

#### Type parameters

| Name |
| :------ |
| `V1` |
| `V2` |
| `V3` |
| `V4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Identity`](../classes/identity.Identity.md)\<`V1`\>, [`Identity`](../classes/identity.Identity.md)\<`V2`\>, [`Identity`](../classes/identity.Identity.md)\<`V3`\>, [`Identity`](../classes/identity.Identity.md)\<`V4`\>] |

#### Returns

[`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`, `V3`, `V4`]\>

#### Defined in

dist/identity.d.ts:34

▸ **merge**\<`V1`, `V2`, `V3`, `V4`, `V5`\>(`values`): [`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`, `V3`, `V4`, `V5`]\>

#### Type parameters

| Name |
| :------ |
| `V1` |
| `V2` |
| `V3` |
| `V4` |
| `V5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Identity`](../classes/identity.Identity.md)\<`V1`\>, [`Identity`](../classes/identity.Identity.md)\<`V2`\>, [`Identity`](../classes/identity.Identity.md)\<`V3`\>, [`Identity`](../classes/identity.Identity.md)\<`V4`\>, [`Identity`](../classes/identity.Identity.md)\<`V5`\>] |

#### Returns

[`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`, `V3`, `V4`, `V5`]\>

#### Defined in

dist/identity.d.ts:35

▸ **merge**\<`V1`, `V2`, `V3`, `V4`, `V5`, `V6`\>(`values`): [`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`, `V3`, `V4`, `V5`, `V6`]\>

#### Type parameters

| Name |
| :------ |
| `V1` |
| `V2` |
| `V3` |
| `V4` |
| `V5` |
| `V6` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [[`Identity`](../classes/identity.Identity.md)\<`V1`\>, [`Identity`](../classes/identity.Identity.md)\<`V2`\>, [`Identity`](../classes/identity.Identity.md)\<`V3`\>, [`Identity`](../classes/identity.Identity.md)\<`V4`\>, [`Identity`](../classes/identity.Identity.md)\<`V5`\>, [`Identity`](../classes/identity.Identity.md)\<`V6`\>] |

#### Returns

[`Identity`](../classes/identity.Identity.md)\<[`V1`, `V2`, `V3`, `V4`, `V5`, `V6`]\>

#### Defined in

dist/identity.d.ts:36

▸ **merge**\<`T`\>(`values`): [`Identity`](../classes/identity.Identity.md)\<`T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`Identity`](../classes/identity.Identity.md)\<`T`\>[] |

#### Returns

[`Identity`](../classes/identity.Identity.md)\<`T`[]\>

#### Defined in

dist/identity.d.ts:44
