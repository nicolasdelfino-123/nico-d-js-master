function getLengthOfLongestElement(arr) {
    // Your code here
    if (!arr) return 0
    let max = 0
    for (str of arr) {

        if (str.length > max)
            max = str.length
    }
    return max

}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
