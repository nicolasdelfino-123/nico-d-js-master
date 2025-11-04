function findShortestOfThreeWords(word1, word2, word3) {
  // your code here

  return [word1, word2, word3].reduce((acc, current) => current.length < acc.length ? current : acc)
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'

