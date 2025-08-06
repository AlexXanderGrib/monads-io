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

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
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

class MaybeConstructor<Va>
  implements Monad<Va>, Alternative<Va>, Container<Va>, Pipe
{
  unwrapOr<T>(value: T): Va | T {
    return this.unwrapOrElse(() => value);
  }

  unwrapOrElse<T>(value: () => T): Va | T {
    return this.fold(value, identity);
  }

  isJust(): this is Just<Va> {
    return isJust(this);
  }

  isNone(): this is None<Va> {
    return isNone(this);
  }

  join<V>(this: Maybe<Maybe<V>>): Maybe<V> {
    return this.chain(identity);
  }

  pipe<V, P extends AnyParameters>(
    pipe: Mapper<Maybe<Va>, V, P>,
    ...parameters: P
  ): V {
    return bind(pipe, parameters)(cast(this));
  }

  map<V, P extends AnyParameters>(
    map: Mapper<Va, V, P>,
    ...parameters: P
  ): Maybe<V> {
    return this.chain(combine(bind(map, parameters), just));
  }

  mapNullable<V, P extends AnyParameters>(
    map: Mapper<Va, V | null | undefined, P>,
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

  filter<T extends Va>(filter: (input: Va) => input is T): Maybe<T>;
  filter(filter: (input: Va) => boolean): Maybe<Va>;
  filter(filter: (input: Va) => boolean): Maybe<Va> {
    return this.chain((value) => (filter(value) ? just(value) : none()));
  }

  chain<V, P extends AnyParameters>(
    map: Mapper<Va, Maybe<V>, P>,
    ...parameters: P
  ): Maybe<V> {
    return this.fold<Maybe<V>>(none, bind(map, parameters));
  }

  default(value: Va): Maybe<Va> {
    return this.or(just(value));
  }

  or(x: Maybe<Va>): Maybe<Va> {
    return this.orLazy(() => x);
  }

  orLazy(factory: () => Maybe<Va>): Maybe<Va> {
    return this.fold(factory, () => cast(this));
  }

  async orAsync(
    factory: () => MaybePromiseLike<Maybe<Va>>
  ): Promise<Maybe<Va>> {
    return await this.fold(factory, () => cast(this));
  }

  zip<T>(maybe: Maybe<T>): Maybe<Pair<Va, T>> {
    return this.chain((value) => maybe.map((right) => [value, right]));
  }

  tap<P extends AnyParameters>(
    callback: Mapper<Va, void, P>,
    ...parameters: P
  ): Maybe<Va> {
    this.map(callback, ...parameters);
    return cast(this);
  }

  flatMap<T, P extends AnyParameters>(
    map: Mapper<Va, T, P>,
    ...parameters: P
  ): T | undefined {
    return this.fold(noop, bind(map, parameters));
  }

  unwrap(message: string = UnwrapCustomError.Messages.MAYBE_IS_NONE): Va {
    return this.fold(() => UnwrapCustomError.inlineThrow(message), identity);
  }

  fold<A, B = A>(mapNone: Mapper<void, B>, mapJust: Mapper<Va, A>): A | B {
    if (this.isJust()) {
      return mapJust(this.value);
    }

    if (this.isNone()) {
      return mapNone();
    }

    /* istanbul ignore next */
    throw new InvalidStateError();
  }

  async asyncChain<T, P extends AnyParameters>(
    map: Mapper<Va, MaybePromiseLike<Maybe<T>>, P>,
    ...parameters: P
  ): Promise<Maybe<T>> {
    const result = await this.map(map, ...parameters).await();
    return result.join();
  }

  async asyncMap<T, P extends AnyParameters>(
    map: Mapper<Va, MaybePromiseLike<T>, P>,
    ...parameters: P
  ): Promise<Maybe<T>> {
    return await this.map(map, ...parameters).await();
  }

  async await<T>(this: Maybe<MaybePromiseLike<T>>): Promise<Maybe<T>> {
    return await this.fold<MaybePromiseLike<Maybe<T>>>(none, async (value) =>
      just(await value)
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
export function merge<T = never>(values: Maybe<T>[]): Maybe<T[]>;
export function merge(values: Maybe<unknown>[]): Maybe<unknown> {
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
