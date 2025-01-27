function removeFromBackOfNew(arr) {
  // your code here
  let nuevo = arr.slice(0, arr.length - 1);
  return nuevo;
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]

/* Escribe una función llamada removeFromBackOfNew. Dado un array, removeFromBackOfNew retorna un nuevo array que contenga todos excepto el último elemento del array dado. */
