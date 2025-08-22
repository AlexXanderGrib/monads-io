import * as either from "./either.exports";
export type Either<L, R> = either.Either<L, R>;
export type SerializedEither<L, R> = either.SerializedEither<L, R>;

type EitherExports = {
  merge: typeof either.merge;
  mergeInOne: typeof either.mergeInOne;
  mergeInMany: typeof either.mergeInMany;

  left: typeof either.left;
  right: typeof either.right;
  chain: typeof either.chain;

  fromPromise: typeof either.fromPromise;
  fromTry: typeof either.fromTry;
  fromTryAsync: typeof either.fromTryAsync;
  fromJSON: typeof either.fromJSON;
  from: typeof either.from;
  fromMaybe: typeof either.fromMaybe;
  fromPromiseSettledResult: typeof either.fromPromiseSettledResult;

  aggregateError: typeof either.aggregateError;
  isEither: typeof either.isEither;
  isRight: typeof either.isRight;
  isLeft: typeof either.isLeft;

  catch: typeof either.catchSync;
  catchAsync: typeof either.catchAsync;
  wrap: typeof either.wrap;
  wrapAsync: typeof either.wrapAsync;
}

/**
 * @deprecated This is created only for compatibility with old nodejs. This is not tree-shakable. Prefer importing from `monads-io/either`
 */
export const Either = Object.freeze<EitherExports>({
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

type MaybeExports = {
  just: typeof maybe.just;
  none: typeof maybe.none;
  from: typeof maybe.from;

  chain: typeof maybe.chain;

  merge: typeof maybe.merge;

  fromNullable: typeof maybe.fromNullable;
  fromJSON: typeof maybe.fromJSON;
  isMaybe: typeof maybe.isMaybe;
  fromEitherRight: typeof maybe.fromEitherRight;
  fromEitherLeft: typeof maybe.fromEitherLeft;

  isJust: typeof maybe.isJust;
  isNone: typeof maybe.isNone;

  iterator: typeof maybe.iterator;
  asyncIterator: typeof maybe.asyncIterator;
  filterMap: typeof maybe.filterMap;
}

/**
 * @deprecated This is created only for compatibility with old nodejs. This is not tree-shakable. Prefer importing from `monads-io/maybe`
 */
export const Maybe = Object.freeze<MaybeExports>({
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
