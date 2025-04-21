// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
  if (obj[key].length <= 0 || obj[key] !== 10 || !Array.isArray(obj[key])) {
    return [];
  }
  return obj[key] === 10;
}
