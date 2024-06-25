# Monads IO

> 🚀 Efficient Monads for JS: Maybe (Option) and Either (Result)

[![Test Status](https://github.com/AlexXanderGrib/monads-io/actions/workflows/test.yml/badge.svg)](https://github.com/AlexXanderGrib/monads-io)
[![Downloads](https://img.shields.io/npm/dt/monads-io.svg)](https://npmjs.com/package/monads-io)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/monads-io.svg)](https://github.com/AlexXanderGrib/monads-io)
[![codecov](https://img.shields.io/codecov/c/github/AlexXanderGrib/monads-io/main.svg)](https://codecov.io/gh/AlexXanderGrib/monads-io)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/monads-io.svg)](https://github.com/AlexXanderGrib/monads-io)
[![monads-io](https://snyk.io/advisor/npm-package/monads-io/badge.svg)](https://snyk.io/advisor/npm-package/monads-io)
[![Known Vulnerabilities](https://snyk.io/test/npm/monads-io/badge.svg)](https://snyk.io/test/npm/monads-io)
[![Quality](https://img.shields.io/npms-io/quality-score/monads-io.svg?label=quality%20%28npms.io%29&)](https://npms.io/search?q=monads-io)
[![npm](https://img.shields.io/npm/v/monads-io.svg)](https://npmjs.com/package/monads-io)
[![license MIT](https://img.shields.io/npm/l/monads-io.svg)](https://github.com/AlexXanderGrib/monads-io/blob/main/LICENSE.txt)
[![Size](https://img.shields.io/bundlephobia/minzip/monads-io)](https://bundlephobia.com/package/monads-io)

## Why use this lib

1. **Small** and **Tree-Shakable**. Either - 3kb minified, Maybe - 3kb minified, can be imported separately
2. **No dependencies**.
3. **Memory-Efficient**. 8 bytes overhead per instance (only class pointer)
4. **Tested**. 100% coverage
5. **Practical**. Just 2 wrappers: Either and Maybe - easy for non-fp people

## Credits

Huge credit to @JSMonk. This library is based on [`JSMonk/sweet-monads`](https://github.com/JSMonk/sweet-monads)

## Installation

- **Using `npm`**
  ```shell
  npm i monads-io
  ```
- **Using `Yarn`**
  ```shell
  yarn add monads-io
  ```
- **Using `pnpm`**
  ```shell
  pnpm add monads-io
  ```

## Usage

### [Either](./docs/api/modules/either.md)

> The Either type represents values with two possibilities: a value of type Either a b is either Left a or Right b.
> ([source](https://hackage.haskell.org/package/category-extras-0.52.0/docs/Control-Monad-Either.html))

1. Makes error path of function strongly typed
2. Separates errors from exceptions
3. Minimal memory overhead (see [benchmarks](./benchmarks/))

<details>
  <summary>Example (preparing data to render User page)</summary>

```typescript
import {
  Either,
  fromPromise,
  fromTryAsync,
  left,
  mergeInOne,
  right
} from "monads-io/either";

class NetworkError extends Error {}
class HttpError extends Error {}
class JsonParsingError extends Error {}
class NotFoundError extends Error {}

type FetchError = NetworkError | HttpError | JsonParsingError;

type ID = string;
type User = { id: ID; username: string; name: string /* ... */ };
type Post = { id: ID; userId: User["id"]; body: string /* ... */ };

async function getJson<T>(url: string): Promise<Either<FetchError, T>> {
  const response = await fromPromise(
    fetch(`https://jsonplaceholder.typicode.com/${url}`),
    (cause) => new NetworkError("Unable to connect", { cause })
  );

  const okResponse = response.chain((response) => {
    if (response.ok) return right(response);

    return left(
      new HttpError(
        `Response status is ${response.status} ${response.statusText}`,
        { cause: response }
      )
    );
  });

  const json = await okResponse.asyncChain((response) => {
    return fromTryAsync(
      async () => (await response.json()) as T,
      (cause) => new JsonParsingError("Unable to parse JSON", { cause })
    );
  });

  return json;
}

async function getUserByUsername(username: string) {
  const users = await getJson<User[]>(`/users?username=${username}`);

  return users.chain((users) => {
    const user = users[0];

    if (!user) {
      return left(new NotFoundError(`User not found`, { cause: { username } }));
    }

    return right(user);
  });
}

const getPosts = (userId: string) =>
  getJson<Post[]>(`/posts?ownerId=${userId}`);

class PageLoadError extends Error {
  /* ... */

  constructor(public returnStatus: number, message: string, cause?: unknown) {
    super(message, { cause });
  }
}

async function getUserPageData(username: string) {
  const user = await getUserByUsername(username);
  const posts = await user.asyncChain((user) => getPosts(user.id));

  return mergeInOne([user, posts])
    .map(([user, posts]) => ({ user, posts }))
    .mapLeft((error) => {
      if (error instanceof NotFoundError) {
        return new PageLoadError(404, "User not found", error);
      }

      // error: FetchError
      console.log("Error fetching data for User Page", error);
      return new PageLoadError(500, "Internal server error", error);
    });
}
```

</details>

### [Maybe](./docs/api/modules/maybe.md)

> The Maybe monad represents computations which might "go wrong" by not returning a value.
> ([source](https://en.wikibooks.org/wiki/Haskell/Understanding_monads/Maybe))

1. Allows to separate empty/present state from undefined
2. Minimal memory overhead (see [benchmarks](./benchmarks/))

<details>
  <summary>Example (searching mention target)</summary>

```typescript
// Real world example
// This maybe is not tree-shakable. Used in NodeJS code
import * as Maybe from "monads-io/maybe";

export async function getTargets(
api: TelegramAPI,
tokens: formattedText,
{ mentionLimit = 1, message = undefined as message | undefined } = {}
): Promise<Map<number, chat | undefined>> {
const mentions = getMentions(tokens).slice(0, mentionLimit);

const targets = new Map<number, chat | undefined>();
let replyTarget: [number, chat | undefined] | undefined;
const { messagesService, chatsService } = getServices(api);

...

// 1. Get message
// 2. Get message reply id (0 = no reply)
// 3. Get reply message by message id
// 4. Get reply message sender
// 5. Get his/her profile
// 6. Set local variable to profile

const reply = await Maybe.fromNullable(message)
  .filter((message) => message.reply_to_message_id !== 0)
  .asyncChain((message) =>
    messagesService.getReply(message.chat_id, message.id)
  );

const sender = await reply
  .map(MemberId.fromMessage)
  .tap(({ memberId }) => {
    replyTarget = [memberId, undefined];
  })
  .asyncChain(({ memberId }) => chatsService.getById(memberId));

sender.tap((sender) => {
  replyTarget = [sender.id, sender];
});

...

return replyTarget ? new Map([replyTarget, ...targets]) : targets;
}

```

</details>

### [Identity](./docs/api/modules/identity.md)

> The Identity monad is a monad that does not embody any computational strategy. It simply applies the bound function to its input without any modification.
> ([source](https://blog.ploeh.dk/2022/05/16/the-identity-monad/))

Example

```typescript
import * as Identity from "monads-io/identity";

// Before
app.use(express.static(path.resolve(getDirname(import.meta.url), "../public")));

// After
Identity.from(import.meta.url)
  .map(getDirname)
  .map((dir) => path.resolve(dir, "../public"))
  .map(express.static)
  .map(app.use);
```
