function getOddElementsAtProperty(obj, key) {
    // your code here
    if( !obj[key] || !Array.isArray(obj[key])){
      return []
    } else{
     return obj[key].filter(ele => ele % 2 != 0)
    }
}


let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
