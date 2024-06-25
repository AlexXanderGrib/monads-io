import { Either, left, right } from "./either";
import { Maybe, just, none } from "./maybe";

export function maybeToEither<L, R>(
  maybe: Maybe<R>,
  leftValue: L
): Either<L, R> {
  return maybe.fold(() => left(leftValue), right);
}

export function eitherRight<R>(either: Either<unknown, R>): Maybe<R> {
  return either.fold(none, just);
}

export function eitherLeft<L>(either: Either<L, unknown>): Maybe<L> {
  return either.fold(just, none);
}
