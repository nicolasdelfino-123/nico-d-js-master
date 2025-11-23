function removeFromFrontOfNew(arr) {
    // your code here
    let nuevo = [...arr]
    nuevo.shift()
    return nuevo
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
