---
path: "/map-by-hand"
date: "2018-05-20"
title: "Building the JavaScript `map` Function"
live: true
---

In my JavaScript learning journey, the `map` function has opened up a whole new way of writing JavaScript.

Using `map` has made my code much more readable and declarative, and anytime I have an array that I need to transform to an array of the same length, `map` is the first thing that my mind goes to.

If you haven't had much exposure to functional programming or higher-order functions, `map` and it's siblings: `filter` and `reduce` can take some getting used to.

## How do we use `map`?

Before we get to writing our own version of map, let's look at a simple example of how it's used.

Let's pretend that we have a function which adds 1 to whatever number we pass in:

```javascript
// Our simple adding function
function addOne(num) {
  return num + 1
}
```

```javascript
// ... or as an arrow function
const addOne = num => num + 1
```

Now, with our `addOne` function, let's say we want to take our existing array and build a new one of the same length but with one added to each element.

Without using the `map` or `forEach` functions, that code might look like this:

```javascript
const someArr = [1, 2, 3]
 
const newArr = []
for (let i = 0; i < someArr.length; i++) {
  const result = addOne(someArr[i]);
  newArray.push(result);
}
```

You've probably seen this pattern a lot. It's used a lot, and almost every programmer would immediatley recognize it. In fact, this pattern is so common in instructional material and other languages, I would argue that that's one of it's strengths.

That being said, anytime we want to iterate over an array in our program and output a new one, we have to write a lot of the same boiler plate.

What `map` does for us is help us to achieve the exact same result but with much less code. With the use of the `map` function, the code we previously wrote can now be replaced with:

```javascript
const someArr = [1, 2, 3] 
const newArr = someArr.map(addOne)
```

`map` is a higher order function. As you can see in the example above, it takes a single function in as its only required argument. We passed it the function `addOne` that we wrote earlier.

If you're less familiar with higher order components, this looks weird. It takes some time to get used to, but it's a very powerful concept that important to unlocking the full power of JavaScript.

## Building it ourselves

To get a little more comfortable with the `map` function, let's build it ourselves. This might sound intimidating, but we've actually already done most of the work!

Our version of `map` (we'll call it `myMap`) will take in two arguments: a JavaScript array and a callback function that will get called with each element of the array:

```javascript
myMap([1,2,3], ourCallback)
```

This is slightly different than the built-in `map` function that we used earlier which is a method on the built-in `Array` and called with dot notation:

```javascript
[1, 2, 3].map(ourCallback)
```

### Writing `myMap`


Let's start with our code from above:

```javascript
const someArr = [1, 2, 3]
 
const newArr = []
for (let i = 0; i < someArr.length; i++) {
  const result = addOne(someArr[i]);
  newArray.push(result);
}
```

Looking at this code, we can see that the most of it is generic and not tied to a specific array or callback function. The exceptions are our reference to `someArr` and our call to the `addOne` function.

By wrapping this piece of code in a function, we can abstract out the array and callback (`addOne`) so that we can reuse it with *any* array and *any* callback:

```javascript
function myMap(origArr, cb) {
  const newArr = []
  for (let i = 0; i < origArr.length; i++) {
    // For each array item, we call the callback function with 3 parameters:
    // the item itself, the index, and the entire array...
    const result = cb(origArr[i], i, origArr)
    // Then we add the result of that callback to the new array...
    newArr.push(result)
  }
  return newArr
}
```

That's really it! You'll notice that for each iteration, we are calling our argument with the current item (just like before), but we're also passing it two more arguments. What's up with that?

## Additional parameters to `map`

While we don't have to use them, the built-in `map` function passes our callback function two [additional parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Parameters) after the array item itself: the index of the current item and the entire original array. These can both be extremely useful when you're writing more complicated callback functions.

## Mutation

Fundamental to the idea of map is that the original array is not mutated. Although the callback function you pass to map could theoretically change the array, this is generally frowned upon.

It's best store the resulting array in a new variable and not modify the original array.

What does that look like?

```javascript
// An example of mutating the array in the map callback.
// Don't do this.
let oldArr = [1, 2, 3]
let newArr = oldArr.map((num,i,arr) => (arr[i] = arr[i] + 1))
```

Because the return value of the assignment expression is equal to the right hand side of the expression (in this case the values 2, 3, and finally 4), `newArr` will be equal to `[2, 3, 4]`, but we've also modified `oldArr` which will *also* equal `[2, 3, 4]`.

Don't do this. If you ever catch yourself doing assignment to the original array, stop yourself, and figure out a way to make the callback pure.

In our simple example that would look like this:

```javascript
// an example of mutating the array in the map callback
let oldArr = [1, 2, 3]
let newArr = oldArr.map(num => num + 1)
```

You'll notice here that the callback we passed isn't even taking the array index nor is it taking a reference to the array. This forces us to think about each value individually and not be tempted to mutate the original array.


## Conclusion

The map function is just one of many that can make your code a lot cleaner. It can take some getting used to when you're first learning to use it, but hopefully you saw that there's really not much to it. About 4 lines of code got us the same functionality.
