function getLongestElement(arr) {
    // your code here

    if (arr.length < 1) return ''
    return arr.reduce((acc, ele) => ele.length > acc.length ? ele : acc, arr[0])

}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
