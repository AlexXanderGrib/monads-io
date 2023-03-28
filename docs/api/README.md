Package / [Exports](modules.md)

# Quality Package Template

> Package template that can get you `99%` quality and `33%` maintenance on `npm`

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

## Why use this template

1. I used this approach personally to publish following packages
   1. [`qiwi-sdk`](https://npmjs.com/package/qiwi-sdk)
   2. [`yoomoney-sdk`](https://npmjs.com/package/yoomoney-sdk)
   3. [`unpc`](https://npmjs.com/package/unpc)
   4. [`tie-logger`](https://npmjs.com/package/tie-logger)
2. They all got `99`+% quality rating on NPM
3. Most of them are located on 1st page of [npm search by keyword `backend`](https://www.npmjs.com/search?q=keywords:backend)

## What to do

1. Replace package name and package description here and in [package.json](./package.json)
2. Replace `AlexXanderGrib/monads-io` to your repository
3. Replace `monads-io` to your package name
4. Write some code and cover it with tests

### How to max `quality`

1. Write tests and increase coverage. To exclude files with destructive side-effects, you can use following comment
   ```javascript
   /* istanbul ignore file */
   ```
2. Everything else is already in this template
   1. TypeScript support
   2. Auto build to both ES-Modules and CommonJS
   3. TS-Jest
   4. Exports mapping
   5. Git Hooks
3. Remember to run `npm test` before publishing to include coverage files in package and increase quality of your package
4. **PUBLISH USING ONLY NPM**. Not doing this will decrease score by 15-25%

### How to max `maintenance`?

Upload 3 versions of your package in 24 hours. You can not get more than 33% maintenance on `npm`

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

```javascript
import { Example } from "monads-io";

const container = new Example(10);

console.log(container);
// Example { value: 10 }
```
