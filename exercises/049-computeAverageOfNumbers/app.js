// Write your function here
function computeAverageOfNumbers(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  if (array.length === 0) {
    return 0;
  }
  let promedio = total / array.length;
  return promedio;
}

/* Escribe una función llamada computeAverageOfNumbers. Dado un array de números, computeAverageOfNumbers retorna su promedio. */
