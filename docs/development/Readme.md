# Overview

Feel free to read the [architecture decision records](./../../adr) to understand
the decisions behind the project. However it is important to understand and follow
the [code commit process](./2-commit.md)

## Requirements

- Nodejs (14+)
- Npm (or yarn, but only npm has been tested)
- Typescript knowledge && typescript compiler

## Installation

Install all dependencies via npm:

    npm install

Verify that everything works ok by running the test suite:

    npm run test

A [dist](./dist) folder will be created after a successful build, containing
the artifacts in Javascript.

## Build

The typescript compiler will compile the typescript source code into javascript
code, with the settings defined in [tsconfig.json](../../../../tsconfig.json).
The output will be placed in [dist](../../../../dist) directory.
To compile the files run

    npm run build

To automatically compile the files on each file change, run

    npm run dev

## Versioning

The project uses [Semantic Versioning](https://semver.org/)
