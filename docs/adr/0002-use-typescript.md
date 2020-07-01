# 2. Use typescript to develop the plugin

Date: 2020-06-01

## Status

Accepted

## Context

Javascript, while being a very powerful language, gives room for human developer
errors due to its loose static typing. A developer would need to continuously
keep in their head the types and the types of the properties of the data structures
they handle, to account for special handling of them when doing other calculations.
As the codebase grows, this becomes increasingly difficult and less productive.
While the IDE is helpful, it can only help up to a certain extend, which is
again limitted by the loose static typing nature of the language.

Typescript, as a superset of Javascript and by now the default language in the most
famous frontend frameworks (React, Angular), solves the above problems and greatly
increases productivity by allowing the automation tooling to identify errors the
developer would otherwise need to run the code to encounter them, but also
allows for less code to write *less code == less bugs*, using its code generation ability.

## Decision

We will use [Typescript](https://www.typescriptlang.org/) to develop this plugin.

## Consequences

Understand that a compilation step is now included in the process. The target
files would now be in the [dist](../../../../dist) folder

- Install the typescript compiler globally

        npm install -g typescript

- Generate a `tsconfig.json` file

        tsc --init

   Adjust the options accordingly and ensure the highest level of strictness and
   error checking.

- From now on use `*.ts` files for the source code (vanilla javascript is also supported
  in those files)

- Use the compiler to generate the target files. To build the files use:

        tsc
  or

        npm run build

  To watch the files for changes and automatically rebuild them use

        tsc -w

  or

        npm run dev
