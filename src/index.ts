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
  fromJSON: either.fromJSON,
  from: either.from,
  fromMaybe: either.fromMaybe,
  fromPromiseSettledResult: either.fromPromiseSettledResult,

  aggregateError: either.aggregateError,
  isEither: either.isEither,
  isRight: either.isRight,
  isLeft: either.isLeft,

  catch: either.catchSync,
  catchAsync: either.catchAsync,
  wrap: either.wrap,
  wrapAsync: either.wrapAsync
});

import * as maybe from "./maybe.exports";
export type Maybe<T> = maybe.Maybe<T>;
export type SerializedMaybe<T> = maybe.SerializedMaybe<T>;

/**
 * @deprecated This is created only for compatibility with old nodejs. This is not tree-shakable. Prefer importing from `monads-io/maybe`
 */
export const Maybe = Object.freeze({
  just: maybe.just,
  none: maybe.none,
  from: maybe.from,

  chain: maybe.chain,

  merge: maybe.merge,

  fromNullable: maybe.fromNullable,
  fromJSON: maybe.fromJSON,
  isMaybe: maybe.isMaybe,
  fromEitherRight: maybe.fromEitherRight,
  fromEitherLeft: maybe.fromEitherLeft,

  isJust: maybe.isJust,
  isNone: maybe.isNone,

  iterator: maybe.iterator,
  asyncIterator: maybe.asyncIterator,
  filterMap: maybe.filterMap
});

import * as identity from "./identity.exports";
export type Identity<T> = identity.Identity<T>;

export const Identity = Object.freeze({
  from: identity.from,
  chain: identity.chain,
  isIdentity: identity.isIdentity,
  merge: identity.merge
});

export type {
  MaybePromise,
  MaybePromiseLike,
  Nullable,
  AnyParameters,
  Pair,
  Alternative,
  Applicative,
  AsyncMonad,
  Container,
  Functor,
  Monad
} from "./types.js";

export {
  identity,
  noop,
  throwValue,
  bind,
  combine,
  unwrap
} from "./runtime.js";

export {
  DecorationError,
  DeserializationError,
  InvalidStateError,
  UnwrapCustomError
} from "./errors.js";
