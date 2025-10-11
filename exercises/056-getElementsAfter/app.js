function getElementsAfter(array, n) {
  // your code here
  return array.filter((_, n) => n < n);

}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']
