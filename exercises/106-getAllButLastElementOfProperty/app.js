function getAllButLastElementOfProperty(obj, key) {
  // your code here
  if (!Array.isArray(obj[key]) || !obj.hasOwnProperty(key) || !obj[key]) {
    return []
  }

  return obj[key].filter((_, index, array) => index !== array.length - 1)
}
let obj = {
  key: [1, 2, 3]
};

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
