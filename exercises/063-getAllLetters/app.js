function getAllLetters(str) {
  let listaVacia = [];
  if (str === "") {
    return listaVacia;
  } else {
    let newA = str.split("");
    return newA;
  }
}

let output = getAllLetters("Radagast");
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

/* Escribe una función llamada getAllLetters. 

Dado una palabra, getAllLetters 

retorna un array que contenga todos los caracteres de la palabra.
Si se da un string vacío, debe retornar un array vacío. */
