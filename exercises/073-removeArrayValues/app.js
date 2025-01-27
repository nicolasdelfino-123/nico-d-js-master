function removeArrayValues(obj) {
  // your code here
  for (key in obj) {
    if (Array.isArray(obj[key])) {
      delete obj[key];
    }
  }
  return obj;
}

/* Escribe una función llamada removeArrayValues. Dado un objeto, removeArrayValues elimina cualquier propiedad cuyos valores sean arrays. */
