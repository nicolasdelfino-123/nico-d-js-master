// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
  if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0) {
    return []
  } else {
    return obj[key].filter((ele) => ele.length % 2 !== 0)
  }

}