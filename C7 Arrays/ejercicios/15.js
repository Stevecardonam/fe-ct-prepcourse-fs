function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let indiceMax = 0;
  let maximo = array[0];

  for(let i = 1; i < array.length; i++){
    if (array[i] > maximo){
      maximo = array[i];
      indiceMax = i;
    }
  }
  return indiceMax;
}


module.exports = encontrarIndiceMayor;
