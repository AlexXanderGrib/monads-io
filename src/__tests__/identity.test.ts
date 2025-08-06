import { describe, expect, test, vi } from "vitest";
import { InvalidStateError } from "../errors";
import { chain, from, isIdentity, merge } from "../identity";

describe("Identity", () => {
  const $value = from<number>(10);

  test("map", () => {
    expect($value.map((value) => value + 1)).toEqual(from(11));
  });

  test("chain", () => {
    expect($value.chain((value) => from(value + 1))).toEqual(from(11));
  });

  test("join", () => {
    expect(from(from(10)).join()).toEqual(from(10));
  });

  test("await", async () => {
    expect(await from(Promise.resolve(10)).await()).toEqual(from(10));
  });

  test("merge", async () => {
    expect(merge([$value, $value])).toEqual(from([10, 10]));
  });

  test("unwrap", () => {
    expect($value.unwrap()).toBe(10);
  });

  test("apply", () => {
    expect($value.apply(from((a: number) => a + 1))).toEqual(from(11));
    expect(from((a: number) => a + 1).apply(from(10))).toEqual(from(11));

    expect(() =>
      $value.apply(from<(a: number) => number>(undefined as any))
    ).toThrow(
      new InvalidStateError(InvalidStateError.Messages.APPLY_SHOULD_BE_FUNCTION)
    );
  });

  test("meta", () => {
    expect($value[Symbol.toStringTag]).toBe("Identity");
    expect($value.name).toBe("Identity");
    expect(isIdentity($value)).toBe(true);
    expect(isIdentity({ ...$value })).toBe(false);
  });

  test("unwrap", () => {
    expect($value.unwrap()).toBe(10);
    expect($value.unwrapOr(11)).toBe(10);
  });

  test("tap", () => {
    const callback = vi.fn();

    expect($value.tap(callback)).toEqual($value);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("asyncChain", async () => {
    expect(await $value.asyncChain(() => from(11))).toEqual(from(11));
  });

  test("#chain", async () => {
    const promise = Promise.resolve($value).then(
      chain((value: number) => from(value + 1))
    );

    expect(await promise).toEqual(from(11));
  });

  test("asyncApply", async () => {
    expect(await $value.asyncApply(from((a: number) => a + 1))).toEqual(
      from(11)
    );
    expect(await from((a: number) => a + 1).asyncApply(from(10))).toEqual(
      from(11)
    );

    await expect(() =>
      $value.asyncApply(from<(a: number) => number>(undefined as any))
    ).rejects.toThrow(
      new InvalidStateError(InvalidStateError.Messages.APPLY_SHOULD_BE_FUNCTION)
    );
  });

  test("pipe", () => {
    expect($value.pipe(() => 10)).toBe(10);
  });
});
