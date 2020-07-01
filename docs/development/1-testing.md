# Automated Testing

Automated testing is implemented using `jest` framework.
The `ts-jest` tool will make sure test files written in `typescript` will also
be translated and run with `jest`.
The configuration for `jest` can be found in [package.json](../../../../package.json)
under the `jest` key.

## Test suites

The test cases have been groupped in two suites:

- The unit test suite
  Very fast tests that test each class in isolation

- The integration test suite
  Slower tests that ensure the plugin will not cause any errors during the build
  process of the vuepress framework

Jest will identify which tests to run by their filename. As such the following
convention has been used:

*The filename of each test file must include its type, eg `mytest.unit.ts` and
for organizational purposes must be placed on the relevant folder, eg `unit`*

To run all tests

    npm run test

To run all unit tests

    npm run test:unit

To run all integration tests

    npm run test:integration

To run the tests in file watch mode (so they are automatically rerun on file
changes), append `-- --watch` flag when running via npm (otherwise use just the
flag). For example

    npm run test:unit -- --watch

or

    jest unit --watch

## Coverage

By default, code coverage will also be calculated and reported
at the end of the test execution, but also rendered in html format at
[coverage](../../../../tests/out/coverage) folder.
