// Write your function here
/* Escribe una función llamada isEvenAndGreaterThanTen. Dado un número, isEvenAndGreaterThanTen retorna true si el número es par y mayor que 10, de lo contrario retorna false. */

function isEvenAndGreaterThanTen(n) {
  if (n % 2 === 0 && n > 10) {
    return true;
  }
  return false;
}

isEvenAndGreaterThanTen(3);
