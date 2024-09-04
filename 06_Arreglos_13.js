/*
### **Ejercicio**

Para este ejercicio, crea una función llamada `rotarALaDerecha` 
que reciba un arreglo y retorne el arreglo rotado a la derecha.*/

/* Escribe tu código aquí */


function rotarALaDerecha(arreglo){ 
    let ultimoElement = arreglo[arreglo.length-1] 
    arreglo.splice(arreglo.length-1) 
 
    arreglo.unshift(ultimoElement) 
    return arreglo 
    } 

console.log(rotarALaDerecha([5, 6, 7, 8, 9]));
console.log(rotarALaDerecha(['a', 'b', 'c', 'd', 'e'])); 
