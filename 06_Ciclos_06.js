/*### **Ejercicio**

Crea una función llamada `sumarHasta` que reciba un número como parámetro.

La función debe retornar la suma de los números del 1 al número ingresado.

Por ejemplo, si el número ingresado es 5, la función debe retornar 15. Si
el número ingresado es 10, la función debe retornar 55.

Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

| Test 1 | 4 |

| Test 2 | 11 |

| Test 3 | 2 |
*/
function sumarHasta(numero){
    let i = 1;
    let suma = 0;
    while ( i  <= numero){
        suma+=i;
        i++;
    }
    return suma;
}

/*
Salida:

10

66

3
*/
