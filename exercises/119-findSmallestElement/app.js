function findSmallestElement(arr) {
    // your code here
    if (arr.length < 1) return 0

    let acumulador = 0
    for (let num of arr) {
        if (num < arr[0]) {
            acumulador = num
        }
    }
    return acumulador
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1