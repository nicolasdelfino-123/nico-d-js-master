/* Escribe una función llamada getLengthOfWord. Dada un palabra, getLengthOfWord debe retornar la cantidad de letras que tiene esa palabra. */

function getLengthOfWord(word) {
  // your code here
  let contador = 0;
  for (i = 0; i < word.length; i++) {
    contador += 1;
  }
  return contador;
}
