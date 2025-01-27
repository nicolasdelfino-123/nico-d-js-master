function or(expression1, expression2) {
  // your code here
  if !(!expression1 && !expression2) {
    return true;
  }
}

let output = or(true, false);
console.log(output); // --> true;

/* En este ejercicio vamos a replicar el comportamiento del operador lógico OR || sin usar el propio operador. ¿Recuerdas cómo funciona?

📝 Instrucciones:
Escribe una función llamada or. Dadas 2 expresiones booleanas, or retorna true o false, siguiendo las reglas del operador ||. */
