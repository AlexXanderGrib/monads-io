import { InvalidStateError } from "./errors";
import { bind, combine, identity, isWrappedFunction } from "./runtime";
import {
  AnyParameters,
  AsyncMonad,
  Container,
  Mapper,
  MaybePromiseLike,
  Pipe
} from "./types";

const name = "Identity";

class Identity<T> implements AsyncMonad<T>, Container<T>, Pipe {
  static from<T = never>(value: T): Identity<T> {
    return new Identity(value);
  }

  get [Symbol.toStringTag](): typeof name {
    return name;
  }

  get name(): typeof name {
    return name;
  }

  private constructor(public readonly value: T) {}

  tap<P extends AnyParameters>(
    callback: Mapper<T, void, P>,
    ...parameters: P
  ): Identity<T> {
    this.map(callback, ...parameters);
    return this;
  }

  pipe<A, P extends AnyParameters>(
    pipe: Mapper<Identity<T>, A, P>,
    ...parameters: P
  ): A {
    return bind(pipe, parameters)(this);
  }

  unwrapOrElse<X>(fallback: () => X): X | T {
    return this.fold((value) => value || fallback());
  }

  unwrapOr<X>(value: X): X | T {
    return this.unwrapOrElse(() => value);
  }

  join<A>(this: Identity<Identity<A>>): Identity<A> {
    return this.chain(identity);
  }

  map<A, P extends AnyParameters>(
    map: Mapper<T, A, P>,
    ...parameters: P
  ): Identity<A> {
    return this.fold(combine(bind(map, parameters), from));
  }

  apply<A, B, P extends AnyParameters>(
    this: Identity<Mapper<A, B, P>>,
    argument: Identity<A>,
    ...parameters: P
  ): Identity<B>;
  apply<A, B, P extends AnyParameters>(
    this: Identity<A>,
    map: Identity<Mapper<A, B, P>>,
    ...parameters: P
  ): Identity<B>;
  apply<A, B, P extends AnyParameters>(
    this: Identity<A | Mapper<A, B, P>>,
    argument: Identity<A | Mapper<A, B, P>>,
    ...parameters: P
  ): Identity<B> {
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
    this: Identity<Mapper<A, MaybePromiseLike<B>, P>>,
    argument: Identity<A>,
    ...parameters: P
  ): Promise<Identity<B>>;
  asyncApply<A, B, P extends AnyParameters>(
    this: Identity<A>,
    map: Identity<Mapper<A, MaybePromiseLike<B>, P>>,
    ...parameters: P
  ): Promise<Identity<B>>;
  async asyncApply<A, B, P extends AnyParameters>(
    this: Identity<A | Mapper<A, MaybePromiseLike<B>, P>>,
    argument: Identity<A | Mapper<A, MaybePromiseLike<B>, P>>,
    ...parameters: P
  ): Promise<Identity<B>> {
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

  chain<B, P extends AnyParameters>(
    map: Mapper<T, Identity<B>, P>,
    ...parameters: P
  ): Identity<B> {
    return this.fold(bind(map, parameters));
  }

  async asyncChain<B, P extends AnyParameters>(
    map: Mapper<T, MaybePromiseLike<Identity<B>>, P>,
    ...parameters: P
  ): Promise<Identity<B>> {
    const result = await this.asyncMap<Identity<B>, P>(map, ...parameters);
    result.join();

    return result.join();
  }

  async asyncMap<B, P extends AnyParameters>(
    map: Mapper<T, MaybePromiseLike<B>, P>,
    ...parameters: P
  ): Promise<Identity<B>> {
    return await this.map(map, ...parameters).await();
  }
  async await<X>(this: Identity<MaybePromiseLike<X>>): Promise<Identity<X>> {
    return await this.fold<MaybePromiseLike<Identity<X>>>(async (value) =>
      from(await value)
    );
  }

  fold<A>(mapper: Mapper<T, A>): A {
    return mapper(this.value);
  }

  zip<A>(either: Identity<A>): Identity<[T, A]> {
    return this.chain((value) => either.map((right) => [value, right]));
  }

  unwrap(): T {
    return this.value;
  }
}

Object.freeze(Identity);
Object.freeze(Identity.prototype);

export { type Identity };

export const from = Identity.from;

export const isIdentity = <T>(
  value: unknown | Identity<T>
): value is Identity<T> => value instanceof Identity;

export function chain<A = never, B = never, P extends AnyParameters = []>(
  map: (value: A, ...parameters: P) => MaybePromiseLike<Identity<B>>,
  ...parameters: P
): (either: Identity<A>) => Promise<Identity<B>> {
  return (either) => either.asyncChain(bind(map, parameters));
}

export function merge<V1>(values: [Identity<V1>]): Identity<[V1]>;
export function merge<V1, V2>(
  values: [Identity<V1>, Identity<V2>]
): Identity<[V1, V2]>;
export function merge<V1, V2, V3>(
  values: [Identity<V1>, Identity<V2>, Identity<V3>]
): Identity<[V1, V2, V3]>;
export function merge<V1, V2, V3, V4>(
  values: [Identity<V1>, Identity<V2>, Identity<V3>, Identity<V4>]
): Identity<[V1, V2, V3, V4]>;
export function merge<V1, V2, V3, V4, V5>(
  values: [Identity<V1>, Identity<V2>, Identity<V3>, Identity<V4>, Identity<V5>]
): Identity<[V1, V2, V3, V4, V5]>;
export function merge<V1, V2, V3, V4, V5, V6>(
  values: [
    Identity<V1>,
    Identity<V2>,
    Identity<V3>,
    Identity<V4>,
    Identity<V5>,
    Identity<V6>
  ]
): Identity<[V1, V2, V3, V4, V5, V6]>;
export function merge<T>(values: Array<Identity<T>>): Identity<T[]>;
export function merge(values: Array<Identity<unknown>>): Identity<unknown[]> {
  return from(values.map((value) => value.unwrap()));
}
