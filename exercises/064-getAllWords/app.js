function getAllWords(str) {
  // your code here
  let newA = str.split(" ");
  return newA;
}

let output = getAllWords("Radagast the Brown");
console.log(output); // --> ['Radagast', 'the', 'Brown']

/* Escribe una función llamada getAllWords. Dado una oración, getAllWords retorna un array que contenga cada palabra de la oración. */
