function myMap(origArr, cb) {
  const newArr = []
  for (let i = 0; i < origArr.length; i += 1) {
    // for each array item, we call the
    // callback function with 3 parameters:
    // the item itself, the index, and the
    // entire array
    const result = cb(origArr[i], i, origArr)
    // then we add the result of that callback
    // to the new array
    newArr.push(result)
  }
  return newArr
}
