function addToBackOfNew(arr, element) {
    // your code here
    let arrNuevo = []

    for (let i = 0; i < arr.length; i++) {
        arrNuevo.push(arr[i])

    }
    arrNuevo.push(element)
    return arrNuevo
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
