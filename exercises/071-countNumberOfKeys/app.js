let obj = {
  firstName: "Rafael",
  lastName: "Leao",
  country: "Italy",
  city: "Milan",
  phoneNum: "123-456-789",
  jerseyNum: 27,
};

function countNumberOfKeys(obj) {
  // your code here
  let contador = 0;
  for (key in obj) {
    if (key) {
      contador = contador + 1;
    }
  }

  return contador;
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
/* Escribe una función llamada countNumberOfKeys. Dado un objeto, countNumberOfKeys retorna la cantidad de propiedades que el objeto dado tenga. */
