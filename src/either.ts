/* eslint-disable no-invalid-this */
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

class EitherConstructor<L, R>
  implements AsyncMonad<R>, Alternative<R>, Container<R>
{
  static right<L = never, T = never>(right: T): Either<L, T> {
    return Right.create(right);
  }

  static left<T = never, R = never>(value: T): Either<T, R> {
    return Left.create(value);
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

    return this as unknown as Either<L, R>;
  }

  get [Symbol.toStringTag]() {
    return "Either";
  }

  isLeft(): this is Left<L, R> {
    return this instanceof Left;
  }

  isRight(): this is Right<L, R> {
    return this instanceof Right;
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
    if (this.isLeft()) {
      return mapLeft(this.left);
    }

    if (this.isRight()) {
      return mapRight(this.right);
    }

    throw new Error("Invalid state");
  }

  default(value: R): Either<L, R> {
    return this.or(right(value));
  }

  or(x: Either<L, R>): Either<L, R> {
    return this.biMatch(
      () => x,
      () => this as unknown as Either<L, R>
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

type SerializedLeft<L> = Readonly<{
  name: typeof name;
  type: EitherType.Left;
  left: L;
}>;

class Left<L, R> extends EitherConstructor<L, R> implements SerializedLeft<L> {
  static create<L, R = unknown>(left: L): Left<L, R> {
    return new Left(left);
  }

  get [Symbol.toStringTag]() {
    return "Left";
  }

  get name(): typeof name {
    return name;
  }

  get type(): EitherType.Left {
    return EitherType.Left;
  }

  private constructor(public readonly left: L) {
    super();
    Object.freeze(this);
  }

  toJSON(): SerializedLeft<L> {
    return { name: this.name, type: this.type, left: this.left };
  }
}

Object.freeze(Left);
Object.freeze(Left.prototype);

type SerializedRight<R> = Readonly<{
  name: typeof name;
  type: EitherType.Right;
  right: R;
}>;

class Right<L, R>
  extends EitherConstructor<L, R>
  implements SerializedRight<R>
{
  static create<R, L = unknown>(right: R): Right<L, R> {
    return new Right(right);
  }

  get [Symbol.toStringTag]() {
    return "Right";
  }

  get name(): typeof name {
    return name;
  }

  get type(): EitherType.Right {
    return EitherType.Right;
  }

  private constructor(public readonly right: R) {
    super();
    Object.freeze(this);
  }

  toJSON(): SerializedRight<R> {
    return { name: this.name, type: this.type, right: this.right };
  }
}

Object.freeze(Right);
Object.freeze(Right.prototype);

export type Either<L, R> = Right<L, R> | Left<L, R>;
export type SerializedEither<L, R> = SerializedRight<R> | SerializedLeft<L>;

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
): EitherConstructor<unknown[], unknown[]> {
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

export function fromPromiseSettledResult<L, T>(
  result: PromiseSettledResult<T>
): Either<L, T> {
  if (result.status === "fulfilled") {
    return right(result.value);
  }

  return left(result.reason);
}
