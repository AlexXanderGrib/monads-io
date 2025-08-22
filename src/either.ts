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
  Mapper,
  AnyParameters,
  AsyncMonad,
  Alternative,
  Container,
  Pipe
} from "./types";

export const enum EitherType {
  Left = "Left",
  Right = "Right"
}

const name = "Either";

function right<L = never, R = never>(right: R): Either<L, R> {
  return Right.create(right);
}

right.void = function rightVoid<L = never>(): Either<L, void> {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type, unicorn/no-useless-undefined
  return Right.create<void, L>(undefined);
};

export { right };

export function left<L = never, R = never>(value: L): Either<L, R> {
  return Left.create(value);
}

function cast<L, R>(constructor: EitherConstructor<L, R>): Either<L, R> {
  if (isEither<L, R>(constructor)) {
    return constructor;
  }

  /* istanbul ignore next */
  throw new InvalidStateError();
}

class EitherConstructor<L, R>
  implements AsyncMonad<R>, Alternative<R>, Container<R>, Pipe
{
  tap<P extends AnyParameters>(
    callback: Mapper<R, void, P>,
    ...parameters: P
  ): Either<L, R> {
    this.map(callback, ...parameters);
    return cast(this);
  }

  tapLeft<P extends AnyParameters>(
    callback: Mapper<L, void, P>,
    ...parameters: P
  ): Either<L, R> {
    this.mapLeft(callback, ...parameters);
    return cast(this);
  }

  pipe<T, P extends AnyParameters>(
    pipe: Mapper<Either<L, R>, T, P>,
    ...parameters: P
  ): T {
    return bind(pipe, parameters)(cast(this));
  }

  isLeft<T extends L>(predicate: (left: L) => left is T): this is Left<T, R>;
  isLeft(predicate?: (left: L) => boolean): this is Left<L, R>;
  isLeft(predicate?: (left: L) => boolean): this is Left<L, R> {
    return isLeft<L, R>(this) && (!predicate || predicate(this.getLeft()));
  }

  isRight<T extends R>(
    predicate?: (right: R) => right is T
  ): this is Right<L, T>;
  isRight(predicate?: (right: R) => boolean): this is Right<L, R>;
  isRight(predicate?: (right: R) => boolean): this is Right<L, R> {
    return isRight<L, R>(this) && (!predicate || predicate(this.getRight()));
  }

  unwrapOrElse<T>(fallback: (value: L) => T): T | R {
    return this.fold(fallback, identity);
  }

  unwrapOr<T>(value: T): T | R {
    return this.unwrapOrElse(() => value);
  }

  join<L1, L2, R>(this: Either<L1, Either<L2, R>>): Either<L1 | L2, R> {
    return this.chain(identity);
  }

  mapLeft<T, P extends AnyParameters>(
    map: Mapper<L, T, P>,
    ...parameters: P
  ): Either<T, R> {
    return this.biMap(bind(map, parameters), identity);
  }

  map<T, P extends AnyParameters>(
    map: Mapper<R, T, P>,
    ...parameters: P
  ): Either<L, T> {
    return this.mapRight(map, ...parameters);
  }

  mapRight<T, P extends AnyParameters>(
    map: Mapper<R, T, P>,
    ...parameters: P
  ): Either<L, T> {
    return this.biMap(identity, bind(map, parameters));
  }

  apply<A, B, P extends AnyParameters>(
    this: Either<L, Mapper<A, B, P>>,
    argument: Either<L, A>,
    ...parameters: P
  ): Either<L, B>;
  apply<A, B, P extends AnyParameters>(
    this: Either<L, A>,
    map: Either<L, Mapper<A, B, P>>,
    ...parameters: P
  ): Either<L, B>;
  apply<A, B, P extends AnyParameters>(
    this: Either<L, A | Mapper<A, B, P>>,
    argument: Either<L, A | Mapper<A, B, P>>,
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
    this: Either<L, Mapper<A, MaybePromiseLike<B>, P>>,
    argument: Either<L, A>,
    ...parameters: P
  ): Promise<Either<L, B>>;
  asyncApply<A, B, P extends AnyParameters>(
    this: Either<L, A>,
    map: Either<L, Mapper<A, MaybePromiseLike<B>, P>>,
    ...parameters: P
  ): Promise<Either<L, B>>;
  async asyncApply<A, B, P extends AnyParameters>(
    this: Either<L, A | Mapper<A, MaybePromiseLike<B>, P>>,
    argument: Either<L, A | Mapper<A, MaybePromiseLike<B>, P>>,
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
    map: Mapper<R, Either<A, B>, P>,
    ...parameters: P
  ): Either<A | L, B> {
    return this.fold(left, bind(map, parameters));
  }

  chainLeft<A, B, P extends AnyParameters>(
    map: Mapper<L, Either<A, B>, P>,
    ...parameters: P
  ): Either<A, R | B> {
    return this.fold(bind(map, parameters), right);
  }

  biMap<A, B>(mapLeft: Mapper<L, A>, mapRight: Mapper<R, B>): Either<A, B> {
    return this.fold(combine(mapLeft, left), combine(mapRight, right));
  }

  async asyncChain<A, B, P extends AnyParameters>(
    map: Mapper<R, MaybePromiseLike<Either<A, B>>, P>,
    ...parameters: P
  ): Promise<Either<A | L, B>> {
    const result = await this.asyncMap<L, Either<A, B>, P>(map, ...parameters);
    return result.join();
  }

  async asyncMap<A, B, P extends AnyParameters>(
    map: Mapper<R, MaybePromiseLike<B>, P>,
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

  /**
   *
   * @param {Mapper<L, A>} mapLeft
   * @param {Mapper<R, B>} mapRight
   * @return {A|B}
   * @throws {InvalidStateError} - {@link InvalidStateError} if Either state is neither Left neither Right, this probably should never happen
   */
  fold<A, B = A>(mapLeft: Mapper<L, A>, mapRight: Mapper<R, B>): A | B {
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
    return this.fold(factory, () => cast(this));
  }

  async orAsync(
    factory: () => MaybePromiseLike<Either<L, R>>
  ): Promise<Either<L, R>> {
    return await this.fold(factory, () => cast(this));
  }

  zip<A, B>(either: Either<A, B>): Either<L | A, Pair<R, B>> {
    return this.chain((value) => either.map((right) => [value, right]));
  }

  /**
   * @deprecated - **If Left value is Error use {@link throw} instead**
   *
   *
   * @param {string} [message] - Error message, if either is left. By default "Either state is Left"
   * @return {R} - Right value of Either, if right
   * @throws {UnwrapCustomError} - {@link UnwrapCustomError} is Left with provided {@link message}
   */
  unwrap(message: string = UnwrapCustomError.Messages.EITHER_IS_LEFT): R {
    return this.fold(() => UnwrapCustomError.inlineThrow(message), identity);
  }

  async promise(): Promise<R> {
    return this.throw();
  }

  /**
   *
   * @return {R} - Right value if current state is Right,
   * @throws {L} - {@link L} if current state is Left
   */
  throw(): R {
    return this.fold(throwValue, identity);
  }

  /**
   * Return value of Either independent if it is Right or Left
   *
   * @deprecated - probably should not be used, please refactor code or use {@link fold}
   * @see {@link fold}
   * @return {L|R}
   */
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

  /**
   * @deprecated Should not be used directly, public only for serialization & type check use {@link getLeft}
   * @see {@link getLeft}
   *
   * @type {L}
   * @memberof Left
   */
  public readonly left: L;

  get [Symbol.toStringTag](): EitherType.Left {
    return EitherType.Left;
  }

  get name(): typeof name {
    return name;
  }

  getRight(): undefined {
    return;
  }

  getLeft(): L {
    return this.left;
  }

  /**
   * Should be used instead of
   * ```js
   * return left(result.getLeft())
   * ```
   *
   * Makes types correct without copying
   *
   * @template T
   * @return {Left<L, T>}
   *
   * @example
   * return result.move()
   */
  move<T = never>(): Left<L, T> {
    return cast(this) as Left<L, never>;
  }

  get type(): EitherType.Left {
    return EitherType.Left;
  }

  private constructor(left: L) {
    super();
    this.left = left;
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

  /**
   * @deprecated Should not be used directly, public only for serialization & type check use {@link getRight}
   * @see {@link getRight}
   *
   * @type {R}
   * @memberof Right
   */
  public readonly right: R;

  get [Symbol.toStringTag](): EitherType.Right {
    return EitherType.Right;
  }

  get name(): typeof name {
    return name;
  }

  get type(): EitherType.Right {
    return EitherType.Right;
  }

  getRight(): R {
    return this.right;
  }

  getLeft(): undefined {
    return;
  }

  /**
   * Should be used instead of
   * ```js
   * return right(result.getRight())
   * ```
   *
   * Makes types correct without copying
   *
   * @template T
   * @return {Right<L, T>}
   *
   * @example
   * return result.move()
   */
  move<T = never>(): Right<T, R> {
    return cast(this) as Right<never, R>;
  }

  private constructor(right: R) {
    super();
    this.right = right;
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
export function chain<
  L = never,
  R = never,
  NL = never,
  NR = never,
  P extends AnyParameters = []
>(
  map: (value: R, ...parameters: P) => MaybePromiseLike<Either<NL, NR>>,
  ...parameters: P
): (either: Either<L, R>) => Promise<Either<L | NL, NR>> {
  return (either) => either.asyncChain(bind(map, parameters));
}

/**
 *
 * @template L
 * @template R
 *
 * @throws {DeserializationError} - {@link DeserializationError}
 * @param {SerializedEither<L, R>} serialized
 * @return {Either<L, R>}
 */
export function fromJSON<L, R>(
  serialized: SerializedEither<L, R>
): Either<L, R> {
  if (serialized.name !== name) {
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

export function mergeInOne<L, R>(values: Either<L, R>[]): Either<L, R[]>;
export function mergeInOne(values: Either<unknown, unknown>[]) {
  return mergeInMany(values).mapLeft((errors) => errors[0]);
}

export const merge = mergeInOne;
export const from = right;

export function mergeInMany<L1, R1>(
  values: [Either<L1, R1>]
): Either<L1[], [R1]>;
export function mergeInMany<L1, R1, L2, R2>(
  values: [Either<L1, R1>, Either<L2, R2>]
): Either<(L1 | L2)[], [R1, R2]>;
export function mergeInMany<L1, R1, L2, R2, L3, R3>(
  values: [Either<L1, R1>, Either<L2, R2>, Either<L3, R3>]
): Either<(L1 | L2 | L3)[], [R1, R2, R3]>;
export function mergeInMany<L1, R1, L2, R2, L3, R3, L4, R4>(
  values: [Either<L1, R1>, Either<L2, R2>, Either<L3, R3>, Either<L4, R4>]
): Either<(L1 | L2 | L3 | L4)[], [R1, R2, R3, R4]>;
export function mergeInMany<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5>(
  values: [
    Either<L1, R1>,
    Either<L2, R2>,
    Either<L3, R3>,
    Either<L4, R4>,
    Either<L5, R5>
  ]
): Either<(L1 | L2 | L3 | L4 | L5)[], [R1, R2, R3, R4, R5]>;
export function mergeInMany<L1, R1, L2, R2, L3, R3, L4, R4, L5, R5, L6, R6>(
  values: [
    Either<L1, R1>,
    Either<L2, R2>,
    Either<L3, R3>,
    Either<L4, R4>,
    Either<L5, R5>,
    Either<L6, R6>
  ]
): Either<(L1 | L2 | L3 | L4 | L5 | L6)[], [R1, R2, R3, R4, R5, R6]>;
export function mergeInMany<L, R>(values: Either<L, R>[]): Either<L[], R[]>;
export function mergeInMany(
  values: Either<unknown, unknown>[]
): Either<unknown[], unknown[]> {
  if (allRights(values)) {
    return right(values.map((either) => either.getRight()));
  }

  const results: unknown[] = [];

  for (const value of values) {
    if (value.isLeft()) {
      results.push(value.getLeft());
    }
  }

  return left(results);
}

function allRights<A, B>(array: Either<A, B>[]): array is Right<A, B>[] {
  return array.every((value) => value.isRight());
}

export function aggregateError<T = unknown>(
  values: Either<T, unknown>[],
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

function eraseType(value: unknown): any {
  return value;
}

export type MapCaught<L> = Mapper<unknown, L>;

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

function requireDecorationMethod(
  context: ClassMemberDecoratorContext
): asserts context is ClassMethodDecoratorContext {
  /* istanbul ignore next */
  if (context.kind !== "method") {
    throw new DecorationError();
  }
}

export function Decorate(): ModernMethodDecorator<Either> {
  /* istanbul ignore next */
  return function decorate(
    method: any,
    context: ClassMemberDecoratorContext
  ): any {
    /* istanbul ignore next */
    requireDecorationMethod(context);
    return wrap(method);
  };
}

export function DecorateAsync(): ModernMethodDecorator<Promise<Either>> {
  /* istanbul ignore next */
  return function decorate(
    method: any,
    context: ClassMemberDecoratorContext
  ): any {
    /* istanbul ignore next */
    requireDecorationMethod(context);
    return wrapAsync(method);
  };
}

export function wrap<L, R, P extends AnyParameters>(
  method: (...parameters: P) => Either<L, R>,
  mapCaught?: MapCaught<L>
): (this: any, ...parameters: P) => Either<L, R> {
  return function eitherWrap(this: any, ...parameters: P): Either<L, R> {
    return catchSync(() => method.call(this, ...parameters), mapCaught);
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

export function catchSync<L = never, R = never>(
  method: () => Either<L, R>,
  mapCaught?: MapCaught<L>
): Either<L, R> {
  return fromTry<L, Either<L, R>>(method, mapCaught).join();
}

export async function catchAsync<L, R>(
  method: Promise<Either<L, R>> | (() => MaybePromiseLike<Either<L, R>>),
  mapCaught?: MapCaught<L>
): Promise<Either<L, R>> {
  const caught = await fromTryAsync<L, Either<L, R>>(method, mapCaught);
  return caught.join();
}

export async function fromPromise<L = never, T = never>(
  promise: MaybePromiseLike<T>,
  mapCaught?: MapCaught<L>
): Promise<Either<L, T>> {
  return fromTryAsync(() => promise, mapCaught);
}

export function fromTry<L = never, T = never>(
  callback: () => T,
  mapCaught: MapCaught<L> = eraseType
): Either<L, T> {
  try {
    return right(callback());
  } catch (error) {
    return left(mapCaught(error));
  }
}

export async function fromTryAsync<L = never, R = never>(
  callback: Promise<R> | (() => MaybePromiseLike<R>),
  mapCaught: MapCaught<L> = eraseType
): Promise<Either<L, R>> {
  try {
    return right(
      callback instanceof Promise ? await callback : await callback()
    );
  } catch (error) {
    return left(mapCaught(error));
  }
}

export function fromPromiseSettledResult<L = never, T = never>(
  result: PromiseSettledResult<T>
): Either<L, T> {
  return result.status === "fulfilled"
    ? right(result.value)
    : left(result.reason);
}
