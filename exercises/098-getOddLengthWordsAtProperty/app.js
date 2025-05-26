// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
  if (Array.isArray(obj[key])) {
    return obj[key].filter((ele) => ele.length % 2 == 1);
  } else {
    return [];
  }
}
