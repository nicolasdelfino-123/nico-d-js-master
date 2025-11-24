function removeFromBackOfNew(arr) {
  // your code here
  let array = [...arr]
  array.pop()
  return array

}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
