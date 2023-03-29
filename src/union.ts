/**
 * Default case name for `Union.match()`
 */
export const _: unique symbol = Symbol("Default match");

type Matchers<V extends Record<string, unknown>, R> = {
  readonly [key in keyof V]: (value: V[key], type: key) => R;
};

type MatchersDefault<V extends Record<string, unknown>, R> = {
  readonly [key in keyof V]?: (value: V[key], type: key) => R;
} & {
  readonly [_]: <K extends keyof V = keyof V>(value: V[K], type: K) => R;
};

type AnyMatchers<V extends Record<string, unknown>, R> =
  | Matchers<V, R>
  | MatchersDefault<V, R>;

type Primitive = string | number;

type MapFlat<V extends readonly { readonly type: Primitive }[]> = {
  [key in V[number]["type"]]: Extract<V[number], { readonly type: key }>;
};

/**
 * Represents a union of values with `type` field to differentiate between them.
 *
 * @export
 * @class FlatUnion
 * @template {object[]} V - All valid variants of type. Example: [Just<T>, None]
 */
export class Union<
  V extends readonly { readonly type: Primitive }[],
  C extends V[number]["type"]
> {
  private readonly value: MapFlat<V>[C];

  /**
   *
   *
   * @param {*} value - Any valid variant of type
   */
  constructor(value: MapFlat<V>[C]) {
    this.value = value;
  }

  /**
   *
   * @param {K} type
   * @return {boolean} {this is FlatUnion<V, K>} - Type of this object matches provided
   */
  is<K extends V[number]["type"]>(type: K): this is Union<V, K> {
    return this.value.type === (type as string);
  }

  /**
   *
   * @param {AnyMatchers<V, R>} matchers
   * @throws {TypeError} Undefined is not a function. If matcher is not found
   * @return {R}
   */
  match<R>(matchers: AnyMatchers<MapFlat<V>, R>): R {
    const reference = matchers as Record<
      V[number]["type"] | typeof _,
      (value: V[number], type: V[number]["type"]) => R
    >;

    // eslint-disable-next-line security/detect-object-injection
    const matcher = reference[this.value.type] ?? reference[_];
    return matcher(this.value, this.value.type);
  }

  toJSON(): V[number] {
    return this.value;
  }
}
