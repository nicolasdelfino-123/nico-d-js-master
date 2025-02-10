// Write your function here
function getIndexOf(car, str) {
  if (!str.includes(car)) return -1;

  for (let i = 0; i < str.length; i++) {
    let indice = str[i];
    if (car === indice) {
      return i;
    }
  }
}
