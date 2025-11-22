function getElementsUpTo(array, n) {
  // your code here

  return array.reduce((acc, ele, index) => {
    if (index < n) {
      acc.push(ele)
    }
    return acc
  }, [])
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
console.log(output); // --> ['a', 'b', 'c']
