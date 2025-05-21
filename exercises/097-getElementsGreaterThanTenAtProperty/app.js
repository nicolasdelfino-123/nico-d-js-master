// Write your function here
function getElementsGreaterThan10AtProperty(obj, clave) {
  if (Array.isArray(obj[clave])) {
    return obj[clave].filter((element) => element > 10);
  }
  return [];
}
