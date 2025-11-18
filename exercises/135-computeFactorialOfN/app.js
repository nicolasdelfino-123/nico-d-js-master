function computeFactorialOfN(n) {
    // your code here

    total = 1
    for (let i = 1; i <= n; i++) {
        total = total * i

    }
    return total

}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
