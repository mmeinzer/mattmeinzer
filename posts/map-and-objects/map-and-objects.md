---
path: "/map-and-arrays-of-objects"
date: "2019-01-07"
title: "Using `map` on an array of objects"
live: false
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
