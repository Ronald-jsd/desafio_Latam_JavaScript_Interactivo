/*
### **Ejercicio**

Crea una función llamada `izqDerecha` que reciba un parámetro llamado `arreglo` y otro llamado `num`.

- Si num es menor que 100, el valor se ingresará por la derecha del arreglo, como normalmente se ingresan todos los valores.
- Si el valor es mayor o igual a 100, el valor se ingresará por la izquierda del arreglo.

La función debe retornar el arreglo modificado

Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
| Test 1 | { "stdin1":[4,2,7,9,8], "stdin2":1 } |

| Test 2 | { "stdin1":[32,65,43,22,99], "stdin2":100 } |

| Test 3 | { "stdin1":[32,65,43,22,99], "stdin2":200 } |
*/

function izqDerecha(arreglo, num){
    if(num<100){
        //el valor ingresa por la derecha
        arreglo.push(num)
    }else arreglo.unshift(num)
    //el valor se ingresa por la izquierda

    return arreglo;
}

/*
Salida:
[ 4, 2, 7, 9, 8, 1 ]

[ 100, 32, 65, 43, 22, 99 ]

[ 200, 32, 65, 43, 22, 99 ]
*/
