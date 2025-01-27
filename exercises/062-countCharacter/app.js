function countCharacter(str, char) {
  // your code here
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    let letra = str[i];
    if (letra === char) {
      contador = contador + 1;
    }
  }
  return contador;
}

let output = countCharacter("I am a hacker", "a");
console.log(output); // --> 3
/* Escribe una función llamada countCharacter. 
  
  Dados un string y un caracter, countCharacter 
  
  retorna el número de repeticiones del caracter dado, en el string. */
