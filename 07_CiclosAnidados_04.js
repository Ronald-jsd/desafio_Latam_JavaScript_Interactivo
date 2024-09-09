/*
Ejercicio
Crea una función llamada lineasVerticalesAlternadas que reciba dos números filas y columnas
como parámetros y muestre en la consola un patrón de líneas verticales alternadas con asteriscos y espacios.

Ejemplos:

lineasVerticalesAlternadas(3, 5);
// * * *
// * * *
// * * *

lineasVerticalesAlternadas(4, 4);
// * * 
// * * 
// * * 
// * * 
La función no debe retornar valor alguno, utiliza console.log() para mostrar el patrón. 
Asegúrate de que tu función se ejecute correctamente incluso para casos donde el número 
de filas o columnas sea 1.
*/

/* Escribe tu código aquí */
//3,5
function lineasVerticalesAlternadas(nF, nC){
    let asteriscos="";
    for(let i = 1; i<=nF ; i++){
        asteriscos="";
        for(let j=1; j<=nC; j++){
            if(j%2 != 0){
            asteriscos+="*";
            }else{
                asteriscos+=" ";
            }
        }
        console.log(asteriscos);
    }
}

lineasVerticalesAlternadas(4,5)
lineasVerticalesAlternadas(2,3)
lineasVerticalesAlternadas(1,6)
lineasVerticalesAlternadas(5,1)

/*
  Salida:
  (4,5)
  * * *
  * * *
  * * *
  * * *
  (2,3)
  * *
  * *
  (1,5)
  * * *
  (5,1)
  *
  *
  *
  *
  *
      */
