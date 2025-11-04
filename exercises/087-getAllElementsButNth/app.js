function getAllElementsButNth(array, n) {
  // your code here
  return array.filter((ele, indice) => indice !== n)
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
