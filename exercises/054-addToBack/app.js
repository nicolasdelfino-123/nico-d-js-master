function addToBack(arr, element) {
  // your code here
  let nuevo = []
  let indice = 0
  for (let ele of arr) {
    nuevo.push(ele)


  }
  nuevo.push(element)
  return nuevo

}

let output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]
