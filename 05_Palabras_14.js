/*
Ejercicio
Crea una función llamada primerosCaracteresMayusculas que reciba un párametro texto y devuelva los primeros 3 caracteres del texto en mayúsculas. Si el texto tiene menos de 3 caracteres, debe retornar el mensaje error

Ejemplo:

primerosCaracteresMayusculas("Hola Mundo") // HOL
primerosCaracteresMayusculas("JavaScript") // JAV
primerosCaracteresMayusculas("JS") // error
Casos de prueba
Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
Test 1	Soy un gato
Test 2	Ho
Test 3	Sol
*/
function primerosCaracteresMayusculas(texto){
    //devolver los 3 primeros caracteres en mayusculas
    //si el texto tiene menos de 3 caracteres retornar mensaje de "error"
    valueTexto = texto.length;
    textoFormat = texto.substring(0,3).toUpperCase();
    if(valueTexto >=3){
        return textoFormat;
    } else return "error";
}
/*
Resultado:
SOY
error
SOL
*/
