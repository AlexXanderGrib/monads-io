import * as either from "./either.exports";
export type Either<L, R> = either.Either<L, R>;
export type SerializedEither<L, R> = either.SerializedEither<L, R>;

/**
 * @deprecated This is created only for compatibility with old nodejs. This is not tree-shakable. Prefer importing from `monads-io/either`
 */
export const Either = Object.freeze({
  merge: either.merge,
  mergeInOne: either.mergeInOne,
  mergeInMany: either.mergeInMany,
  left: either.left,
  right: either.right,
  chain: either.chain,
  fromPromise: either.fromPromise,
  fromTry: either.fromTry,
  fromTryAsync: either.fromTryAsync,
  aggregateError: either.aggregateError,
  isEither: either.isEither,
  fromJSON: either.fromJSON,

  catch: either.catchSync,
  catchAsync: either.catchAsync,
  wrap: either.wrap,
  wrapAsync: either.wrapAsync,
  fromMaybe: either.fromMaybe
});

import * as maybe from "./maybe.exports";
export type Maybe<T> = maybe.Maybe<T>;
export type SerializedMaybe<T> = maybe.SerializedMaybe<T>;

/**
 * @deprecated This is created only for compatibility with old nodejs. This is not tree-shakable. Prefer importing from `monads-io/maybe`
 */
export const Maybe = Object.freeze({
  some: maybe.some,
  none: maybe.none,
  chain: maybe.chain,
  merge: maybe.merge,
  fromNullable: maybe.fromNullable,
  fromJSON: maybe.fromJSON,
  isMaybe: maybe.isMaybe,
  fromEitherRight: maybe.fromEitherRight,
  fromEitherLeft: maybe.fromEitherLeft,
  iterator: maybe.iterator,
  asyncIterator: maybe.asyncIterator
});

export type {
  MaybePromise,
  MaybePromiseLike,
  Nullable,
  AnyParameters,
  Pair
} from "./types.js";
export { identity, noop, throwValue, bind, combine } from "./runtime.js";
export { Union, _ } from "./union.js";
