/* eslint-disable @typescript-eslint/consistent-type-definitions */
export type MaybePromise<T> = T | Promise<T>;
export type MaybePromiseLike<T> = T | PromiseLike<T>;
export type Nullable<T> = T | null | undefined;
export type Pair<A, B> = [first: A, second: B];
export type AnyParameters = readonly unknown[];

/**
 * Parameterized mapper
 * `(A, ...P) => B`
 */
export type Mapper<A, B, P extends AnyParameters = []> = (
  value: A,
  ...parameters: P
) => B;

export interface Alternative<T> {
  or(alternative: Alternative<T>): Alternative<T>;
  default(value: T): Alternative<T>;
}

export interface Functor<A> {
  // Functor<A>.map = (A => B) => Functor<B>

  map<B, P extends AnyParameters>(
    map: Mapper<A, B, P>,
    ...parameters: P
  ): Functor<B>;
}

export interface Applicative<A> extends Functor<A> {
  // Applicative<A>.apply = (A => B) => Applicative<B>
  // Applicative<A => B>.apply = (A) => Applicative<B>

  apply<A, B, P extends AnyParameters>(
    this: Applicative<Mapper<A, B, P>>,
    argument: Applicative<A>,
    ...parameters: P
  ): Applicative<B>;
  apply<A, B, P extends AnyParameters>(
    this: Applicative<A>,
    argument: Applicative<Mapper<A, B, P>>,
    ...parameters: P
  ): Applicative<B>;
}

export interface Monad<A> extends Applicative<A> {
  // Monad<A>.chain = (A => Monad<B>) => Monad<B>
  // Monad<Monad<A>>.join = () => Monad<A>

  chain<B, P extends AnyParameters>(
    map: Mapper<A, Monad<B>, P>,
    ...parameters: P
  ): Monad<B>;

  join<A>(this: Monad<Monad<A>>): Monad<A>;
}

export interface AsyncMonad<A> extends Monad<A> {
  asyncChain<B, P extends AnyParameters>(
    map: Mapper<A, MaybePromiseLike<AsyncMonad<B>>, P>,
    ...parameters: P
  ): Promise<AsyncMonad<B>>;

  await<A>(this: AsyncMonad<MaybePromiseLike<A>>): Promise<AsyncMonad<A>>;
}

export interface Container<A> {
  unwrap(): A;
  unwrapOr<T>(value: T): T | A;
}

export interface Pipe {
  pipe<T, P extends AnyParameters>(
    callback: Mapper<Pipe, T, P>,
    ...parameters: P
  ): T;
}
