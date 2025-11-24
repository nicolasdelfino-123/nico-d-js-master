function getAllLetters(str) {
    // your code here
    if (str.length === 0) {
        return []
    }

    let letters = []
    for (let letter of str) {
        letters.push(letter)
    }
    return letters
}
let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
