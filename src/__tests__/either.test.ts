import {
  left,
  right,
  mergeInOne,
  fromJSON,
  fromPromise,
  catchSync,
  catchAsync,
  aggregateError,
  isEither,
  chain,
  wrap,
  wrapAsync,
  Either,
  fromPromiseSettledResult
} from "../either.exports";

// class Test {
//   @Decorate()
//   right(): Either<Error, number> {
//     return right(11);
//   }

//   @Decorate()
//   left(): Either<Error, number> {
//     throw new Error("Test");
//   }

//   @DecorateAsync()
//   rightAsync(): Promise<Either<Error, number>> {
//     return Promise.resolve(right(11));
//   }

//   @DecorateAsync()
//   leftAsync(): Promise<Either<Error, number>> {
//     throw new Error("Test");
//   }
// }

describe("Either", () => {
  const $right = right<Error, number>(10);
  const $left = left<Error, number>(new Error("left"));

  test("map", () => {
    expect($right.map((value) => value + 1)).toEqual(right(11));
    expect($left.map((value) => value + 1)).toEqual($left);
    expect($left.mapLeft((value) => value.message)).toEqual(left("left"));
  });

  test("chain", () => {
    expect($right.chain((value) => right(value + 1))).toEqual(right(11));
    expect($right.chain((value) => left(value + 1))).toEqual(left(11));
    expect($left.chain((value) => right(value + 1))).toEqual($left);
  });

  test("isRight/isLeft", () => {
    expect([
      $right.isRight(),
      $left.isLeft(),
      $right.isLeft(),
      $left.isRight()
    ]).toEqual([true, true, false, false]);
  });

  test("join", () => {
    expect(right(right(10)).join()).toEqual(right(10));
  });

  test("await", async () => {
    expect(await right(Promise.resolve(10)).await()).toEqual(right(10));
  });

  test("mergeInOne", async () => {
    expect(mergeInOne([$right, $left])).toEqual($left);
    expect(mergeInOne([$right, $right])).toEqual(right([10, 10]));
  });

  test("json", async () => {
    expect(fromJSON($right.toJSON())).toEqual($right);
    expect(fromJSON($left.toJSON())).toEqual($left);
    expect(() => fromJSON({} as any)).toThrowError();
    expect(() => fromJSON({ name: "Either" } as any)).toThrowError();
  });

  test("from Promise/Try/Catch", async () => {
    expect(await fromPromise($right.promise())).toEqual($right);
    expect(await fromPromise($left.promise())).toEqual($left);

    expect(catchSync(() => $right)).toEqual($right);
    expect(catchSync(() => $left)).toEqual($left);
    expect(
      catchSync(() => {
        throw new Error("Test");
      })
    ).toEqual(left(new Error("Test")));

    expect(
      await catchAsync(async () => {
        throw new Error("Test");
      })
    ).toEqual(left(new Error("Test")));
  });

  test("AggregateError", () => {
    expect(aggregateError([$left], "Test")).toEqual(
      new AggregateError([new Error("left")], "Test")
    );

    expect(aggregateError([$left], (errors) => errors[0].message)).toEqual(
      new AggregateError([new Error("left")], "left")
    );

    expect(aggregateError([], "Test")).toBe(undefined);
    expect(aggregateError([$right], "Test")).toBe(undefined);
  });

  test("or/default", () => {
    expect($left.or($right)).toEqual($right);
    expect($left.default(10)).toEqual($right);
    expect($right.or(right(11))).toEqual($right);
    expect($right.default(11)).toEqual($right);
  });

  test("swap", () => {
    expect(right(10).swap()).toEqual(left(10));
    expect(left(10).swap()).toEqual(right(10));
  });

  test("unwrap", () => {
    expect($right.unwrap()).toBe(10);
    expect($left.unwrapOr(11)).toBe(11);
    expect(() => $left.unwrap()).toThrowError();
  });

  test("apply", () => {
    expect($right.apply(right((a: number) => a + 1))).toEqual(right(11));
    expect(right((a: number) => a + 1).apply(right(10))).toEqual(right(11));

    expect($left.apply(right((a: number) => a + 1))).toEqual($left);
    expect(
      $right.apply(left<Error, (a: number) => number>(new Error("Test")))
    ).toEqual(left(new Error("Test")));

    expect(() =>
      $right.apply(right<Error, (a: number) => number>(undefined as any))
    ).toThrowError();
  });

  test("getLeft/getRight", () => {
    expect($right.getRight()).toBe(10);
    expect($left.getRight()).toBe(undefined);

    expect($right.getLeft()).toBe(undefined);
    expect($left.getLeft()).toEqual(new Error("left"));
  });

  test("meta", () => {
    expect($right[Symbol.toStringTag]).toBe("Right");
    expect($left[Symbol.toStringTag]).toBe("Left");
    expect(isEither($left)).toBe(true);
    expect(isEither($right)).toBe(true);
    expect(isEither({ ...$right })).toBe(false);
  });

  test("tap", () => {
    const callback = jest.fn();

    expect($left.tap(callback)).toEqual($left);
    expect(callback).toBeCalledTimes(0);

    expect($right.tap(callback)).toEqual($right);
    expect(callback).toBeCalledTimes(1);
  });

  test("asyncChain", async () => {
    expect(await $right.asyncChain(() => $left)).toEqual($left);
    expect(await $right.asyncChain(() => right(11))).toEqual(right(11));
    expect(await $left.asyncChain(() => left("test"))).toEqual($left);
  });

  test("#chain", async () => {
    const promise = Promise.resolve($right).then(
      chain((value: number) => right(value + 1))
    );

    expect(await promise).toEqual(right(11));
  });

  test("wrap", async () => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const method = (value: number) => {
      if (value > 10) {
        throw new Error("How dare you");
      }

      return right(value + 1);
    };

    const wrapped = wrap(method);
    const wrappedAsync = wrapAsync(method);

    expect(wrapped(10)).toEqual(right(11));
    expect(wrapped(11)).toEqual(left(new Error("How dare you")));

    expect(await wrappedAsync(10)).toEqual(right(11));
    expect(await wrappedAsync(11)).toEqual(left(new Error("How dare you")));
  });

  // test("decorators", async () => {
  //   const instance = new Test();

  //   expect(instance.right()).toEqual(right(11));
  //   expect(instance.left()).toEqual(left(new Error("Test")));

  //   expect(await instance.rightAsync()).toEqual(right(11));
  //   expect(await instance.leftAsync()).toEqual(left(new Error("Test")));
  // });

  test("fromPromiseSettledResult", async () => {
    const results = await Promise.allSettled([
      Promise.reject(new Error("Test")),
      Promise.resolve(11)
    ]);

    const [$left, $right] = results.map(
      (result): Either<Error, number> => fromPromiseSettledResult(result)
    );

    expect($left).toEqual(left(new Error("Test")));
    expect($right).toEqual(right(11));
  });
});
