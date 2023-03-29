import { Union } from "./union";
import { bind, combine, identity, isWrappedFunction, noop } from "./runtime";
import type {
  MaybePromiseLike,
  Nullable,
  AnyParameters,
  Pm,
  Pair,
  Alternative,
  Monad,
  Container
} from "./types";

export const enum MaybeState {
  Just = 1,
  None = 0
}

const name = "Maybe";

class Just<T> {
  static create<T>(value: T): Just<T> {
    return new Just(value);
  }

  public readonly name = name;
  public readonly type = MaybeState.Just;

  private constructor(public readonly value: T) {
    Object.freeze(this);
  }
}

class None {
  static readonly instance = new None();
  static create(): None {
    return None.instance;
  }

  public readonly name = name;
  public readonly type = MaybeState.None;

  private constructor() {
    Object.freeze(this);
  }
}

type States<T> = Pair<Just<T>, None>;

export type SerializedMaybe<T> = States<T>[number];

class MaybeConstructor<T, S extends MaybeState = MaybeState>
  extends Union<States<T>, S>
  implements Monad<T>, Alternative<T>, Container<T>
{
  static none<T = never>(): Maybe<T> {
    return new MaybeConstructor<T, MaybeState.None>(None.create());
  }

  static just<T>(value: T): Maybe<T> {
    return new MaybeConstructor<T, MaybeState.Just>(Just.create(value));
  }

  unwrapOr<X>(value: X): T | X {
    return this.biMatch(identity, () => value);
  }

  isJust(): this is MaybeConstructor<T, MaybeState.Just> {
    return this.is(MaybeState.Just);
  }

  isNone(): this is MaybeConstructor<T, MaybeState.None> {
    return this.is(MaybeState.None);
  }

  join<V>(this: Maybe<Maybe<V>>): Maybe<V> {
    return this.chain(identity);
  }

  map<V, A extends AnyParameters>(
    map: Pm<T, V, A>,
    ...parameters: A
  ): Maybe<V> {
    return this.chain(combine(bind(map, parameters), just));
  }

  apply<A, B, P extends AnyParameters>(
    this: Maybe<Pm<A, B, P>>,
    argument: Maybe<A>,
    ...parameters: P
  ): Maybe<B>;
  apply<A, B, P extends AnyParameters>(
    this: Maybe<A>,
    argument: Maybe<Pm<A, B, P>>,
    ...parameters: P
  ): Maybe<B>;
  apply<A, B, P extends AnyParameters>(
    this: Maybe<A | Pm<A, B, P>>,
    argument: Maybe<A | Pm<A, B, P>>,
    ...parameters: P
  ): Maybe<B> {
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

  get [Symbol.toStringTag]() {
    return name;
  }

  filter<X extends T>(filter: (input: T) => input is X): Maybe<X>;
  filter(filter: (input: T) => boolean): Maybe<T>;
  filter(filter: (input: T) => boolean): Maybe<T> {
    return this.chain((value) => (filter(value) ? just(value) : none()));
  }

  chain<V, A extends AnyParameters>(
    map: Pm<T, Maybe<V>, A>,
    ...parameters: A
  ): Maybe<V> {
    return this.biMatch(bind(map, parameters), none);
  }

  default(value: T): Maybe<T> {
    return this.or(just(value));
  }

  or(x: Maybe<T>): Maybe<T> {
    return this.biMatch(
      () => this as Maybe<T>,
      () => x
    );
  }

  zip<A>(maybe: Maybe<A>): Maybe<Pair<T, A>> {
    return this.chain((value) => maybe.map((right) => [value, right]));
  }

  tap<P extends AnyParameters>(
    callback: Pm<T, void, P>,
    ...parameters: P
  ): Maybe<T> {
    this.map(callback, ...parameters);

    return this as Maybe<T>;
  }

  flatMap<V, P extends AnyParameters>(
    map: Pm<T, V, P>,
    ...parameters: P
  ): V | undefined {
    return this.biMatch(bind(map, parameters), noop);
  }

  unwrap(message = "Maybe state is None"): T {
    return this.biMatch(identity, () => {
      throw new Error(message);
    });
  }

  biMatch<A, B = A>(mapJust: Pm<T, A, []>, mapNone: Pm<void, B, []>): A | B {
    return this.match<A | B>({
      [MaybeState.Just]: ({ value }) => mapJust(value),
      [MaybeState.None]: () => mapNone()
    });
  }

  async asyncChain<V, P extends AnyParameters>(
    map: Pm<T, MaybePromiseLike<Maybe<V>>, P>,
    ...parameters: P
  ): Promise<Maybe<V>> {
    const result = await this.map(map, ...parameters).await();
    return result.join();
  }

  async await<X>(
    this: MaybeConstructor<MaybePromiseLike<X>>
  ): Promise<Maybe<X>> {
    return await this.biMatch<MaybePromiseLike<Maybe<X>>>(
      async (value) => just(await value),
      none
    );
  }
}

Object.freeze(MaybeConstructor);
Object.freeze(MaybeConstructor.prototype);

export type Maybe<T> =
  | MaybeConstructor<T, MaybeState.Just>
  | MaybeConstructor<T, MaybeState.None>;

export const isMaybe = <T>(value: unknown | Maybe<T>): value is Maybe<T> =>
  value instanceof MaybeConstructor;

export const { just, none } = MaybeConstructor;

export function chain<A, B, P extends AnyParameters>(
  map: (v: A, ...parameters: P) => MaybePromiseLike<Maybe<B>>,
  ...parameters: P
): (maybe: Maybe<A>) => Promise<Maybe<B>> {
  return (maybe) => maybe.asyncChain(bind(map, parameters));
}

export function fromJSON<T>(serialized: SerializedMaybe<T>): Maybe<T> {
  if (serialized.name !== name) {
    throw new Error("Expected serialized to be of type Maybe");
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
