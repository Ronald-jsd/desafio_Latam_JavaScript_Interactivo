
/*Ejercicio
Se pide crear una función llamada espejo. La función debe recibir un parámetro llamado texto. Analiza si este texto está compuesto de dos palabras iguales. Si es así, la función debe retornar true, y en caso contrario, false.

Ejemplo:

espejo("holahola") // true
espejo("holamundo") // false
Pista
Para resolver este ejercicio debes encontrar la mitad de longitud de texto.

Casos de prueba
Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
Test 1	holamundo
Test 2	hulahula
Test 3	bambam
*/

function espejo(texto){
    let textoConvert = texto.toLowerCase().trim();
    let cantidad = textoConvert.length / 2;
    let primeraMitad = textoConvert.substring(0,cantidad)
    let segundaMitad = textoConvert.substring(cantidad);

    return (primeraMitad===segundaMitad)
}
/*
Resultado:
false
true
true*/
