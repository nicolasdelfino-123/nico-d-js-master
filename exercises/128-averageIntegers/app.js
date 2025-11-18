function average(arr) {
  // your code here
  let suma = sum(arr)
  let average = suma / arr.length
  return average


}



function sum(arr) {
  // your code here
  let resultadoSuma = 0
  for (let ele of arr) {
    resultadoSuma += ele
  }
  return resultadoSuma

}

console.log(average([1, 2])); // --> 1.5
