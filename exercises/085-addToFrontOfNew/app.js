function addToFrontOfNew(arr, element) {
  // your code here
  let nuevo = []
  nuevo.push(element)

  for (let i = 0; i < arr.length; i++) {
    nuevo.push(arr[i])
  }
  return nuevo
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
