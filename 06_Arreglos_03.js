/* **Ejercicio**

Crea una función llamada `ultimoYPrimero` que reciba un arreglo y retorne la concantenación del último y el primer elemento del arreglo.
Ejemplo:
ultimoyprimero(["Juan", "Pedro", "Ana", "Luis"]) // LuisJuan
ultimoyprimero(["Azul", "Rojo", "Verde", "Amarillo"]) // AmarilloAzul

Puedes asumir que dentro del arreglo siempre habrá al menos un elemento y que todos los elementos serán de tipo string.

Casos de prueba
Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
| Test 1 | ["perro", "gato", "delfin", "tortuga"] |

| Test 2 | ["e","t","r","z"] |

| Test 3 | ["ruby", "javascript", "python", "c", "c#", "java"] |

SOL:*/

function ultimoYPrimero(arreglo){
let primerElment = arreglo[0]
let ultimoElement = arreglo[arreglo.length-1];
return   ultimoElement + primerElment;
}

/*
Resultado:
tortugaperro
ze
javaruby
*/
