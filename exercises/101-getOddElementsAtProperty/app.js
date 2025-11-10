function getOddElementsAtProperty(obj, key) {
  // your code here
  if (!Array.isArray(obj[key])) {
    return []
  }

  let arrayOdd = []
  for (let ele of obj[key]) {
    if (ele % 2 === 1) {
      arrayOdd.push(ele)

    }
  }
  return arrayOdd

}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
