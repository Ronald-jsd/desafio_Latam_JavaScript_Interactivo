/*
 **Ejercicio**

Crea una función llamada `reemplazar` que reciba un arreglo y dos números. La función debe remplazar el primer elemento del arreglo por el primer número y el último elemento del arreglo por el segundo número.

Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

| Test 1 | { "stdin1":[4,2,7,9,8], "stdin2":1, "stdin3":2 } |

| Test 2 | { "stdin1":[32,65,43,22,99], "stdin2":5, "stdin3":6 } |
*/

function reemplazar (arreglo, num1, num2){
    arreglo[0] = num1;
    arreglo[arreglo.length-1] = num2;
    return arreglo
}

/*
Salida: 
[ 1, 2, 7, 9, 2 ]

[ 5, 65, 43, 22, 6 ]
*/
