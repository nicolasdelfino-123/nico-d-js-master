// Write your function here
const getNthElementOfProperty = (obj, key, n) => {
  if (!obj[key] || n > obj[key].length || !Array.isArray(obj[key])) {
    return undefined
  } else {
    return obj[key][n]
  }
}