function getFirstElement(array) {
  // Add your code after this line
  let resultado = array.shift();
  return resultado;
}

let output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1
/* Escribe una función llamada getFirstElement. Dado un array, getFirstElement regresa el primer elemento del array. */
