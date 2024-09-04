/*
### **Ejercicio**

El siguiente es un ejercicio de intuición y lógica. Sí necesitaramos ahora crear un 
función que partiera desde un número distinto a 1, ¿Qué cambio harías en el codígo?

Crea una función llamada `desdeHasta` que reciba 2 parámetros, `desde` y `hasta`. 
Muestra en consola todos los números entre medio. Por ejemplo:*/
function desdeHasta(desde, hasta){
    while(desde <= hasta){
        console.log(desde)
        desde++;
    }
}


/* Fin */

desdeHasta(4, 9);


/*
Salida
4 5 6 7 8 9

*/
