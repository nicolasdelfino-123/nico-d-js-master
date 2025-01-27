function removeFromFrontOfNew(arr) {
  // your code here
  let nuevo = arr.slice(1);
  return nuevo;
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]

/* Escribe una función llamada removeFromFrontOfNew. Dado un array, removeFromFrontOfNew retorna un nuevo array que contenga todos los elementos menos el primero del array dado. */
