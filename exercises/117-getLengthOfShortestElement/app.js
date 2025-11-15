function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length < 1) return 0


    return arr.slice(1).reduce((acc, ele) => ele.length > acc ? ele.length : acc, arr[0].length)
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
