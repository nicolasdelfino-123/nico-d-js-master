// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
  if (Array.isArray(obj[key])) {
    return obj[key].filter((element) => element === 10);
  } else {
    return [];
  }
}
