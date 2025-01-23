function isEitherEvenAndLessThan9(num1, num2) {
  // your code here
  if ((num1 % 2 === 0 || num2 % 2 === 0) && num1 < 9 && num2 < 9) {
    return true;
  } else {
    return false;
  }
}

let output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true
/* Escribe una función llamada isEitherEvenAndLessThan9. 
Dados dos números, 

isEitherEvenAndLessThan9 

retorna true si alguno de los dos parámetros es par 

y los dos son menores que 9, 

de otra forma debe retornar false. */
