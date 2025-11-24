function getAllWords(str) {
    // your code here
    let array = []
    let string = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            string = ""
        }
        string += str[i]
    }

    array.push(string)
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
