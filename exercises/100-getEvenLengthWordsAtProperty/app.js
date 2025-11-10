function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  if (!obj.hasOwnProperty(key) || obj[key].length === 0 || !Array.isArray(obj[key])) {
    return []
  }

  return obj[key].filter((ele) => ele.length % 2 === 0)

}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
