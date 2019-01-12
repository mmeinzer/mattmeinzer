---
path: "/map-and-arrays-of-objects"
date: "2019-01-07"
title: "Using `map` on an array of objects"
live: true
---

Here's a quick test: What does the following code output?

```javascript
// An array full of priceless artifacts
const ancientArtifacts = [
  {
    name: 'Nefertiti Bust',
    whereDiscovered: 'Amarna, Egypt',
    yearDiscovered: 1912,
  },
  {
    name: 'Rosetta Stone',
    whereDiscovered: 'Rosetta, Egypt',
    yearDiscovered: 1799,
  },
  {
    name: 'Nebra sky disk',
    whereDiscovered: 'Nebra, Germany',
    yearDiscovered: 1999,
  },
]
const artifactsWithCityAndCountry = ancientArtifacts.map(artifact => {
  const [city, country] = artifact.whereDiscovered.split(', ')
  artifact.whereDiscovered = { city, country }
  return artifact
})

// 1. Are the two arrays the same in memory?
console.log(ancientArtifacts === artifactsWithCityAndCountry)

// 2. What is the value of the whereDiscovered property in the ORIGINAL array
console.log(ancientArtifacts[0].whereDiscovered)

// 3. Are the artifact objects in each list the same objects in memory?
console.log(ancientArtifacts[0] === artifactsWithCityAndCountry[0])
```

Ready for the answers?

```javascript
// 1. Are the two arrays the same in memory?
false

// 2. What is the value of the whereDiscovered property in the ORIGINAL array
{ city: 'Amarna', country: 'Egypt'}

// 3. Are the artifact objects in each list the same objects in memory?
true
```

Let's go line by line and figure out why we get the answers we do.

## What does `map` return?

In order to correctly answer the first question we have to consider what the `Array.prototype.map` function does and what it returns, since we are storing the result in `artifactsWithCityAndCountry`.

A key principle of `map` is that it does not modify the array that it's called on, though the callback function _can_ modify the callee array.

`map`, as defined in the spec, calls the passed in callback function for each non-empty element in the array and returns a _new_ array populated with the values returned from the callback. Therefore, the two arrays do not equal (`===`) each other.

Reminder: In JavaScript, when comparing two objects (an Array object or otherwise), both `===` and `==` operators check to see if both objects have the same object value. There is no element or poperty comparison happening here. If it is not the **same** object, strict equality will return `false`.

The new array, `artifactsWithCityAndCountry`, looks exactly like we might expect:

```javascript
[
  {
    name: 'Nefertiti Bust',
    whereDiscovered: {
      city: 'Amarna',
      country: 'Egypt'
    },
    yearDiscovered: 1912,
  },
  {
    name: 'Rosetta Stone',
    whereDiscovered: {
      city: 'Rosetta',
      country: 'Egypt'
    },
    yearDiscovered: 1799,
  },
  {
    name: 'Nebra sky disk',
    whereDiscovered: {
      city: 'Nebra',
      country: 'Germany'
    }
    yearDiscovered: 1999,
  },
]
```

## What happened to the original array?

Now let's look at the original array, `ancientArtifacts`.

If `map` doesn't modify the original array, why is `ancientArtifacts[0].whereDiscovered` equal to the object that we defined in the callback: `{ city: 'Amarna', country: 'Egypt'}`?

While it's true that `map` doesn't modify the array, there is nothing preventing our callback from doing so. In this case, we are actually modifying the objects contained within the array and not the array itself.

The line in our code that's causing this unwanted side effect is:

```javascript
artifact.whereDiscovered = { city, country }
```

Each time our callback function is called, a reference to the artifact object is passed in and we're accessing and setting the `whereDiscovered` property on it.

This behavior is expected if you understand that JavaScript passes objects by reference and not value, but it can be a tripping point if you forget that `map` isn't stopping you from mutating the original array contents.

To be explicit about it, our code has two seperate arrays, each taking up memory but referncing the same set of objects.

## What's the solution?

As I've been hinting at throughout the article, if you're using `map` you should do your best to avoid side effects. If we wanted to modify the original array intentionally, the appropraite choice would likely be `Array.prototype.forEach` which is often associated with side effects outside the scope of the callback function.

So how can we rewrite our orignal callback function to get a new array filled with new objects?

### Two ways to copy our object

Since we don't want to modify the object being passed in through the callback function we'll need to make a copy of it. Two popular options for doing this are `Object.assign` as in `const newObject = Object.assign({}, origObject)` and the ES6 spread syntax, as in `const newObject = { ...origObject }`.

### Refactored code

Using the spread syntax, our new callback function looks like this:

```javascript
const artifactsWithCityAndCountry = ancientArtifacts.map(artifact => {
  const [city, country] = artifact.whereDiscovered.split(', ')
  const newArtifact = { ...artifact, whereDiscovered: { city, country } }
  return newArtifact
})
```

Or without the additional variable:

```javascript
const artifactsWithCityAndCountry = ancientArtifacts.map(artifact => {
  const [city, country] = artifact.whereDiscovered.split(', ')
  return { ...artifact, whereDiscovered: { city, country } }
})
```

This simple change, yields a pure function that doesn't modify the original array or any of the objects contained within it.
