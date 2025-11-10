function getSmallestElementAtProperty(obj, key) {
  // your code here
  if (!Array.isArray(obj[key]) || obj[key].length < 1 || !obj.hasOwnProperty(key)) {
    return []
  }

  const mayor = Infinity;
  let arrayFinal = obj[key].reduce((acc, ele) => ele < acc ? ele : acc, mayor)


  return arrayFinal


}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
