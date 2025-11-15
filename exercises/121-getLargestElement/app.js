function getLargestElement(arr) {
  // your code here
  if (arr.length < 1)
    return 0

  let acumulador = arr[0]
  for (let ele of arr) {
    if (ele > acumulador) {
      acumulador = ele
    }
  }
  return acumulador
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;