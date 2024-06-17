import { AnyParameters, Container, MaybePromiseLike, Mapper } from "./types";

/**
 * Do nothing, return `undefined`
 * @export
 * @return {void}
 */
export function noop(): undefined {
  return undefined;
}

/**
 * Returns input
 * @export
 * @template T
 * @param {T} value
 * @return {T}
 */
export function identity<T>(value: T): T {
  return value;
}

/**
 * Throws input
 * @export
 * @param {*} value
 */
export function throwValue(value: unknown): never {
  throw value;
}

/**
 * Binds parameters to mapper function
 * @export
 * @template A
 * @template B
 * @template {AnyParameters} P
 *
 * @param {function(value: A, ...parameters: P): B} map
 * @param {...P} parameters
 * @return {function (input: A): B}
 */
export function bind<A, B, P extends AnyParameters>(
  map: (value: A, ...parameters: P) => B,
  parameters: P
): (input: A) => B {
  return (value) => map(value, ...parameters);
}

/**
 * returns `map2(map1(value))`
 *
 * @export
 * @template A
 * @template B
 * @template C
 *
 * @param {function(value: A): B} map1
 * @param {function(value: B): C} map2
 * @return {function (input: A): C}
 */
export function combine<A, B, C>(
  map1: (value: A) => B,
  map2: (value: B) => C
): (value: A) => C {
  return (value) => map2(map1(value));
}

/**
 *
 *
 * @export
 * @template A
 * @template B
 * @template {AnyParameters} P
 * @param {(MaybePromiseLike<A> | Mapper<A, MaybePromiseLike<B>, P>)} value
 * @return {*}  {value is Pm<A, B, P>}
 * @internal
 */
export function isWrappedFunction<A, B, P extends AnyParameters>(
  value: MaybePromiseLike<A> | Mapper<A, MaybePromiseLike<B>, P>
): value is Mapper<A, B, P> {
  return typeof value === "function";
}

export function unwrap<T>(container: Container<T>): T {
  return container.unwrap();
}
