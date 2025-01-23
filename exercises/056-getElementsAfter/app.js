function getElementsAfter(array, n) {
  // your code here
  return array.slice(n + 1, 5);
}

let output = getElementsAfter(["a", "b", "c", "d", "e"], 2);
console.log(output); // --> ['d', 'e']
/* Escribe una función llamada getElementsAfter. Dado un array y un índice (index), getElementsAfter retorna un nuevo array con todos los elementos que estén después (pero sin incluir) el índice dado. */
