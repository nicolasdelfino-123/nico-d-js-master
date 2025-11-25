function getAllWords(str) {
    // your code here
    let array = []
    let string = ""
    for (let i = 0; i < str.length; i++) {

        if (str[i] === " ") {
            if (string.length > 0) {
                array.push(string)
                string = ""
            }
        } else {
            string += str[i]

        }
    }
    if (string.length > 0) {
        array.push(string)
    }

    return array
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
