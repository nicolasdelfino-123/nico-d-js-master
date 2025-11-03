function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    return [word1, word2, word3].reduce((acc, current) => acc.length >= current.length ? acc : current)
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
