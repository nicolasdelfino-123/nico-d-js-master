function getLargestElementAtProperty(obj, key) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
      return []
    } else{
      let arr = obj[key]
      let maximo = arr[0]

      for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maximo){
          maximo = arr[i]
        }
      }
      return maximo
    }
    
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
