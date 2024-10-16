/*
Ejercicio
Crea una función llamada mix que tome 2 parámetros, palabra1 y palabra2, y que retorne una mezcla de ambas palabras en donde la mitad de la primera palabra se concatena con la segunda mitad de la segunda palabra.

Para simplificar, asume que ambas palabras tienen una longitud par. El resultado de la mezcla debe ser una sola palabra en minúsculas.

Ejemplo
mezclaPalabras("soya", "aceite") // soite
mezclaPalabras("hola", "granolas") // hololas
mezclaPalabras("AGUA", "FUEGOS") // aggos
Casos de prueba
Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
Test 1	loro,gato
Test 2	flor,VELA
Test 3	TIERRA,cerros
*/
function mix(palabra1, palabra2){
   let primeraMitad = palabra1.substring(0,(palabra1.length/2));
    let segundaMitad = palabra2.substring((palabra2.length/2))
    return  (primeraMitad + segundaMitad).toLowerCase();
}

/*
Resultado:
loto
flla
tieros
*/
