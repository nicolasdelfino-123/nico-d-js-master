// Write your function here
function getFirstElementOfProperty(obj, key) {
  if (!obj[key] || obj[key].length === 0 || !Array.isArray(obj[key])) {
    return undefined
  } else {
    return obj[key][0]

  }
}