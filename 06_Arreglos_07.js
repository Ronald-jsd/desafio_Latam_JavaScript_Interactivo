/*### **Ejercicio**

Crea una función llamada `modificarPorElMayor` que reciba un arreglo 
de números y dos parámetros llamado `numero1` y `numero2`.
La función debe cambiar el primer elemento del arreglo por el mayor de los dos números.
*Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

| Test 1 | { "stdin1":[1, 2, 3, 4, 5], "stdin2":6, "stdin3":7 } |

| Test 2 | { "stdin1":[8, 9, 10, 11, 12], "stdin2":13, "stdin3":14 } |

| Test 3 | { "stdin1":["Juan", "Pedro", "Ana", "Luis"], "stdin2":6, "stdin3":7 } |
*/

function modificarPorElMayor(arreglo, numero1, numero2) {
    if (numero1> numero2){
        arreglo[0] = numero1;
    } else {
        arreglo[0] = numero2;
    }
    return arreglo;
}


/* Salida:

[ 7, 2, 3, 4, 5 ]

[ 14, 9, 10, 11, 12 ]

[ 7, 'Pedro', 'Ana', 'Luis' ]

*/
