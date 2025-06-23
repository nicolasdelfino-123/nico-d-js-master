function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    let resultado = []
    if((!obj[key]) || !Array.isArray(obj[key]) || (obj[key].length == 0)){
      return []
    }else{
      for(let i = 0; i < obj[key].length; i++){
        if(obj[key][i].length % 2 == 0){
          resultado.push(obj[key][i])
        }
      }
    }
    return resultado
}

let obj = {
  key: ['a', 'long', 'game']
};

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
