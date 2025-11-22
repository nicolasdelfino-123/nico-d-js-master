function removeFromFront(arr) {
  // your code here
  return arr.reduce((acc, ele, i) => {
    if (i != 0) {
      acc.push(ele)

    }
    return acc
  }, [])
}

let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
