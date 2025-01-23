function addToFront(arr, element) {
  // your code here
  arr.unshift(element);
  return arr;
}

let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]
/* Escribe una función llamada addToFront. Dado un array y un elemento, addToFront añade el elemento al frente del array, y regresa el array dado. */
