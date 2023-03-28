/* eslint-disable no-invalid-this */
import { Union } from "./union";
import {
  bind,
  combine,
  identity,
  isWrappedFunction,
  noop,
  throwValue
} from "./runtime";
import type {
  MaybePromiseLike,
  Pair,
  Pm,
  AnyParameters,
  AsyncMonad,
  Alternative,
  Container
} from "./types";

const enum EitherType {
  Left = 0,
  Right = 1
}

const name = "Either";

class Left<L> {
  static create<L>(left: L): Left<L> {
    return new Left(left);
  }

  public readonly name = name;
  public readonly type = EitherType.Left;
  private constructor(public readonly left: L) {
    Object.freeze(this);
  }
}

class Right<R> {
  static create<R>(right: R): Right<R> {
    return new Right(right);
  }

  public readonly name = name;
  public readonly type = EitherType.Right;

  private constructor(public readonly right: R) {
    Object.freeze(this);
  }
}

type State<L, R> = Pair<Left<L>, Right<R>>;
export type SerializedEither<L, R> = State<L, R>[number];

class EitherConstructor<L, R, T extends EitherType = EitherType>
  extends Union<State<L, R>, T>
  implements AsyncMonad<R>, Alternative<R>, Container<R>
{
  static right<L = never, T = never>(right: T): Either<L, T> {
    return new EitherConstructor<L, T, EitherType.Right>(Right.create(right));
  }

  static left<T = never, R = never>(value: T): Either<T, R> {
    return new EitherConstructor<T, R, EitherType.Left>(Left.create(value));
  }

  getRight(): R | undefined {
    return this.biMatch(noop, identity);
  }

  getLeft(): L | undefined {
    return this.biMatch(identity, noop);
  }

  tap<P extends AnyParameters>(
    callback: Pm<R, void, P>,
    ...parameters: P
  ): Either<L, R> {
    this.map(callback, ...parameters);

    return this as Either<L, R>;
  }

  get [Symbol.toStringTag]() {
    return "Either";
  }

  isLeft(): this is EitherConstructor<L, R, EitherType.Left> {
    return this.is(EitherType.Left);
  }

  isRight(): this is EitherConstructor<L, R, EitherType.Right> {
    return this.is(EitherType.Right);
  }

  unwrapOr<X>(value: X): X | R {
    return this.biMatch(() => value, identity);
  }

  join<L1, L2, R>(this: Either<L1, Either<L2, R>>): Either<L1 | L2, R> {
    return this.chain(identity);
  }

  mapLeft<T, P extends AnyParameters>(
    map: Pm<L, T, P>,
    ...parameters: P
  ): Either<T, R> {
    return this.biMap(bind(map, parameters), identity);
  }

  map<T, P extends AnyParameters>(
    map: Pm<R, T, P>,
    ...parameters: P
  ): Either<L, T> {
    return this.biMap(identity, bind(map, parameters));
  }

  apply<A, B, P extends AnyParameters>(
    this: Either<L, Pm<A, B, P>>,
    argument: Either<L, A>,
    ...parameters: P
  ): Either<L, B>;
  apply<A, B, P extends AnyParameters>(
    this: Either<L, A>,
    map: Either<L, Pm<A, B, P>>,
    ...parameters: P
  ): Either<L, B>;
  apply<A, B, P extends AnyParameters>(
    this: Either<L, A | Pm<A, B, P>>,
    argument: Either<L, A | Pm<A, B, P>>,
    ...parameters: P
  ): EitherConstructor<L, B> {
    return this.zip(argument).map(([current, argument]): B => {
      if (isWrappedFunction<A, B, P>(current)) {
        return current(argument as A, ...parameters);
      }

      if (isWrappedFunction<A, B, P>(argument)) {
        return argument(current as A, ...parameters);
      }

      throw new Error("Some of the arguments should be a function");
    });
  }

  swap(): Either<R, L> {
    return this.biMatch(right, left);
  }

  chain<A, B, P extends AnyParameters>(
    map: Pm<R, Either<A, B>, P>,
    ...parameters: P
  ): Either<A | L, B> {
    return this.biMatch(left, bind(map, parameters));
  }

  biMap<A, B>(mapLeft: Pm<L, A>, mapRight: Pm<R, B>): Either<A, B> {
    return this.biMatch(combine(mapLeft, left), combine(mapRight, right));
  }

  async asyncChain<A, B, P extends AnyParameters>(
    map: Pm<R, MaybePromiseLike<Either<A, B>>, P>,
    ...parameters: P
  ): Promise<Either<A | L, B>> {
    const result = await this.map(map, ...parameters).await();
    return result.join();
  }

  async await<T>(
    this: EitherConstructor<L, MaybePromiseLike<T>>
  ): Promise<Either<L, T>> {
    return await this.biMatch<MaybePromiseLike<Either<L, T>>>(
      left,
      async (value) => right(await value)
    );
  }

  biMatch<A, B = A>(mapLeft: Pm<L, A>, mapRight: Pm<R, B>): A | B {
    return this.match<A | B>({
      [EitherType.Left]: ({ left }) => mapLeft(left),
      [EitherType.Right]: ({ right }) => mapRight(right)
    });
  }

  default(value: R): Either<L, R> {
    return this.or(right(value));
  }

  or(x: Either<L, R>): Either<L, R> {
    return this.biMatch(
      () => x,
      () => this as Either<L, R>
    );
  }

  zip<A, B>(either: Either<A, B>): Either<L | A, Pair<R, B>> {
    return this.chain((value) => either.map((right) => [value, right]));
  }

  unwrap(message = "Either state is Left"): R {
    return this.biMatch(() => {
      throw new Error(message);
    }, identity);
  }

  async promise(): Promise<R> {
    return this.throw();
  }

  throw(): R {
    return this.biMatch(throwValue, identity);
  }
}

Object.freeze(EitherConstructor);
Object.freeze(EitherConstructor.prototype);

export type Either<L, R> =
  | EitherConstructor<L, R, EitherType.Right>
  | EitherConstructor<L, R, EitherType.Left>;

export const isEither = <L, R>(
  value: unknown | Either<L, R>
): value is Either<L, R> => value instanceof EitherConstructor;

export const { right, left } = EitherConstructor;

export function chain<L, R, NR, P extends AnyParameters>(
  map: (value: R, ...parameters: P) => MaybePromiseLike<Either<never, NR>>,
  ...parameters: P
): (either: Either<L, R>, ...parameters: P) => Promise<Either<L, NR>>;
export function chain<L, R, NL, P extends AnyParameters>(
  map: (value: R, ...parameters: P) => MaybePromiseLike<Either<NL, never>>,
  ...parameters: P
): (either: Either<L, R>, ...parameters: P) => Promise<Either<NL | L, R>>;
export function chain<L, R, NL, NR, P extends AnyParameters>(
  map: (value: R, ...parameters: P) => MaybePromiseLike<Either<NL, NR>>,
  ...parameters: P
): (either: Either<L, R>, ...parameters: P) => Promise<Either<NL | L, NR>>;
export function chain<L, R, NL, NR, P extends AnyParameters>(
  map: (value: R, ...parameters: P) => MaybePromiseLike<Either<NL, NR>>,
  ...parameters: P
): (either: Either<L, R>) => Promise<Either<L | NL, NR>> {
  return (either) => either.asyncChain(bind(map, parameters));
}

export function fromJSON<L, R>(
  serialized: SerializedEither<L, R>
): Either<L, R> {
  if (serialized.name !== "Either") {
    throw new Error("Expected serialized to be of type Either");
  }

  if (serialized.type === EitherType.Left) {
    return left(serialized.left);
  }

  if (serialized.type === EitherType.Right) {
    return right(serialized.right);
  }

  throw new Error("Unable to deserialize Either: Invalid state");
}

export function mergeInOne<L1, R1>(values: [Either<L1, R1>]): Either<L1, [R1]>;
export function mergeInOne<L1, R1, L2, R2>(
  values: [Either<L1, R1>, Either<L2, R2>]
): Either<L1 | L2, [R1, R2]>;
export function mergeInOne<L1, R1, L2, R2, L3, R3>(
  values: [Either<L1, R1>, Either<L2, R2>, Either<L3, R3>]
): Either<L1 | L2 | L3, [R1, R2, R3]>;
export function mergeInOne<L1, R1, L2, R2, L3, R3, L4, R4>(
  values: [Either<L1, R1>, Either<L2, R2>, Either<L3, R3>, Either<L4, R4>]
): Either<L1 | L2 | L3 | L4, [R1, R2, R3, R4]>;
export function mergeInOne<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5>(
  values: [
    Either<L1, R1>,
    Either<L2, R2>,
    Either<L3, R3>,
    Either<L4, R4>,
    Either<L5, R5>
  ]
): Either<L1 | L2 | L3 | L4 | L5, [R1, R2, R3, R4, R5]>;
export function mergeInOne<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5, L6, R6>(
  values: [
    Either<L1, R1>,
    Either<L2, R2>,
    Either<L3, R3>,
    Either<L4, R4>,
    Either<L5, R5>,
    Either<L6, R6>
  ]
): Either<L1 | L2 | L3 | L4 | L5 | L6, [R1, R2, R3, R4, R5, R6]>;

export function mergeInOne<L, R>(values: Array<Either<L, R>>): Either<L, R[]>;
export function mergeInOne(values: Array<Either<unknown, unknown>>) {
  return mergeInMany(values).mapLeft((errors) => errors[0]);
}

export const merge = mergeInOne;

export function mergeInMany<L1, R1>(
  values: [Either<L1, R1>]
): Either<Array<L1>, [R1]>;
export function mergeInMany<L1, R1, L2, R2>(
  values: [Either<L1, R1>, Either<L2, R2>]
): Either<Array<L1 | L2>, [R1, R2]>;
export function mergeInMany<L1, R1, L2, R2, L3, R3>(
  values: [Either<L1, R1>, Either<L2, R2>, Either<L3, R3>]
): Either<Array<L1 | L2 | L3>, [R1, R2, R3]>;
export function mergeInMany<L1, R1, L2, R2, L3, R3, L4, R4>(
  values: [Either<L1, R1>, Either<L2, R2>, Either<L3, R3>, Either<L4, R4>]
): Either<Array<L1 | L2 | L3 | L4>, [R1, R2, R3, R4]>;
export function mergeInMany<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5>(
  values: [
    Either<L1, R1>,
    Either<L2, R2>,
    Either<L3, R3>,
    Either<L4, R4>,
    Either<L5, R5>
  ]
): EitherConstructor<Array<L1 | L2 | L3 | L4 | L5>, [R1, R2, R3, R4, R5]>;
export function mergeInMany<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5, L6, R6>(
  values: [
    Either<L1, R1>,
    Either<L2, R2>,
    Either<L3, R3>,
    Either<L4, R4>,
    Either<L5, R5>,
    Either<L6, R6>
  ]
): Either<Array<L1 | L2 | L3 | L4 | L5 | L6>, [R1, R2, R3, R4, R5, R6]>;
export function mergeInMany<L, R>(
  values: Array<Either<L, R>>
): Either<L[], R[]>;
export function mergeInMany(
  values: Array<Either<unknown, unknown>>
): EitherConstructor<unknown[], unknown[], EitherType> {
  const hasLefts = values.some((value) => value.isLeft());
  const results: unknown[] = [];

  for (const either of values) {
    if (hasLefts && !either.isLeft()) {
      continue;
    }

    results.push(either.biMatch(identity, identity));
  }

  const factory = hasLefts ? left : right;
  return factory(results);
}

export function aggregateError<T = unknown>(
  values: Array<Either<T, unknown>>,
  message: string | undefined | ((lefts: T[]) => string | undefined)
) {
  const joined = mergeInMany(values);

  if (joined.isRight()) {
    return;
  }

  return joined.biMatch(
    (errors) =>
      new AggregateError(
        errors,
        typeof message === "string" ? message : message?.(errors)
      ),
    noop
  );
}

export function wrap<L, R, P extends AnyParameters>(
  method: (...parameters: P) => Either<L, R>
): (this: any, ...parameters: P) => Either<L, R> {
  return function eitherWrap(this: any, ...parameters: P): Either<L, R> {
    return catchSync(() => method.call(this, ...parameters));
  };
}

export function wrapAsync<L, R, P extends AnyParameters>(
  method: (...parameters: P) => MaybePromiseLike<Either<L, R>>
): (this: any, ...parameters: P) => Promise<Either<L, R>> {
  return function eitherWrap(
    this: any,
    ...parameters: P
  ): Promise<Either<L, R>> {
    return catchAsync(() => method.call(this, ...parameters));
  };
}

export function catchSync<L, R>(method: () => Either<L, R>): Either<L, R> {
  return fromTry<L, Either<L, R>>(method).join();
}

export async function catchAsync<L, R>(
  method: () => MaybePromiseLike<Either<L, R>>
): Promise<Either<L, R>> {
  const caught = await fromTryAsync<L, Either<L, R>>(method);
  return caught.join();
}

export async function fromPromise<L, T>(
  promise: MaybePromiseLike<T>
): Promise<Either<L, T>> {
  return fromTryAsync(() => promise);
}

export function fromTry<L, T>(callback: () => T): Either<L, T> {
  try {
    return right(callback());
  } catch (error) {
    return left(error as L);
  }
}

export async function fromTryAsync<L, T>(
  callback: () => MaybePromiseLike<T>
): Promise<Either<L, T>> {
  try {
    return right(await callback());
  } catch (error) {
    return left(error as L);
  }
}
