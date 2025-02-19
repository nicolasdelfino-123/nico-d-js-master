function getLongestOfThreeWords(word1, word2, word3) {
  // your code here
  let listaLargoPalabras = [word1.length, word2.length, word3.length];
  let numMax = Math.max(...listaLargoPalabras);
  if (listaLargoPalabras[0] === numMax) return word1;
  else if (listaLargoPalabras[1] === numMax) return word2;
  else return listaLargoPalabras[2];
}

let output = getLongestOfThreeWords("these", "three", "words");
console.log(output); // --> 'these'
