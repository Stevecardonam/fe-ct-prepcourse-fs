function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  if (typeof array[0] === "number") {
    return array.sort((a, b) => a - b);
  } else {
     return array.sort((a, b) => a.localeCompare(b));
  }
}

module.exports = ordenarArray;
