function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  let multiplicar = 1

  for(let i = 0; i < arguments.length; i++){
    multiplicar *= arguments[i]
   } if (arguments.length === 0) {
    return 0 
  }
    return multiplicar
         }
         
  

module.exports = multiplicarArgumentos;
