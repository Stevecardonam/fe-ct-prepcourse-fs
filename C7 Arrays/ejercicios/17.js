function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let sumaResultado = 0

  for(let i = 0; i < arrayOfNums.length; i++){
sumaResultado += arrayOfNums[i];
 }
 return sumaResultado;
}

module.exports = agregarNumeros;
