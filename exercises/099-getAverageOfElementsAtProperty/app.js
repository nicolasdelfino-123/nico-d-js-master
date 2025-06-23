function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if(Array.isArray(obj[key]) && obj[key].length > 0){
    let suma = 0
    for(let i = 0; i < obj[key].length; i++){
      suma += obj[key][i]
    }
    let promedio = suma / obj[key].length
    return promedio
  } else{
    return 0
  }
}