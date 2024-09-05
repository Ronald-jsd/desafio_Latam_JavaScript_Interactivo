/*
Ejercicio
Crea una función llamada patronPiramide que reciba un número n como parámetro y muestre 
en la consola un patrón de asteríscos creciente. El patrón debe tener n filas, y cada fila
debe tener tantas estrellas como su número de fila. 
Ejemplos:
patronPiramide(3);
// *
// **
// ***

patronPiramide(5);
// *
// **
// ***
// ****
// *****

La función no debe retornar valor alguno, utiliza console.log() para mostrar el patrón.
*/

function patronPiramide(n){
  for (filaActual = 1; filaActual <= n; filaActual++) {
      let asteriscos="";
      for (col = 1; col <= fila_actual; col++) {
          asteriscos+= '*';
      }
      console.log(asteriscos);
  }
}

patronPiramide(4)
patronPiramide(7)
patronPiramide(2)

/*
Salida:
*
**
***
****

*
**
***
****
*****
******
*******

*
**
*/
