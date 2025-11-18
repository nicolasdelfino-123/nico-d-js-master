function multiplyBetween(num1, num2) {
    // your code here
    if (num2 < num1) {
        return 0
    }

    let numeros = []

    while (num1 < num2) {
        numeros.push(num1)
        num1++
    }

    return numeros.reduce((acc, ele) => acc * ele)


}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
