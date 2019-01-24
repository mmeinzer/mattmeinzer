---
path: "/double-equals-vs-triple-equals"
date: "2019-01-14"
title: "The difference between double and triple equals"
live: false
---

Double and triple equals in JavaScript don't need to be needlessly complicated. Although it's easy to default to using triple equals for everything, there are definitley some strong specific use cases for double equals as well.

Triple equals is often referred to as 'strict' equalality because it compares items without any type coercion. While this is easier to understand because there's no type coercion happening, the less straightforward behavior of double equals can be useful as well.

For example, if you are comparing values which you expect to be null or undefined,
