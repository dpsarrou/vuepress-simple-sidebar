# 3. Use Jest for automated tests

Date: 2020-06-01

## Status

Accepted

## Context

Automated testing is by now a standard in every quality software develpment process.
The benefits are many, productivity increase, time saving, better quality.
Specifically for this plugin, there are many checkpoints that have to be verified on
each code change, including but not limited to:

- Does the code work as its supposed to do after the change? Maybe the generated
  paths are not correct any more or even empty? Did we miss a trailing slash
  somewhere?
- Does the plugin even work with the given input of the Vuepress framework? Maybe
  when given a Page with no title, it breaks?
- Does the plugin even work when included in Vuepress? Does Vuepress build process
  finish successfully when the plugin is included?

The above require a manual testing process, **for each code change**.

From the many javascript testing frameworks, [Jest](https://jestjs.io/) is one
of the most popular ones (for example its the default test framework to use with `React`)
that can automate the above tasks. It supports writing very simple tests, in
javascript but also typescript through `ts-jest`.

## Decision

We will use `Jest` as the testing framework.

## Consequences

- The developed codebase will be accompanied by automated tests
- Before every commit or PR, the tests need to pass successfully
- The code must be tested to the fullest extend: strive for 100% coverage as much
as possible.

Install `jest`, `ts-jest` and its types with

    npm install --save-dev jest ts-jest @types/jest

Use the key `jest` in [package.json](./../../../package.json) to configure the
  framework. Note that when typescript is used to write the tests, for the IDE
  autocomplete features to work, the test files path needs to be included in
  the include paths of typescript in `tsconfig.json`. However this will have
  the test folder and all its files be included in the production-ready
  compiled files which is not what is usually needed. To acccount for this,
  create an additional `tsconfig.json` file in the [tests/](./../../../../tests)
  folder which extends the main `tsconfig.json` file but ignores the output of
  that folder. See this [link](https://stackoverflow.com/questions/54139158/cannot-find-name-describe-do-you-need-to-install-type-definitions-for-a-test)
  for more details.

Two types of test suites are identified as of now:

- A unit test suite will verify that the classes of the plugin work as expected
  when given specific input, and provide the expected output. To run them use

      npm run test:unit

- An integration suite will verify that Vuepress build process completes
  successfully when the plugin is used. To

      npm run test:integration

To run all tests instead use

    npm run test

And to run all tests (or each test suite) in `watch` for changes mode use the
`--watch` flag as for example

    npm run test:unit -- --watch
