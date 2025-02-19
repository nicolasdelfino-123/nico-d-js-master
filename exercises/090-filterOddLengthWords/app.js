function filterOddLengthWords(words) {
  // your code here
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 !== 0) {
      arr.push(words[i]);
    }
  }
  return arr;
}
let output = filterOddLengthWords(["there", "it", "is", "now"]);
console.log(output); // --> ['there', 'now']
