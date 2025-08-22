import { describe, expect, test, vi } from "vitest";
import {
  DeserializationError,
  InvalidStateError,
  UnwrapCustomError
} from "../errors";
import {
  asyncIterator,
  chain,
  fromJSON,
  fromNullable,
  isMaybe,
  iterator,
  merge,
  none,
  just,
  filterMap
} from "../maybe";
import { left, right } from "../either";
import { eitherLeft, eitherRight } from "../convert";

describe("Maybe", () => {
  const $just = just<number>(10);
  const $none = none<number>();

  test("map", () => {
    expect($just.map((value) => value + 1)).toEqual(just(11));
    expect($none.map((value) => value + 1)).toEqual($none);
  });

  test("chain", () => {
    expect($just.chain((value) => just(value + 1))).toEqual(just(11));
    expect($just.chain(() => none())).toEqual(none());
    expect($none.chain((value) => just(value + 1))).toEqual($none);
  });

  test("isRight/isLeft", () => {
    expect([
      $just.isJust(),
      $none.isNone(),
      $just.isNone(),
      $none.isJust()
    ]).toEqual([true, true, false, false]);
  });

  test("join", () => {
    expect(just(just(10)).join()).toEqual(just(10));
  });

  test("await", async () => {
    expect(await just(Promise.resolve(10)).await()).toEqual(just(10));
  });

  test("mergeInOne", async () => {
    expect(merge([$just, $none])).toEqual($none);
    expect(merge([$just, $just])).toEqual(just([10, 10]));
  });

  test("json", async () => {
    expect(fromJSON($just.toJSON())).toEqual($just);
    expect(fromJSON($none.toJSON())).toEqual($none);
    expect(() => fromJSON({} as any)).toThrow(
      new DeserializationError(DeserializationError.Messages.EXPECTED_MAYBE)
    );
  });

  test("or/default", () => {
    expect($none.or($just)).toEqual($just);
    expect($none.default(10)).toEqual($just);
    expect($just.or(just(11))).toEqual($just);
    expect($just.default(11)).toEqual($just);
  });

  test("unwrap", () => {
    expect($just.unwrap()).toBe(10);
    expect($none.unwrapOr(11)).toBe(11);
    expect(() => $none.unwrap()).toThrow(UnwrapCustomError);
  });

  test("apply", () => {
    expect($just.apply(just((a: number) => a + 1))).toEqual(just(11));
    expect(just((a: number) => a + 1).apply(just(10))).toEqual(just(11));

    expect($none.apply(just((a: number) => a + 1))).toEqual($none);
    expect($just.apply(none<(a: number) => number>())).toEqual(none());

    expect(() =>
      $just.apply(just<(a: number) => number>(undefined as any))
    ).toThrow(
      new InvalidStateError(InvalidStateError.Messages.APPLY_SHOULD_BE_FUNCTION)
    );
  });

  test("meta", () => {
    expect($just[Symbol.toStringTag]).toBe("Just");
    expect($none[Symbol.toStringTag]).toBe("None");
    expect(isMaybe($none)).toBe(true);
    expect(isMaybe($just)).toBe(true);
    expect(isMaybe({ ...$just })).toBe(false);
  });

  test("tap", () => {
    const callback = vi.fn();

    expect($none.tap(callback)).toEqual($none);
    expect(callback).toHaveBeenCalledTimes(0);

    expect($just.tap(callback)).toEqual($just);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("asyncChain", async () => {
    expect(await $just.asyncChain(() => $none)).toEqual($none);
    expect(await $just.asyncChain(() => just(11))).toEqual(just(11));
    expect(await $none.asyncChain(() => none())).toEqual($none);
  });

  test("#chain", async () => {
    const promise = Promise.resolve($just).then(
      chain((value: number) => just(value + 1))
    );

    expect(await promise).toEqual(just(11));
  });

  test("filter", () => {
    expect($just.filter((value) => value > 0)).toEqual($just);
    expect($just.filter((value) => value > 10)).toEqual($none);
    expect($none.filter((value) => value > 10)).toEqual($none);
  });

  test("flatMap", () => {
    expect($just.flatMap((value) => value + 1)).toEqual(11);
    expect($none.flatMap((value) => value + 1)).toEqual(undefined);
  });

  test("fromNullable", () => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(fromNullable(undefined)).toEqual(none());

    // eslint-disable-next-line unicorn/no-null
    expect(fromNullable(null)).toEqual(none());

    expect(fromNullable(10)).toEqual(just(10));
  });

  test("iterator", async () => {
    let value = 0;
    const iter = iterator(() => (++value <= 5 ? just(value) : none()));
    expect([...iter]).toEqual([1, 2, 3, 4, 5]);

    const asyncIter = asyncIterator(() =>
      ++value <= 10 ? just(Promise.resolve(value)) : none()
    );

    const values: number[] = [];

    for await (const value of asyncIter) {
      values.push(value);
    }

    expect(values).toEqual([7, 8, 9, 10]);
  });

  test("filterMap", () => {
    const array = [1, 2, 3, 4, 5, 6];

    const result = filterMap(array, (value) =>
      value % 2 === 0 ? just(value * 2) : none()
    );

    expect([...result]).toEqual([4, 8, 12]);
  });

  test("mapNullable", () => {
    const value = $just.mapNullable(() => {
      /** undefined */
    });

    expect(value).toEqual($none);
  });

  test("orAsync", async () => {
    const maybe = await $none.orAsync(() => $just);
    expect(maybe).toEqual($just);
  });

  test("asyncMap", async () => {
    const maybe = await $just.asyncMap((v) => v + 1);
    expect(maybe.unwrap()).toBe(11);
  });

  test("asyncApply", async () => {
    expect(await $just.asyncApply(just((a: number) => a + 1))).toEqual(
      just(11)
    );
    expect(await just((a: number) => a + 1).asyncApply(just(10))).toEqual(
      just(11)
    );

    expect(await $none.asyncApply(just((a: number) => a + 1))).toEqual($none);
    expect(await $just.asyncApply(none<(a: number) => number>())).toEqual(
      none()
    );

    await expect(() =>
      $just.asyncApply(just<(a: number) => number>(undefined as any))
    ).rejects.toThrow(
      new InvalidStateError(InvalidStateError.Messages.APPLY_SHOULD_BE_FUNCTION)
    );
  });

  test("value", () => {
    expect($just.value).toBe(10);
    expect($none.value).toBe(undefined);
  });

  test("pipe", () => {
    expect($just.pipe(() => 10)).toBe(10);
  });

  test("fromEitherLeft/fromEitherRight", () => {
    expect(eitherLeft(left(10))).toEqual(just(10));
    expect(eitherRight(left(10))).toEqual(none());

    expect(eitherLeft(right(10))).toEqual(none());
    expect(eitherRight(right(10))).toEqual(just(10));
  });
});
