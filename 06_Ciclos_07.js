/*
### **Ejercicio**

Crea una función llamada `sumarDesdeHasta` que reciba dos números como parámetros y 
retorne la suma de los números desde el primer número hasta el segundo número.

Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

| Test 1 | {"stdin1": 4,"stdin2":9} |

| Test 2 | {"stdin1": 2,"stdin2":5} |

| Test 3 | {"stdin1": 50,"stdin2":136} |
*/
function sumarDesdeHasta(num1, num2){
    let suma= 0;
    while(num1<=num2){
        suma+=num1;
        num1++;
    }
    return suma;
}
/*
Salida:
39
14
8091
*/
