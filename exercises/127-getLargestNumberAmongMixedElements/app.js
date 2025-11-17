function getLargestNumberAmongMixedElements(arr) {
    // your code here


    if (arr.length === 0) {
        return 0
    }


    let numeros = arr.filter((ele) => typeof ele === 'number')

    if (numeros.length === 0) {
        return 0
    }

    let resultado = numeros.sort((a, b) => b - a)
    return resultado[0]

}





let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5



/*  */