// Write your function here
function getNthElementOfProperty(obj, key, n) {
  for (key in obj) {
    return obj.key[n];
  }
}
