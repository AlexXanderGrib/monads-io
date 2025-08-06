import { describe, expect, test } from "vitest";
import { left, right } from "../either";
import { fromMaybe } from "../either.exports";
import { fromEitherLeft, fromEitherRight, none, just } from "../maybe.exports";
import { unwrap } from "../runtime";

describe("Shared", () => {
  test("Either -> Maybe", () => {
    expect(fromEitherLeft(left(11))).toEqual(just(11));
    expect(fromEitherLeft(right(11))).toEqual(none());

    expect(fromEitherRight(right(11))).toEqual(just(11));
    expect(fromEitherRight(left(11))).toEqual(none());
  });

  test("Maybe -> Either", () => {
    expect(fromMaybe(just(11), new Error("test"))).toEqual(right(11));
    expect(fromMaybe(none(), new Error("test"))).toEqual(
      left(new Error("test"))
    );
  });

  test("Unwrap", async () => {
    expect(await Promise.resolve(just(11)).then(unwrap)).toBe(11);
  });
});
