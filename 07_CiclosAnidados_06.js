/*
Ejercicio
Crea una función llamada diagonal_cuadrado que reciba un número n como parámetro y muestre en la consola la diagonal de un cuadrado de lado n.

Ejemplos:

diagonal_cuadrado(3)
*  
 * 
  *

diagonal_cuadrado(5)
*    
 *   
  *  
   * 
    *
La función no debe retornar valor alguno, utiliza console.log() para mostrar el patrón. 
Asegúrate de que tu función funcione correctamente incluso para casos donde el lado del cuadrado sea 1 o 2.

*/

/* Escribe tu código aquí */
function diagonal_cuadrado(n){
    for(let i = 1; i<=n; i++ ){
      let fila = i;
      let asteriscos = "";
        for(let j = 1; j<= n; j++){
            if (fila===i && j === i){
                asteriscos+="*";
            }   else{
                asteriscos+=" ";
            }
       }
       console.log(asteriscos);
    }
}
/* Fin */

diagonal_cuadrado(4)
diagonal_cuadrado(2)
diagonal_cuadrado(1)
diagonal_cuadrado(6)
diagonal_cuadrado(20)

/*
Salida:
diagonal_cuadrado(4)
*   
 *  
  * 
   *

diagonal_cuadrado(2)
*
 *

diagonal_cuadrado(1)
*

diagonal_cuadrado(6)
*     
 *    
  *   
   *  
    * 
     *
diagonal_cuadrado(20)

*                   
 *                  
  *                 
   *                
    *               
     *              
      *             
       *            
        *           
         *          
          *         
           *        
            *       
             *      
              *     
               *    
                *   
                 *  
                  * 
                   *


*/

