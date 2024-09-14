/*Ejercicio
Crea una función llamada cuadradoHueco que reciba un número n como parámetro y muestre en la consola un cuadrado hueco de asteriscos de lado n.

Ejemplos:
cuadradoHueco(3);
// ***
// * *
// ***

cuadradoHueco(5);
// *****
// *   *
// *   *
// *   *
// *****

La función no debe retornar valor alguno, utiliza console.log() 
para mostrar el patrón. Asegúrate de que tu función funcione correctamente
incluso para cuadrados de lado 1 o 2.
*/

function cuadradoHueco(n) {
  let asteriscos;
  for (let i = 1; i <= n ; i++) {
    asteriscos = "";
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        asteriscos+='*';
      } else{
        asteriscos+=" ";
      }
    }
    console.log(asteriscos);    
  }
}

cuadradoHueco(4)
cuadradoHueco(2)
cuadradoHueco(6)
cuadradoHueco(1)

/*
Salida:
cuadradoHueco(4)
****
*  *
*  *
****

cuadradoHueco(2)
**
**

cuadradoHueco(6)
******
*    *
*    *
*    *
*    *
******

cuadradoHueco(1)
*

*/

