/*### **Ejercicio**

Crea una función llamada `borrarAlFinal` que reciba un arreglo y retorne el arreglo sin el último elemento.
Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

| Test 1 | [1, 2, 3, 4, 5] |

| Test 2 | ["tortuga", "conejo", "perro", "gato"] 
*/
function borrarAlFinal (arreglo){
    arreglo.splice(arreglo.length-1);
    return arreglo ;
}

/*
Salida:

[ 1, 2, 3, 4 ]

[ 'tortuga', 'conejo', 'perro' ]
*/
