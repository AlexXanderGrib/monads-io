import {
  DeserializationError,
  InvalidStateError,
  UnwrapCustomError
} from "./errors";
import { bind, combine, isWrappedFunction, noop, identity } from "./runtime";
import type {
  MaybePromiseLike,
  Nullable,
  AnyParameters,
  Mapper,
  Pair,
  Alternative,
  Monad,
  Container,
  Pipe
} from "./types";

export const enum MaybeState {
  None = "None",
  Just = "Just"
}

const name = "Maybe";

export function none<T = never>(): Maybe<T> {
  return None.create();
}

export function just<T = never>(value: T): Maybe<T> {
  return Just.create(value);
}

export { just as from };

export interface MaybeOperation<V, T> {
  maybe(maybe: Maybe<V>): T;
}

function cast<T>(constructor: MaybeConstructor<T>): Maybe<T> {
  if (isMaybe<T>(constructor)) {
    return constructor;
  }

  /* istanbul ignore next */
  throw new InvalidStateError();
}

class MaybeConstructor<T>
  implements Monad<T>, Alternative<T>, Container<T>, Pipe
{
  asyncAndThen<A, P extends AnyParameters>(
    map: Mapper<Awaited<T>, MaybePromiseLike<Maybe<A>>, P>,
    ...parameters: P
  ): Promise<Maybe<A>> {
    return this.asyncChain(map, ...parameters);
  }

  andThen<A, P extends AnyParameters>(
    map: Mapper<T, Maybe<A>, P>,
    ...parameters: P
  ): Maybe<A> {
    return this.chain(bind(map, parameters));
  }

  andTee<P extends AnyParameters>(
    callback: Mapper<T, void, P>,
    ...parameters: P
  ): Maybe<T> {
    return this.tap(callback, ...parameters);
  }

  unwrapOr<A>(value: A): T | A {
    return this.unwrapOrElse(() => value);
  }

  unwrapOrElse<A>(value: () => A): T | A {
    return this.fold(value, identity);
  }

  isJust(): this is Just<T> {
    return isJust(this);
  }

  isNone(): this is None<T> {
    return isNone(this);
  }

  join<A>(this: Maybe<Maybe<A>>): Maybe<A> {
    return this.chain(identity);
  }

  pipe<A, P extends AnyParameters>(
    pipe: Mapper<Maybe<T>, A, P>,
    ...parameters: P
  ): A {
    return bind(pipe, parameters)(cast(this));
  }

  map<V, P extends AnyParameters>(
    map: Mapper<T, V, P>,
    ...parameters: P
  ): Maybe<V> {
    return this.chain(combine(bind(map, parameters), just));
  }

  mapNullable<V, P extends AnyParameters>(
    map: Mapper<T, V | null | undefined, P>,
    ...parameters: P
  ): Maybe<V> {
    return this.chain(combine(bind(map, parameters), fromNullable));
  }

  apply<A, B, P extends AnyParameters>(
    this: Maybe<Mapper<A, B, P>>,
    argument: Maybe<A>,
    ...parameters: P
  ): Maybe<B>;
  apply<A, B, P extends AnyParameters>(
    this: Maybe<A>,
    argument: Maybe<Mapper<A, B, P>>,
    ...parameters: P
  ): Maybe<B>;
  apply<A, B, P extends AnyParameters>(
    this: Maybe<A | Mapper<A, B, P>>,
    argument: Maybe<A | Mapper<A, B, P>>,
    ...parameters: P
  ): Maybe<B> {
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

  filter<A extends T>(filter: (input: T) => input is A): Maybe<A>;
  filter(filter: (input: T) => boolean): Maybe<T>;
  filter(filter: (input: T) => boolean): Maybe<T> {
    return this.chain((value) => (filter(value) ? just(value) : none()));
  }

  chain<V, P extends AnyParameters>(
    map: Mapper<T, Maybe<V>, P>,
    ...parameters: P
  ): Maybe<V> {
    return this.fold<Maybe<V>>(none, bind(map, parameters));
  }

  default(value: T): Maybe<T> {
    return this.or(just(value));
  }

  or(x: Maybe<T>): Maybe<T> {
    return this.orLazy(() => x);
  }

  orLazy(factory: () => Maybe<T>): Maybe<T> {
    return this.fold(factory, () => cast(this));
  }

  async orAsync(factory: () => MaybePromiseLike<Maybe<T>>): Promise<Maybe<T>> {
    return await this.fold(factory, () => cast(this));
  }

  zip<A>(maybe: Maybe<A>): Maybe<Pair<T, A>> {
    return this.chain((value) => maybe.map((right) => [value, right]));
  }

  tap<P extends AnyParameters>(
    callback: Mapper<T, void, P>,
    ...parameters: P
  ): Maybe<T> {
    this.map(callback, ...parameters);
    return cast(this);
  }

  flatMap<A, P extends AnyParameters>(
    map: Mapper<T, A, P>,
    ...parameters: P
  ): A | undefined {
    return this.fold(noop, bind(map, parameters));
  }

  unwrap(message: string = UnwrapCustomError.Messages.MAYBE_IS_NONE): T {
    return this.fold(() => UnwrapCustomError.inlineThrow(message), identity);
  }

  fold<A, B = A>(mapNone: Mapper<void, B>, mapJust: Mapper<T, A>): A | B {
    if (this.isJust()) {
      return mapJust(this.value);
    }

    if (this.isNone()) {
      return mapNone();
    }

    /* istanbul ignore next */
    throw new InvalidStateError();
  }

  async asyncChain<A, P extends AnyParameters>(
    map: Mapper<Awaited<T>, MaybePromiseLike<Maybe<A>>, P>,
    ...parameters: P
  ): Promise<Maybe<A>> {
    const result = await this.asyncMap(map, ...parameters);
    return result.join();
  }

  async asyncMap<A, P extends AnyParameters>(
    map: Mapper<Awaited<T>, MaybePromiseLike<A>, P>,
    ...parameters: P
  ): Promise<Maybe<A>> {
    return await this.map(async (value) =>
      map(await value, ...parameters)
    ).await();
  }

  async await<A>(this: Maybe<MaybePromiseLike<A>>): Promise<Maybe<A>> {
    return await this.fold<MaybePromiseLike<Maybe<A>>>(none, async (value) =>
      just(await value)
    );
  }

  asyncApply<A, B, P extends AnyParameters>(
    this: Maybe<Mapper<A, MaybePromiseLike<B>, P>>,
    argument: Maybe<MaybePromiseLike<A>>,
    ...parameters: P
  ): Promise<Maybe<B>>;
  asyncApply<A, B, P extends AnyParameters>(
    this: Maybe<MaybePromiseLike<A>>,
    map: Maybe<Mapper<A, MaybePromiseLike<B>, P>>,
    ...parameters: P
  ): Promise<Maybe<B>>;
  async asyncApply<A, B, P extends AnyParameters>(
    this: Maybe<MaybePromiseLike<A> | Mapper<A, MaybePromiseLike<B>, P>>,
    argument: Maybe<MaybePromiseLike<A> | Mapper<A, MaybePromiseLike<B>, P>>,
    ...parameters: P
  ): Promise<Maybe<B>> {
    return await this.zip(argument)
      .map(async ([current, argument]): Promise<B> => {
        if (isWrappedFunction<A, B, P>(current)) {
          return await current(await (argument as A), ...parameters);
        }

        if (isWrappedFunction<A, B, P>(argument)) {
          return await argument(await (current as A), ...parameters);
        }

        throw new InvalidStateError(
          InvalidStateError.Messages.APPLY_SHOULD_BE_FUNCTION
        );
      })
      .await();
  }
}

Object.freeze(MaybeConstructor);
Object.freeze(MaybeConstructor.prototype);

type SerializedJust<T> = Readonly<{
  name: typeof name;
  type: MaybeState.Just;
  value: T;
}>;

class Just<T> extends MaybeConstructor<T> implements SerializedJust<T> {
  static create<T = never>(value: T): Just<T> {
    return new Just(value);
  }

  get [Symbol.toStringTag](): MaybeState.Just {
    return MaybeState.Just;
  }

  get name(): typeof name {
    return name;
  }

  get type(): MaybeState.Just {
    return MaybeState.Just;
  }

  private constructor(public readonly value: T) {
    super();
    Object.freeze(this);
  }

  toJSON(): SerializedJust<T> {
    return { name: this.name, type: this.type, value: this.value };
  }
}

Object.freeze(Just);
Object.freeze(Just.prototype);

type SerializedNone = { name: typeof name; type: MaybeState.None };

class None<T = unknown> extends MaybeConstructor<T> implements SerializedNone {
  static readonly instance = new None<never>();
  static create<T = never>(): None<T> {
    return None.instance;
  }

  get value(): undefined {
    return undefined;
  }

  get [Symbol.toStringTag](): MaybeState.None {
    return MaybeState.None;
  }

  get name(): typeof name {
    return name;
  }

  get type(): MaybeState.None {
    return MaybeState.None;
  }

  private constructor() {
    super();
    Object.freeze(this);
  }

  toJSON(): SerializedNone {
    return { name: this.name, type: this.type };
  }
}

Object.freeze(None);
Object.freeze(None.prototype);

export type Maybe<T> = Just<T> | None<T>;
export type SerializedMaybe<T> = SerializedJust<T> | SerializedNone;

export const isJust = <T>(value: unknown | Maybe<T>): value is Just<T> =>
  value instanceof Just;

export const isNone = <T>(value: unknown | Maybe<T>): value is None<T> =>
  // Better: value === None.instance
  value instanceof None;

export const isMaybe = <T>(value: unknown | Maybe<T>): value is Maybe<T> =>
  isJust(value) || isNone(value);

export function chain<A = never, B = never, P extends AnyParameters = []>(
  map: (v: A, ...parameters: P) => MaybePromiseLike<Maybe<B>>,
  ...parameters: P
): (maybe: Maybe<A>) => Promise<Maybe<B>> {
  return (maybe) => maybe.asyncChain(bind(map, parameters));
}

/**
 * @template T
 * @param {SerializedMaybe<T>} serialized
 * @throws {DeserializationError} - {@link DeserializationError}
 * @return {Maybe<T>}
 */
export function fromJSON<T>(serialized: SerializedMaybe<T>): Maybe<T> {
  if (serialized.name !== name) {
    throw new DeserializationError(
      DeserializationError.Messages.EXPECTED_MAYBE
    );
  }

  if (serialized.type === MaybeState.Just) {
    return just(serialized.value);
  }

  return none();
}

export function merge<V1>(values: [Maybe<V1>]): Maybe<[V1]>;
export function merge<V1, V2>(values: [Maybe<V1>, Maybe<V2>]): Maybe<[V1, V2]>;
export function merge<V1, V2, V3>(
  values: [Maybe<V1>, Maybe<V2>, Maybe<V3>]
): Maybe<[V1, V2, V3]>;
export function merge<V1, V2, V3, V4>(
  values: [Maybe<V1>, Maybe<V2>, Maybe<V3>, Maybe<V4>]
): Maybe<[V1, V2, V3, V4]>;
export function merge<V1, V2, V3, V4, V5>(
  values: [Maybe<V1>, Maybe<V2>, Maybe<V3>, Maybe<V4>, Maybe<V5>]
): Maybe<[V1, V2, V3, V4, V5]>;
export function merge<V1, V2, V3, V4, V5, V6>(
  values: [Maybe<V1>, Maybe<V2>, Maybe<V3>, Maybe<V4>, Maybe<V5>, Maybe<V6>]
): Maybe<[V1, V2, V3, V4, V5, V6]>;
export function merge<T = never>(values: Array<Maybe<T>>): Maybe<T[]>;
export function merge(values: Array<Maybe<unknown>>): Maybe<unknown> {
  if (values.some((maybe) => maybe.isNone())) {
    return none();
  }

  return just([...filterMap(values, identity)]);
}

export function fromNullable<T = never>(value: Nullable<T>): Maybe<T> {
  return value !== null && value !== undefined ? just(value) : none();
}

export function* iterator<T>(
  callback: () => Maybe<T>
): Generator<T, void, void> {
  let result: Maybe<T>;

  while ((result = callback()).isJust()) {
    yield result.value;
  }
}

export async function* asyncIterator<T>(
  callback: () => MaybePromiseLike<Maybe<MaybePromiseLike<T>>>
): AsyncGenerator<T, void, void> {
  let result: Maybe<MaybePromiseLike<T>>;

  while ((result = await callback()).isJust()) {
    yield await result.value;
  }
}

export function* filterMap<A, B>(
  iterable: Iterable<A>,
  filterMap: (value: A, index: number) => Maybe<B>
): Generator<B, void, void> {
  let index = 0;
  for (const value of iterable) {
    const processed = filterMap(value, index++);

    if (processed.isJust()) {
      yield processed.unwrap();
    }
  }
}
