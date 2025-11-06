// Write your function here
const getLastElementOfProperty = (obj, key) => {
  if (!obj[key] || !Array.isArray(obj[key]) || !obj.hasOwnProperty(key)) {
    return undefined
  } else {
    return obj[key][obj[key].length - 1]

  }
}