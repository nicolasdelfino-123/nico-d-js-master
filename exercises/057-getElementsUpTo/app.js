function getElementsUpTo(array, n) {
  // your code here
  return array.slice(0, n);
}

let output = getElementsUpTo(["a", "b", "c", "d", "e"], 3);
console.log(output); // --> ['a', 'b', 'c']

/* Escribe una función llamada getElementsUpTo. Dados un array y un índice, getElementsUpTo retorna un array con todos los elementos hasta (pero sin incluir) el elemento en el índice dado */

/* function getElementsUpTo(array, n) {
  // your code here
  let newA = array.slice(0, n);
  return newA;
}

let output = getElementsUpTo(["a", "b", "c", "d", "e"], 3);
console.log(output); // --> ['a', 'b', 'c'] */
