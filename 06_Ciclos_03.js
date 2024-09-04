/*
### **Ejercicio**

Crea una función llamada `contarDeDosEnDos` que reciba un número como parámetro. 
La función debe mostrar todos los **números pares** entre 1 y el número dado.

Tip: Sabemos que podemos utilizar un if para evaluar si un número es par o no, pero ¿es necesario?
*/
function contarDeDosEnDos(numero){
    //mostrar numeros pares entre 1 y el numero dado
    let i = 2
    while (i <= numero){
        console.log(i)
        i+=2;
    }
}


/* Fin */

contarDeDosEnDos(10)
contarDeDosEnDos(6)
contarDeDosEnDos(14)

/*
2 4 6 8 10 
2 4 6 
2 4 6 8 10 12 14
