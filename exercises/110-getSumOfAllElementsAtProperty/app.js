function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || !obj.hasOwnProperty(key)) {
        return 0
    }

    let total = 0
    for (num of obj[key]) {
        total += num
    }
    return total
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
