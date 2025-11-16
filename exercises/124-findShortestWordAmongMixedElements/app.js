function findShortestWordAmongMixedElements(arr) {
    // your code here
    let resultado = ""
    let comparador = 999999999999999
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            if (arr[i].length < comparador) {
                comparador = arr[i].length
                resultado = arr[i]
            }
        }
    }
    return resultado

}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
