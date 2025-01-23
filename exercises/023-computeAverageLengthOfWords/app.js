// Write your function here
/* Escribe una función llamada computeAverageLengthOfWords. Dadas dos palabras, computeAverageLengthOfWords retorna el promedio de la cantidad de letras de ambas. */

function computeAverageLengthOfWords(w1, w2) {
  lenTotal = w1.length + w2.length;
  promedio = lenTotal / 2;
  return promedio;
}

computeAverageLengthOfWords("hola", "nico");

// me habia olvidado de return y no me habia dado cuenta que debia dividir el length por la cantidad de palabras
