const getEvenElementsAtProperty = (obj, key) =>
  Array.isArray(obj[key]) ? obj[key].reduce((a, n) => (n % 2 ? a : [...a, n]), []) : [];

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
