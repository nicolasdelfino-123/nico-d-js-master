function getLargestElementAtProperty(obj, key) {
  // your code here
  if (!Array.isArray(obj[key]) || !obj[key] || obj[key].length < 1) {
    return []
  }

  let maximo = -Infinity

  for (let valor of obj[key]) {
    if (valor > maximo) {
      maximo = valor
    }
  }
  return maximo
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
