function convertDoubleSpaceToSingle(str) {
  // your code here
  let result = str.replaceAll("  ", " ");
  return result;
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
