/* eslint-disable no-invalid-this */
import {
  DecorationError,
  DeserializationError,
  InvalidStateError,
  MatchError,
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

export function right<L = never, R = never>(right: R): Either<L, R> {
  return Right.create(right);
}

export function left<L = never, R = never>(value: L): Either<L, R> {
  return Left.create(value);
}

export function ok<R = never, L = never>(right: R): Result<R, L> {
  return Right.create(right);
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export function err<L = never, R = never>(value: L): Result<R, L> {
  return Left.create(value);
}

function cast<L, R>(constructor: EitherConstructor<L, R>): Either<L, R> {
  if (isEither<L, R>(constructor)) {
    return constructor;
  }

  /* istanbul ignore next */
  throw new InvalidStateError();
}

interface EitherConstructorType<L, R> {
  any<T>(this: Either<T, T>): T;
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
  asyncApply<A, B, P extends AnyParameters>(
    this: Either<L, Mapper<A, MaybePromiseLike<B>, P>>,
    argument: Either<L, MaybePromiseLike<A>>,
    ...parameters: P
  ): Promise<Either<L, B>>;
  asyncApply<A, B, P extends AnyParameters>(
    this: Either<L, MaybePromiseLike<A>>,
    map: Either<L, Mapper<A, MaybePromiseLike<B>, P>>,
    ...parameters: P
  ): Promise<Either<L, B>>;
  asyncChain<A, B, P extends AnyParameters>(
    map: Mapper<Awaited<R>, MaybePromiseLike<Either<A, B>>, P>,
    ...parameters: P
  ): Promise<Either<A | L, B>>;
  asyncAndThen<A, B, P extends AnyParameters>(
    map: Mapper<Awaited<R>, MaybePromiseLike<Either<A, B>>, P>,
    ...parameters: P
  ): Promise<Either<A | L, B>>;
  asyncMap<B, P extends AnyParameters>(
    map: Mapper<Awaited<R>, MaybePromiseLike<B>, P>,
    ...parameters: P
  ): Promise<Either<L, B>>;

  asyncMapLeft<A, P extends AnyParameters>(
    map: Mapper<Awaited<L>, MaybePromiseLike<A>, P>,
    ...parameters: P
  ): Promise<Either<A, R>>;

  await<T>(this: Either<L, MaybePromiseLike<T>>): Promise<Either<L, T>>;
  biMap<A, B>(mapLeft: Mapper<L, A>, mapRight: Mapper<R, B>): Either<A, B>;
  chain<A, B, P extends AnyParameters>(
    map: Mapper<R, Either<A, B>, P>,
    ...parameters: P
  ): Either<A | L, B>;
  andThen<A, B, P extends AnyParameters>(
    map: Mapper<R, Either<A, B>, P>,
    ...parameters: P
  ): Either<A | L, B>;
  chainLeft<A, B, P extends AnyParameters>(
    map: Mapper<L, Either<A, B>, P>,
    ...parameters: P
  ): Either<A, R | B>;
  chainErr<A, B, P extends AnyParameters>(
    map: Mapper<L, Either<A, B>, P>,
    ...parameters: P
  ): Either<A, R | B>;
  default(value: R): Either<L, R>;
  fold<A, B = A>(mapLeft: Mapper<L, A>, mapRight: Mapper<R, B>): A | B;
  isErr(): this is Left<L, R>;
  isLeft(): this is Left<L, R>;
  isOk(): this is Right<L, R>;
  isRight(): this is Right<L, R>;
  join<L1, L2, R>(this: Either<L1, Either<L2, R>>): Either<L1 | L2, R>;
  flatten<L1, L2, R>(this: Either<L1, Either<L2, R>>): Either<L1 | L2, R>;
  map<T, P extends AnyParameters>(
    map: Mapper<R, T, P>,
    ...parameters: P
  ): Either<L, T>;
  mapLeft<T, P extends AnyParameters>(
    map: Mapper<L, T, P>,
    ...parameters: P
  ): Either<T, R>;
  mapErr<T, P extends AnyParameters>(
    map: Mapper<L, T, P>,
    ...parameters: P
  ): Either<T, R>;
  mapRight<T, P extends AnyParameters>(
    map: Mapper<R, T, P>,
    ...parameters: P
  ): Either<L, T>;
  mapOk<T, P extends AnyParameters>(
    map: Mapper<R, T, P>,
    ...parameters: P
  ): Either<L, T>;
  or(x: Either<L, R>): Either<L, R>;
  orAsync(factory: () => MaybePromiseLike<Either<L, R>>): Promise<Either<L, R>>;
  orLazy(factory: () => Either<L, R>): Either<L, R>;
  pipe<T, P extends AnyParameters>(
    pipe: Mapper<Either<L, R>, T, P>,
    ...parameters: P
  ): T;
  promise(): Promise<R>;
  swap(): Either<R, L>;
  tap<P extends AnyParameters>(
    callback: Mapper<R, void, P>,
    ...parameters: P
  ): Either<L, R>;
  andTee<P extends AnyParameters>(
    callback: Mapper<R, void, P>,
    ...parameters: P
  ): Either<L, R>;
  tapLeft<P extends AnyParameters>(
    callback: Mapper<L, void, P>,
    ...parameters: P
  ): Either<L, R>;
  tapErr<P extends AnyParameters>(
    callback: Mapper<L, void, P>,
    ...parameters: P
  ): Either<L, R>;
  throw(): R;
  union(): L | R;
  unwrap(message?: string): R;
  unwrapOr<T>(value: T): T | R;
  unwrapOrElse<T>(fallback: (value: L) => T): T | R;
  value(): L | R;
  zip<A, B>(either: Either<A, B>): Either<L | A, Pair<R, B>>;
}

class EitherConstructor<L, R>
  implements
    AsyncMonad<R>,
    Alternative<R>,
    Container<R>,
    Pipe,
    EitherConstructorType<L, R>
{
  async asyncMapLeft<A, P extends AnyParameters>(
    map: Mapper<Awaited<L>, MaybePromiseLike<A>, P>,
    ...parameters: P
  ): Promise<Either<A, R>> {
    return await this.mapLeft(
      async (value) => await map(await value, ...parameters)
    ).awaitLeft();
  }

  async asyncMapErr<A, P extends AnyParameters>(
    map: Mapper<Awaited<L>, MaybePromiseLike<A>, P>,
    ...parameters: P
  ): Promise<Either<A, R>> {
    return await this.mapLeft(
      async (value) => await map(await value, ...parameters)
    ).awaitLeft();
  }

  /**
   * Asynchronously chains an operation that returns an Either. This is similar to `chain` but operates on the awaited Right value.
   *
   * @alias asyncChain
   * @see {@link asyncChain}
   *
   * @template A - Left type of the resulting Either.
   * @template B - Right type of the resulting Either.
   * @template {AnyParameters} P - Parameters for the mapping function.
   * @param {Mapper<Awaited<R>, MaybePromiseLike<Either<A, B>>, P>} map - Function returning a Promise of Either, taking the awaited Right value as input.
   * @param {...P} parameters - Additional parameters for the function.
   * @return {Promise<Either<L | A, B>>} Promise resolving to the chained Either.
   *
   * @example
   * const asyncValue = right(Promise.resolve(10));
   * const result = await asyncValue.asyncAndThen(async (n) => right(n + 1));
   * // result: right(11)
   */
  asyncAndThen<A, B, P extends AnyParameters>(
    map: Mapper<Awaited<R>, MaybePromiseLike<Either<A, B>>, P>,
    ...parameters: P
  ): Promise<Either<L | A, B>> {
    return this.asyncChain(map, ...parameters);
  }

  /**
   * Applies a function to the Right value and returns the original `Either` for chaining. This is similar to `tap` but named `andTee` for consistency with other libraries.
   *
   * @alias tap
   * @see {@link tap}
   *
   * @template P - A tuple of parameters for the callback function.
   * @param {Mapper<R, void, P>} callback - The function to apply to the right value. It receives the right value and any additional parameters.
   * @param {...P} parameters - Additional parameters to pass to the callback function.
   * @return {Either<L, R>} The original `Either` instance for chaining.
   *
   * @example
   * const rightEither: Either<string, number> = right(5);
   * let andTeeValue: number | undefined;
   * const resultRight = rightEither.andTee((value) => { andTeeValue = value * 2; });
   * console.log(andTeeValue); // Output: 10
   * console.log(resultRight === rightEither); // Output: true
   *
   * const leftEither: Either<string, number> = left('error');
   * andTeeValue = undefined;
   * const resultLeft = leftEither.andTee((value) => { andTeeValue = value * 2; });
   * console.log(andTeeValue); // Output: undefined
   * console.log(resultLeft === leftEither); // Output: true
   */
  andTee<P extends AnyParameters>(
    callback: Mapper<R, void, P>,
    ...parameters: P
  ): Either<L, R> {
    return this.tap(callback, ...parameters);
  }

  /**
   * Chains a function that returns an Either on the Right value. This is similar to `chain` and is often used for sequential computations.
   *
   * @alias chain
   * @see {@link chain}
   *
   * @template A - The Left type of the resulting Either.
   * @template B - The Right type of the resulting Either.
   * @template {AnyParameters} P - Additional parameters passed to the mapping function.
   * @param {Mapper<R, Either<A, B>, P>} map - Function to map the Right value to a new Either.
   * @param {...P} parameters - Optional parameters to pass to the mapping function.
   * @return {Either<A | L, B>} The resulting Either after applying the function.
   *
   * @example
   * const result = right(5).andThen((x) => right(x * 2));
   * console.log(result); // right(10)
   */
  andThen<A, B, P extends AnyParameters>(
    map: Mapper<R, Either<A, B>, P>,
    ...parameters: P
  ): Either<L | A, B> {
    return this.chain(map, ...parameters);
  }

  /**
   * Extracts the value from an Either where both sides have the same type.
   *
   * @template T - The type of the value contained in the Either.
   * @param {Either<T, T>} this - The Either instance containing the value.
   * @return {T} The contained value.
   *
   * @example
   * const value = right(42).any(); // 42
   */
  any<T>(this: Either<T, T>): T {
    return this.value();
  }

  /**
   * Applies a function wrapped in an Either to an argument wrapped in an Either.
   * Works both ways depending on the order of arguments.
   *
   * @template A - Type of the argument.
   * @template B - Type of the result.
   * @template {AnyParameters} P - Parameters for the function.
   * @param {Either<L, A> | Either<L, Mapper<A, B, P>>} argument - Either the function or the value.
   * @param {...P} parameters - Additional parameters to pass to the function.
   * @return {Either<L, B>} Result of applying the function to the value.
   *
   * @example
   * const fn = right((x: number) => x * 2);
   * const val = right(5);
   * const result = fn.apply(val); // right(10)
   */
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

  /**
   * Asynchronously applies a function wrapped in an Either to a value wrapped in an Either.
   *
   * @template A - Type of the argument.
   * @template B - Type of the result.
   * @template {AnyParameters} P - Parameters for the function.
   * @param {Either<L, A> | Either<L, Mapper<A, MaybePromiseLike<B>, P>>} argument - Either the function or the value.
   * @param {...P} parameters - Additional parameters to pass to the function.
   * @return {Promise<Either<L, B>>} Promise resolving to the result.
   *
   * @example
   * const asyncFn = right(async (x: number) => x * 3);
   * const val = right(4);
   * const result = await asyncFn.asyncApply(val); // right(12)
   */
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

  /**
   * Chains an asynchronous operation that returns an Either.
   *
   * @alias asyncAndThen
   * @see {@link asyncAndThen}
   *
   * @template A - Left type of the resulting Either.
   * @template B - Right type of the resulting Either.
   * @template {AnyParameters} P - Parameters for the mapping function.
   * @param {Mapper<Awaited<R>, MaybePromiseLike<Either<A, B>>, P>} map - Function returning a Promise of Either.
   * @param {...P} parameters - Additional parameters for the function.
   * @return {Promise<Either<A | L, B>>} Promise resolving to the chained Either.
   *
   * @example
   * const value = right(10);
   * const result = await value.asyncChain(async (n) => right(n + 1));
   * // result: right(11)
   */
  async asyncChain<A, B, P extends AnyParameters>(
    map: Mapper<Awaited<R>, MaybePromiseLike<Either<A, B>>, P>,
    ...parameters: P
  ): Promise<Either<A | L, B>> {
    const result = await this.asyncMap<Either<A, B>, P>(map, ...parameters);
    return result.join();
  }

  /**
   * Asynchronously maps the contained value to a new value.
   *
   * @template A - Left type after mapping.
   * @template B - Right type after mapping.
   * @template {AnyParameters} P - Parameters for the mapping function.
   * @param {Mapper<Awaited<R>, MaybePromiseLike<B>, P>} map - Function returning a Promise of the new value.
   * @param {...P} parameters - Additional parameters for the function.
   * @return {Promise<Either<A | L, B>>} Promise resolving to the mapped Either.
   *
   * @example
   * const value = right(7);
   * const result = await value.asyncMap(async (n) => n * 2);
   * // result: right(14)
   */
  async asyncMap<B, P extends AnyParameters>(
    map: Mapper<Awaited<R>, MaybePromiseLike<B>, P>,
    ...parameters: P
  ): Promise<Either<L, B>> {
    return await this.map(async (value) =>
      map(await value, ...parameters)
    ).await();
  }

  /**
   * Awaits a Promise inside the Right value of the Either, if present.
   * Converts Either<L, Promise<R>> into Promise<Either<L, R>>.
   *
   * @template T - The type of the resolved Right value.
   * @param {Either<L, MaybePromiseLike<T>>} this - The Either containing a MaybePromise.
   * @return {Promise<Either<L, T>>} A Promise resolving to an Either with an awaited Right value.
   *
   * @example
   * const e = right(Promise.resolve(5));
   * const awaited = await e.await();
   * console.log(awaited); // right(5)
   */
  async await<T>(this: Either<L, MaybePromiseLike<T>>): Promise<Either<L, T>> {
    return await this.fold<MaybePromiseLike<Either<L, T>>>(
      left,
      async (value) => right(await value)
    );
  }

  async awaitLeft<T>(
    this: Either<MaybePromiseLike<T>, R>
  ): Promise<Either<T, R>> {
    return await this.fold<MaybePromiseLike<Either<T, R>>>(
      async (value) => left(await value),
      right
    );
  }

  /**
   * Applies different mapping functions to Left and Right values, depending on which is present.
   *
   * @template A - The new type for the Left value after mapping.
   * @template B - The new type for the Right value after mapping.
   * @param {Mapper<L, A>} mapLeft - Function to map the Left value.
   * @param {Mapper<R, B>} mapRight - Function to map the Right value.
   * @return {Either<A, B>} A new Either with mapped values.
   *
   * @example
   * const result = right(10).biMap(
   * (l) => `Error: ${l}`,
   * (r) => r * 2
   * );
   * console.log(result); // right(20)
   */
  biMap<A, B>(mapLeft: Mapper<L, A>, mapRight: Mapper<R, B>): Either<A, B> {
    return this.fold(combine(mapLeft, left), combine(mapRight, right));
  }

  /**
   * Chains a function that returns an Either on the Right value.
   * Used for sequential computations that can fail.
   *
   * @alias andThen
   * @see {@link andThen}
   *
   * @template A - The Left type of the resulting Either.
   * @template B - The Right type of the resulting Either.
   * @template {AnyParameters} P - Additional parameters passed to the mapping function.
   * @param {Mapper<R, Either<A, B>, P>} map - Function to map the Right value to a new Either.
   * @param {...P} parameters - Optional parameters to pass to the mapping function.
   * @return {Either<A | L, B>} The resulting Either after applying the function.
   *
   * @example
   * const result = right(5).chain((x) => right(x * 2));
   * console.log(result); // right(10)
   */
  chain<A, B, P extends AnyParameters>(
    map: Mapper<R, Either<A, B>, P>,
    ...parameters: P
  ): Either<A | L, B> {
    return this.fold(left, bind(map, parameters));
  }

  /**
   * Chains a function that returns an Either on the Left value.
   * Useful for handling and recovering from errors.
   *
   *
   * @alias chainErr
   * @see {@link chainErr}
   *
   * @template A - The Left type of the resulting Either.
   * @template B - The Right type of the resulting Either.
   * @template {AnyParameters} P - Additional parameters passed to the mapping function.
   * @param {Mapper<L, Either<A, B>, P>} map - Function to map the Left value to a new Either.
   * @param {...P} parameters - Optional parameters to pass to the mapping function.
   * @return {Either<A, R | B>} The resulting Either after applying the function.
   *
   * @example
   * const result = left('error').chainLeft((err) => right(`Recovered from ${err}`));
   * console.log(result); // right('Recovered from error')
   */
  chainLeft<A, B, P extends AnyParameters>(
    map: Mapper<L, Either<A, B>, P>,
    ...parameters: P
  ): Either<A, R | B> {
    return this.fold(bind(map, parameters), right);
  }

  /**
   * Chains a function that returns an Either on the Left value.
   * Useful for handling and recovering from errors.
   *
   *
   * @alias chainLeft
   * @see {@link chainLeft}
   *
   * @template A - The Left type of the resulting Either.
   * @template B - The Right type of the resulting Either.
   * @template P - Additional parameters passed to the mapping function.
   * @param {Mapper<L, Either<A, B>, P>} map - Function to map the Left value to a new Either.
   * @param {...P} parameters - Optional parameters to pass to the mapping function.
   * @return {Either<A, R | B>} The resulting Either after applying the function.
   *
   * @example
   * const result = left('error').chainErr((err) => right(`Recovered from ${err}`));
   * console.log(result); // right('Recovered from error')
   */
  chainErr<A, B, P extends AnyParameters>(
    map: Mapper<L, Either<A, B>, P>,
    ...parameters: P
  ): Either<A, R | B> {
    return this.chainLeft(map, ...parameters);
  }

  /**
   * Returns the current Either if it is Right, otherwise replaces Left with a provided Right value.
   *
   * @param {R} value - Fallback value to use if the Either is Left.
   * @return {Either<L, R>} The current Either if Right, otherwise a new Right with the provided value.
   *
   * @example
   * const result = left('error').default(10);
   * console.log(result); // right(10)
   */
  default(value: R): Either<L, R> {
    return this.or(right(value));
  }

  /**
   * Applies a function to the Left or Right value, depending on which is present, and returns the result.
   *
   * @template A - The result type when folding over Left.
   * @template B - The result type when folding over Right (defaults to A if not provided).
   * @param {Mapper<L, A>} mapLeft - Function to handle the Left value.
   * @param {Mapper<R, B>} mapRight - Function to handle the Right value.
   * @return {A|B} The result of applying the corresponding mapper.
   *
   * @throws {InvalidStateError} If the Either is in an invalid state (should never happen).
   *
   * @example
   * const result = right(5).fold(
   *   (l) => `Error: ${l}`,
   *   (r) => `Value: ${r}`
   * );
   * console.log(result); // "Value: 5"
   */
  fold<A, B = A>(mapLeft: Mapper<L, A>, mapRight: Mapper<R, B>): A | B {
    if (this.isLeft()) {
      return mapLeft(this.left);
    }
    if (this.isRight()) {
      return mapRight(this.right);
    }
    throw new InvalidStateError();
  }

  /**
   * Checks if the Either is a Left (Error).
   *
   * @alias isLeft
   * @see {@link isLeft}
   *
   * @return {boolean} True if the Either is Left.
   *
   * @example
   * console.log(left('error').isErr()); // true
   * console.log(right(5).isErr()); // false
   */
  isErr(): this is Left<L, R> {
    return isLeft(this);
  }

  /**
   * Checks if the Either is a Left.
   *
   * @return {boolean} True if the Either is Left.
   *
   * @example
   * console.log(left('failure').isLeft()); // true
   */
  isLeft(): this is Left<L, R> {
    return isLeft(this);
  }

  /**
   * Checks if the Either is a Right.
   *
   * @alias isRight
   * @see {@link isRight}
   *
   * @return {boolean} True if the Either is Right.
   *
   * @example
   * console.log(right(42).isOk()); // true
   * console.log(left('error').isOk()); // false
   */
  isOk(): this is Right<L, R> {
    return isRight(this);
  }

  /**
   * Checks if the Either is a Right.
   *
   * @return {boolean} True if the Either is Right.
   *
   * @example
   * console.log(right('success').isRight()); // true
   */
  isRight(): this is Right<L, R> {
    return isRight(this);
  }

  /**
   * Flattens a nested Either structure by joining two Eithers into a single Either.
   * Only works if the Right side contains another Either.
   *
   * @alias flatten
   * @see {@link flatten}
   *
   * @template L1 - Outer Left type.
   * @template L2 - Inner Left type inside Right.
   * @template R - Inner Right type inside Right.
   * @param {Either<L1, Either<L2, R>>} this - Current Either with nested Either inside Right.
   * @return {Either<L1 | L2, R>} Flattened Either.
   *
   * @example
   * const nested = right(right(5));
   * const result = nested.join();
   * console.log(result); // right(5)
   */
  join<L1, L2, R>(this: Either<L1, Either<L2, R>>): Either<L1 | L2, R> {
    return this.chain(identity);
  }

  /**
   * Flattens a nested Either structure by joining two Eithers into a single Either.
   * Only works if the Right side contains another Either.
   *
   * @alias join
   * @see {@link join}
   *
   * @template L1 - Outer Left type.
   * @template L2 - Inner Left type inside Right.
   * @template R - Inner Right type inside Right.
   * @param {Either<L1, Either<L2, R>>} this - Current Either with nested Either inside Right.
   * @return {Either<L1 | L2, R>} Flattened Either.
   *
   * @example
   * const nested = right(right(5));
   * const result = nested.flatten();
   * console.log(result); // right(5)
   */
  flatten<L1, L2, R>(this: Either<L1, Either<L2, R>>): Either<L1 | L2, R> {
    return this.chain(identity);
  }

  /**
   * Applies a function to transform the Right value while leaving Left unchanged.
   *
   * @alias mapRight
   * @see {@link mapRight}
   *
   * @alias mapOk
   * @see {@link mapOk}
   *
   * @template T - The type of the transformed Right value.
   * @template {AnyParameters} P - Additional parameters passed to the mapping function.
   * @param {Mapper<R, T, P>} map - Function to transform the Right value.
   * @param {...P} parameters - Additional parameters for the map function.
   * @return {Either<L, T>} A new Either with the mapped Right value.
   *
   * @example
   * const result = right(10).map((x) => x * 2);
   * console.log(result); // right(20)
   */
  map<T, P extends AnyParameters>(
    map: Mapper<R, T, P>,
    ...parameters: P
  ): Either<L, T> {
    return this.mapRight(map, ...parameters);
  }

  /**
   * Maps the Left (error) value to a new value if present.
   *
   * @alias mapErr
   * @see {@link mapErr}
   *
   * @template T - New type of Left value
   * @template {AnyParameters} P - Extra parameters for the mapper
   * @param {Mapper<L, T, P>} map - Function to map Left value
   * @param {...P} parameters - Additional parameters to pass to the mapper
   * @return {Either<T, R>} - New Either with mapped Left or original Right
   * @example
   * either.mapLeft(err => `Error: ${err}`);
   */
  mapLeft<T, P extends AnyParameters>(
    map: Mapper<L, T, P>,
    ...parameters: P
  ): Either<T, R> {
    return this.biMap(bind(map, parameters), identity);
  }

  /**
   * Maps the Left (error) value to a new value if present.
   *
   * @alias mapLeft
   * @see {@link mapLeft}
   *
   * @template T - New type of Left value
   * @template P - Extra parameters for the mapper
   * @param {Mapper<L, T, P>} map - Function to map Left value
   * @param {...P} parameters - Additional parameters to pass to the mapper
   * @return {Either<T, R>} - New Either with mapped Left or original Right
   * @example
   * either.mapErr(err => `Error: ${err}`);
   */
  mapErr<T, P extends AnyParameters>(
    map: Mapper<L, T, P>,
    ...parameters: P
  ): Either<T, R> {
    return this.mapLeft(map, ...parameters);
  }

  /**
   * Maps the Right (success) value to a new value if present.
   *
   * @alias mapOk
   * @see {@link mapOk}
   *
   * @alias map
   * @see {@link map}
   *
   * @template T - New type of Right value
   * @template {AnyParameters} P - Extra parameters for the mapper
   * @param {Mapper<R, T, P>} map - Function to map Right value
   * @param {...P} parameters - Additional parameters to pass to the mapper
   * @return {Either<L, T>} - New Either with mapped Right or original Left
   * @example
   * either.mapRight(value => value + 1);
   */
  mapRight<T, P extends AnyParameters>(
    map: Mapper<R, T, P>,
    ...parameters: P
  ): Either<L, T> {
    return this.biMap(identity, bind(map, parameters));
  }

  /**
   * Maps the Right (success) value to a new value if present.
   *
   * @alias mapRight
   * @see {@link mapRight}
   *
   * @alias map
   * @see {@link map}
   *
   * @template T - New type of Right value
   * @template {AnyParameters} P - Extra parameters for the mapper
   * @param {Mapper<R, T, P>} map - Function to map Right value
   * @param {...P} parameters - Additional parameters to pass to the mapper
   * @return {Either<L, T>} - New Either with mapped Right or original Left
   * @example
   * either.mapOk(value => value + 1);
   */
  mapOk<T, P extends AnyParameters>(
    map: Mapper<R, T, P>,
    ...parameters: P
  ): Either<L, T> {
    return this.mapRight(map, ...parameters);
  }

  /**
   * Returns this Either if it is Right, otherwise returns the provided alternative Either.
   *
   * @param {Either<L, R>} x - Alternative Either to use if current is Left
   * @return {Either<L, R>} - Current Either if Right, otherwise the alternative
   * @example
   * either.or(right(10));
   */
  or(x: Either<L, R>): Either<L, R> {
    return this.orLazy(() => x);
  }

  /**
   * Returns this Either if it is Right, otherwise invokes a factory to produce an alternative asynchronously.
   *
   * @param {function(): MaybePromiseLike<Either<L, R>>} factory - Function producing alternative Either
   * @return {Promise<Either<L, R>>} - Current Either or asynchronously produced alternative
   * @example
   * await either.orAsync(() => Promise.resolve(right(10)));
   */
  async orAsync(
    factory: () => MaybePromiseLike<Either<L, R>>
  ): Promise<Either<L, R>> {
    return await this.fold(factory, () => cast(this));
  }

  /**
   * Returns this Either if it is Right, otherwise invokes a factory to produce an alternative.
   *
   * @param {function(): Either<L, R>} factory - Function producing alternative Either
   * @return {Either<L, R>} - Current Either if Right, otherwise alternative
   * @example
   * either.orLazy(() => right(10));
   */
  orLazy(factory: () => Either<L, R>): Either<L, R> {
    return this.fold(factory, () => cast(this));
  }

  /**
   * Applies a function to this Either and returns the result.
   *
   * @template T - Result type
   * @template {AnyParameters} P - Extra parameters for the pipe
   * @param {Mapper<Either<L, R>, T, P>} pipe - Function to apply
   * @param {...P} parameters - Additional parameters to pass to the pipe
   * @return {T} - Result of applying the pipe
   * @example
   * either.pipe(e => e.isRight());
   */
  pipe<T, P extends AnyParameters>(
    pipe: Mapper<Either<L, R>, T, P>,
    ...parameters: P
  ): T {
    return bind(pipe, parameters)(cast(this));
  }

  /**
   * Converts Either to a Promise. If Left, throws; if Right, resolves the value.
   *
   * @return {Promise<R>} - Promise resolving to Right value or throwing Left
   * @example
   * const value = await either.promise();
   */
  async promise(): Promise<R> {
    return this.throw();
  }

  /**
   * Swaps the Left and Right values.
   *
   * @return {Either<R, L>} - Either with Left and Right swapped
   * @example
   * either.swap();
   */
  swap(): Either<R, L> {
    return this.fold(right, left);
  }

  /**
   * Applies a callback function to the contained right value if it exists.
   *
   * @template P - A tuple of parameters for the callback function.
   * @param {Mapper<R, void, P>} callback - The function to apply to the right value. It receives the right value and any additional parameters.
   * @param {...P} parameters - Additional parameters to pass to the callback function.
   * @return {Either<L, R>} The original `Either` instance for chaining.
   *
   * @example
   * const rightEither: Either<string, number> = right(5);
   * let tappedValue: number | undefined;
   * const resultRight = rightEither.tap((value) => { tappedValue = value * 2; });
   * console.log(tappedValue); // Output: 10
   * console.log(resultRight === rightEither); // Output: true
   *
   * const leftEither: Either<string, number> = left('error');
   * tappedValue = undefined;
   * const resultLeft = leftEither.tap((value) => { tappedValue = value * 2; });
   * console.log(tappedValue); // Output: undefined
   * console.log(resultLeft === leftEither); // Output: true
   */
  tap<P extends AnyParameters>(
    callback: Mapper<R, void, P>,
    ...parameters: P
  ): Either<L, R> {
    this.map(callback, ...parameters);
    return cast(this);
  }

  /**
   * Applies a callback function to the contained left value if it exists.
   *
   * @template {AnyParameters} P - A tuple of parameters for the callback function.
   * @param {Mapper<L, void, P>} callback - The function to apply to the left value. It receives the left value and any additional parameters.
   * @param {...P} parameters - Additional parameters to pass to the callback function.
   * @return {Either<L, R>} The original `Either` instance for chaining.
   *
   * @example
   * const leftEither: Either<string, number> = left('error');
   * let tappedError: string | undefined;
   * const resultLeft = leftEither.tapLeft((error) => { tappedError = error.toUpperCase(); });
   * console.log(tappedError); // Output: ERROR
   * console.log(resultLeft === leftEither); // Output: true
   *
   * const rightEither: Either<string, number> = right(5);
   * tappedError = undefined;
   * const resultRight = rightEither.tapLeft((error) => { tappedError = error.toUpperCase(); });
   * console.log(tappedError); // Output: undefined
   * console.log(resultRight === rightEither); // Output: true
   */
  tapLeft<P extends AnyParameters>(
    callback: Mapper<L, void, P>,
    ...parameters: P
  ): Either<L, R> {
    this.mapLeft(callback, ...parameters);
    return cast(this);
  }

  /**
   * Applies a callback function to the contained left value if it exists.
   *
   * @alias tapLeft
   * @see {@link tapLeft}
   * @template {AnyParameters} P - A tuple of parameters for the callback function.
   * @param {Mapper<L, void, P>} callback - The function to apply to the left value. It receives the left value and any additional parameters.
   * @param {...P} parameters - Additional parameters to pass to the callback function.
   * @return {Either<L, R>} The original `Either` instance for chaining.
   *
   * @example
   * const leftEither: Either<string, number> = left('warning');
   * let tappedWarning: string | undefined;
   * const resultLeft = leftEither.tapErr((warning) => { tappedWarning = `LOG: ${warning}`; });
   * console.log(tappedWarning); // Output: LOG: warning
   * console.log(resultLeft === leftEither); // Output: true
   *
   * const rightEither: Either<string, number> = right(10);
   * tappedWarning = undefined;
   * const resultRight = rightEither.tapErr((warning) => { tappedWarning = `LOG: ${warning}`; });
   * console.log(tappedWarning); // Output: undefined
   * console.log(resultRight === rightEither); // Output: true
   */
  tapErr<P extends AnyParameters>(
    callback: Mapper<L, void, P>,
    ...parameters: P
  ): Either<L, R> {
    return this.tapLeft(callback, ...parameters);
  }

  /**
   * Extracts the right value if it exists, otherwise throws an error.
   *
   * @return {R} The right value of the `Either`.
   * @throws {Error} If the `Either` contains a left value.
   *
   * @example
   * const rightEither: Either<string, number> = right(20);
   * const value = rightEither.throw();
   * console.log(value); // Output: 20
   *
   * const leftEither: Either<string, number> = left('fatal error');
   * try {
   * leftEither.throw();
   * } catch (e) {
   * console.error(e); // Output: Error: No value
   * }
   */
  throw(): R {
    return this.fold(throwValue, identity);
  }

  /**
   * Returns the contained value, whether it's the left or the right value.
   *
   * @return {L | R} The left or right value of the `Either`.
   *
   * @example
   * const rightEither: Either<string, number> = right(30);
   * console.log(rightEither.union()); // Output: 30
   *
   * const leftEither: Either<string, number> = left('info');
   * console.log(leftEither.union()); // Output: info
   */
  union(): L | R {
    return this.fold(identity, identity);
  }

  /**
   * Extracts the right value if it exists, otherwise throws a custom error with the provided message.
   *
   * @param {string} [message=UnwrapCustomError.Messages.EITHER_IS_LEFT] - The error message to use if the `Either` contains a left value.
   * @return {R} The right value of the `Either`.
   * @throws {UnwrapCustomError} If the `Either` contains a left value.
   *
   * @example
   * import { UnwrapCustomError } from './errors'; // Assuming UnwrapCustomError is defined elsewhere
   * const rightEither: Either<string, number> = right(40);
   * console.log(rightEither.unwrap()); // Output: 40
   *
   * const leftEither: Either<string, number> = left('validation failed');
   * try {
   *   leftEither.unwrap('Something went wrong!');
   * } catch (e) {
   *   console.error(e.message); // Output: Something went wrong!
   *   console.error(e instanceof UnwrapCustomError); // Output: true
   * }
   */
  unwrap(message: string = UnwrapCustomError.Messages.EITHER_IS_LEFT): R {
    return this.fold(() => UnwrapCustomError.inlineThrow(message), identity);
  }

  /**
   * Extracts the right value if it exists, otherwise returns the provided default value.
   *
   * @template T
   * @param {T} value - The default value to return if the `Either` contains a left value.
   * @return {T | R} The right value or the default value.
   *
   * @example
   * const rightEither: Either<string, number> = right(50);
   * console.log(rightEither.unwrapOr(0)); // Output: 50
   *
   * const leftEither: Either<string, number> = left('not found');
   * console.log(leftEither.unwrapOr(0)); // Output: 0
   */
  unwrapOr<T>(value: T): T | R {
    return this.unwrapOrElse(() => value);
  }

  /**
   * Extracts the right value if it exists, otherwise returns the result of calling the provided fallback function with the left value.
   *
   * @template T
   * @param {function(value: L): T} fallback - The function to call with the left value to produce a fallback value.
   * @return {T | R} The right value or the result of the fallback function.
   *
   * @example
   * const rightEither: Either<string, number> = right(60);
   * console.log(rightEither.unwrapOrElse((err) => err.length)); // Output: 60
   *
   * const leftEither: Either<string, number> = left('database error');
   * console.log(leftEither.unwrapOrElse((err) => err.length)); // Output: 14
   */
  unwrapOrElse<T>(fallback: (value: L) => T): T | R {
    return this.fold(fallback, identity);
  }

  /**
   * Returns the contained value, whether it's the left or the right value.
   *
   * @alias union
   * @see {@link union}
   * @return {L | R} The left or right value of the `Either`.
   *
   * @example
   * const rightEither: Either<string, number> = right(70);
   * console.log(rightEither.value()); // Output: 70
   *
   * const leftEither: Either<string, number> = left('network issue');
   * console.log(leftEither.value()); // Output: network issue
   */
  value(): L | R {
    return this.fold(identity, identity);
  }

  /**
   * Combines this `Either` with another `Either`. If both are right, it returns a new `Either` with a pair of their right values. If either is left, it returns the left `Either`.
   *
   * @template A
   * @template B
   * @param {Either<A, B>} either - The other `Either` to combine with.
   * @return {Either<L | A, Pair<R, B>>} A new `Either` containing a pair of the right values or the first encountered left value.
   *
   * @example
   * import { right, left } from './either'; // Assuming right and left are defined elsewhere
   * type Pair<T, U> = [T, U];
   *
   * const eitherA: Either<string, number> = right(80);
   * const eitherB: Either<boolean, string> = right('success');
   * const zippedRight: Either<string | boolean, Pair<number, string>> = eitherA.zip(eitherB);
   * console.log(zippedRight.value()); // Output: [ 80, 'success' ]
   *
   * const eitherC: Either<string, number> = left('error in A');
   * const zippedLeftA: Either<string | boolean, Pair<number, string>> = eitherC.zip(eitherB);
   * console.log(zippedLeftA.value()); // Output: error in A
   *
   * const eitherD: Either<string, number> = right(90);
   * const eitherE: Either<boolean, string> = left(true);
   * const zippedLeftB: Either<string | boolean, Pair<number, string>> = eitherD.zip(eitherE);
   * console.log(zippedLeftB.value()); // Output: true
   */
  zip<A, B>(either: Either<A, B>): Either<L | A, Pair<R, B>> {
    return this.chain((value) => either.map((right) => [value, right]));
  }

  /**
   *
   * @throws {MatchError} {@link MatchError}
   *
   * @template A
   * @template B
   * @param {object} match
   * @return {A|B}
   */
  match<A, B>(
    match: XOR<
      {
        readonly left: (left: L) => A;
        readonly right: (right: R) => B;
      },
      {
        readonly err: (left: L) => A;
        readonly ok: (right: R) => B;
      }
    >
  ): A | B {
    if (typeof match.left === "function" && typeof match.right === "function") {
      return this.fold(match.left, match.right);
    }

    if (typeof match.err === "function" && typeof match.ok === "function") {
      return this.fold(match.err, match.ok);
    }

    throw new MatchError(["left", "right"]);
  }
}

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

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

  getOk(): undefined {
    return;
  }

  getErr(): L {
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

  getOk(): R {
    return this.right;
  }

  getErr(): undefined {
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
export type Result<R = unknown, L = unknown> = Either<L, R>;
export type SerializedEither<L, R> = SerializedRight<R> | SerializedLeft<L>;

/**
 * Checks if a value is an instance of `Left`.
 
 * @alias isErr
 * @see {@link isErr}
 *
 * @template L
 * @template R
 * @param {unknown | Either<L, R>} value - The value to check.
 * @return {boolean} `true` if the value is a `Left`, `false` otherwise.
 *
 * @example
 * import { left } from './either';
 * const leftValue = left('error');
 * const rightValue = right(10);
 * console.log(isLeft(leftValue)); // Output: true
 * console.log(isLeft(rightValue)); // Output: false
 * console.log(isLeft('not an Either')); // Output: false
 */
export const isLeft = <L, R>(
  value: unknown | Either<L, R>
): value is Left<L, R> => value instanceof Left;

/**
 * Checks if a value is an instance of `Left`.
 *
 * @alias isLeft
 * @see {@link isLeft}
 *
 * @template L
 * @template R
 * @param {unknown | Either<L, R>} value - The value to check.
 * @returns {value is Left<L, R>} `true` if the value is a `Left`, `false` otherwise.
 *
 * @example
 * import { left } from './either';
 * const errValue = left('failed');
 * console.log(isErr(errValue)); // Output: true
 */
// eslint-disable-next-line unicorn/prevent-abbreviations
export const isErr = <L, R>(
  value: unknown | Either<L, R>
): value is Left<L, R> => value instanceof Left;

/**
 * Checks if a value is an instance of `Right`.
 *
 * @alias isOk
 * @see {@link isOk}
 *
 * @template L
 * @template R
 * @param {unknown | Either<L, R>} value - The value to check.
 * @return {boolean} `true` if the value is a `Right`, `false` otherwise.
 *
 * @example
 * import { right } from './either';
 * const rightValue = right(20);
 * const leftValue = left('oops');
 * console.log(isRight(rightValue)); // Output: true
 * console.log(isRight(leftValue)); // Output: false
 * console.log(isRight(null)); // Output: false
 */
export const isRight = <L, R>(
  value: unknown | Either<L, R>
): value is Right<L, R> => value instanceof Right;

/**
 * Checks if a value is an instance of `Right`.
 *
 * @alias isRight
 * @see {@link isRight}
 *
 * @template L
 * @template R
 * @param {unknown | Either<L, R>} value - The value to check.
 * @return {boolean} `true` if the value is a `Right`, `false` otherwise.
 *
 * @example
 * import { right } from './either';
 * const rightValue = right(20);
 * const leftValue = left('oops');
 * console.log(isRight(rightValue)); // Output: true
 * console.log(isRight(leftValue)); // Output: false
 * console.log(isRight(null)); // Output: false
 */
export const isOk = <L, R>(
  value: unknown | Either<L, R>
): value is Right<L, R> => value instanceof Right;

/**
 * Checks if a value is an instance of either `Left` or `Right`, and thus an `Either`.
 *
 * @template L
 * @template R
 * @param {unknown | Either<L, R>} value - The value to check.
 * @return {boolean} `true` if the value is an `Either`, `false` otherwise.
 *
 * @example
 * import { left, right } from './either';
 * const eitherLeft = left('problem');
 * const eitherRight = right(30);
 * console.log(isEither(eitherLeft)); // Output: true
 * console.log(isEither(eitherRight)); // Output: true
 * console.log(isEither({})); // Output: false
 */
export const isEither = <L, R>(
  value: unknown | Either<L, R>
): value is Either<L, R> => isLeft(value) || isRight(value);

/**
 * Chains a function that returns a new `Either` over the right value of an `Either`.
 * If the original `Either` is a `Left`, it is returned unchanged (but wrapped in a Promise).
 *
 * @template L
 * @template R
 * @template NR
 * @template P - A tuple of parameters for the `map` function.
 * @param {Mapper<R, MaybePromiseLike<Either<never, NR>>, P>} map - The function to apply to the right value. It should return a `MaybePromiseLike` of a `Either` with a potentially new right type and `never` as the left type.
 * @param {...P} parameters - Additional parameters to pass to the `map` function.
 * @returns {(either: Either<L, R>) => Promise<Either<L, NR>>} A function that takes an `Either` and returns a Promise of a new `Either`.
 *
 * @example
 * import { right, left } from './either';
 * const asyncDouble = (num: number): Promise<Either<never, number>> => Promise.resolve(right(num * 2));
 * const asyncError = (num: number): Promise<Either<string, never>> => Promise.resolve(left('failed: ' + num));
 *
 * const chainDouble = chain(asyncDouble);
 * const chainError = chain(asyncError);
 *
 * chainDouble(right(5)).then(result => console.log(result.value())); // Output: 10
 * chainDouble(left('oops')).then(result => console.log(result.value())); // Output: oops
 *
 * chainError(right(10)).then(result => console.log(result.value())); // Output: failed: 10
 */
export function chain<L, R, NR, P extends AnyParameters>(
  map: (value: R, ...parameters: P) => MaybePromiseLike<Either<never, NR>>,
  ...parameters: P
): (either: Either<L, R>, ...parameters: P) => Promise<Either<L, NR>>;
/**
 * Chains a function that returns a new `Either` over the right value of an `Either`.
 * If the original `Either` is a `Left`, it is returned unchanged (but wrapped in a Promise).
 * This overload allows the mapping function to return an `Either` with a new left type and `never` as the right type.
 *
 * @template L
 * @template R
 * @template NL
 * @template P - A tuple of parameters for the `map` function.
 * @param {Mapper<R, MaybePromiseLike<Either<NL, never>>, P>} map - The function to apply to the right value. It should return a `MaybePromiseLike` of a `Either` with a potentially new left type and `never` as the right type.
 * @param {...P} parameters - Additional parameters to pass to the `map` function.
 * @returns {(either: Either<L, R>) => Promise<Either<NL | L, R>>} A function that takes an `Either` and returns a Promise of a new `Either`.
 *
 * @example
 * import { right, left } from './either';
 * const asyncErrorWithMessage = (str: string): Promise<Either<string, never>> => Promise.resolve(left(`Async error: ${str}`));
 * const chainErrorWithMessage = chain(asyncErrorWithMessage);
 *
 * chainErrorWithMessage(right('input')).then(result => console.log(result.value())); // Output: Async error: input
 * chainErrorWithMessage(left('initial error')).then(result => console.log(result.value())); // Output: initial error
 */
export function chain<L, R, NL, P extends AnyParameters>(
  map: (value: R, ...parameters: P) => MaybePromiseLike<Either<NL, never>>,
  ...parameters: P
): (either: Either<L, R>, ...parameters: P) => Promise<Either<NL | L, R>>;
/**
 * Chains a function that returns a new `Either` over the right value of an `Either`.
 * If the original `Either` is a `Left`, it is returned unchanged (but wrapped in a Promise).
 * This is the most general overload, allowing the mapping function to return an `Either` with potentially new left and right types.
 *
 * @template L
 * @template R
 * @template NL
 * @template NR
 * @template P - A tuple of parameters for the `map` function.
 * @param {Mapper<R, MaybePromiseLike<Either<NL, NR>>, P>} map - The function to apply to the right value. It should return a `MaybePromiseLike` of a `Either` with potentially new left and right types.
 * @param {...P} parameters - Additional parameters to pass to the `map` function.
 * @returns {(either: Either<L, R>) => Promise<Either<NL | L, NR>>} A function that takes an `Either` and returns a Promise of a new `Either`.
 *
 * @example
 * import { right, left } from './either';
 * const asyncTransform = (num: number): Promise<Either<string, string>> => Promise.resolve(right(`Result: ${num * 3}`));
 * const chainTransform = chain(asyncTransform);
 *
 * chainTransform(right(7)).then(result => console.log(result.value())); // Output: Result: 21
 * chainTransform(left('original problem')).then(result => console.log(result.value())); // Output: original problem
 */
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

function any(value: unknown): any {
  return value;
}

type MapCaught<L> = Mapper<unknown, L>;

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

/**
 * Executes a synchronous function that returns an `Either`, catching any exceptions and mapping them to a `Left` value.
 *
 * @template L
 * @template R
 * @param {function(): Either<L, R>} method - The synchronous function to execute.
 * @param {MapCaught<L>} [mapCaught] - An optional function to map a caught exception to a `Left` value. If not provided, the exception itself will be used as the `Left` value.
 * @return {Either<L, R>} The result of the `method` execution, or a `Left` containing the mapped exception if one occurred.
 *
 * @example
 * function mightFail(): Either<string, number> {
 * if (Math.random() > 0.5) {
 * return right(42);
 * } else {
 * throw new Error('Something went wrong!');
 * }
 * }
 *
 * const result1 = catchSync(mightFail);
 * console.log(result1.isRight() ? result1.value() : result1.value());
 *
 * const result2 = catchSync(mightFail, (error) => `Caught error: ${error.message}`);
 * console.log(result2.isRight() ? result2.value() : result2.value());
 */
export function catchSync<L = never, R = never>(
  method: () => Either<L, R>,
  mapCaught?: MapCaught<L>
): Either<L, R> {
  return fromTry<L, Either<L, R>>(method, mapCaught).join();
}

/**
 * Executes an asynchronous function that returns a `MaybePromiseLike` of an `Either`, catching any exceptions and mapping them to a `Left` value.
 *
 * @template L
 * @template R
 * @param {function(): MaybePromiseLike<Either<L, R>>} method - The asynchronous function to execute.
 * @param {MapCaught<L>} [mapCaught] - An optional function to map a caught exception to a `Left` value. If not provided, the exception itself will be used as the `Left` value.
 * @return {Promise<Either<L, R>>} A Promise that resolves to the result of the `method` execution, or a `Left` containing the mapped exception if one occurred.
 *
 * @example
 * async function asyncMightFail(): Promise<Either<string, number>> {
 *  return new Promise((resolve, reject) => {
 *   setTimeout(() => {
 *    if (Math.random() > 0.5) {
 *     resolve(right(100));
 *    } else {
 *     reject(new Error('Async operation failed!'));
 *    }
 *   }, 50);
 *  });
 * }
 *
 * catchAsync(asyncMightFail).then(result =>
 *  console.log(result.isRight() ? result.value() : result.value())
 * );
 *
 * catchAsync(asyncMightFail, (error) => `Async error caught: ${error.message}`).then(result =>
 *  console.log(result.isRight() ? result.value() : result.value())
 * );
 */
export async function catchAsync<L, R>(
  method: () => MaybePromiseLike<Either<L, R>>,
  mapCaught?: MapCaught<L>
): Promise<Either<L, R>> {
  const caught = await fromTryAsync<L, Either<L, R>>(method, mapCaught);
  return caught.join();
}

/**
 * Creates an `Either` from a `MaybePromiseLike`. A resolved Promise will result in a `Right` containing the resolved value, and a rejected Promise will result in a `Left` containing the mapped rejection reason.
 *
 * @template L
 * @template T
 * @param {MaybePromiseLike<T>} promise - The Promise or value to convert to an `Either`.
 * @param {MapCaught<L>} [mapCaught] - An optional function to map the Promise rejection reason to a `Left` value. If not provided, the rejection reason itself will be used as the `Left` value.
 * @return {Promise<Either<L, T>>} A Promise that resolves to the resulting `Either`.
 *
 * @example
 * const successfulPromise = Promise.resolve('Data loaded!');
 * const failedPromise = Promise.reject('Network error');
 *
 * fromPromise(successfulPromise).then(result => console.log(result.value())); // Output: Data loaded!
 *
 * fromPromise(failedPromise).then(result => console.log(result.value())); // Output: Network error
 *
 * fromPromise(failedPromise, (reason) => `Promise failed: ${reason}`).then(result =>
 *  console.log(result.value())
 * ); // Output: Promise failed: Network error
 */
export async function fromPromise<L = never, T = never>(
  promise: MaybePromiseLike<T>,
  mapCaught?: MapCaught<L>
): Promise<Either<L, T>> {
  return fromTryAsync(() => promise, mapCaught);
}

/**
 * Executes a synchronous callback and returns an `Either`. A successful execution returns a `Right` with the result, and any thrown exception is caught and mapped to a `Left`.
 *
 * @template L
 * @template T
 * @param {function(): T} callback - The synchronous function to execute.
 * @param {MapCaught<L>} [mapCaught] - A function to map a caught exception to a `Left` value. Defaults to the identity function (using the exception as is).
 * @return {Either<L, T>} An `Either` representing the result of the callback execution.
 *
 * @example
 * function getValue(): number {
 *  return 123;
 * }
 *
 * function throwError(): number {
 *  throw new Error('Calculation error');
 * }
 *
 * const successResult = fromTry(getValue);
 * console.log(successResult.value()); // Output: 123
 *
 * const errorResult = fromTry(throwError, (error) => `Sync error: ${error.message}`);
 * console.log(errorResult.value()); // Output: Sync error: Calculation error
 */
export function fromTry<L = never, T = never>(
  callback: () => T,
  mapCaught: MapCaught<L> = any
): Either<L, T> {
  try {
    return right(callback());
  } catch (error) {
    return left(mapCaught(error));
  }
}

/**
 * Executes an asynchronous callback and returns a Promise of an `Either`. A successful execution returns a `Right` with the resolved value, and any thrown exception is caught and mapped to a `Left`.
 *
 * @template L
 * @template R
 * @param {function() : MaybePromiseLike<R>} callback - The asynchronous function to execute.
 * @param {MapCaught<L>} [mapCaught=any] - An optional function to map a caught exception to a `Left` value. Defaults to the identity function (using the exception as is).
 * @return {Promise<Either<L, R>>} A Promise that resolves to the resulting `Either`.
 *
 * @example
 * async function fetchUserData(): Promise<string> {
 *  return new Promise((resolve) => setTimeout(() => resolve('User data'), 30));
 * }
 *
 * async function simulateAsyncError(): Promise<string> {
 *  return new Promise((_, reject) => setTimeout(() => reject(new Error('Fetch failed')), 30));
 * }
 *
 * fromTryAsync(fetchUserData).then(result => console.log(result.value())); // Output: User data
 *
 * fromTryAsync(simulateAsyncError, (error) => `Async try error: ${error.message}`).then(result =>
 *  console.log(result.value())
 * ); // Output: Async try error: Fetch failed
 */
export async function fromTryAsync<L = never, R = never>(
  callback: () => MaybePromiseLike<R>,
  mapCaught: MapCaught<L> = any
): Promise<Either<L, R>> {
  try {
    return right(await callback());
  } catch (error) {
    return left(mapCaught(error));
  }
}

/**
 * Creates an `Either` from a `PromiseSettledResult`. If the result is fulfilled, it returns a `Right` with the value. If the result is rejected, it returns a `Left` with the reason.
 *
 * @template L
 * @template T
 * @param {PromiseSettledResult<T>} result - The `PromiseSettledResult` to convert to an `Either`.
 * @return {Either<L, T>} An `Either` representing the outcome of the settled Promise.
 *
 * @example
 * const fulfilledResult: PromiseSettledResult<number> = { status: 'fulfilled', value: 200 };
 * const rejectedResult: PromiseSettledResult<string> = { status: 'rejected', reason: 'Request timed out' };
 *
 * const fulfilledEither = fromPromiseSettledResult(fulfilledResult);
 * console.log(fulfilledEither.value()); // Output: 200
 *
 * const rejectedEither = fromPromiseSettledResult(rejectedResult);
 * console.log(rejectedEither.value()); // Output: Request timed out
 */
export function fromPromiseSettledResult<L = never, T = never>(
  result: PromiseSettledResult<T>
): Either<L, T> {
  return result.status === "fulfilled"
    ? right(result.value)
    : left(result.reason);
}
