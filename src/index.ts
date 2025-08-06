import * as either from "./either.exports";
export type Either<L, R> = either.Either<L, R>;
export type SerializedEither<L, R> = either.SerializedEither<L, R>;

/**
 * @deprecated This is created only for compatibility with old nodejs. This is not tree-shakable. Prefer importing from `monads-io/either`
 */
export const Either = Object.freeze(either);

import * as maybe from "./maybe.exports";
export type Maybe<T> = maybe.Maybe<T>;
export type SerializedMaybe<T> = maybe.SerializedMaybe<T>;

/**
 * @deprecated This is created only for compatibility with old nodejs. This is not tree-shakable. Prefer importing from `monads-io/maybe`
 */
export const Maybe = Object.freeze(maybe);

import * as identity from "./identity.exports";
export type Identity<T> = identity.Identity<T>;

export const Identity = Object.freeze(identity);

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

export { tryCatch } from "./simple-result";
