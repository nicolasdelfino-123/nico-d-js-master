let obj = {
  a: 8,
  b: 2,
  c: "montana",
};

function removeNumbersLargerThan(num, obj) {
  // your code here}
  for (calve in obj) {
    if (obj[clave] > num) {
      delete obj[clave];
    }
  }
  return obj;
}
console.removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
