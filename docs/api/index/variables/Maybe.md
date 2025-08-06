[**Package**](../../README.md)

***

[Package](../../modules.md) / [index](../README.md) / Maybe

# ~~Variable: Maybe~~

> **Maybe**: `Readonly`\<\{ `asyncIterator`: \<`T`\>(`callback`) => `AsyncGenerator`\<`T`, `void`, `void`\>; `chain`: \<`A`, `B`, `P`\>(`map`, ...`parameters`) => (`maybe`) => `Promise`\<[`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<`B`\>\>; `filterMap`: \<`A`, `B`\>(`iterable`, `filterMap`) => `Generator`\<`B`, `void`, `void`\>; `from`: \<`T`\>(`value`) => [`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<`T`\>; `fromEitherLeft`: \<`L`\>(`either`) => [`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<`L`\>; `fromEitherRight`: \<`R`\>(`either`) => [`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<`R`\>; `fromJSON`: \<`T`\>(`serialized`) => [`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<`T`\>; `fromNullable`: \<`T`\>(`value`) => [`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<`T`\>; `isJust`: \<`T`\>(`value`) => `value is Just<T>`; `isMaybe`: \<`T`\>(`value`) => `value is Maybe<T>`; `isNone`: \<`T`\>(`value`) => `value is None<T>`; `iterator`: \<`T`\>(`callback`) => `Generator`\<`T`, `void`, `void`\>; `just`: \<`T`\>(`value`) => [`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<`T`\>; `merge`: \{\<`V1`\>(`values`): [`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<\[`V1`\]\>; \<`V1`, `V2`\>(`values`): [`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<\[`V1`, `V2`\]\>; \<`V1`, `V2`, `V3`\>(`values`): [`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<\[`V1`, `V2`, `V3`\]\>; \<`V1`, `V2`, `V3`, `V4`\>(`values`): [`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<\[`V1`, `V2`, `V3`, `V4`\]\>; \<`V1`, `V2`, `V3`, `V4`, `V5`\>(`values`): [`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<\[`V1`, `V2`, `V3`, `V4`, `V5`\]\>; \<`V1`, `V2`, `V3`, `V4`, `V5`, `V6`\>(`values`): [`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<\[`V1`, `V2`, `V3`, `V4`, `V5`, `V6`\]\>; \<`T`\>(`values`): [`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<`T`[]\>; \}; `none`: \<`T`\>() => [`Maybe`](../../maybe.exports/type-aliases/Maybe.md)\<`T`\>; \}\>

Defined in: [index.ts:37](https://github.com/AlexXanderGrib/monads-io/blob/88cc2f22cfbd8717d7e52da6913dd270216344b1/src/index.ts#L37)

## Deprecated

This is created only for compatibility with old nodejs. This is not tree-shakable. Prefer importing from `monads-io/maybe`
