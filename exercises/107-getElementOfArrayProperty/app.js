function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || !obj.hasOwnProperty(key) || indexOf(obj[key].length > obj[key].length)) {
        return undefined
    }



}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'
