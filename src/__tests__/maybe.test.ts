import {
  asyncIterator,
  chain,
  fromJSON,
  fromNullable,
  isMaybe,
  iterator,
  merge,
  none,
  some
} from "../maybe";

describe("Maybe", () => {
  const $some = some<number>(10);
  const $none = none<number>();

  test("map", () => {
    expect($some.map((value) => value + 1)).toEqual(some(11));
    expect($none.map((value) => value + 1)).toEqual($none);
  });

  test("chain", () => {
    expect($some.chain((value) => some(value + 1))).toEqual(some(11));
    expect($some.chain(() => none())).toEqual(none());
    expect($none.chain((value) => some(value + 1))).toEqual($none);
  });

  test("isRight/isLeft", () => {
    expect([
      $some.isSome(),
      $none.isNone(),
      $some.isNone(),
      $none.isSome()
    ]).toEqual([true, true, false, false]);
  });

  test("join", () => {
    expect(some(some(10)).join()).toEqual(some(10));
  });

  test("await", async () => {
    expect(await some(Promise.resolve(10)).await()).toEqual(some(10));
  });

  test("mergeInOne", async () => {
    expect(merge([$some, $none])).toEqual($none);
    expect(merge([$some, $some])).toEqual(some([10, 10]));
  });

  test("json", async () => {
    expect(fromJSON($some.toJSON())).toEqual($some);
    expect(fromJSON($none.toJSON())).toEqual($none);
    expect(() => fromJSON({} as any)).toThrowError();
  });

  test("or/default", () => {
    expect($none.or($some)).toEqual($some);
    expect($none.default(10)).toEqual($some);
    expect($some.or(some(11))).toEqual($some);
    expect($some.default(11)).toEqual($some);
  });

  test("unwrap", () => {
    expect($some.unwrap()).toBe(10);
    expect($none.unwrapOr(11)).toBe(11);
    expect(() => $none.unwrap()).toThrowError();
  });

  test("apply", () => {
    expect($some.apply(some((a: number) => a + 1))).toEqual(some(11));
    expect(some((a: number) => a + 1).apply(some(10))).toEqual(some(11));

    expect($none.apply(some((a: number) => a + 1))).toEqual($none);
    expect($some.apply(none<(a: number) => number>())).toEqual(none());

    expect(() =>
      $some.apply(some<(a: number) => number>(undefined as any))
    ).toThrowError();
  });

  test("meta", () => {
    expect($some[Symbol.toStringTag]).toBe("Maybe");
    expect(isMaybe($none)).toBe(true);
    expect(isMaybe($some)).toBe(true);
    expect(isMaybe({ ...$some })).toBe(false);
  });

  test("tap", () => {
    const callback = jest.fn();

    expect($none.tap(callback)).toEqual($none);
    expect(callback).toBeCalledTimes(0);

    expect($some.tap(callback)).toEqual($some);
    expect(callback).toBeCalledTimes(1);
  });

  test("asyncChain", async () => {
    expect(await $some.asyncChain(() => $none)).toEqual($none);
    expect(await $some.asyncChain(() => some(11))).toEqual(some(11));
    expect(await $none.asyncChain(() => none())).toEqual($none);
  });

  test("#chain", async () => {
    const promise = Promise.resolve($some).then(
      chain((value: number) => some(value + 1))
    );

    expect(await promise).toEqual(some(11));
  });

  test("filter", () => {
    expect($some.filter((value) => value > 0)).toEqual($some);
    expect($some.filter((value) => value > 10)).toEqual($none);
    expect($none.filter((value) => value > 10)).toEqual($none);
  });

  test("flatMap", () => {
    expect($some.flatMap((value) => value + 1)).toEqual(11);
    expect($none.flatMap((value) => value + 1)).toEqual(undefined);
  });

  test("fromNullable", () => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(fromNullable(undefined)).toEqual(none());

    // eslint-disable-next-line unicorn/no-null
    expect(fromNullable(null)).toEqual(none());

    expect(fromNullable(10)).toEqual(some(10));
  });

  test("iterator", async () => {
    let value = 0;
    const iter = iterator(() => (++value <= 5 ? some(value) : none()));
    expect([...iter]).toEqual([1, 2, 3, 4, 5]);

    const asyncIter = asyncIterator(() =>
      ++value <= 10 ? some(Promise.resolve(value)) : none()
    );

    const values: number[] = [];

    for await (const value of asyncIter) {
      values.push(value);
    }

    expect(values).toEqual([7, 8, 9, 10]);
  });
});
