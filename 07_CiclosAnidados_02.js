/*
Ejercicio
Crea una función llamada cuadradoRelleno que reciba un número n 
como parámetro y muestre en la consola un cuadrado relleno de asteriscos de lado n.
Ejemplos:
cuadradoRelleno(3);
// ***
// ***
// ***

cuadradoRelleno(5);
// *****
// *****
// *****
// *****
// *****

Nota: La función no debe retornar valor alguno, utiliza console.log() para mostrar el patrón.
*/


function cuadradoRelleno(n){
    let asteriscos="";
    for(let i = 1; i <= n; i++ ){
                asteriscos="";
        for(let j = 1; j <= n ; j++){
                asteriscos+="*";
        }
    console.log(asteriscos);
    }
} 

cuadradoRelleno(4)
cuadradoRelleno(2)
cuadradoRelleno(6)

/*Salida:
****
****
****
****

**
**

******
******
******
******
******
******

*/
