/* eslint-disable no-invalid-this */
import {
  DecorationError,
  DeserializationError,
  InvalidStateError,
  UnwrapCustomError
} from "./errors";
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

export function right<L = never, T = never>(right: T): Either<L, T> {
  return Right.create(right);
}

export function left<T = never, R = never>(value: T): Either<T, R> {
  return Left.create(value);
}

class EitherConstructor<L, R>
  implements AsyncMonad<R>, Alternative<R>, Container<R>
{
  /* istanbul ignore next */
  getRight(): R | undefined {
    return this.fold(noop, identity);
  }

  /* istanbul ignore next */
  getLeft(): L | undefined {
    return this.fold(identity, noop);
  }

  tap<P extends AnyParameters>(
    callback: Pm<R, void, P>,
    ...parameters: P
  ): Either<L, R> {
    this.map(callback, ...parameters);

    return this as unknown as Either<L, R>;
  }

  isLeft(): this is Left<L, R> {
    return this instanceof Left;
  }

  isRight(): this is Right<L, R> {
    return this instanceof Right;
  }

  unwrapOrElse<X>(fallback: (value: L) => X): X | R {
    return this.fold(fallback, identity);
  }

  unwrapOr<X>(value: X): X | R {
    return this.unwrapOrElse(() => value);
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
    return this.mapRight(map, ...parameters);
  }

  mapRight<T, P extends AnyParameters>(
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
  ): Either<L, B> {
    return this.zip(argument).map(([current, argument]): B => {
      if (isWrappedFunction<A, B, P>(current)) {
        return current(argument as A, ...parameters);
      }

      if (isWrappedFunction<A, B, P>(argument)) {
        return argument(current as A, ...parameters);
      }

      throw new InvalidStateError(
        InvalidStateError.Messages.APPLY_SHOULD_BE_FUNCTION
      );
    });
  }

  asyncApply<A, B, P extends AnyParameters>(
    this: Either<L, Pm<A, MaybePromiseLike<B>, P>>,
    argument: Either<L, A>,
    ...parameters: P
  ): Promise<Either<L, B>>;
  asyncApply<A, B, P extends AnyParameters>(
    this: Either<L, A>,
    map: Either<L, Pm<A, MaybePromiseLike<B>, P>>,
    ...parameters: P
  ): Promise<Either<L, B>>;
  async asyncApply<A, B, P extends AnyParameters>(
    this: Either<L, A | Pm<A, MaybePromiseLike<B>, P>>,
    argument: Either<L, A | Pm<A, MaybePromiseLike<B>, P>>,
    ...parameters: P
  ): Promise<Either<L, B>> {
    return await this.zip(argument)
      .map(([current, argument]): B => {
        if (isWrappedFunction<A, B, P>(current)) {
          return current(argument as A, ...parameters);
        }

        if (isWrappedFunction<A, B, P>(argument)) {
          return argument(current as A, ...parameters);
        }

        throw new InvalidStateError(
          InvalidStateError.Messages.APPLY_SHOULD_BE_FUNCTION
        );
      })
      .await();
  }

  swap(): Either<R, L> {
    return this.fold(right, left);
  }

  chain<A, B, P extends AnyParameters>(
    map: Pm<R, Either<A, B>, P>,
    ...parameters: P
  ): Either<A | L, B> {
    return this.fold(left, bind(map, parameters));
  }

  biMap<A, B>(mapLeft: Pm<L, A>, mapRight: Pm<R, B>): Either<A, B> {
    return this.fold(combine(mapLeft, left), combine(mapRight, right));
  }

  async asyncChain<A, B, P extends AnyParameters>(
    map: Pm<R, MaybePromiseLike<Either<A, B>>, P>,
    ...parameters: P
  ): Promise<Either<A | L, B>> {
    const result = await this.asyncMap<L, Either<A, B>, P>(map, ...parameters);
    return result.join();
  }

  async asyncMap<A, B, P extends AnyParameters>(
    map: Pm<R, MaybePromiseLike<B>, P>,
    ...parameters: P
  ): Promise<Either<A | L, B>> {
    return await this.map(map, ...parameters).await();
  }
  async await<T>(this: Either<L, MaybePromiseLike<T>>): Promise<Either<L, T>> {
    return await this.fold<MaybePromiseLike<Either<L, T>>>(
      left,
      async (value) => right(await value)
    );
  }

  fold<A, B = A>(mapLeft: Pm<L, A>, mapRight: Pm<R, B>): A | B {
    if (this.isLeft()) {
      return mapLeft(this.left);
    }

    if (this.isRight()) {
      return mapRight(this.right);
    }

    /* istanbul ignore next */
    throw new InvalidStateError();
  }

  default(value: R): Either<L, R> {
    return this.or(right(value));
  }

  or(x: Either<L, R>): Either<L, R> {
    return this.orLazy(() => x);
  }

  orLazy(factory: () => Either<L, R>): Either<L, R> {
    return this.fold(factory, () => this as unknown as Either<L, R>);
  }

  async orAsync(
    factory: () => MaybePromiseLike<Either<L, R>>
  ): Promise<Either<L, R>> {
    return await this.fold(factory, () => this as unknown as Either<L, R>);
  }

  zip<A, B>(either: Either<A, B>): Either<L | A, Pair<R, B>> {
    return this.chain((value) => either.map((right) => [value, right]));
  }

  unwrap(message: string = UnwrapCustomError.Messages.EITHER_IS_LEFT): R {
    return this.fold(() => UnwrapCustomError.inlineThrow(message), identity);
  }

  async promise(): Promise<R> {
    return this.throw();
  }

  throw(): R {
    return this.fold(throwValue, identity);
  }

  value(): L | R {
    return this.fold(identity, identity);
  }

  any<T>(this: Either<T, T>): T {
    return this.value();
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

  get [Symbol.toStringTag](): "Left" {
    return "Left";
  }

  get name(): typeof name {
    return name;
  }

  override getRight(): undefined {
    return;
  }

  override getLeft(): L {
    return this.left;
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

  get [Symbol.toStringTag](): "Right" {
    return "Right";
  }

  get name(): typeof name {
    return name;
  }

  get type(): EitherType.Right {
    return EitherType.Right;
  }

  override getRight(): R {
    return this.right;
  }

  override getLeft(): undefined {
    return;
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

export type Either<L = unknown, R = unknown> = Right<L, R> | Left<L, R>;
export type SerializedEither<L, R> = SerializedRight<R> | SerializedLeft<L>;

export const isLeft = <L, R>(
  value: unknown | Either<L, R>
): value is Left<L, R> => value instanceof Left;

export const isRight = <L, R>(
  value: unknown | Either<L, R>
): value is Right<L, R> => value instanceof Right;

export const isEither = <L, R>(
  value: unknown | Either<L, R>
): value is Either<L, R> => isLeft(value) || isRight(value);

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
    throw new DeserializationError(
      DeserializationError.Messages.EXPECTED_EITHER
    );
  }

  if (serialized.type === EitherType.Left) {
    return left(serialized.left);
  }

  if (serialized.type === EitherType.Right) {
    return right(serialized.right);
  }

  throw new DeserializationError(
    DeserializationError.Messages.EITHER_INVALID_STATE
  );
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
): Either<Array<L1 | L2 | L3 | L4 | L5>, [R1, R2, R3, R4, R5]>;
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
): Either<unknown[], unknown[]> {
  const hasLefts = values.some((value) => value.isLeft());
  const results: unknown[] = [];

  for (const either of values) {
    if (hasLefts && !either.isLeft()) {
      continue;
    }

    results.push(either.value());
  }

  const factory = hasLefts ? left : right;
  return factory(results);
}

export function aggregateError<T = unknown>(
  values: Array<Either<T, unknown>>,
  message: string | undefined | ((lefts: T[]) => string | undefined)
): AggregateError | undefined {
  const joined = mergeInMany(values);

  if (joined.isRight()) {
    return;
  }

  return joined.fold(
    (errors) =>
      new AggregateError(
        errors,
        typeof message === "string" ? message : message?.(errors)
      ),
    noop
  );
}

type LegacyMethodDecorator = (
  target: CallableFunction,
  property: any,
  descriptor: PropertyDescriptor
) => void;

type ModernMethodDecorator<R = unknown> = <
  T extends (...parameters: AnyParameters) => R
>(
  method: T,
  context: any
) => T;

export function DecorateLegacy(): LegacyMethodDecorator {
  /* istanbul ignore next */
  return function decorate(_target, _property, descriptor) {
    descriptor.value = wrap(descriptor.value);
  };
}

export function DecorateAsyncLegacy(): LegacyMethodDecorator {
  /* istanbul ignore next */
  return function decorateAsync(_target, _property, descriptor) {
    descriptor.value = wrapAsync(descriptor.value);
  };
}

export function Decorate(): ModernMethodDecorator<Either> {
  /* istanbul ignore next */
  return function decorate(
    method: any,
    context: ClassMethodDecoratorContext
  ): any {
    /* istanbul ignore next */
    if (context.kind !== "method") {
      throw new DecorationError();
    }

    return wrap(method);
  };
}

export function DecorateAsync(): ModernMethodDecorator<Promise<Either>> {
  /* istanbul ignore next */
  return function decorate(
    method: any,
    context: ClassMethodDecoratorContext
  ): any {
    /* istanbul ignore next */
    if (context.kind !== "method") {
      throw new DecorationError();
    }

    return wrapAsync(method);
  };
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
