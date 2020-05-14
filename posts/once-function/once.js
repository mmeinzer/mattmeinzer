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

const add = (a, b) => a + b
