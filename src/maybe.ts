import {
  DeserializationError,
  InvalidStateError,
  UnwrapCustomError
} from "./errors";
import { bind, combine, identity, isWrappedFunction, noop } from "./runtime";
import type {
  MaybePromiseLike,
  Nullable,
  AnyParameters,
  Mapper,
  Pair,
  Alternative,
  Monad,
  Container
} from "./types";

export const enum MaybeState {
  None = 0,
  Just = 1
}

const name = "Maybe";
const justName = "Just";
const noneName = "None";

export function none<T = never>(): Maybe<T> {
  return None.create();
}

export function just<T>(value: T): Maybe<T> {
  return Just.create(value);
}

export { just as from };

class MaybeConstructor<T> implements Monad<T>, Alternative<T>, Container<T> {
  unwrapOr<X>(value: X): T | X {
    return this.unwrapOrElse(() => value);
  }

  unwrapOrElse<X>(value: () => X): T | X {
    return this.fold(identity, value);
  }

  isJust(): this is Just<T> {
    return this instanceof Just;
  }

  isNone(): this is None<T> {
    return this instanceof None;
  }

  join<V>(this: Maybe<Maybe<V>>): Maybe<V> {
    return this.chain(identity);
  }

  map<V, A extends AnyParameters>(
    map: Mapper<T, V, A>,
    ...parameters: A
  ): Maybe<V> {
    return this.chain(combine(bind(map, parameters), just));
  }

  mapNullable<V, A extends AnyParameters>(
    map: Mapper<T, V | null | undefined, A>,
    ...parameters: A
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

  filter<X extends T>(filter: (input: T) => input is X): Maybe<X>;
  filter(filter: (input: T) => boolean): Maybe<T>;
  filter(filter: (input: T) => boolean): Maybe<T> {
    return this.chain((value) => (filter(value) ? just(value) : none()));
  }

  chain<V, A extends AnyParameters>(
    map: Mapper<T, Maybe<V>, A>,
    ...parameters: A
  ): Maybe<V> {
    return this.fold<Maybe<V>>(bind(map, parameters), none);
  }

  default(value: T): Maybe<T> {
    return this.or(just(value));
  }

  or(x: Maybe<T>): Maybe<T> {
    return this.orLazy(() => x);
  }

  orLazy(factory: () => Maybe<T>): Maybe<T> {
    return this.fold(() => this as unknown as Maybe<T>, factory);
  }

  async orAsync(factory: () => MaybePromiseLike<Maybe<T>>): Promise<Maybe<T>> {
    return await this.fold(() => this as unknown as Maybe<T>, factory);
  }

  zip<A>(maybe: Maybe<A>): Maybe<Pair<T, A>> {
    return this.chain((value) => maybe.map((right) => [value, right]));
  }

  tap<P extends AnyParameters>(
    callback: Mapper<T, void, P>,
    ...parameters: P
  ): Maybe<T> {
    this.map(callback, ...parameters);

    return this as unknown as Maybe<T>;
  }

  flatMap<V, P extends AnyParameters>(
    map: Mapper<T, V, P>,
    ...parameters: P
  ): V | undefined {
    return this.fold(bind(map, parameters), noop);
  }

  unwrap(message: string = UnwrapCustomError.Messages.MAYBE_IS_NONE): T {
    return this.fold(identity, () => UnwrapCustomError.inlineThrow(message));
  }

  fold<A, B = A>(mapJust: Mapper<T, A>, mapNone: Mapper<void, B>): A | B {
    if (this.isJust()) {
      return mapJust(this.value);
    }

    if (this.isNone()) {
      return mapNone();
    }

    /* istanbul ignore next */
    throw new InvalidStateError();
  }

  async asyncChain<V, P extends AnyParameters>(
    map: Mapper<T, MaybePromiseLike<Maybe<V>>, P>,
    ...parameters: P
  ): Promise<Maybe<V>> {
    const result = await this.map(map, ...parameters).await();
    return result.join();
  }

  async asyncMap<A, P extends AnyParameters>(
    map: Mapper<T, MaybePromiseLike<A>, P>,
    ...parameters: P
  ): Promise<Maybe<A>> {
    return await this.map(map, ...parameters).await();
  }

  async await<X>(this: Maybe<MaybePromiseLike<X>>): Promise<Maybe<X>> {
    return await this.fold<MaybePromiseLike<Maybe<X>>>(
      async (value) => just(await value),
      none
    );
  }

  asyncApply<A, B, P extends AnyParameters>(
    this: Maybe<Mapper<A, MaybePromiseLike<B>, P>>,
    argument: Maybe<A>,
    ...parameters: P
  ): Promise<Maybe<B>>;
  asyncApply<A, B, P extends AnyParameters>(
    this: Maybe<A>,
    map: Maybe<Mapper<A, MaybePromiseLike<B>, P>>,
    ...parameters: P
  ): Promise<Maybe<B>>;
  async asyncApply<A, B, P extends AnyParameters>(
    this: Maybe<A | Mapper<A, MaybePromiseLike<B>, P>>,
    argument: Maybe<A | Mapper<A, MaybePromiseLike<B>, P>>,
    ...parameters: P
  ): Promise<Maybe<B>> {
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
}

Object.freeze(MaybeConstructor);
Object.freeze(MaybeConstructor.prototype);

type SerializedJust<T> = Readonly<{
  name: typeof name;
  type: MaybeState.Just;
  value: T;
}>;

class Just<T> extends MaybeConstructor<T> implements SerializedJust<T> {
  static create<T>(value: T): Just<T> {
    return new Just(value);
  }

  get [Symbol.toStringTag](): typeof justName {
    return justName;
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
  static create<T>(): None<T> {
    return None.instance;
  }

  get value(): undefined {
    return undefined;
  }

  get [Symbol.toStringTag](): typeof noneName {
    return noneName;
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

export function chain<A, B, P extends AnyParameters>(
  map: (v: A, ...parameters: P) => MaybePromiseLike<Maybe<B>>,
  ...parameters: P
): (maybe: Maybe<A>) => Promise<Maybe<B>> {
  return (maybe) => maybe.asyncChain(bind(map, parameters));
}

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
export function merge<T>(values: Array<Maybe<T>>): Maybe<T[]>;
export function merge(values: Array<Maybe<unknown>>): Maybe<unknown> {
  const array: unknown[] = [];

  for (const value of values) {
    if (value.isJust()) {
      value.tap((value) => array.push(value));

      continue;
    }

    return none();
  }

  return just(array);
}

export function fromNullable<T>(value: Nullable<T>): Maybe<T> {
  return value !== null && value !== undefined ? just(value) : none();
}

export function* iterator<T>(
  callback: () => Maybe<T>
): Generator<T, void, void> {
  let result: Maybe<T>;

  while ((result = callback()).isJust()) {
    yield result.unwrap();
  }
}

export async function* asyncIterator<T>(
  callback: () => MaybePromiseLike<Maybe<MaybePromiseLike<T>>>
): AsyncGenerator<T, void, void> {
  let result: Maybe<MaybePromiseLike<T>>;

  while ((result = await callback()).isJust()) {
    yield await result.unwrap();
  }
}

export function* filterMap<T, X>(
  iterable: Iterable<T>,
  filterMap: (value: T, index: number) => Maybe<X>
): Generator<X, void, void> {
  let index = 0;
  for (const value of iterable) {
    const processed = filterMap(value, index++);

    if (processed.isJust()) {
      yield processed.unwrap();
    }
  }
}
