function sumDigits(num) {
    // your code here
    let numToString = num.toString().split("")
    console.log(numToString)

    let total = 0
    for (let i = 0; i < numToString.length; i++) {
        if (i === 0 && numToString[i] === "-") {
            total = total - Number(numToString[i + 1])

        } else {
            total = total + Number(numToString[i])
        }
    }
    return total
}

let output = sumDigits(-316);
console.log(output); // --> 4
