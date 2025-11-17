function getLongestWordOfMixedElements(arr) {
    // your code here

    if (arr.length === 0) {
        return ""
    }

    return arr.reduce((acc, ele) => {
        if (typeof ele === 'string')
            return ele.length > acc.length ? ele : acc
        return acc
    }, "")

}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
