function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (!Array.isArray(obj[key]) || !obj[key] || obj[key].length < 1 || index < 0 || index >= obj[key].length) {
        return undefined
    }

    return obj[key][index]
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'
