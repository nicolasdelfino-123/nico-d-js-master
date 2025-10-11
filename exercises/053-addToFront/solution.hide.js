function addToFront(arr, element) {
  // your code here
  return [element, ...arr]
}

let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]
