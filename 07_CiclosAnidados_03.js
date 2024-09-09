/*
Ejercicio
Crea una función llamada lineasAlternadas que reciba dos números filas y columnas 
como parámetros y muestre en la consola un patrón de líneas alternadas de asteriscos.

Ejemplos:

lineasAlternadas(4, 5);
// *****
// 
// *****
// 

lineasAlternadas(3, 3);
// ***
// 
// ***

La función no debe retornar valor alguno, utiliza console.log() para mostrar el patrón. 
Asegúrate de que tu función se ejecute correctamente incluso para casos donde el número de filas o columnas sea 1.
*/

/* Escribe tu código aquí */
// f / c
// 3 / 1
//* 
//
//*
function lineasAlternadas(n1,n2){
     let asteriscos = "";
    for(let i = 1; i <= n1 ;i++){
             asteriscos = "";
        for(let j = 1; j <= n2; j++){
            if(i % 2 != 0){
                asteriscos+="*"; 
            }   else{
                asteriscos="";
            }
        }
        console.log(asteriscos);
    }
}
/* Fin */

lineasAlternadas(4,6)
lineasAlternadas(5,2)
lineasAlternadas(1,3)

/*
Salida:
(4,6)
******

******

(5,2)
**
  
**
  
**
(1,3)
***


*/

