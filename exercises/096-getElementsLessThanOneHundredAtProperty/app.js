// Write your function here

function getElementsLessThan100AtProperty(obj, key) {
  if (!obj[key] || obj[key].length === 0 || !Array.isArray(obj[key])) {
    return [];
  } else {
    let arr = obj[key];
    let newA = [];

    arr.forEach((item) => {
      if (item < 100) {
        newA.push(item);
      }
    });
    return newA;
  }
}
