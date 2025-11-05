function filterEvenLengthWords(words) {
    // your code here
    return words.filter((ele) => (ele.length & 1) === 0)
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
