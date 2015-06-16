[![Build Status](https://travis-ci.org/bakasho-libs/core.bind_function_to_object.svg?branch=master)](https://travis-ci.org/bakasho-libs/core.bind_function_to_object)

## core.bind_function_to_object

Bind a function to a context object.

*[internal] should not be used outside of core*

```javascript

var bindFunctionToObject = require("core.bind_function_to_object");

var bound = bindFunctionToObject(function(n1) {
    return this.n + n1;
}, { n: 10 });

bound(1); // returns 11

```
