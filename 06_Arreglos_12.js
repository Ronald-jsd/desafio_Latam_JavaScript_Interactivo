/*
### **jercicio**

Crea una función que reciba 3 valores arr1, valor y arr2, donde arr1 y arr2 
serán arreglos y valor un número, la función debe retornar un nuevo arreglo 
juntando los elementos de arr1, el valor y los elementos de arr2.

Tip: Puedes utilizar el método concat para juntar los arreglos.

*/
/* Escribe tu código aquí */
/**
 * arr1 arreglo1
 * arr2 arreglo2
 */
function juntarElementos(arr1,valor, arr2){
     arr1.push(valor);
   let nuevoArreglo =  arr1.concat(arr2);
    return nuevoArreglo;
}

console.log(juntarElementos([10, 20, 30], 40, [50, 60, 70]));
console.log(juntarElementos(["a", "b", "c"], 100, ["d", "e", "f"]));

/*
Salida:
[ 10, 20, 30, 40, 50, 60, 70 ] 

[ 'a', 'b', 'c', 100, 'd', 'e', 'f' ]


*/
