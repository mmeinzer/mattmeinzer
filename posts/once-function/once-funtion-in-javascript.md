---
path: "/once-function-in-javascript"
date: "2020-05-13"
title: "A simple `once` function in JavaScript"
live: true
---

A simple but useful example to show how closures work is a `once` functon.

The `once` function takes in a function as a parameter and returns a function that has the same behavior--but that can only be ran one time. Any call after the first will not call the original function and will return `undefined`.

This works because the returned function `newFn` "closes over" the `alreadyRan` variable. When the return function is invoked for the first time, `alreadyRan` is reassigned to a value of `true` which prevents future invocations from calling the original function.

```javascript
function once(fn) {
  let alreadyRan = false

  function newFn(...args) {
    if (!alreadyRan) {
      alreadyRan = true

      return fn(...args)
    }
  }

  return newFn
}
```

Here's an example of how it's used:

```javascript
const add = (a, b) => a + b
const addOnce = once(add)

const resultA = addOnce(3, 4)
// resultA === 7

const resultB = addOnce(1, 2)
// resultB === undefined
```
