function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  //let numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(filtrarNumerosPares(numerosPares))
  let resultado = [];

  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0 ) {
      resultado.push(array[i]);
    } 
    }
    return resultado;
}


module.exports = filtrarNumerosPares;

