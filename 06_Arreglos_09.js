/*### **Ejercicio**

Crea una función llamada `borrarYContarElementos` que reciba un 
arreglo y un número (cantidad). La función debe eliminar la cantidad de 
elementos especificados desde la posición 0 del arreglo y luego retornar la 
cantidad de elementos del arreglo final.
Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

| Test 1 | { "stdin1":["uno", "dos", "tres", "cuatro"], "stdin2":3 } |

| Test 2 | { "stdin1":[1, 2, 3, 4], "stdin2":2 } |

| Test 3 | { "stdin1":["perro", "gato", "pájaro", "pez"], "stdin2":1 } |

*/

function borrarYContarElementos (arreglo, numero){
    arreglo.splice(0,numero);
    return arreglo.length;

}

/*
Salida:
1

2

3

*/
