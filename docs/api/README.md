Package / [Exports](modules.md)

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
3. **Memory-Efficient**. 4 bytes overhead per instance (only class pointer)
4. **Tested**. 100% coverage
5. **Practical**. Just 2 wrappers: Either and Maybe - easy for non-fp people

## Credits

Huge credit to @JSMonk. This library is based on [`JSMonk/sweet-monads`](https://github.com/JSMonk/sweet-monads)

Docs available in his repository

- [Either](https://github.com/JSMonk/sweet-monads/tree/master/either)
- [Maybe](https://github.com/JSMonk/sweet-monads/tree/master/maybe)
- [Reference](./docs/api/modules.md)

## 📦 Installation

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

## ⚙️ Usage

```typescript
// Real world example
// This maybe is not tree-shakable. Used in NodeJS code
import { Maybe } from "monads-io";

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
