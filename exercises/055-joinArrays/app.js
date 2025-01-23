function joinArrays(arr1, arr2) {
  // your code here
  let array3 = [];
  array3 = [...arr1, ...arr2];
  return array3;
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]

/* Escribe una función llamada joinArrays. Dados dos arrays, joinArrays retorna un array con los elementos de arr1, seguido por los elementos de arr2 en orden. */
