function removeOddValues(obj) {
  // your code here
  for (key in obj) {
    if (obj[key] % 2 === 1) {
      delete obj[key];
    }
  }
  return obj;
}

let obj = {
  a: 2,
  b: 3,
  c: 4,
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
/* Escribe una función llamada removeOddValues". Dado un objeto, removeOddValues elimina cualquier propiedad cuyo valor sea un número impar. */
