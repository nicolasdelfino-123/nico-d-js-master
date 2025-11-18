function sumDigits(num) {
    // your code here
    let str = num.toString()

    let total = 0;
    for (let i = 0; i < str.length; i++) {
        if (i === 0 && str[i] === "-") {
            total -= Number(str[i + 1])
            i++
        } else {
            total += Number(str[i])
        }

    }
    return total
}

let output = sumDigits(-316);
console.log(output); // --> 4