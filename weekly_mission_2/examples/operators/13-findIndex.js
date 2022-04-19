
/* Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento 
que cumpla con la validación que indiques.
*/
const names13 = ['Explorer 1', 'Explor', 'Explorer 3']
const result = names13.findIndex((name) => name.length < 7)
console.log("Posición del primer elemento que cumpla con la validación: " + result)

