/*
### **jercicio**

Crea una función llamada `sumarDeDosEnDos` que reciba dos parámetros, 
`desde` y `hasta`. La función debe retornar la suma de los números
Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

| Test 1 | {"stdin1": 4, "stdin2": 9} |

| Test 2 | {"stdin1": 2, "stdin2": 5} |

| Test 3 | {"stdin1": 25, "stdin2": 67} |
*/

function sumarDeDosEnDos(desde, hasta){
    let suma=0;
    while (desde <= hasta){//3 9
        suma+=desde;
        desde+=2;
    }
    return suma;
}

/*
Salida:

18

6

1012*/
