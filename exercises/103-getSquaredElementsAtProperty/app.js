function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key])){
      return []
    }else{
      return obj[key].map(ele => ele * ele)
      }
    }


let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
