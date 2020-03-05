@ewingson/example

[![npm (scoped)]
(https://img.shields.io/npm/v/@ewingson/example.svg)]
(https://github.com/ewingson/example)
[![npm bundle size (minified)]
(https://img.shields.io/bundlephobia/min/@ewingson/example.svg)]
(https://github.com/ewingson/example)

It's modular.

# Install

```
$ npm install @ewingson/example
```

# Usage

```
const example = require("@ewingson/example");

example("012345");
//=> "543210"

example(012345);
//=> Uncaught TypeError: @ewingson/example wants a string!
//    at example (<anonymous>:5:42)
//    at <anonymous>:1:1
  ```
