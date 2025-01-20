// Write your function here
/* Escribe una función llamada isSameLength. Dadas dos palabras, isSameLength retorna true si ambas palabras tienen la misma cantidad de letras. De lo contrario retorna false. */

function isSameLength(word1, word2) {
  if (word1.length === word2.length) {
    return true;
  } else {
    return false;
  }
}

isSameLength("nico", "hola");
