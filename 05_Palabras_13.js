/*
Ejercicio
Se pide crear una función textoLargoCorto que reciba un parámetro llamado texto. La función debe retornar "Mucho texto" si el texto tiene más de 10 caracteres. En caso contrario debe retornar "Poco texto".

Ejemplo:

textoLargoCorto("Hola Mundo") // Poco texto
textoLargoCorto("Hola Mundo, Hola Mundo") // Mucho texto
Casos de prueba
Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
Test 1	Soy un gato
Test 2	Hola
Test 3	Esto es una prueba
*/

/* Escribe tu código aquí */


function textoLargoCorto(texto){
    //si el texto tiene + de 10 caracteres deber retornar "Mucho texto"
   let value = texto.length;
    if(value > 10){
        return "Mucho texto";
    } else return "Poco texto";    
}

/*
Resultado:
Mucho texto
Poco texto
Mucho texto
*/
