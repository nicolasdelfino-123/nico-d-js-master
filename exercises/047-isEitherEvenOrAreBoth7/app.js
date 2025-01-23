function isEitherEvenOrAreBoth7(num1, num2) {
  // your code here
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    return true;
  }
  if (num1 === 7 && num2 === 7) {
    return true;
  } else {
    return false;
  }
}
/* Escribe una función llamada isEitherEvenOrAreBoth7. Dados dos números, isEitherEvenOrAreBoth7 retorna true si alguno de los parámetros es par o los dos son 7. En caso contrario retorna false. */
