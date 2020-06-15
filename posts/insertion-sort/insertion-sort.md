---
path: "/insertion-sort"
date: "2019-11-20"
title: "Writing insertion sort in JavaScript"
live: true
metaDescription: "A straightforward implementation of insertion sort in JavaScript with commented code"
---

As I work my way through learning more algorithms, I'm going to be posting my implementations here as a reference for my future self or anyone else that might be interested. First up - insertion sort:

```javascript
function insertionSort(arr) {
  for (let j = 1; j < arr.length; j++) {
    const currentValue = arr[j];

    let i = j - 1;
    while (i >= 0 && arr[i] > currentValue) {
      arr[i + 1] = arr[i];
      i -= 1;
    }

    arr[i + 1] = currentValue;
  }

  return arr;
}
```

And a commented version:

```javascript
function insertionSort(arr) {
  // Iterate through each item in the array except for the first
  // An array of length 1 will be immediately returned
  for (let j = 1; j < arr.length; j++) {
    // Store the value of the current item to be inserted
    const currentValue = arr[j];

    // Shift items on the left of the current value to the right
    // Stopping at either index 0 or when the current value is larger
    let i = j - 1;
    while (i >= 0 && arr[i] > currentValue) {
      arr[i + 1] = arr[i];
      i -= 1;
    }

    arr[i + 1] = currentValue; // Insert the current item
  }

  return arr;
}
```
