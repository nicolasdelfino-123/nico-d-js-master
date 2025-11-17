function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length === 0) {
        return ""
    }

    let comparador = Infinity
    let resultado = ""
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string' && arr[i].length < comparador) {
            resultado = arr[i]
            comparador = arr[i].length
        }
    }

    return resultado

}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
