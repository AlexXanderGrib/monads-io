import { Either, left, right } from "./either";
import { Maybe, fromNullable } from "./maybe";

export function maybeToEither<L, R>(
  maybe: Maybe<R>,
  leftValue: L
): Either<L, R> {
  return maybe.biMatch(right, () => left(leftValue));
}

export function eitherRight<R>(either: Either<unknown, R>): Maybe<R> {
  return fromNullable(either.getRight());
}

export function eitherLeft<L>(either: Either<L, unknown>): Maybe<L> {
  return fromNullable(either.getLeft());
}
