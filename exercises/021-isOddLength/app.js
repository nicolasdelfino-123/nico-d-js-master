// Write your function here
/* Escribe una función llamada isOddLength. Dada una palabra, isOddLength retorna true si la cantidad de letras que tiene la palabra es impar, de lo contrario retorna false. */

function isOddLength(word) {
  if (word.length % 2 > 0) {
    return true;
  }
  return false;
}
