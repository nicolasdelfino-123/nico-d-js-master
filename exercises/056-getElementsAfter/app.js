function getElementsAfter(array, n) {
  // your code here
  let result = []
  let index = 0

  for (let ele of array) {
    if (index > n) {
      result.push(ele)
    }
    index++
  }

  return result

}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']
