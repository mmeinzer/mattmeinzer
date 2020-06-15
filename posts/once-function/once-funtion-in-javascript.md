---
path: "/once-function-in-javascript"
date: "2020-05-13"
title: "How to write a simple `once` function in JavaScript"
live: true
metaDescription: "Using closures and a higher-order function to create a function in JavaScript that will only execute the first time it's called"
---

A simple but useful example to show how closures work is a `once` functon.

The `once` function is a [higher-order function](https://eloquentjavascript.net/05_higher_order.html) that takes in a function as a parameter and returns a function that has the same behavior--but that can only be ran one time. Any call after the first will not call the original function and will return `undefined`.

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

One way to extend this function would be to have it return the result from the initial call on subsequent calls.

```javascript
function once(fn) {
  let alreadyRan = false
  let result

  function newFn(...args) {
    if (!alreadyRan) {
      alreadyRan = true
      result = fn(...args)
    }

    return result
  }

  return newFn
}
```

Even if you change the parameters on the second call, the function will still return the original result.
