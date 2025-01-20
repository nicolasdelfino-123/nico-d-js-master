// Write your function here
/* Escribe una función llamada isEitherEven, que dados 2 números, isEitherEven retorna true si uno de los números es par, de lo contrario retorna false. */

function isEitherEven(n1, n2) {
  if (n1 % 2 === 0 || n2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

isEitherEven(2, 3);
