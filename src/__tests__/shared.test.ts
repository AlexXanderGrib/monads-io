import { left, right } from "../either";
import { fromMaybe } from "../either.exports";
import { fromEitherLeft, fromEitherRight, none, some } from "../maybe.exports";
import { unwrap } from "../runtime";

describe("Shared", () => {
  test("Either -> Maybe", () => {
    expect(fromEitherLeft(left(11))).toEqual(some(11));
    expect(fromEitherLeft(right(11))).toEqual(none());

    expect(fromEitherRight(right(11))).toEqual(some(11));
    expect(fromEitherRight(left(11))).toEqual(none());
  });

  test("Maybe -> Either", () => {
    expect(fromMaybe(some(11), new Error("test"))).toEqual(right(11));
    expect(fromMaybe(none(), new Error("test"))).toEqual(
      left(new Error("test"))
    );
  });

  test("Unwrap", async () => {
    expect(await Promise.resolve(some(11)).then(unwrap)).toBe(11);
  });
});
