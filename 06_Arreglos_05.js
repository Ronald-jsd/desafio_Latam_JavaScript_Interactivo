/*### **Ejercicio**

Crea una función llamada `limpiarYAgregar` que reciba un `arreglo` y 
un parámetro llamado `nombre`. La función debe limpiar el nombre removiendo 
los espacios vacíos al inicio y al final del nombre y luego agregar el nombre 
al final del arreglo. 
La función debe retornar el arreglo.

Casos de prueba:
Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
| Test 1 | { "stdin1":["uno", "dos", "tres", "cuatro"], "stdin2": " cinco" } |

| Test 2 | { "stdin1":["Camilo", "Ignacio", "Constanza"], "stdin2": " Juana " } |

| Test 3 | { "stdin1":["perro", "gato", "pájaro", "pez"], "stdin2": " cabra " } |
*/

function limpiarYAgregar(arreglo, nombre){
    nombreRemovido = nombre.trim(),
    arreglo.push(nombreRemovido)
    return arreglo
}


/*
[ 'uno', 'dos', 'tres', 'cuatro', 'cinco' ]

[ 'Camilo', 'Ignacio', 'Constanza', 'Juana' ]

[ 'perro', 'gato', 'pájaro', 'pez', 'cabra' ]
*/
