/*### **Ejercicio**

Crea una función llamada `rotarALaIzquierda`, la cual debe recibir como parámetro un arreglo.

La función debe eliminar el primer elemento del arreglo y luego agregar este mismo elemento al final.

Retorna el arreglo modificado.

> Tip: Utiliza una combinación de los métodos apendidos hasta ahora para lograrlo.

Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

| Test 1 | ["uno", "dos", "tres", "cuatro"] |

| Test 2 | [1, 2, 3, 4] |

| Test 3 | ["perro", "gato", "pájaro", "pez"] |

*/

function rotarALaIzquierda(arreglo){
    let primerElemento = arreglo[0];
    arreglo.splice(0,1);
    arreglo.push(primerElemento);
    return arreglo;
}

/*
Salida:

[ 'dos', 'tres', 'cuatro', 'uno' ]

[ 2, 3, 4, 1 ]

[ 'gato', 'pájaro', 'pez', 'perro' ]
*/
