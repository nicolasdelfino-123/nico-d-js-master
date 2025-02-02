function removeNumberValues(obj) {
  // your code here
  for (let key in obj) {
    let item = obj[key];
    if (typeof item === "number") {
      delete item;
    }
  }
  return obj;
}

let obj = {
  a: 2,
  b: "remaining",
  c: 4,
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
