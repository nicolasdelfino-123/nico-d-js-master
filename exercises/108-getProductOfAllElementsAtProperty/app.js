function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || !obj.hasOwnProperty(key) || obj[key].length < 1) {
    return 0
  }

  let array = obj[key]
  return array.reduce((acc, current, indice, array) => current * acc, 1)

}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
