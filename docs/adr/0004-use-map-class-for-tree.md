# 4. Use ES6 Map class for storing the path tree

Date: 2020-06-01

## Status

Accepted

## Context

The *Path tree* is implemented using a nested key-value structure.
Naturally a plain old Javascript object is ideal for this type of structure.
However Javascript objects carry a lot of baggage from their prototype methods,
which means they include properties that are set by default.
As of ES6 Javascript provides a native class for key-value storage: Maps.
This data structure overcomes the common problems with Javascript objects
such as not including properties (or keys) that were not set explicilty, and is
more memory efficient.

## Decision

Use ES6 Maps for consistent and efficient storage of the path tree.

## Consequences

Use the published API of `Map` to access and store the values.

However note that:

- `console.log` and `JSON.stringify` are not straight forward any more, since
  they will not print the nested values
- The keys or values are returned via an iterator, and as such `forEach` needs
  to be used, but `map,reduce` need the iterator first converted to `Array` (by
  array destructuring or any other method) first.

To overcome the above issues, `toObject()` and `map()` methods have been
implemented to ease the process of printing out the tree and mapping the nodes
to whatever data structure is needed.
