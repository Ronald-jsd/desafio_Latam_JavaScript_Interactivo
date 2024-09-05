/*
Ejercicio
Crea una función llamada sumatoriaPares que reciba un número como parámetro y 
retorne la sumatoria de los números pares desde el 1 hasta el número ingresado.

Casos de prueba
Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
Test 1	9
Test 2	12
Test 3	25
:*/
function sumatoriaPares(numero){
    let sumaPares = 0;
    for(let i = 1; i <= numero; i++){
        if(i%2==0){
            sumaPares+=i;
        }
    }
    return sumaPares;
}
/*
Salida:
20
42
156
*/
