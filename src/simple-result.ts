/* eslint-disable unicorn/no-null */
import { MaybePromiseLike } from "./types";

type SimpleResult<T, E = Error> =
  | { readonly error: E; readonly result: null }
  | { readonly error: null; readonly result: T };

export async function tryCatch<T, E = Error>(
  source: PromiseLike<T> | (() => MaybePromiseLike<T>)
): Promise<SimpleResult<T, E>> {
  try {
    const result = typeof source === "function" ? await source() : await source;

    return { result, error: null };
  } catch (error) {
    return { error: error as E, result: null };
  }
}
