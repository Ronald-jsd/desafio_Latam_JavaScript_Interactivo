/*### **Ejercicio**

Crea una función llamada `juntarArreglos` que reciba dos parámetros, `arreglo1` y `arreglo2`, y retorne un nuevo arreglo 
con los elementos de ambos arreglos exlcuyendo el primer elemento de cada arreglo.
Los arreglos siempre tendrán al menos 2 elementos.
*/

function juntarArreglos(arreglo1, arreglo2){
    arreglo1.splice(0,1);
    arreglo2.splice(0,1);
    let nuevoArreglo = arreglo1.concat(arreglo2);
    return nuevoArreglo;
}


console.log(juntarArreglos([10, 20, 30, 40], [50, 60, 70, 80]))
console.log(juntarArreglos(["a", "b", "c"], ["d", "e", "f"]))


/*
Salida: 

[ 20, 30, 40, 60, 70, 80 ]

 [ 'b', 'c', 'e', 'f' ]

*/
