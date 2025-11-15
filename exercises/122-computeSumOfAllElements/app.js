function computeSumOfAllElements(arr) {
  // your code here

  let acc = 0
  for (let i = 0; i < arr.length; i++) {
    acc += arr[i]
  }
  return acc
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
