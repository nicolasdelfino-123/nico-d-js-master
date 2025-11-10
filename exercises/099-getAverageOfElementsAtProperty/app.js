function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (!obj.hasOwnProperty(key) || obj[key].length === 0 || !Array.isArray(obj[key])) {
    return 0
  }


  let total = obj[key].reduce((acc, current) => acc + current)



  let resultado = total / obj[key].length
  return resultado
}